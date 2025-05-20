<div className="relative h-[90vh] min-h-[600px] max-h-[800px] w-full overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/images/hero.jpg"
      alt="LuxeCars - Location de voitures de luxe"
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
      quality={100}
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>
  
  <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6 max-w-4xl">
      Location de Voitures de Luxe
    </h1>
    <p className="text-xl text-white text-center mb-8 max-w-2xl">
      Vivez une expérience de conduite exceptionnelle avec notre flotte de véhicules haut de gamme
    </p>
    <Link
      href="#reservation"
      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
    >
      Réserver Maintenant
    </Link>
  </div>
</div> 