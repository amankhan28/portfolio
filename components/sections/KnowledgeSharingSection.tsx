"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Youtube, ExternalLink, Eye, Clock, Loader2 } from "lucide-react";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCount?: string;
  duration?: string;
}

// Fallback videos in case API fails or during development
const fallbackVideos: Video[] = [
  {
    id: "mta3ynGk-U0",
    title: "Video 1",
    description: "",
    thumbnailUrl: "https://img.youtube.com/vi/mta3ynGk-U0/maxresdefault.jpg",
    publishedAt: "",
  },
  {
    id: "ZyujOrDFyVc",
    title: "Video 2",
    description: "",
    thumbnailUrl: "https://img.youtube.com/vi/ZyujOrDFyVc/maxresdefault.jpg",
    publishedAt: "",
  },
];

export default function KnowledgeSharingSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/youtube");
        
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        
        const data = await response.json();
        
        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos);
        } else {
          // Use fallback videos if no videos returned
          setVideos(fallbackVideos);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Could not load videos");
        // Use fallback videos on error
        setVideos(fallbackVideos);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section id="knowledge-sharing" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 scroll-mt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-400/10 dark:bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Youtube className="w-6 h-6 md:w-8 md:h-8 text-red-600 dark:text-red-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 dark:from-red-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Knowledge Sharing
            </h2>
            <Youtube className="w-6 h-6 md:w-8 md:h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 px-4 max-w-2xl mx-auto">
            Sharing insights and knowledge through video content
          </p>
          {videos.length > 0 && !isLoading && (
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              {videos.length} video{videos.length !== 1 ? 's' : ''} available
            </p>
          )}
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-10 h-10 text-red-600 dark:text-red-400 animate-spin mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Loading videos...</p>
            </div>
          ) : error && videos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {videos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, index }: { video: Video; index: number }) {
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            // Fallback to hqdefault if maxresdefault fails
            const target = e.target as HTMLImageElement;
            if (target.src !== fallbackThumbnailUrl) {
              target.src = fallbackThumbnailUrl;
            }
          }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration Badge */}
        {video.duration && (
          <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {video.duration}
          </div>
        )}

        {/* YouTube Badge */}
        <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
          <Youtube className="w-3 h-3" />
          YouTube
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            <span>Watch on YouTube</span>
          </div>
          
          {video.viewCount && (
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{video.viewCount} views</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-red-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
    </motion.a>
  );
}
