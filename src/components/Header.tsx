'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, MusicalNoteIcon, CommandLineIcon, 
  DocumentTextIcon, BookOpenIcon, PencilSquareIcon 
} from '@heroicons/react/24/outline';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/music', label: 'Music', icon: MusicalNoteIcon },
    { href: '/projects', label: 'Projects', icon: CommandLineIcon },
    { href: '/resume', label: 'Resume', icon: DocumentTextIcon },
    { href: '/reading', label: 'Reading', icon: BookOpenIcon },
    { href: '/blog', label: 'Blog', icon: PencilSquareIcon }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'
      }`}
    >
      <div className="absolute inset-0 glass-effect"></div>

      <div className="container-wrapper relative">
        <nav className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="group relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xl sm:text-2xl font-bold text-gradient">
                Brandon Williams
              </span>
              <div className="absolute inset-0 bg-[var(--primary)] opacity-0 blur-2xl group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="hidden sm:flex">
              {navItems.map(({ href, label, icon: Icon }) => (
                <NavigationMenuItem key={href}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-[var(--primary-transparent)] data-[active]:bg-[var(--primary-transparent)]",
                        isActive(href) && "text-[var(--primary)] bg-[var(--primary-transparent)]"
                      )}
                    >
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="flex items-center gap-2"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </motion.div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            
            {/* Mobile Navigation */}
            <div className="sm:hidden relative" ref={mobileMenuRef}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full right-0 w-56 mt-2 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg ${
                  mobileMenuOpen ? 'block' : 'hidden'
                }`}
              >
                <div className="py-2">
                  {navItems.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-2 px-4 py-2 hover:bg-[var(--primary-transparent)] transition-colors ${
                        isActive(href) ? 'text-[var(--primary)] bg-[var(--primary-transparent)]' : 'text-[var(--foreground)]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </NavigationMenu>
        </nav>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-10"></div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-5 blur-2xl"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--accent)] to-transparent opacity-5 blur-2xl"></div>
    </motion.header>
  );
}
