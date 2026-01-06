import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Users, Search, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";

const allEvents = [
  { id: 1, title: "UK Education Fair 2024", date: "January 15, 2024", time: "10:00 AM - 6:00 PM", location: "Pan Pacific Sonargaon, Dhaka", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop", attendees: 500, type: "Education Fair", status: "upcoming" },
  { id: 2, title: "Free IELTS Workshop", date: "January 20, 2024", time: "3:00 PM - 5:00 PM", location: "BideshStudy.com Office, Gulshan", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop", attendees: 50, type: "Workshop", status: "upcoming" },
  { id: 3, title: "Study in Canada Seminar", date: "January 25, 2024", time: "4:00 PM - 7:00 PM", location: "Radisson Blu, Chittagong", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop", attendees: 200, type: "Seminar", status: "upcoming" },
  { id: 4, title: "Australia Visa Q&A Session", date: "February 1, 2024", time: "11:00 AM - 1:00 PM", location: "Online (Zoom)", image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop", attendees: 300, type: "Webinar", status: "upcoming" },
  { id: 5, title: "USA University Showcase", date: "February 10, 2024", time: "2:00 PM - 8:00 PM", location: "Westin Dhaka", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop", attendees: 600, type: "Education Fair", status: "upcoming" },
  { id: 6, title: "GRE Preparation Bootcamp", date: "February 15, 2024", time: "10:00 AM - 4:00 PM", location: "BideshStudy.com Office, Dhanmondi", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop", attendees: 40, type: "Workshop", status: "upcoming" },
  { id: 7, title: "Germany Study Abroad Webinar", date: "February 20, 2024", time: "6:00 PM - 8:00 PM", location: "Online (Zoom)", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop", attendees: 250, type: "Webinar", status: "upcoming" },
  { id: 8, title: "Scholarship Opportunities 2024", date: "February 28, 2024", time: "5:00 PM - 7:00 PM", location: "InterContinental Dhaka", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop", attendees: 350, type: "Seminar", status: "upcoming" },
];

const eventTypes = ["All Types", "Education Fair", "Workshop", "Seminar", "Webinar"];
const locations = ["All Locations", "Dhaka", "Chittagong", "Online"];

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All Types" || event.type === selectedType;
    const matchesLocation = selectedLocation === "All Locations" || 
      event.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesType && matchesLocation;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("All Types");
    setSelectedLocation("All Locations");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
              Events & Workshops
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Upcoming Events
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Join our education fairs, seminars, and workshops to connect with universities and experts
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events..."
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
                Showing <span className="font-medium text-foreground">{filteredEvents.length}</span> events
              </span>
            </div>

            <div className={`flex flex-col md:flex-row gap-3 ${showFilters ? 'block' : 'hidden md:flex'}`}>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-44">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full md:w-44">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(selectedType !== "All Types" || selectedLocation !== "All Locations" || searchQuery) && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <Link to={`/events/${event.id}`} key={event.id}>
                <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-border/50">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{event.attendees}+ attending</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
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

export default EventsPage;
