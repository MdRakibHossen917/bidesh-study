import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Send, GraduationCap, User, Globe, Upload, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ApplyNow = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    universityOfInterest: "",
    
    // Academic Information
    sscGpa: "",
    sscYear: "",
    sscMarksheet: null as File | null,
    hscGpa: "",
    hscYear: "",
    hscMarksheet: null as File | null,
    bscUniversity: "",
    bscSubject: "",
    bscCgpa: "",
    bscYear: "",
    bscMarksheet: null as File | null,
    mscUniversity: "",
    mscSubject: "",
    mscCgpa: "",
    mscYear: "",
    mscMarksheet: null as File | null,
    
    // Optional Fields
    projectLink: "",
    researchPaperLink: "",
    portfolioLink: "",
  });

  // Pre-fill form data if coming from institution details page
  useEffect(() => {
    const state = location.state as { institutionName?: string; country?: string } | null;
    if (state?.institutionName) {
      setFormData((prev) => ({
        ...prev,
        universityOfInterest: state.institutionName || "",
      }));
    }
  }, [location.state]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const validateForm = () => {
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "sscGpa",
      "sscYear",
      "hscGpa",
      "hscYear",
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast({
          title: "Validation Error",
          description: `Please fill in all required fields. Missing: ${field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}`,
          variant: "destructive",
        });
        return false;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll review it and get back to you within 2-3 business days.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        universityOfInterest: "",
        sscGpa: "",
        sscYear: "",
        sscMarksheet: null,
        hscGpa: "",
        hscYear: "",
        hscMarksheet: null,
        bscUniversity: "",
        bscSubject: "",
        bscCgpa: "",
        bscYear: "",
        bscMarksheet: null,
        mscUniversity: "",
        mscSubject: "",
        mscCgpa: "",
        mscYear: "",
        mscMarksheet: null,
        projectLink: "",
        researchPaperLink: "",
        portfolioLink: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Application Form</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Apply <span className="text-gradient">Now</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Start your study abroad journey today. Fill out the form below and our expert team will guide you through the process.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+880 1700-000000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="universityOfInterest" className="text-sm font-medium text-foreground mb-2 block">
                      University of Interest
                    </Label>
                    <Input
                      id="universityOfInterest"
                      placeholder="e.g., Harvard University"
                      value={formData.universityOfInterest}
                      onChange={(e) => handleInputChange("universityOfInterest", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information Section */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Academic Information</h2>
                </div>
                
                <div className="space-y-6">
                  {/* SSC */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">SSC (Secondary School Certificate)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sscGpa" className="text-sm font-medium text-foreground mb-2 block">
                          GPA <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="sscGpa"
                          type="number"
                          step="0.01"
                          min="0"
                          max="5"
                          placeholder="5.00"
                          value={formData.sscGpa}
                          onChange={(e) => handleInputChange("sscGpa", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="sscYear" className="text-sm font-medium text-foreground mb-2 block">
                          Year <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="sscYear"
                          type="number"
                          min="1990"
                          max={new Date().getFullYear()}
                          placeholder="2020"
                          value={formData.sscYear}
                          onChange={(e) => handleInputChange("sscYear", e.target.value)}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="sscMarksheet" className="text-sm font-medium text-foreground mb-2 block">
                          SSC Marksheet <span className="text-destructive">*</span>
                        </Label>
                        <div className="space-y-2">
                          <Input
                            id="sscMarksheet"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange("sscMarksheet", e.target.files?.[0] || null)}
                            className="cursor-pointer"
                            required
                          />
                          {formData.sscMarksheet && (
                            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                              <FileText className="w-4 h-4 text-primary" />
                              <span className="text-sm text-foreground flex-1 truncate">
                                {formData.sscMarksheet.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {formatFileSize(formData.sscMarksheet.size)}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleFileChange("sscMarksheet", null)}
                                className="text-destructive hover:text-destructive/80"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HSC */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">HSC (Higher Secondary Certificate)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="hscGpa" className="text-sm font-medium text-foreground mb-2 block">
                          GPA <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="hscGpa"
                          type="number"
                          step="0.01"
                          min="0"
                          max="5"
                          placeholder="5.00"
                          value={formData.hscGpa}
                          onChange={(e) => handleInputChange("hscGpa", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="hscYear" className="text-sm font-medium text-foreground mb-2 block">
                          Year <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="hscYear"
                          type="number"
                          min="1990"
                          max={new Date().getFullYear()}
                          placeholder="2022"
                          value={formData.hscYear}
                          onChange={(e) => handleInputChange("hscYear", e.target.value)}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="hscMarksheet" className="text-sm font-medium text-foreground mb-2 block">
                          HSC Marksheet <span className="text-destructive">*</span>
                        </Label>
                        <div className="space-y-2">
                          <Input
                            id="hscMarksheet"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange("hscMarksheet", e.target.files?.[0] || null)}
                            className="cursor-pointer"
                            required
                          />
                          {formData.hscMarksheet && (
                            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                              <FileText className="w-4 h-4 text-primary" />
                              <span className="text-sm text-foreground flex-1 truncate">
                                {formData.hscMarksheet.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {formatFileSize(formData.hscMarksheet.size)}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleFileChange("hscMarksheet", null)}
                                className="text-destructive hover:text-destructive/80"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BSc / Honors */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">BSc / Honors</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bscUniversity" className="text-sm font-medium text-foreground mb-2 block">
                          University
                        </Label>
                        <Input
                          id="bscUniversity"
                          placeholder="University of Dhaka"
                          value={formData.bscUniversity}
                          onChange={(e) => handleInputChange("bscUniversity", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="bscSubject" className="text-sm font-medium text-foreground mb-2 block">
                          Subject
                        </Label>
                        <Input
                          id="bscSubject"
                          placeholder="Computer Science"
                          value={formData.bscSubject}
                          onChange={(e) => handleInputChange("bscSubject", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="bscCgpa" className="text-sm font-medium text-foreground mb-2 block">
                          CGPA
                        </Label>
                        <Input
                          id="bscCgpa"
                          type="number"
                          step="0.01"
                          min="0"
                          max="4"
                          placeholder="3.50"
                          value={formData.bscCgpa}
                          onChange={(e) => handleInputChange("bscCgpa", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="bscYear" className="text-sm font-medium text-foreground mb-2 block">
                          Year
                        </Label>
                        <Input
                          id="bscYear"
                          type="number"
                          min="1990"
                          max={new Date().getFullYear()}
                          placeholder="2024"
                          value={formData.bscYear}
                          onChange={(e) => handleInputChange("bscYear", e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="bscMarksheet" className="text-sm font-medium text-foreground mb-2 block">
                          BSc / Honors Marksheet
                        </Label>
                        <div className="space-y-2">
                          <Input
                            id="bscMarksheet"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange("bscMarksheet", e.target.files?.[0] || null)}
                            className="cursor-pointer"
                          />
                          {formData.bscMarksheet && (
                            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                              <FileText className="w-4 h-4 text-primary" />
                              <span className="text-sm text-foreground flex-1 truncate">
                                {formData.bscMarksheet.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {formatFileSize(formData.bscMarksheet.size)}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleFileChange("bscMarksheet", null)}
                                className="text-destructive hover:text-destructive/80"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MSc / Equivalent */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">MSc / Equivalent</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="mscUniversity" className="text-sm font-medium text-foreground mb-2 block">
                          University
                        </Label>
                        <Input
                          id="mscUniversity"
                          placeholder="University of Dhaka"
                          value={formData.mscUniversity}
                          onChange={(e) => handleInputChange("mscUniversity", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="mscSubject" className="text-sm font-medium text-foreground mb-2 block">
                          Subject
                        </Label>
                        <Input
                          id="mscSubject"
                          placeholder="Computer Science"
                          value={formData.mscSubject}
                          onChange={(e) => handleInputChange("mscSubject", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="mscCgpa" className="text-sm font-medium text-foreground mb-2 block">
                          CGPA
                        </Label>
                        <Input
                          id="mscCgpa"
                          type="number"
                          step="0.01"
                          min="0"
                          max="4"
                          placeholder="3.50"
                          value={formData.mscCgpa}
                          onChange={(e) => handleInputChange("mscCgpa", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="mscYear" className="text-sm font-medium text-foreground mb-2 block">
                          Year
                        </Label>
                        <Input
                          id="mscYear"
                          type="number"
                          min="1990"
                          max={new Date().getFullYear()}
                          placeholder="2026"
                          value={formData.mscYear}
                          onChange={(e) => handleInputChange("mscYear", e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="mscMarksheet" className="text-sm font-medium text-foreground mb-2 block">
                          MSc / Equivalent Marksheet
                        </Label>
                        <div className="space-y-2">
                          <Input
                            id="mscMarksheet"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange("mscMarksheet", e.target.files?.[0] || null)}
                            className="cursor-pointer"
                          />
                          {formData.mscMarksheet && (
                            <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                              <FileText className="w-4 h-4 text-primary" />
                              <span className="text-sm text-foreground flex-1 truncate">
                                {formData.mscMarksheet.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {formatFileSize(formData.mscMarksheet.size)}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleFileChange("mscMarksheet", null)}
                                className="text-destructive hover:text-destructive/80"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Fields Section */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Additional Information</h2>
                  <span className="text-sm text-muted-foreground">(Optional)</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="projectLink" className="text-sm font-medium text-foreground mb-2 block">
                      Project Link (GitHub / Drive URL)
                      <span className="text-muted-foreground font-normal ml-2">(Optional)</span>
                    </Label>
                    <Input
                      id="projectLink"
                      type="url"
                      placeholder="https://github.com/username/project"
                      value={formData.projectLink}
                      onChange={(e) => handleInputChange("projectLink", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="researchPaperLink" className="text-sm font-medium text-foreground mb-2 block">
                      Research Paper / Publication Link
                      <span className="text-muted-foreground font-normal ml-2">(Optional)</span>
                    </Label>
                    <Input
                      id="researchPaperLink"
                      type="url"
                      placeholder="https://example.com/research-paper"
                      value={formData.researchPaperLink}
                      onChange={(e) => handleInputChange("researchPaperLink", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="portfolioLink" className="text-sm font-medium text-foreground mb-2 block">
                      Personal Website / Portfolio Link
                      <span className="text-muted-foreground font-normal ml-2">(Optional)</span>
                    </Label>
                    <Input
                      id="portfolioLink"
                      type="url"
                      placeholder="https://yourportfolio.com"
                      value={formData.portfolioLink}
                      onChange={(e) => handleInputChange("portfolioLink", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto px-12 shadow-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Review</h3>
                <p className="text-sm text-muted-foreground">
                  We'll review your application within 2-3 business days
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Our team will guide you through the entire process
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Global Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Access to 2000+ universities worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyNow;

