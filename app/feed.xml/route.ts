import { NextResponse } from 'next/server';

export async function GET() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.khanbuilds.tech";

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Khan Builds Tech - Aman Khan's Tech Blog</title>
    <description>Frontend development insights, tutorials, and tech leadership content by Aman Khan</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>contact@khanbuilds.tech (Aman Khan)</managingEditor>
    <webMaster>contact@khanbuilds.tech (Aman Khan)</webMaster>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Frontend</category>
    <category>React</category>
    <category>Next.js</category>
    
    <item>
      <title>Welcome to Khan Builds Tech</title>
      <description>Explore my portfolio, projects, and knowledge sharing content. Learn about modern web development with React, Next.js, and more.</description>
      <link>${siteUrl}/#knowledge-sharing</link>
      <guid>${siteUrl}/#knowledge-sharing</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Portfolio</category>
    </item>
    
    <item>
      <title>My Development Experience</title>
      <description>8+ years of experience in full-stack web development, leading teams and building scalable applications with React, Node.js, Express.js, and AWS.</description>
      <link>${siteUrl}/#experience</link>
      <guid>${siteUrl}/#experience</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Experience</category>
    </item>
  </channel>
</rss>`;

    return new NextResponse(rss, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}