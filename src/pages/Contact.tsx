import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["House 45, Road 12", "Gulshan 1, Dhaka 1212", "Bangladesh"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+880 1700-000000", "+880 1800-000000"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@bideshstudy.com", "support@bideshstudy.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sunday - Thursday: 9AM - 6PM", "Friday - Saturday: Closed"],
    },
  ];

  const offices = [
    { city: "Dhaka", address: "Gulshan 1", flag: "🇧🇩" },
    { city: "Chittagong", address: "GEC Circle", flag: "🇧🇩" },
    { city: "London", address: "Oxford Street", flag: "🇬🇧" },
    { city: "Sydney", address: "CBD", flag: "🇦🇺" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about studying abroad? Our expert team is here to help you 
              every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      placeholder="+880 1700-000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      placeholder="Study in UK"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your education goals..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto shadow-button">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Placeholder & Offices */}
            <div className="space-y-8">
              <div className="bg-muted/50 border border-border rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Map Integration Coming Soon</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Our Offices</h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office, index) => (
                    <div 
                      key={index}
                      className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
                    >
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <h4 className="font-semibold text-foreground">{office.city}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Have More Questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out our frequently asked questions or schedule a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">View FAQs</Button>
            <Button className="shadow-button">Book Free Consultation</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
