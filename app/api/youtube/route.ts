import { NextResponse } from "next/server";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount?: string;
  duration?: string;
}

interface YouTubePlaylistItemResponse {
  items: Array<{
    snippet: {
      resourceId: {
        videoId: string;
      };
      title: string;
      description: string;
      thumbnails: {
        maxres?: { url: string };
        high?: { url: string };
        medium?: { url: string };
        default?: { url: string };
      };
      publishedAt: string;
    };
  }>;
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
  };
}

interface YouTubeChannelResponse {
  items: Array<{
    contentDetails: {
      relatedPlaylists: {
        uploads: string;
      };
    };
  }>;
}

interface YouTubeVideoStatsResponse {
  items: Array<{
    id: string;
    statistics: {
      viewCount: string;
      likeCount: string;
    };
    contentDetails: {
      duration: string;
    };
  }>;
}

// Convert ISO 8601 duration to total seconds
function getDurationInSeconds(isoDuration: string): number {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  
  return hours * 3600 + minutes * 60 + seconds;
}

// Convert ISO 8601 duration to readable format
function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";
  
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Format view count
function formatViewCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return count;
}

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey) {
    return NextResponse.json(
      { error: "YouTube API key not configured" },
      { status: 500 }
    );
  }

  if (!channelId) {
    return NextResponse.json(
      { error: "YouTube channel ID not configured" },
      { status: 500 }
    );
  }

  try {
    // Step 1: Get the uploads playlist ID from the channel
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );

    if (!channelResponse.ok) {
      throw new Error(`Failed to fetch channel: ${channelResponse.statusText}`);
    }

    const channelData: YouTubeChannelResponse = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      return NextResponse.json(
        { error: "Channel not found" },
        { status: 404 }
      );
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Step 2: Fetch all videos from the uploads playlist
    let allVideos: YouTubeVideo[] = [];
    let nextPageToken: string | undefined;

    do {
      const playlistUrl = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
      playlistUrl.searchParams.set("part", "snippet");
      playlistUrl.searchParams.set("playlistId", uploadsPlaylistId);
      playlistUrl.searchParams.set("maxResults", "50"); // Max allowed per request
      playlistUrl.searchParams.set("key", apiKey);
      if (nextPageToken) {
        playlistUrl.searchParams.set("pageToken", nextPageToken);
      }

      const playlistResponse = await fetch(playlistUrl.toString());

      if (!playlistResponse.ok) {
        throw new Error(`Failed to fetch playlist: ${playlistResponse.statusText}`);
      }

      const playlistData: YouTubePlaylistItemResponse = await playlistResponse.json();

      const videos = playlistData.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl:
          item.snippet.thumbnails.maxres?.url ||
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.default?.url ||
          `https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/maxresdefault.jpg`,
        publishedAt: item.snippet.publishedAt,
      }));

      allVideos = [...allVideos, ...videos];
      nextPageToken = playlistData.nextPageToken;
    } while (nextPageToken);

    // Step 3: Fetch video statistics and duration (in batches of 50)
    const videoIds = allVideos.map((v) => v.id);
    const statsMap = new Map<string, { viewCount: string; duration: string; durationSeconds: number }>();

    for (let i = 0; i < videoIds.length; i += 50) {
      const batchIds = videoIds.slice(i, i + 50).join(",");
      const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${batchIds}&key=${apiKey}`;
      
      const statsResponse = await fetch(statsUrl);
      if (statsResponse.ok) {
        const statsData: YouTubeVideoStatsResponse = await statsResponse.json();
        statsData.items.forEach((item) => {
          statsMap.set(item.id, {
            viewCount: formatViewCount(item.statistics.viewCount),
            duration: formatDuration(item.contentDetails.duration),
            durationSeconds: getDurationInSeconds(item.contentDetails.duration),
          });
        });
      }
    }

    // Merge statistics with video data
    const videosWithStats = allVideos.map((video) => ({
      ...video,
      viewCount: statsMap.get(video.id)?.viewCount || "0",
      duration: statsMap.get(video.id)?.duration || "",
      durationSeconds: statsMap.get(video.id)?.durationSeconds || 0,
    }));

    // Filter out:
    // 1. Private/deleted videos (they have title "Private video" or "Deleted video")
    // 2. YouTube Shorts (videos 60 seconds or less)
    const publicVideos = videosWithStats.filter(
      (v) => 
        !v.title.includes("Private video") && 
        !v.title.includes("Deleted video") &&
        v.durationSeconds > 60 // Exclude Shorts (60 seconds or less)
    );

    return NextResponse.json({
      videos: publicVideos,
      totalCount: publicVideos.length,
    });
  } catch (error) {
    console.error("YouTube API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos from YouTube" },
      { status: 500 }
    );
  }
}
