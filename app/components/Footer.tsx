'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LuxeCars</h3>
            <p className="text-gray-400">Location de voitures de luxe pour des expériences inoubliables.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Nos Véhicules</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                contact@luxecars.fr
              </li>
              <li className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                123 Avenue des Champs-Élysées, Paris
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi: 9h - 19h</li>
              <li>Samedi: 10h - 18h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxeCars. Tous droits réservés.</p>
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