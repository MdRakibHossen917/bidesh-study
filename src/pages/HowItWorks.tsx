import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileText, Users, Plane, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Explore & Discover",
      description: "Browse through 2000+ universities across 150+ countries. Filter by program, country, budget, and requirements to find your perfect match.",
      features: ["Smart search filters", "Compare universities", "View program details", "Check eligibility"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      number: "02",
      icon: FileText,
      title: "Apply Online",
      description: "Complete your application with our streamlined process. Upload documents, fill forms, and track your application status in real-time.",
      features: ["Easy document upload", "Auto-fill forms", "Real-time tracking", "Multiple applications"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10",
    },
    {
      number: "03",
      icon: Users,
      title: "Expert Consultation",
      description: "Our experienced consultants guide you through visa applications, scholarship opportunities, and admission requirements.",
      features: ["Visa assistance", "Scholarship guidance", "Interview preparation", "Document verification"],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
    },
    {
      number: "04",
      icon: Plane,
      title: "Fly & Study",
      description: "Get pre-departure briefing, accommodation assistance, and connect with fellow students heading to the same destination.",
      features: ["Pre-departure guidance", "Accommodation help", "Airport pickup", "Student community"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
    },
  ];

  const stats = [
    { value: "98%", label: "Visa Success Rate" },
    { value: "50K+", label: "Students Placed" },
    { value: "150+", label: "Countries" },
    { value: "2000+", label: "Partner Universities" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple 4-Step Journey</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Your Path to <span className="text-gradient">Global Education</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
              From discovering your dream university to landing abroad — we make every step seamless, guided, and stress-free.
            </p>
            
            {/* Mini step indicator */}
            <div className="flex justify-center gap-4 md:gap-8 mt-12 animate-fade-in-up">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground mt-2 hidden md:block">{step.title.split(' ')[0]}</span>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute" style={{ marginLeft: '120px', marginTop: '28px' }}>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Unique Card Design */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-border to-transparent hidden md:block" />
                )}
                
                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 rounded-3xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-2xl ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6 md:left-auto md:right-8">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white text-sm font-bold shadow-lg`}>
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon Area */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 md:w-32 md:h-32 rounded-3xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                        <step.icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features as pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {step.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-sm text-foreground"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-primary" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with floating cards */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-muted-foreground">Numbers that speak for our commitment</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join 50,000+ Bangladeshi students who transformed their dreams into reality. 
                Your world-class education awaits.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/institutions">
                  <Button size="lg" variant="secondary" className="shadow-xl">
                    Explore Universities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
