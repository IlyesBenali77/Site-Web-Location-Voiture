'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            <span className="font-light">Luxe</span>Cars
          </Link>

          {/* Menu burger pour mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#fleet" isScrolled={isScrolled}>Notre Flotte</NavLink>
            <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="#reservation" isScrolled={isScrolled}>Réservation</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white shadow-elegant rounded-b-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              <MobileNavLink href="#fleet" onClick={() => setIsMobileMenuOpen(false)}>
                Notre Flotte
              </MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink href="#reservation" onClick={() => setIsMobileMenuOpen(false)}>
                Réservation
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`font-medium transition-colors border-b-2 border-transparent hover:border-b-2 ${
        isScrolled ? 'text-black hover:border-black' : 'text-white hover:border-white'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-black font-medium hover:text-gray-600 transition-colors block py-2 border-b border-gray-100"
    >
      {children}
    </Link>
  );
} 