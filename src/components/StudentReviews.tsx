import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Rafiqul Islam",
    university: "University of Toronto",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "BideshStudy.com made my dream of studying in Canada a reality. Their counselors guided me through every step, from selecting the right university to visa preparation. I couldn't have done it without them!",
    program: "MSc Computer Science",
    year: "2023",
  },
  {
    id: 2,
    name: "Farhana Ahmed",
    university: "University of Manchester",
    country: "UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "I was confused about which country to choose for my MBA. The team at BideshStudy.com analyzed my profile and recommended UK universities that matched my goals perfectly. Now I'm studying at my dream university!",
    program: "MBA",
    year: "2023",
  },
  {
    id: 3,
    name: "Mohammad Hassan",
    university: "University of Melbourne",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "The scholarship guidance from BideshStudy.com was exceptional. They helped me secure a 50% tuition scholarship at University of Melbourne. Their expertise in Australian education is unmatched.",
    program: "Bachelor of Engineering",
    year: "2022",
  },
  {
    id: 4,
    name: "Tasnim Rahman",
    university: "Harvard University",
    country: "USA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Getting into an Ivy League university seemed impossible, but BideshStudy.com's dedicated support made it happen. From SOP writing to interview prep, they covered everything. Forever grateful!",
    program: "MPH Public Health",
    year: "2023",
  },
  {
    id: 5,
    name: "Kamal Hossain",
    university: "Technical University of Munich",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Studying in Germany was my goal because of the low tuition fees. BideshStudy.com helped me navigate the German university system and even assisted with blocked account setup. Highly recommended!",
    program: "MSc Mechanical Engineering",
    year: "2023",
  },
];

const StudentReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= reviews.length - visibleReviews + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? reviews.length - visibleReviews : prev - 1
    );
  };

  return (
    <section className="py-20 bg-background" id="reviews">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Hear from our students who are now studying at world-class universities
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)` }}
          >
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                    "{review.review}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {review.program}, {review.year}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {review.university}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(reviews.length - visibleReviews + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;
