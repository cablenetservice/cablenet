import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import laptopMockup from "@/assets/laptop mockup.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Zap, Shield, Wifi, Clock, Phone, Trophy, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing speeds up to 1 Gbps for seamless streaming and gaming",
    },
    {
      icon: Shield,
      title: "Secure Connection", 
      description: "Advanced security protocols to keep your data safe and private",
    },
    {
      icon: Wifi,
      title: "Wide Coverage",
      description: "Reliable connectivity throughout your home with mesh technology",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service ready to assist you anytime",
    },
    {
      icon: Phone,
      title: "Easy Setup",
      description: "Get connected in minutes with our simple installation process",
    },
    {
      icon: Trophy,
      title: "Best Value",
      description: "Premium internet at competitive prices with no hidden fees",
    },
  ];

  const benefits = [
    "No data caps or throttling",
    "Free premium equipment",
    "No long-term contracts",
    "99.9% uptime guarantee",
    "Professional installation",
    "Award-winning support",
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Plan",
      description: "Select the perfect internet package that fits your needs and budget",
    },
    {
      number: "2",
      title: "Schedule Installation",
      description: "Pick a convenient time for our technicians to set up your connection",
    },
    {
      number: "3",
      title: "Get Connected",
      description: "Start enjoying fast, reliable internet immediately after installation",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Remote Worker",
      content:
        "Switched to Cable & Net Services 6 months ago and haven't looked back. The connection is incredibly stable for video calls and the speed is perfect for my home office needs.",
    },
    {
      name: "Michael Chen",
      role: "Gaming Enthusiast",
      content:
        "As a competitive gamer, low latency is crucial. Cable & Net Services delivers consistent performance with zero lag. Best ISP I've ever used!",
    },
  ];

  const useCases = [
    {
      title: "Work from Home",
      description: "Crystal-clear video calls, instant file uploads, and seamless collaboration tools. Perfect for remote professionals.",
      points: ["HD video conferencing", "Fast cloud access", "Multiple devices supported"],
    },
    {
      title: "Entertainment",
      description: "Stream 4K content on multiple devices simultaneously without buffering. Gaming with ultra-low latency.",
      points: ["4K streaming", "Zero lag gaming", "Multi-device streaming"],
    },
    {
      title: "Smart Home",
      description: "Connect all your smart devices with reliable, fast internet that keeps your home automation running smoothly.",
      points: ["IoT device support", "Stable connections", "Home automation ready"],
    },
  ];

  const faqs = [
    {
      question: "What speeds do you offer?",
      answer:
        "We offer a range of speeds from 100 Mbps to 1 Gbps to suit different needs. Our basic plan starts at 100 Mbps, perfect for browsing and streaming, while our premium plan offers up to 1 Gbps for heavy users and large households.",
    },
    {
      question: "Is there a contract required?",
      answer:
        "No long-term contracts are required. You can cancel your service at any time without early termination fees. We believe in earning your business with great service, not locking you in with contracts.",
    },
    {
      question: "How quickly can I get connected?",
      answer:
        "Most installations can be scheduled within 48-72 hours of placing your order. Our professional technicians will set up your equipment and ensure everything is working perfectly before they leave.",
    },
    {
      question: "What equipment is included?",
      answer:
        "All necessary equipment including a high-performance modem and Wi-Fi router are included at no extra cost. We also provide free equipment upgrades as technology improves.",
    },
    {
      question: "Do you have data caps?",
      answer:
        "Absolutely not. All our plans come with unlimited data and no throttling. Stream, download, and browse as much as you want without worrying about overage fees or reduced speeds.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-yellow-300 via-green-300 to-cyan-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-green-200 to-cyan-300 opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/20 via-transparent to-cyan-400/20"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/30 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-400/40 rounded-full blur-md animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/30 rounded-full blur-sm animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-cyan-300/25 rounded-full blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight tracking-tight">
              Internet that keeps up<br />with your life
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-4 max-w-3xl mx-auto font-medium">
              Experience the future of connectivity with lightning-fast speeds,
            </p>
            <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-3xl mx-auto font-medium">
              unmatched reliability, and 24/7 support.(888) 890-0043

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-gray-900 text-white rounded-full font-semibold" asChild>
                <a href="tel:888-890-0043">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-black text-black hover:bg-black hover:text-white rounded-full font-semibold" asChild>
                <a href="tel:888-890-0043">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Device Mockup */}
          <div className="relative mt-16">
            <img
              src={laptopMockup}
              alt="Laptop showing high-speed internet connectivity"
              className="w-full max-w-4xl mx-auto rounded-2xl"
            />
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <p className="text-sm text-gray-700 font-medium">Trusted by thousands of customers</p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Cutting-Edge Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our state-of-the-art fiber optic network delivers unmatched performance and reliability. Experience the future of connectivity with infrastructure designed for tomorrow's demands.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-foreground font-medium">Fiber optic cables for maximum speed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-foreground font-medium">Advanced routing technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground font-medium">Redundant network infrastructure</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format" 
                alt="Fiber optic technology"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop&auto=format" 
                alt="Network coverage map"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Extensive Coverage
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our network spans across the entire metropolitan area, bringing high-speed internet to urban centers, suburban communities, and rural areas. We're constantly expanding to serve more customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                  <div className="text-sm text-muted-foreground">Area Coverage</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">500+</div>
                  <div className="text-sm text-muted-foreground">Neighborhoods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Customer Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real customers who've transformed their connectivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format" 
                  alt="John Martinez - Happy customer"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400"
                />
                <div className="mb-2">
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">Happy customer</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">John Martinez</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">"Switched to Cable & Net for my home office. The speed is incredible and never drops during video calls."</p>
                <div className="text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c8671fce?w=200&h=200&fit=crop&auto=format" 
                  alt="Sarah Chen - Happy customer"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-green-400"
                />
                <div className="mb-2">
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Happy customer</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Sarah Chen</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">"Gaming has never been better. Zero lag and lightning-fast downloads. Highly recommend!"</p>
                <div className="text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format" 
                  alt="Mike Thompson - Happy customer"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
                />
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Happy customer</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Mike Thompson</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">"Best customer service I've experienced. They had us up and running the same day!"</p>
                <div className="text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-200/30 via-green-200/30 to-cyan-300/30 border-y border-border animate-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up stagger-1">
              <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">50K+</div>
              <div className="text-muted-foreground text-sm font-medium">Happy Customers</div>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">99.9%</div>
              <div className="text-muted-foreground text-sm font-medium">Uptime</div>
            </div>
            <div className="animate-fade-in-up stagger-3">
              <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">1 Gbps</div>
              <div className="text-muted-foreground text-sm font-medium">Max Speed</div>
            </div>
            <div className="animate-fade-in-up stagger-4">
              <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">24/7</div>
              <div className="text-muted-foreground text-sm font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 text-center animate-fade-in-up">
              Loved by customers everywhere
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for the perfect internet experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-card rounded-2xl p-8 shadow-sm border border-border hover-lift hover-glow animate-scale-in stagger-${(index % 6) + 1}`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    index === 0 ? 'from-yellow-400 to-green-500' :
                    index === 1 ? 'from-green-400 to-teal-500' :
                    index === 2 ? 'from-teal-400 to-cyan-500' :
                    index === 3 ? 'from-cyan-400 to-blue-500' :
                    index === 4 ? 'from-blue-400 to-cyan-500' :
                    'from-green-400 to-cyan-500'
                  } flex items-center justify-center mb-4`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-green-50 to-cyan-50 dark:from-yellow-950/20 dark:via-green-950/20 dark:to-cyan-950/20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 animate-fade-in-up">
                Everything you expect. Nothing you don't.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the most reliable internet service with features that matter most to you and your family.
              </p>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-lg hover-scale font-semibold rounded-full" asChild>
                <Link to="/pricing" onClick={handleLinkClick}>
                  Explore Plans →
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 animate-slide-in-right">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-center space-x-3 bg-white/80 dark:bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border hover-lift animate-fade-in-up stagger-${(index % 6) + 1}`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white dark:bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Get connected in 3 simple steps
            </h2>
            <p className="text-xl text-muted-foreground">
              From signup to installation, we make it easy to get online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className={`text-center animate-scale-in stagger-${index + 1} relative`}>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 rounded-full" />
                )}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                  index === 0 ? 'from-yellow-400 to-green-500' :
                  index === 1 ? 'from-green-400 to-cyan-500' :
                  'from-cyan-400 to-blue-500'
                } flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto relative z-10`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl animate-float"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Security & Reliability
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your connection is protected by enterprise-grade security measures and backed by our 99.9% uptime guarantee. Trust in a network that never lets you down.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Advanced Encryption</h3>
                    <p className="text-muted-foreground">Military-grade encryption protects your data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Redundant Infrastructure</h3>
                    <p className="text-muted-foreground">Multiple backup systems ensure continuous service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">24/7 Monitoring</h3>
                    <p className="text-muted-foreground">Constant network monitoring and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop&auto=format" 
                alt="Network security"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-green-50 to-cyan-50 dark:from-slate-950 dark:via-green-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center animate-fade-in-up">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-card rounded-xl border border-border shadow-sm hover-lift animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 text-black relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Ready to upgrade your internet?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join thousands of satisfied customers and experience the difference that reliable, fast internet makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" variant="secondary" className="text-lg px-10 py-6 hover-scale shadow-2xl bg-black text-white hover:bg-gray-900 font-semibold rounded-full" asChild>
              <Link to="/pricing" onClick={handleLinkClick}>View Plans</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 hover-scale shadow-2xl border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-full bg-white/90" asChild>
              <Link to="/contact" onClick={handleLinkClick}>Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;