"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#knowledge-sharing", label: "Knowledge Sharing" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
];

export default function Navigation() {
  const { theme, mounted } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  // Determine which logo to use based on theme
  const logoSrc = mounted && theme === "light" ? "/images/AK_Light.png" : "/images/AK_Dark.png";

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = navItems.findIndex(
        (item) => item.href.substring(1) === activeSection
      );
      const activeItem = itemRefs.current[activeIndex];
      if (activeItem && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        setIndicatorStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    setTimeout(updateIndicator, 100); // Small delay for initial render

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page
      const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          // For the last section, also check if we're near the bottom
          if (i === sections.length - 1 && isNearBottom) {
            setActiveSection(sections[i]);
            break;
          }
          
          // Standard detection: check if scroll position is within section bounds
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg w-full">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full max-w-full">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo with enhanced animation */}
            <motion.a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="cursor-pointer relative group flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                <div className="relative w-full h-full">
                  <Image
                    src={logoSrc}
                    alt="AK Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation with sliding indicator */}
            <div className="hidden md:flex items-center relative" ref={navRef}>
              {/* Sliding Background Indicator */}
              <motion.div
                className="absolute bottom-0 h-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm"
                initial={false}
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  borderRadius: "0.5rem",
                }}
              />

              {/* Navigation Items */}
              <div className="flex items-center gap-1 relative z-10">
                {navItems.map((item, index) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={item.href}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-white dark:text-white"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {/* Active indicator glow */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-100"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          layoutId="activeNavItem"
                        />
                      )}

                      {/* Text with glow effect when active */}
                      <span
                        className={`relative z-10 ${
                          isActive
                            ? "drop-shadow-lg"
                            : "hover:drop-shadow-sm"
                        }`}
                      >
                        {item.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Navigation with enhanced scroll indicator */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="md:hidden flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide pb-2 max-w-[calc(100vw-120px)] sm:max-w-none">
                {navItems.map((item, index) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`relative px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-300 cursor-pointer touch-manipulation ${
                        isActive
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          layoutId="activeMobileNavItem"
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </motion.a>
                  );
                })}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


