'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center"
    >
      <div className="relative">
        <span className="text-3xl font-bold tracking-wider">
          <span className="text-white">LUXE</span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CARS</span>
        </span>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
      </div>
    </motion.div>
  );
} 