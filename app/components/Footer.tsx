'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* À propos */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">LuxeCars</h3>
            <p className="text-gray-400 mb-6">
              Votre partenaire de confiance pour la location de véhicules de luxe. 
              Nous vous offrons une expérience de conduite exceptionnelle.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<FaFacebookF />} />
              <SocialLink href="#" icon={<FaTwitter />} />
              <SocialLink href="#" icon={<FaInstagram />} />
              <SocialLink href="#" icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Liens Rapides</h4>
            <ul className="space-y-3">
              <FooterLink href="#fleet">Notre Flotte</FooterLink>
              <FooterLink href="#services">Nos Services</FooterLink>
              <FooterLink href="#reservation">Réservation</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Nos Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Location courte durée</FooterLink>
              <FooterLink href="#">Location longue durée</FooterLink>
              <FooterLink href="#">Service chauffeur</FooterLink>
              <FooterLink href="#">Transfert aéroport</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gradient mt-1 mr-3" />
                <span>123 Avenue des Champs-Élysées, 75008 Paris</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gradient mr-3" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gradient mr-3" />
                <span>contact@luxecars.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center text-sm">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} <span className="text-white">LUXE</span><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CARS</span>. Tous droits réservés.</p>
          </div>
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