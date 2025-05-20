'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Une expérience de conduite inoubliable avec la Porsche GT3 RS. La puissance et la précision de cette voiture sont exceptionnelles. Le service de LuxeCars est à la hauteur de la voiture !",
    author: "Sophie Laurent",
    role: "Directrice Marketing"
  },
  {
    id: 2,
    content: "La Mercedes-AMG Brabus 5 est un véritable chef-d'œuvre. Confort, puissance et élégance se marient parfaitement. Le service client est irréprochable.",
    author: "Thomas Dubois",
    role: "Entrepreneur"
  },
  {
    id: 3,
    content: "La Porsche 911 est une icône pour une raison. J'ai passé un week-end extraordinaire avec cette voiture. Service de livraison impeccable et voiture en parfait état.",
    author: "Marie Leclerc",
    role: "Architecte"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-lg mb-4 block">Avis Clients</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont vécu l'expérience LuxeCars
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all relative"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient p-3 text-white text-xl flex items-center justify-center">
                <FaQuoteLeft />
              </div>
              <div className="pt-6">
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={`https://randomuser.me/api/portraits/women/${32 + index}.jpg`} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 