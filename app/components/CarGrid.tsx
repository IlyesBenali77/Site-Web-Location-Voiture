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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden transform hover:translate-y-[-8px] transition-all duration-300 shadow-elegant hover:shadow-hover"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-black/50 text-white rounded-full text-sm font-medium mb-2">
                  {car.category}
                </span>
                <h3 className="text-2xl font-bold text-white drop-shadow-md">{car.name}</h3>
                <p className="text-sm text-gray-200 mt-1">{car.description}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-black">
                    {car.price}
                  </span>
                  <span className="text-gray-500 ml-2">TTC</span>
                </div>
                <a 
                  href="#reservation" 
                  className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
                >
                  Réserver
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center text-sm text-gray-500">
                <FaCreditCard className="mr-2 text-black" />
                <span>Caution: <strong className="text-black">{formatPrice(car.deposit)}</strong></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 