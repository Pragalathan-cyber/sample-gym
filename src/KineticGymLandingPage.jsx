import React, { useState, useEffect } from "react";

const KineticGymLandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070",
      title: "Unleash",
      subtitle: "Your Power",
      description:
        "Elite performance requires elite environments. Break through your limits with Kinetic's high-intensity training.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070",
      title: "Define",
      subtitle: "Your Limits",
      description:
        "Precision coaching and state-of-the-art equipment designed for the serious athlete.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070",
      title: "Master",
      subtitle: "The Grind",
      description:
        "Join a community of high-performers. Our classes are engineered for maximum results.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#131313] text-white font-['Lexend'] min-h-screen">
      {/* Top Address Bar */}
      <div className="bg-[#DFFF00] text-black text-[10px] py-1 text-center font-bold tracking-widest uppercase">
        742, Industrial District, Banglore
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#131313]/80 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-black italic tracking-tighter text-[#DFFF00]">
          KINETIC
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
          <a href="/" className="hover:text-[#DFFF00] transition-colors">
            Home
          </a>
          <a
            href="#Trainers"
            className="hover:text-[#DFFF00] transition-colors"
          >
            Our Trainers
          </a>
          <a
            href="#packages"
            className="hover:text-[#DFFF00] transition-colors"
          >
            Our Packages
          </a>
          <a
            href="#locations"
            className="hover:text-[#DFFF00] transition-colors"
          >
            Locations
          </a>
          <a
            href="#programs"
            className="hover:text-[#DFFF00] transition-colors"
          >
            Programs
          </a>
        </div>
        <button className="bg-[#DFFF00] text-black px-6 py-2 font-black uppercase text-sm hover:scale-105 transition-transform">
          Join Now
        </button>
      </nav>

      {/* Hero / Slideshow Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-none tracking-tighter transform transition-all duration-700 delay-300 translate-y-0 opacity-100">
                {slide.title} <br />{" "}
                <span className="text-[#DFFF00]">{slide.subtitle}</span>
              </h1>
              <p className="max-w-xl mx-auto mt-6 text-lg text-white/70 font-medium transition-all duration-700 delay-500">
                {slide.description}
              </p>
              <button className="mt-10 bg-[#DFFF00] text-black px-10 py-4 font-black uppercase text-xl flex items-center mx-auto hover:bg-white transition-colors transform hover:scale-105 active:scale-95 duration-200">
                Start Training <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all duration-300 ${index === currentSlide ? "bg-[#DFFF00] w-20" : "bg-white/30"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Training Programs / Classes */}
      <section id="programs" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#DFFF00] font-bold uppercase tracking-widest text-sm">
            // Programming
          </span>
          <h2 className="text-6xl font-black uppercase mt-2">The Classes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Class Cards */}
          <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-2">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
              alt="Power Lifting"
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="p-6">
              <span className="bg-[#DFFF00] text-black text-[10px] px-2 py-1 font-bold uppercase">
                Strength
              </span>
              <h3 className="text-3xl font-black uppercase mt-4">
                Power Lifting
              </h3>
            </div>
          </div>
          <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-2 lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
              alt="HIIT Cardio"
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="p-6">
              <span className="bg-[#DFFF00] text-black text-[10px] px-2 py-1 font-bold uppercase">
                Cardio
              </span>
              <h3 className="text-3xl font-black uppercase mt-4">
                HIIT Cardio
              </h3>
            </div>
          </div>
          <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-2 lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800"
              alt="Elite Boxing"
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="p-6">
              <span className="bg-[#DFFF00] text-black text-[10px] px-2 py-1 font-bold uppercase">
                Combat
              </span>
              <h3 className="text-3xl font-black uppercase mt-4">
                Elite Boxing
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Trainers */}
      <section id="Trainers" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <span className="text-[#DFFF00] font-bold uppercase tracking-widest text-sm">
              // The Vanguard
            </span>
            <h2 className="text-6xl font-black uppercase mt-2">
              Elite Trainers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Marcus Thorne",
                role: "Olympic Lifting Specialist",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
              },
              {
                name: "Sarah Jenkins",
                role: "Combat Arts Lead",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
              },
              {
                name: "David Vance",
                role: "Bio-Mechanics Expert",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
              },
            ].map((coach, i) => (
              <div key={i} className="text-center">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500 mb-6 border border-white/10"
                />
                <h4 className="text-2xl font-black uppercase italic">
                  {coach.name}
                </h4>
                <p className="text-[#DFFF00] text-xs font-bold uppercase tracking-widest mt-2">
                  {coach.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 max-w-5xl mx-auto text-center">
        <div className="text-[#DFFF00] text-6xl mb-8">“</div>
        <h3 className="text-4xl md:text-5xl font-black uppercase italic leading-tight">
          Kinetic isn't just a gym. It's the only place where I can truly
          unleash my full potential. The environment is electrifying.
        </h3>
        <div className="mt-12 flex items-center justify-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
            className="w-16 h-20 rounded-full border-2 border-[#DFFF00]"
            alt="User"
          />
          <div className="text-left">
            <div className="font-black uppercase italic">Marcus Thorne</div>
            <div className="text-[#DFFF00] text-[10px] font-bold uppercase tracking-widest">
              Competitive Powerlifter
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-4xl font-black italic tracking-tighter text-[#DFFF00] mb-8 md:mb-0">
            KINETIC
          </div>
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-[10px] font-bold text-white/20 uppercase tracking-widest">
          ©2024 Kinetic Performance. No Excuses.
        </div>
      </footer>
    </div>
  );
};

export default KineticGymLandingPage;
