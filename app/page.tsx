'use client';

import { motion } from 'framer-motion';
import { FaCar, FaKey, FaShieldAlt } from 'react-icons/fa';
import CarGrid from './components/CarGrid';
import ReservationForm from './components/ReservationForm';
import Testimonials from './components/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section avec image de fond */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury car background"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Découvrez le Luxe en
              <span className="block text-accent">
                Location Automobile
              </span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-200"
          >
            Une expérience de conduite exceptionnelle avec notre collection exclusive de véhicules haut de gamme
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#fleet"
              className="bg-white text-black hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Voir nos véhicules
            </a>
            <a 
              href="#reservation"
              className="bg-black border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Réserver maintenant
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section avec animation au défilement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-black font-semibold text-lg mb-4 block uppercase tracking-wider">Nos Avantages</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Pourquoi Nous Choisir ?
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à vous offrir une expérience de location premium avec un service irréprochable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-elegant hover:shadow-hover transition-all"
            >
              <div className="text-6xl text-black mb-6 flex justify-center">
                <FaCar />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Véhicules Premium</h3>
              <p className="text-gray-600">Une flotte de véhicules haut de gamme régulièrement renouvelée</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-elegant hover:shadow-hover transition-all"
            >
              <div className="text-6xl text-black mb-6 flex justify-center">
                <FaKey />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Service Clé en Main</h3>
              <p className="text-gray-600">Réservation simple et rapide avec livraison possible</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-8 bg-white border border-gray-200 rounded-lg shadow-elegant hover:shadow-hover transition-all"
            >
              <div className="text-6xl text-black mb-6 flex justify-center">
                <FaShieldAlt />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Sécurité Garantie</h3>
              <p className="text-gray-600">Assurance tous risques incluse dans nos services</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Flotte de véhicules */}
      <section id="fleet" className="bg-gray-light py-24">
        <CarGrid />
      </section>

      {/* Section Témoignages */}
      <section className="bg-white py-24">
        <Testimonials />
      </section>

      {/* Section Formulaire de réservation */}
      <section className="bg-black text-white py-24" id="reservation">
        <ReservationForm />
      </section>
    </main>
  );
} 