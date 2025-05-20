import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { depositAmounts } from '../../utils/stripe';

// Initialisation de Stripe avec la clé secrète (la vraie clé serait récupérée de l'environnement)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_votreclésecrete', {
  apiVersion: '2025-04-30.basil',
});

export async function POST(request: Request) {
  try {
    const { carModel } = await request.json();
    
    // Récupérer le montant de l'acompte en fonction du modèle de voiture
    const amount = depositAmounts[carModel as keyof typeof depositAmounts] || 10000;
    
    // Créer un PaymentIntent avec le montant et la devise
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      // Métadonnées pour suivi
      metadata: {
        carModel,
      },
    });

    // Retourner le client_secret à utiliser côté client
    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret 
    });
  } catch (error) {
    console.error('Erreur lors de la création du payment intent:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la préparation du paiement.' },
      { status: 500 }
    );
  }
} 