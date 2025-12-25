import { Music, MapPin, Users, Radio, Heart, Zap, ChevronRight, Star, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      icon: <Music className="h-6 w-6" />,
      title: 'Check In Your Music',
      description: 'Share what you\'re listening to at any location. Tag your vibe and let others discover your soundtrack.',
      color: 'bg-orange-500/20 text-orange-400',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'City Soundtrack',
      description: 'See what songs are trending at venues, neighborhoods, and cities around you in real-time.',
      color: 'bg-emerald-500/20 text-emerald-400',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Connect & Follow',
      description: 'Follow friends, discover tastemakers, and build your music community.',
      color: 'bg-blue-500/20 text-blue-400',
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: 'Live Moments',
      description: 'Experience music moments as they happen. See who\'s listening to what, right now.',
      color: 'bg-purple-500/20 text-purple-400',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Music Lovers' },
    { value: '1M+', label: 'Check-ins' },
    { value: '500+', label: 'Cities' },
  ];

  const testimonials = [
    {
      quote: "Finally an app that shows me what people are actually listening to at my favorite spots!",
      author: "Sarah M.",
      role: "DJ & Music Curator",
      avatar: "🎧",
    },
    {
      quote: "I discovered my new favorite artist because someone checked in at the coffee shop I was at.",
      author: "Marcus T.",
      role: "Music Explorer",
      avatar: "🎵",
    },
    {
      quote: "The city soundtrack feature is addictive. I love seeing what's trending in different neighborhoods.",
      author: "Aisha K.",
      role: "Urban Explorer",
      avatar: "🌆",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-orange-600/10 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-sm font-medium">Now Available on iOS & Android</span>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-2xl scale-110" />
                <Image 
                  src="/AYolA-Transparent-Orange-Owl.svg" 
                  alt="melOwi Owl" 
                  width={140} 
                  height={140}
                  className="relative w-32 h-32 md:w-36 md:h-36"
                />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Drop a pin.
              <br />
              <span className="text-orange-500">Drop a beat.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover what your city is listening to. Check in your music, explore local soundtracks, and connect with music lovers around you.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a 
                href="https://apps.apple.com/app/melowi" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.melowi" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60">Get it on</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-12 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Music is <span className="text-orange-500">everywhere</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              melOwi turns every place into a music discovery experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How it <span className="text-orange-500">works</span>
            </h2>
            <p className="text-xl text-gray-400">Three simple steps to join the soundtrack</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Check In',
                  description: 'Tap to share what you\'re listening to at your current location',
                  emoji: '📍',
                },
                {
                  step: '02',
                  title: 'Explore',
                  description: 'Discover trending songs at venues, neighborhoods, and cities',
                  emoji: '🎵',
                },
                {
                  step: '03',
                  title: 'Connect',
                  description: 'Follow music lovers, like moments, and build your community',
                  emoji: '🦉',
                },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <div className="text-orange-500 font-bold text-sm mb-2">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-orange-500/30">
                      <ChevronRight className="w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="text-orange-500">music lovers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-orange-500/10 to-orange-600/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/20 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Image 
              src="/AYolA-Transparent-Orange-Owl.svg" 
              alt="melOwi Owl" 
              width={100} 
              height={100}
              className="mx-auto mb-8 w-20 h-20"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to discover your city's soundtrack?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Download melOwi for free and start exploring music moments around you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://apps.apple.com/app/melowi" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.melowi" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60">Get it on</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}