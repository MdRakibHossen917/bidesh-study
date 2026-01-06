import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, Users, BookOpen, Star, Globe, Calendar, 
  DollarSign, Clock, Award, Building, ArrowLeft,
  CheckCircle2, ExternalLink
} from "lucide-react";
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

const institutionData: Record<string, {
  id: number;
  name: string;
  location: string;
  country: string;
  image: string;
  coverImage: string;
  logo: string;
  rating: number;
  students: string;
  programs: number;
  founded: string;
  type: string;
  website: string;
  description: string;
  tuitionRange: string;
  acceptanceRate: string;
  intakes: string[];
  features: string[];
  popularPrograms: { name: string; duration: string; fee: string }[];
}> = {
  "1": {
    id: 1,
    name: "Harvard University",
    location: "Cambridge, Massachusetts, USA",
    country: "USA",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop",
    rating: 4.9,
    students: "23,000+",
    programs: 120,
    founded: "1636",
    type: "Private Research University",
    website: "https://www.harvard.edu",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636, it is the oldest institution of higher learning in the United States and one of the most prestigious universities in the world.",
    tuitionRange: "$54,000 - $57,000/year",
    acceptanceRate: "3.4%",
    intakes: ["Fall (September)", "Spring (January)"],
    features: [
      "World-renowned faculty and research opportunities",
      "Extensive library system with 17+ million volumes",
      "Strong alumni network across industries",
      "Generous financial aid programs",
      "State-of-the-art facilities and labs",
      "Diverse international student community"
    ],
    popularPrograms: [
      { name: "MBA - Business Administration", duration: "2 Years", fee: "$73,000/year" },
      { name: "Master in Public Health", duration: "1-2 Years", fee: "$55,000/year" },
      { name: "Master of Laws (LLM)", duration: "1 Year", fee: "$67,000/year" },
      { name: "Computer Science", duration: "4 Years", fee: "$54,000/year" },
    ]
  },
  "2": {
    id: 2,
    name: "University of Oxford",
    location: "Oxford, England, UK",
    country: "UK",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&h=250&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1200&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=100&h=100&fit=crop",
    rating: 4.8,
    students: "26,000+",
    programs: 150,
    founded: "1096",
    type: "Public Research University",
    website: "https://www.ox.ac.uk",
    description: "The University of Oxford is the oldest university in the English-speaking world and one of the most prestigious academic institutions globally. It has shaped leaders in every field for over 900 years.",
    tuitionRange: "£26,000 - £44,000/year",
    acceptanceRate: "17%",
    intakes: ["Michaelmas (October)"],
    features: [
      "Historic collegiate system with 39 colleges",
      "Tutorial-based learning approach",
      "World-class research facilities",
      "Rich cultural and academic heritage",
      "Rhodes Scholarship opportunities",
      "Strong career support services"
    ],
    popularPrograms: [
      { name: "MBA", duration: "1 Year", fee: "£67,000" },
      { name: "MSc Computer Science", duration: "1 Year", fee: "£33,000" },
      { name: "Bachelor of Medicine", duration: "6 Years", fee: "£37,000/year" },
      { name: "MA International Relations", duration: "1 Year", fee: "£29,000" },
    ]
  }
};

const InstitutionDetails = () => {
  const { id } = useParams();
  const institution = institutionData[id || "1"] || institutionData["1"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 lg:h-96 mt-16">
        <img
          src={institution.coverImage}
          alt={institution.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Institution Header */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-background bg-card overflow-hidden shadow-lg">
            <img
              src={institution.logo}
              alt={institution.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <Link to="/institutions" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Institutions
            </Link>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {institution.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
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
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="font-medium text-foreground">{institution.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4" />
                <span>{institution.type}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="shadow-button">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={institution.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
                  <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="programs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3">
                    Programs
                  </TabsTrigger>
                  <TabsTrigger value="admissions" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3">
                    Admissions
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-foreground mb-4">About {institution.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {institution.description}
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-6">
                      {institution.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="programs" className="mt-0">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h3>
                  <div className="space-y-4">
                    {institution.popularPrograms.map((program, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-5">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">{program.name}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {program.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  {program.fee}
                                </span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="admissions" className="mt-0">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Admission Requirements</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>General requirements for international students:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Completed application form</li>
                      <li>Academic transcripts and certificates</li>
                      <li>English proficiency test (IELTS/TOEFL)</li>
                      <li>Statement of Purpose (SOP)</li>
                      <li>Letters of Recommendation</li>
                      <li>Valid passport copy</li>
                      <li>Application fee</li>
                    </ul>
                    <p className="mt-4">
                      Contact our consultants for personalized guidance on meeting the admission requirements.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Quick Info */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Founded
                      </span>
                      <span className="font-medium text-foreground">{institution.founded}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Students
                      </span>
                      <span className="font-medium text-foreground">{institution.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Programs
                      </span>
                      <span className="font-medium text-foreground">{institution.programs}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Acceptance
                      </span>
                      <span className="font-medium text-foreground">{institution.acceptanceRate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Tuition
                      </span>
                      <span className="font-medium text-foreground text-sm">{institution.tuitionRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Intake Periods</h3>
                  <div className="flex flex-wrap gap-2">
                    {institution.intakes.map((intake, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {intake}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Need Help Applying?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our experts can guide you through the entire application process
                  </p>
                  <Button className="w-full shadow-button">
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstitutionDetails;
