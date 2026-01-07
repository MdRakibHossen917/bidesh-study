import { Button } from "@/components/ui/button";
import { Search, Globe, Users, Award, ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const HeroBanner = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { icon: Globe, value: "150+", label: "Countries" },
    { icon: Users, value: "50K+", label: "Students Placed" },
    { icon: Award, value: "2000+", label: "Universities" },
  ];

  const orbitCountries = [
    { name: "US", countryCode: "US", angle: 0 },
    { name: "GB", countryCode: "GB", angle: 45 },
    { name: "CA", countryCode: "CA", angle: 90 },
    { name: "AU", countryCode: "AU", angle: 135 },
    { name: "Germany", countryCode: "DE", angle: 180 },
    { name: "Spain", countryCode: "ES", angle: 225 },
    { name: "Japan", countryCode: "JP", angle: 270 },
    { name: "South Korea", countryCode: "KR", angle: 315 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Orbit Animation - Dream71 Style with Country Flags */}
        <div 
          className="absolute top-1/2 left-1/2 hidden md:block z-50 pointer-events-none orbit"
          style={{
            transform: 'translate(-50%, calc(-50% - 120px))',
            transformOrigin: 'center center',
            animation: 'rotateCircle 40s linear infinite',
          }}
        >
          {orbitCountries.map((country, index) => {
            const baseRadius = 280;
            
            return (
              <div
                key={index}
                className="absolute planet flex items-center justify-center w-16 h-16 bg-card/90 backdrop-blur-sm rounded-full border-2 border-primary/30 shadow-lg z-30 hover:scale-110 hover:border-primary/60"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center center',
                  opacity: 1,
                  willChange: 'transform',
                  animation: `orbitPulse 4s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                  '--angle': `${country.angle}deg`,
                  '--base-radius': `${baseRadius}px`,
                } as React.CSSProperties & { '--angle': string; '--base-radius': string }}
                title={country.name}
              >
                <ReactCountryFlag
                  countryCode={country.countryCode}
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                    display: 'block',
                  }}
                  title={country.name}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Trusted by 50,000+ Bangladeshi Students
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Your Gateway to{" "}
            <span className="text-gradient">World-Class Education</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover 2000+ universities across 150 countries. Find your perfect program, 
            apply seamlessly, and let our expert consultants guide your journey abroad.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            <div className="relative flex items-center bg-card border border-border rounded-2xl p-2 shadow-search focus-within:shadow-search-focus transition-shadow duration-300">
              <div className="flex items-center gap-2 px-4">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search universities, programs, or countries..."
                className="flex-1 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button size="lg" className="rounded-xl shadow-button">
                <span className="hidden sm:inline">Explore Now</span>
                <ArrowRight className="w-5 h-5 sm:ml-2" />
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-600">
            {["Study in USA", "Study in UK", "Study in Canada", "Study in Australia"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground bg-muted/50 hover:bg-muted border border-border/50 rounded-full transition-colors duration-200 hover:text-foreground"
                >
                  {tag}
                </button>
              )
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in-up animation-delay-800">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
