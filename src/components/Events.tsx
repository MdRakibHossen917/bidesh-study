import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "UK Education Fair 2024",
    date: "January 15, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Pan Pacific Sonargaon, Dhaka",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    attendees: 500,
    type: "Education Fair",
  },
  {
    id: 2,
    title: "Free IELTS Workshop",
    date: "January 20, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "BideshStudy.com Office, Gulshan",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
    attendees: 50,
    type: "Workshop",
  },
  {
    id: 3,
    title: "Study in Canada Seminar",
    date: "January 25, 2024",
    time: "4:00 PM - 7:00 PM",
    location: "Radisson Blu, Chittagong",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop",
    attendees: 200,
    type: "Seminar",
  },
  {
    id: 4,
    title: "Australia Visa Q&A Session",
    date: "February 1, 2024",
    time: "11:00 AM - 1:00 PM",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop",
    attendees: 300,
    type: "Webinar",
  },
];

const Events = () => {
  return (
    <section className="py-20 bg-card" id="events">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
            Upcoming Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Events & Workshops
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our education fairs, seminars, and workshops to learn more about studying abroad
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {events.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id}>
              <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
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

        {/* See All Button */}
        <div className="text-center">
          <Link to="/events">
            <Button variant="outline" size="lg" className="group">
              View All Events
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
