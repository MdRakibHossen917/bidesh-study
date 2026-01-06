import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award, Users, Globe, CheckCircle, GraduationCap } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Student First",
      description: "Every decision we make is centered around what's best for our students' futures.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in education consulting and student services.",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Transparent, honest guidance you can trust throughout your journey.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Strong partnerships with universities worldwide to offer diverse opportunities.",
    },
  ];

  const milestones = [
    { year: "2009", title: "Founded", description: "Started with a vision to help Bangladeshi students achieve global education dreams" },
    { year: "2012", title: "500 Students", description: "Reached milestone of placing 500 students in international universities" },
    { year: "2015", title: "UK Partnership", description: "Established official partnerships with top UK universities" },
    { year: "2018", title: "10,000 Students", description: "Celebrated placing our 10,000th student abroad" },
    { year: "2021", title: "Digital Launch", description: "Launched our comprehensive online platform for seamless applications" },
    { year: "2024", title: "50,000+ Students", description: "Proudly serving over 50,000 students across 150+ countries" },
  ];

  const team = [
    { name: "Dr. Rahman Ahmed", role: "Founder & CEO", image: "👨‍💼" },
    { name: "Sarah Khan", role: "Head of Admissions", image: "👩‍💼" },
    { name: "Michael Chen", role: "International Relations", image: "👨‍💼" },
    { name: "Fatima Begum", role: "Student Success Manager", image: "👩‍💼" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Since 2009</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">BideshStudy.com</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering Bangladeshi students to achieve their dreams of world-class education 
              for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to international education for Bangladeshi students by providing 
                comprehensive guidance, transparent processes, and unwavering support throughout their 
                educational journey abroad. We believe every student deserves the opportunity to access 
                world-class education regardless of their background.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and impactful education consultancy in South Asia, 
                creating a generation of globally educated Bangladeshi professionals who contribute 
                to both local and international communities. We envision a future where geographical 
                boundaries don't limit educational aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at BideshStudy.com
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              15 years of helping students achieve their dreams
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-card border border-border rounded-xl p-6">
                      <span className="text-primary font-bold">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">50K+</div>
              <div className="text-primary-foreground/70">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">150+</div>
              <div className="text-primary-foreground/70">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">98%</div>
              <div className="text-primary-foreground/70">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
