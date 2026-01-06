import { Shield, Clock, Headphones, Award, Globe, FileCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to 2000+ universities across 150+ countries with exclusive partnerships.",
  },
  {
    icon: FileCheck,
    title: "Hassle-Free Applications",
    description: "Simplified application process with document verification and submission support.",
  },
  {
    icon: Shield,
    title: "Visa Success Rate",
    description: "98% visa approval rate with expert guidance on documentation and interviews.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Get your admission offer within 2-4 weeks with our expedited processing.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our dedicated counselors for all your queries.",
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description: "Guidance on scholarship opportunities to make your education affordable.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden" id="why-choose-us">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Why BideshStudy.com
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your dream of studying abroad a reality with our comprehensive support
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">50K+</div>
              <div className="text-primary-foreground/80 text-sm">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80 text-sm">Visa Success</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">150+</div>
              <div className="text-primary-foreground/80 text-sm">Partner Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
