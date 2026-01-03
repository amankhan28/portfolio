"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  
  // Use external image service URL from environment variable, or fallback to local
  // Set NEXT_PUBLIC_PROFILE_IMAGE_URL in .env.local to use external hosting
  // Examples:
  // - Cloudinary: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/profile.jpg
  // - Vercel Blob: https://[hash].public.blob.vercel-storage.com/profile-[hash].jpeg
  // - Imgur: https://i.imgur.com/your-image-id.jpg
  // - GitHub: https://raw.githubusercontent.com/USERNAME/REPO/main/profile.jpeg
  const [imageSrc, setImageSrc] = useState<string>(
    process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || "/images/profile.jpeg"
  );

  useEffect(() => {
    // Check if image exists
    const img = new window.Image();
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      // If external URL fails, try local fallback
      if (imageSrc !== "/images/profile.jpeg") {
        setImageSrc("/images/profile.jpeg");
        img.src = "/images/profile.jpeg";
      } else {
        setImageError(true);
      }
    };
    
    img.src = imageSrc;
  }, [imageSrc]);

  // Glitch animation effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // More frequent glitches (60% chance every 1.5 seconds)
      if (Math.random() > 0.4) {
        // More dramatic glitch offset
        setGlitchOffset({
          x: (Math.random() - 0.5) * 8,
          y: (Math.random() - 0.5) * 8,
        });
        setTimeout(() => {
          setGlitchOffset({ x: 0, y: 0 });
        }, 150);
      }
    }, 1500);

    return () => clearInterval(glitchInterval);
  }, []);

  if (imageError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center rounded-full">
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">AK</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Matrix-style scan lines */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full">
        <div 
          className="absolute w-full h-1 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"
          style={{ 
            animation: 'scanline 3s linear infinite',
            top: '-4px',
          }} 
        />
      </div>

      {/* Glitch effect layers - RGB separation */}
      <div 
        className="absolute inset-0 z-[1] transition-opacity duration-150"
        style={{
          opacity: glitchOffset.x !== 0 || glitchOffset.y !== 0 ? 0.6 : 0,
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
          className="object-cover mix-blend-screen"
          style={{
            transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
            filter: 'hue-rotate(180deg) saturate(1.5)',
          }}
          aria-hidden="true"
        />
      </div>
      <div 
        className="absolute inset-0 z-[2] transition-opacity duration-150"
        style={{
          opacity: glitchOffset.x !== 0 || glitchOffset.y !== 0 ? 0.5 : 0,
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
          className="object-cover mix-blend-multiply"
          style={{
            transform: `translate(${-glitchOffset.x}px, ${-glitchOffset.y}px)`,
            filter: 'hue-rotate(90deg) saturate(1.5)',
          }}
          aria-hidden="true"
        />
      </div>
      {/* Additional glitch layer for more effect */}
      <div 
        className="absolute inset-0 z-[1.5] transition-opacity duration-150"
        style={{
          opacity: glitchOffset.x !== 0 || glitchOffset.y !== 0 ? 0.4 : 0,
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
          className="object-cover mix-blend-color-dodge"
          style={{
            transform: `translate(${glitchOffset.y}px, ${glitchOffset.x}px)`,
            filter: 'hue-rotate(270deg)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main image */}
      <Image
        src={imageSrc}
        alt="Aman Khan"
        fill
        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
        className="object-cover relative z-0"
        priority
        quality={95}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        style={{
          filter: 'contrast(1.1) brightness(1.05)',
        }}
      />

      {/* Cyberpunk overlay gradient */}
      <div className="absolute inset-0 z-[3] pointer-events-none mix-blend-overlay opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full animate-pulse" />
      </div>

      {/* Animated border glow */}
      <div className="absolute inset-0 z-[4] pointer-events-none rounded-full border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.5),inset_0_0_20px_rgba(34,211,238,0.3)] animate-pulse" />
    </div>
  );
}

