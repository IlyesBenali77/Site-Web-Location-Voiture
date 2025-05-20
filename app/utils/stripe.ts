import { loadStripe } from '@stripe/stripe-js';

// Remplacer par votre clé publique Stripe en production
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51O2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
);

// Montants des acomptes pour chaque modèle de voiture (en centimes)
export const depositAmounts = {
  gt3rs: 8000, // 80€ (10% de 800€)
  brabus5: 7000, // 70€ (10% de 700€)
  '911': 6000 // 60€ (10% de 600€)
};

// Fonction pour formater le prix
export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount / 100);
}; 