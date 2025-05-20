'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">LuxeCars</h3>
            <p className="text-gray-400">
              Location de voitures de luxe pour des expériences de conduite exceptionnelles.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-3 text-primary" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-3 text-primary" />
                <span>contact@luxecars.fr</span>
              </li>
              <li className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-3 text-primary" />
                <span>123 Avenue des Champs-Élysées, Paris</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#vehicles" className="text-gray-400 hover:text-primary transition-colors">
                  Nos Véhicules
                </Link>
              </li>
              <li>
                <Link href="#reservation" className="text-gray-400 hover:text-primary transition-colors">
                  Réservation
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} LuxeCars. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:bg-gradient group transition-all"
    >
      <span className="text-white group-hover:text-gradient transition-colors">{icon}</span>
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-gradient transition-colors"
      >
        {children}
      </Link>
    </li>
  );
} 