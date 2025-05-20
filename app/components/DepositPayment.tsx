'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { stripePromise, depositAmounts, formatPrice } from '../utils/stripe';
import { FaCreditCard, FaLock } from 'react-icons/fa';

interface DepositPaymentProps {
  carModel: string;
  startDate: string;
  endDate: string;
  onSuccess: () => void;
  onClose: () => void;
}

function DepositPaymentForm({ carModel, startDate, endDate, onSuccess, onClose }: DepositPaymentProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const amount = depositAmounts[carModel as keyof typeof depositAmounts] || 10000;

  // Dans un environnement réel, cette fonction récupérerait le client_secret depuis l'API
  useEffect(() => {
    // Simuler un appel API au lieu d'appeler réellement l'API
    // En production, vous feriez plutôt:
    // async function getClientSecret() {
    //   const response = await fetch('/api/create-payment-intent', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ carModel }),
    //   });
    //   const data = await response.json();
    //   setClientSecret(data.clientSecret);
    // }
    // getClientSecret();

    // Simulation pour la démonstration
    const timer = setTimeout(() => {
      setClientSecret('mock_client_secret_for_demo');
    }, 500);

    return () => clearTimeout(timer);
  }, [carModel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    // Simuler un paiement réussi (dans un environnement de production, vous utiliseriez le client_secret)
    try {
      const cardElement = elements.getElement(CardElement);
      
      if (!cardElement) {
        throw new Error("Le formulaire de carte n'est pas disponible");
      }

      // En production, vous utiliseriez le client_secret pour confirmer le paiement
      // if (clientSecret) {
      //   const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      //     payment_method: {
      //       card: cardElement,
      //     }
      //   });
      //
      //   if (error) {
      //     throw new Error(error.message);
      //   }
      //
      //   if (paymentIntent.status === 'succeeded') {
      //     setSuccess(true);
      //     setTimeout(() => {
      //       onSuccess();
      //     }, 1500);
      //   }
      // }

      // Simulation d'un délai de traitement pour l'exemple
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
      >
        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Paiement réussi !</h2>
            <p className="text-gray-600">Votre réservation a été confirmée.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Paiement d'acompte</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Résumé de la réservation</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-600">Véhicule:</div>
                <div className="font-medium">{carModel === 'mercedes' ? 'Mercedes-Benz Classe S' : 
                                             carModel === 'bmw' ? 'BMW Serie 7' : 
                                             carModel === 'audi' ? 'Audi A8' : carModel}</div>
                <div className="text-gray-600">Date de début:</div>
                <div className="font-medium">{new Date(startDate).toLocaleDateString('fr-FR')}</div>
                <div className="text-gray-600">Date de fin:</div>
                <div className="font-medium">{new Date(endDate).toLocaleDateString('fr-FR')}</div>
                <div className="text-gray-600">Montant de l'acompte:</div>
                <div className="font-bold text-primary">{formatPrice(amount)}</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                  <FaCreditCard className="mr-2 text-primary" />
                  Informations de paiement
                </label>
                <div className="border-2 border-gray-200 rounded-xl p-4 focus-within:border-primary transition-colors">
                  <CardElement 
                    options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <FaLock className="mr-1" /> Paiement sécurisé par Stripe
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <button
                type="submit"
                disabled={!stripe || loading || !clientSecret}
                className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg flex justify-center items-center ${
                  loading || !stripe || !clientSecret ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {loading ? 'Traitement en cours...' : `Payer ${formatPrice(amount)}`}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function DepositPayment(props: DepositPaymentProps) {
  return (
    <Elements stripe={stripePromise}>
      <DepositPaymentForm {...props} />
    </Elements>
  );
} 