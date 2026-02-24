import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-yellow-200 via-green-200 to-cyan-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-green-100 to-cyan-200 opacity-20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            Have questions? We're here to help. Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content with Split Layout */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-yellow-300 to-green-300 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-card backdrop-blur-sm rounded-3xl p-8 border-2 border-border hover-lift group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-white dark:text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM</p>
                      <a 
                        href="tel:855-661-0984" 
                        className="text-lg font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
                      >
                        (855) 661-0984
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white dark:bg-card rounded-3xl p-8 border-2 border-border">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  Quick Response Guarantee
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <span>Phone support: Immediate assistance during business hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🔧</span>
                    <span>Technical emergencies: 24/7 emergency hotline available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white dark:bg-card backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 border-border hover-lift">
                <h3 className="text-3xl font-bold text-black dark:text-white mb-2">Send us a Message</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base font-semibold text-black dark:text-white">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                        className="h-12 text-base border-2 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base font-semibold text-black dark:text-white">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                        className="h-12 text-base border-2 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold text-black dark:text-white">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      required 
                      className="h-12 text-base border-2 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold text-black dark:text-white">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(555) 123-4567" 
                      className="h-12 text-base border-2 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base font-semibold text-black dark:text-white">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      required 
                      className="h-12 text-base border-2 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold text-black dark:text-white">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      required
                      className="min-h-[180px] text-base border-2 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20 rounded-xl resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg font-bold bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black rounded-full shadow-lg hover:shadow-2xl transition-all"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    By submitting this form, you agree to our{" "}
                    <Link to="/privacy" className="text-black dark:text-white font-semibold hover:opacity-70">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
