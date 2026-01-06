import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeaturedInstitutions from "@/components/FeaturedInstitutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import Events from "@/components/Events";
import StudentReviews from "@/components/StudentReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <FeaturedInstitutions />
      <WhyChooseUs />
      <Events />
      <StudentReviews />
      <Footer />
    </div>
  );
};

export default Index;
