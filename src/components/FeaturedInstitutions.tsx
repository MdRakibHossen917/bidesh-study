import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, BookOpen, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const getCountryCode = (country: string): string => {
  const countryMap: Record<string, string> = {
    "USA": "US",
    "UK": "GB",
    "Canada": "CA",
    "Australia": "AU",
    "Germany": "DE",
    "Spain": "ES",
    "Japan": "JP",
    "South Korea": "KR",
  };
  return countryMap[country] || country;
};

const institutions = [
  {
    id: 1,
    name: "Harvard University",
    location: "Cambridge, USA",
    country: "USA",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
    rating: 4.9,
    students: "23,000+",
    programs: 120,
    featured: true,
  },
  {
    id: 2,
    name: "University of Oxford",
    location: "Oxford, UK",
    country: "UK",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&h=250&fit=crop",
    rating: 4.8,
    students: "26,000+",
    programs: 150,
    featured: true,
  },
  {
    id: 3,
    name: "University of Toronto",
    location: "Toronto, Canada",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=250&fit=crop",
    rating: 4.7,
    students: "97,000+",
    programs: 200,
    featured: false,
  },
  {
    id: 4,
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=250&fit=crop",
    rating: 4.6,
    students: "52,000+",
    programs: 180,
    featured: false,
  },
];

const FeaturedInstitutions = () => {
  return (
    <section className="py-20 bg-card" id="institutions">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Top Universities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Institutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore world-renowned universities offering exceptional programs for Bangladeshi students
          </p>
        </div>

        {/* Institution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {institutions.map((institution) => (
            <Link to={`/institutions/${institution.id}`} key={institution.id}>
              <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={institution.image}
                    alt={institution.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {institution.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                    <ReactCountryFlag
                      countryCode={getCountryCode(institution.country)}
                      svg
                      style={{
                        width: "1em",
                        height: "1em",
                      }}
                      title={institution.country}
                    />
                    {institution.country}
                  </span>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-medium text-foreground">{institution.rating}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {institution.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <ReactCountryFlag
                      countryCode={getCountryCode(institution.country)}
                      svg
                      style={{
                        width: "1em",
                        height: "1em",
                      }}
                      title={institution.country}
                    />
                    <span>{institution.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{institution.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{institution.programs} Programs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <Link to="/institutions">
            <Button variant="outline" size="lg" className="group">
              View All Institutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstitutions;
