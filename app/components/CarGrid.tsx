'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCreditCard } from 'react-icons/fa';
import { formatPrice } from '../utils/stripe';
import Link from 'next/link';

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  deposit: number;
  power: string;
  acceleration: string;
  maxSpeed: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Porsche GT3 RS",
    price: "800€/jour",
    image: "/images/Gt3rs.jpeg",
    category: "Super Sport",
    description: "La Porsche la plus performante sur piste",
    deposit: 150000, // 15000€ de caution
    power: "520 ch",
    acceleration: "3,2 s",
    maxSpeed: "310 km/h"
  },
  {
    id: 2,
    name: "Mercedes-AMG Brabus 5",
    price: "700€/jour",
    image: "/images/brabus5.webp",
    category: "Luxe",
    description: "Performance et élégance allemande à l'état pur",
    deposit: 120000, // 12000€ de caution
    power: "630 ch",
    acceleration: "3,2 s",
    maxSpeed: "310 km/h"
  },
  {
    id: 3,
    name: "Porsche 911",
    price: "600€/jour",
    image: "/images/porsshe.jpg",
    category: "Sport",
    description: "L'icône sportive par excellence",
    deposit: 100000, // 10000€ de caution
    power: "450 ch",
    acceleration: "3,4 s",
    maxSpeed: "295 km/h"
  }
];

export default function CarGrid() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-black font-semibold text-lg mb-4 block uppercase tracking-wider">Notre Collection</span>
        <h2 className="text-5xl font-bold mb-6 text-black">
          Notre Flotte d'Exception
        </h2>
        <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez notre sélection de véhicules haut de gamme, choisis pour leur excellence et leur prestige
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div className="relative h-48 sm:h-56 md:h-64 w-full">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">{car.price}€</span>
                <span className="text-sm text-gray-600">/ jour</span>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>{car.power}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{car.acceleration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <span>{car.maxSpeed}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>Caution: {formatPrice(car.deposit)}</span>
                <span>Kilométrage illimité</span>
              </div>
              <Link
                href={`/reservation?car=${car.id}`}
                className="block w-full bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Réserver
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 