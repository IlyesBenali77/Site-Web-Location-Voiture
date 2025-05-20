'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCarAlt, FaEnvelope, FaPhone, FaUser, FaCreditCard } from 'react-icons/fa';
import DepositPayment from './DepositPayment';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    carModel: '',
  });
  const [showPayment, setShowPayment] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ouvrir la fenêtre de paiement d'acompte
    setShowPayment(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentSuccess = () => {
    // Gérer la réussite du paiement
    setShowPayment(false);
    setFormSubmitted(true);
    
    // Remettre à zéro le formulaire après 5 secondes
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        startDate: '',
        endDate: '',
        carModel: '',
      });
    }, 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Réservez Votre Véhicule de Luxe
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Une caution sera demandée pour couvrir les risques potentiels
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Réservation confirmée !</h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre réservation. Un email de confirmation a été envoyé à {formData.email}.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Cette fenêtre se réinitialisera dans quelques secondes...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <FaUser className="mr-2 text-primary" />
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-black"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <FaEnvelope className="mr-2 text-primary" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-black"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <FaPhone className="mr-2 text-primary" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-black"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <FaCarAlt className="mr-2 text-primary" />
                        Modèle de voiture
                      </label>
                      <select
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-black"
                      >
                        <option value="">Sélectionnez un modèle</option>
                        <option value="gt3rs">Porsche GT3 RS</option>
                        <option value="brabus5">Mercedes-AMG Brabus 5</option>
                        <option value="911">Porsche 911</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <FaCalendarAlt className="mr-2 text-primary" />
                        Date de début
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-black"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <FaCalendarAlt className="mr-2 text-primary" />
                        Date de fin
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-black"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center pt-6"
                  >
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-xl"
                    >
                      <FaCreditCard className="mr-2" />
                      Payer la caution et réserver
                    </button>
                    <p className="text-sm text-gray-500 mt-4">
                      Une caution sera demandée pour couvrir les risques potentiels
                    </p>
                  </motion.div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal de paiement */}
      {showPayment && (
        <DepositPayment 
          carModel={formData.carModel}
          startDate={formData.startDate}
          endDate={formData.endDate}
          onSuccess={handlePaymentSuccess}
          onClose={() => setShowPayment(false)}
        />
      )}
    </section>
  );
} 