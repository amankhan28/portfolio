"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript, SiTypescript,
  SiPython, SiExpress, SiDjango, SiMongodb,
  SiDocker, SiKubernetes, SiGit, SiJest,
  SiRedux, SiHtml5, SiCss3, SiHelm, SiGitlab,
  SiAmazon, SiVercel, SiGraphql,
  SiTailwindcss, SiFramer
} from "react-icons/si";
import { Code2, Database, Cloud, Server, Coffee, TestTube, Play } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MatrixChar {
  tech: TechItem;
  y: number;
  delay: number;
  speed: number;
}

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const [matrixChars, setMatrixChars] = useState<MatrixChar[]>([]);
  const [hologramActive, setHologramActive] = useState(false);
  
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

  // Initialize technologies with icons for matrix rain effect
  useEffect(() => {
    const technologies: TechItem[] = [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: Coffee },
      { name: 'Express', icon: SiExpress },
      { name: 'Django', icon: SiDjango },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Git', icon: SiGit },
      { name: 'Jest', icon: SiJest },
      { name: 'Playwright', icon: Play },
      { name: 'Redux', icon: SiRedux },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'Helm', icon: SiHelm },
      { name: 'GitLab', icon: SiGitlab },
      { name: 'REST', icon: Code2 },
      { name: 'AWS', icon: SiAmazon },
      { name: 'Vercel', icon: SiVercel },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Framer', icon: SiFramer },
      { name: 'API', icon: Code2 },
      { name: 'Microservices', icon: Server },
    ];
    
    // Function to shuffle array (Fisher-Yates algorithm)
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Function to generate tech streams ensuring all technologies cycle randomly
    const generateTechStreams = (preservePositions: boolean = false) => {
      // Shuffle technologies array using Fisher-Yates for true randomness
      const shuffled = shuffleArray(technologies);
      
      // Create 20 streams - enough to show variety but not too crowded
      const newMatrixChars: MatrixChar[] = [];
      
      // Cycle through all technologies, ensuring each appears
      // Then repeat with different random order
      const streamsPerCycle = 20;
      const techCount = technologies.length;
      
      for (let i = 0; i < streamsPerCycle; i++) {
        // Use modulo to cycle through shuffled array, ensuring all techs appear
        const techIndex = i % techCount;
        const tech = shuffled[techIndex];
        
        // Preserve existing animation properties to prevent animation reset
        const existingChar = preservePositions && matrixChars.length > 0 && matrixChars[i]
          ? matrixChars[i]
          : null;
        
        newMatrixChars.push({
          tech: tech,
          y: existingChar ? existingChar.y : Math.random() * 100,
          delay: existingChar ? existingChar.delay : Math.random() * 2,
          speed: existingChar ? existingChar.speed : (0.5 + Math.random() * 0.5),
        });
      }
      
      // Only shuffle positions on initial load, not on updates
      const finalArray = preservePositions ? newMatrixChars : shuffleArray(newMatrixChars);
      setMatrixChars(finalArray);
    };
    
    // Initial generation
    generateTechStreams(false);
    
    // Update technologies every 2.5 seconds, but preserve positions for smooth transition
    const updateInterval = setInterval(() => {
      generateTechStreams(true);
    }, 2500);
    
    return () => clearInterval(updateInterval);
  }, []);

  // Advanced glitch animation with hologram effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        // Trigger hologram effect
        setHologramActive(true);
        setTimeout(() => setHologramActive(false), 300);
        
        // Glitch offset
        setGlitchOffset({
          x: (Math.random() - 0.5) * 10,
          y: (Math.random() - 0.5) * 10,
        });
        setTimeout(() => {
          setGlitchOffset({ x: 0, y: 0 });
        }, 200);
      }
    }, 2000);

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
    <div className="relative w-full h-full group">
      {/* Hexagonal grid overlay */}
      <div className="absolute inset-0 z-[5] pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hexagons" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="5,1 9,3 9,7 5,9 1,7 1,3" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-cyan-400" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Matrix digital rain effect with technologies and icons */}
      <div className="absolute inset-0 z-[6] pointer-events-none overflow-hidden rounded-full">
        {matrixChars.map((item, i) => {
          const IconComponent = item.tech.icon;
          // Use stable key based on position to prevent animation reset
          return (
            <div
              key={`stream-${i}`}
              className="absolute font-mono font-bold whitespace-nowrap flex items-center gap-1"
              style={{
                left: `${(i * 100) / Math.max(matrixChars.length - 1, 1)}%`,
                top: `${item.y}%`,
                animation: `matrixRain ${2 + item.speed}s linear infinite`,
                animationDelay: `${item.delay}s`,
                animationFillMode: 'both',
                color: '#00FF41', // Matrix green
                textShadow: '0 0 6px #00FF41, 0 0 12px #00FF41',
                opacity: 0.85,
                fontSize: 'clamp(6px, 1vw, 9px)',
                transform: 'translateX(-50%)',
                willChange: 'transform, opacity',
              }}
            >
              <div
                className="inline-block flex-shrink-0"
                style={{
                  width: 'clamp(8px, 1.2vw, 12px)',
                  height: 'clamp(8px, 1.2vw, 12px)',
                  filter: 'drop-shadow(0 0 4px rgb(0, 255, 65))',
                }}
              >
                <IconComponent className="w-full h-full" />
              </div>
              <span>{item.tech.name}</span>
            </div>
          );
        })}
      </div>

      {/* Holographic scan lines */}
      <div className="absolute inset-0 z-[7] pointer-events-none overflow-hidden rounded-full">
        <div 
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/60 via-purple-400/60 to-transparent"
          style={{ 
            animation: 'scanline 2.5s linear infinite',
            top: '-4px',
          }} 
        />
      </div>

      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 z-[8] pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M20,20 L30,20 L30,30 L40,30 L40,40 L50,40" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-cyan-400" />
          <path d="M60,60 L70,60 L70,70 L80,70 L80,80 L90,80" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-purple-400" />
          <circle cx="30" cy="20" r="1" fill="currentColor" className="text-cyan-400" />
          <circle cx="70" cy="60" r="1" fill="currentColor" className="text-purple-400" />
        </svg>
      </div>

      {/* Holographic glitch effect layers - RGB separation */}
      <div 
        className="absolute inset-0 z-[1] transition-all duration-200"
        style={{
          opacity: hologramActive ? 0.7 : (glitchOffset.x !== 0 || glitchOffset.y !== 0 ? 0.5 : 0),
          clipPath: hologramActive ? 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' : 'none',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
          className="object-cover mix-blend-screen"
          style={{
            transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px) scale(${hologramActive ? 1.02 : 1})`,
            filter: 'hue-rotate(180deg) saturate(1.8) brightness(1.2)',
          }}
          aria-hidden="true"
        />
      </div>
      <div 
        className="absolute inset-0 z-[2] transition-all duration-200"
        style={{
          opacity: hologramActive ? 0.6 : (glitchOffset.x !== 0 || glitchOffset.y !== 0 ? 0.4 : 0),
          clipPath: hologramActive ? 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' : 'none',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
          className="object-cover mix-blend-multiply"
          style={{
            transform: `translate(${-glitchOffset.x}px, ${-glitchOffset.y}px) scale(${hologramActive ? 0.98 : 1})`,
            filter: 'hue-rotate(90deg) saturate(1.8) brightness(1.2)',
          }}
          aria-hidden="true"
        />
      </div>
      {/* Additional holographic layer */}
      <div 
        className="absolute inset-0 z-[1.5] transition-all duration-200"
        style={{
          opacity: hologramActive ? 0.5 : (glitchOffset.x !== 0 || glitchOffset.y !== 0 ? 0.3 : 0),
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
          className="object-cover mix-blend-color-dodge"
          style={{
            transform: `translate(${glitchOffset.y}px, ${glitchOffset.x}px) rotate(${hologramActive ? '0.5deg' : '0deg'})`,
            filter: 'hue-rotate(270deg) saturate(1.5)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main image with holographic effect */}
      <Image
        src={imageSrc}
        alt="Aman Khan"
        fill
        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 400px"
        className="object-cover relative z-0 transition-all duration-300"
        priority
        quality={95}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        style={{
          filter: hologramActive 
            ? 'contrast(1.3) brightness(1.1) saturate(1.2)' 
            : 'contrast(1.1) brightness(1.05)',
          transform: hologramActive ? 'scale(1.01)' : 'scale(1)',
        }}
      />

      {/* Holographic interference pattern */}
      <div 
        className="absolute inset-0 z-[3] pointer-events-none opacity-40 transition-opacity duration-300"
        style={{
          opacity: hologramActive ? 0.6 : 0.3,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.1) 2px, rgba(34,211,238,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(168,85,247,0.1) 2px, rgba(168,85,247,0.1) 4px)
          `,
        }}
      />

      {/* Cyberpunk overlay gradient with pulse */}
      <div className="absolute inset-0 z-[3] pointer-events-none mix-blend-overlay opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full animate-pulse" />
      </div>

      {/* Animated neon border with multiple layers */}
      <div className="absolute inset-0 z-[4] pointer-events-none rounded-full">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.3)] animate-pulse" />
        {/* Inner glow */}
        <div className="absolute inset-[2px] rounded-full border border-purple-400/40 shadow-[inset_0_0_20px_rgba(168,85,247,0.4)]" />
        {/* Animated corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/80" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80" />
      </div>

      {/* Data stream effect */}
      <div className="absolute inset-0 z-[9] pointer-events-none overflow-hidden rounded-full">
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse" 
             style={{ animation: 'dataStream 3s ease-in-out infinite' }} />
      </div>
    </div>
  );
}

