import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, BookOpen, Star, Search, Filter, X } from "lucide-react";
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

const allInstitutions = [
  { id: 1, name: "Harvard University", location: "Cambridge, USA", country: "USA", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop", rating: 4.9, students: "23,000+", programs: 120, type: "University" },
  { id: 2, name: "University of Oxford", location: "Oxford, UK", country: "UK", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&h=250&fit=crop", rating: 4.8, students: "26,000+", programs: 150, type: "University" },
  { id: 3, name: "University of Toronto", location: "Toronto, Canada", country: "Canada", image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=400&h=250&fit=crop", rating: 4.7, students: "97,000+", programs: 200, type: "University" },
  { id: 4, name: "University of Melbourne", location: "Melbourne, Australia", country: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=250&fit=crop", rating: 4.6, students: "52,000+", programs: 180, type: "University" },
  { id: 5, name: "MIT", location: "Cambridge, USA", country: "USA", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop", rating: 4.9, students: "11,000+", programs: 50, type: "University" },
  { id: 6, name: "University of Cambridge", location: "Cambridge, UK", country: "UK", image: "https://images.unsplash.com/photo-1545931679-5f6c44fefec8?w=400&h=250&fit=crop", rating: 4.9, students: "24,000+", programs: 140, type: "University" },
  { id: 7, name: "McGill University", location: "Montreal, Canada", country: "Canada", image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=250&fit=crop", rating: 4.5, students: "40,000+", programs: 170, type: "University" },
  { id: 8, name: "University of Sydney", location: "Sydney, Australia", country: "Australia", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop", rating: 4.6, students: "70,000+", programs: 190, type: "University" },
  { id: 9, name: "Stanford University", location: "Stanford, USA", country: "USA", image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=250&fit=crop", rating: 4.9, students: "17,000+", programs: 65, type: "University" },
  { id: 10, name: "Imperial College London", location: "London, UK", country: "UK", image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=400&h=250&fit=crop", rating: 4.7, students: "20,000+", programs: 110, type: "University" },
  { id: 11, name: "Technical University of Munich", location: "Munich, Germany", country: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop", rating: 4.6, students: "50,000+", programs: 160, type: "University" },
  { id: 12, name: "University of British Columbia", location: "Vancouver, Canada", country: "Canada", image: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=400&h=250&fit=crop", rating: 4.5, students: "68,000+", programs: 180, type: "University" },
];

const countries = ["All Countries", "USA", "UK", "Canada", "Australia", "Germany"];
const programTypes = ["All Programs", "Undergraduate", "Postgraduate", "PhD", "Diploma"];

const Institutions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");
  const [showFilters, setShowFilters] = useState(false);

  const filteredInstitutions = allInstitutions.filter((inst) => {
    const matchesSearch = inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === "All Countries" || inst.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCountry("All Countries");
    setSelectedProgram("All Programs");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Explore World-Class Institutions
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Browse through 2000+ universities across 150 countries and find your perfect match
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search universities by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-xl border-border/50 bg-card shadow-search focus:shadow-search-focus"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <span className="text-muted-foreground text-sm">
                Showing <span className="font-medium text-foreground">{filteredInstitutions.length}</span> institutions
              </span>
            </div>

            <div className={`flex flex-col md:flex-row gap-3 ${showFilters ? 'block' : 'hidden md:flex'}`}>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full md:w-44">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger className="w-full md:w-44">
                  <SelectValue placeholder="Program Type" />
                </SelectTrigger>
                <SelectContent>
                  {programTypes.map((program) => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(selectedCountry !== "All Countries" || selectedProgram !== "All Programs" || searchQuery) && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Institutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredInstitutions.map((institution) => (
              <Link to={`/institutions/${institution.id}`} key={institution.id}>
                <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={institution.image}
                      alt={institution.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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

          {filteredInstitutions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No institutions found matching your criteria.</p>
              <Button variant="link" onClick={clearFilters} className="mt-2">
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Institutions;
