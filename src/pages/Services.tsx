import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Home, Building, Smartphone, Tv, Phone } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const services = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description:
        "Lightning-fast fiber optic internet with speeds up to 1 Gbps. Perfect for streaming, gaming, and working from home.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format",
      features: [
        "Speeds from 100 Mbps to 1 Gbps",
        "Unlimited data usage",
        "Free modem and router",
        "99.9% uptime guarantee",
      ],
    },
    {
      icon: Home,
      title: "Home Internet Plans",
      description:
        "Customized internet solutions for your home. Choose from a variety of plans designed to fit your household's needs.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&auto=format",
      features: [
        "Multiple speed tiers available",
        "No contracts required",
        "Family-friendly content filters",
        "Parental controls included",
      ],
    },
    {
      icon: Building,
      title: "Business Solutions",
      description:
        "Enterprise-grade connectivity for businesses of all sizes. Dedicated bandwidth and priority support.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&auto=format",
      features: [
        "Dedicated business lines",
        "Static IP addresses available",
        "24/7 priority support",
        "Service level agreements",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Internet",
      description:
        "Stay connected on the go with our mobile hotspot and 5G internet solutions for portable connectivity.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&auto=format",
      features: [
        "5G mobile hotspots",
        "Nationwide coverage",
        "No data caps",
        "Flexible monthly plans",
      ],
    },
    {
      icon: Tv,
      title: "Streaming Optimization",
      description:
        "Optimized for 4K streaming on multiple devices. Enjoy buffer-free entertainment on all your favorite platforms.",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=600&fit=crop&auto=format",
      features: [
        "4K streaming support",
        "Low latency for gaming",
        "Quality of Service (QoS)",
        "Multi-device support",
      ],
    },
    {
      icon: Phone,
      title: "VoIP Phone Service",
      description:
        "Crystal-clear voice calls over internet with advanced features. Keep your existing phone number.",
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&h=600&fit=crop&auto=format",
      features: [
        "Unlimited calling",
        "Keep your phone number",
        "Advanced call features",
        "Mobile app included",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-yellow-200 via-green-200 to-cyan-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-green-100 to-cyan-200 opacity-20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            Comprehensive internet solutions designed for modern living and working
          </p>
        </div>
      </section>

      {/* Services Grid with Alternating Layout */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-yellow-300 to-green-300 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {services.map((service, index) => (
            <div key={index} className={`mb-16 last:mb-0 animate-fade-in-up stagger-${(index % 6) + 1}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className={`absolute -inset-4 bg-gradient-to-br ${
                      index === 0 ? 'from-yellow-400/20 to-green-400/20' :
                      index === 1 ? 'from-green-400/20 to-cyan-400/20' :
                      index === 2 ? 'from-cyan-400/20 to-blue-400/20' :
                      index === 3 ? 'from-blue-400/20 to-cyan-400/20' :
                      index === 4 ? 'from-yellow-400/20 to-cyan-400/20' :
                      'from-green-400/20 to-blue-400/20'
                    } rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <div className="relative bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-2 hover-lift hover-glow"
                      style={{borderColor: `${
                        index === 0 ? 'rgba(251, 191, 36, 0.3)' :
                        index === 1 ? 'rgba(52, 211, 153, 0.3)' :
                        index === 2 ? 'rgba(34, 211, 238, 0.3)' :
                        index === 3 ? 'rgba(96, 165, 250, 0.3)' :
                        index === 4 ? 'rgba(251, 191, 36, 0.3)' :
                        'rgba(52, 211, 153, 0.3)'
                      }`}}>
                      
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                          index === 0 ? 'from-yellow-400 to-green-500' :
                          index === 1 ? 'from-green-400 to-cyan-500' :
                          index === 2 ? 'from-cyan-400 to-blue-500' :
                          index === 3 ? 'from-blue-400 to-cyan-500' :
                          index === 4 ? 'from-yellow-400 to-cyan-500' :
                          'from-green-400 to-blue-500'
                        } flex items-center justify-center shadow-xl mr-4`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-foreground bg-gradient-to-r from-white to-transparent dark:from-card dark:to-transparent p-2 rounded-lg">
                            <div className={`w-2 h-2 rounded-full ${
                              index === 0 ? 'bg-yellow-500' :
                              index === 1 ? 'bg-green-500' :
                              index === 2 ? 'bg-cyan-500' :
                              index === 3 ? 'bg-blue-500' :
                              index === 4 ? 'bg-yellow-500' :
                              'bg-green-500'
                            } mr-3 shadow-md`}></div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 via-green-400/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                          index === 0 ? 'from-yellow-400 to-green-500' :
                          index === 1 ? 'from-green-400 to-cyan-500' :
                          index === 2 ? 'from-cyan-400 to-blue-500' :
                          index === 3 ? 'from-blue-400 to-cyan-500' :
                          index === 4 ? 'from-yellow-400 to-cyan-500' :
                          'from-green-400 to-blue-500'
                        } flex items-center justify-center backdrop-blur-sm`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-green-50 to-cyan-50 dark:from-yellow-950/20 dark:via-green-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your needs and join thousands of satisfied customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/pricing" onClick={handleLinkClick}>View Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
