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

const Index = () => {
  const features = [
    {
      emoji: "⚡",
      title: "Lightning Fast",
      description: "Experience blazing speeds up to 1 Gbps for seamless streaming and gaming",
    },
    {
      emoji: "🛡️",
      title: "Secure Connection", 
      description: "Advanced security protocols to keep your data safe and private",
    },
    {
      emoji: "📶",
      title: "Wide Coverage",
      description: "Reliable connectivity throughout your home with mesh technology",
    },
    {
      emoji: "🕒",
      title: "24/7 Support",
      description: "Round-the-clock customer service ready to assist you anytime",
    },
    {
      emoji: "📞",
      title: "Easy Setup",
      description: "Get connected in minutes with our simple installation process",
    },
    {
      emoji: "🏆",
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
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight tracking-tight">
              Internet that keeps up<br />with your life
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-4 max-w-3xl mx-auto font-medium">
              Experience the future of connectivity with lightning-fast speeds,
            </p>
            <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-3xl mx-auto font-medium">
              unmatched reliability, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-gray-900 text-white rounded-full font-semibold" asChild>
                <Link to="/pricing">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-black text-black hover:bg-black hover:text-white rounded-full font-semibold" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Device Mockup */}
          <div className="relative mt-16">
            <img
              src={laptopMockup}
              alt="Laptop showing high-speed internet connectivity"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <p className="text-sm text-gray-700 font-medium">Trusted by thousands of customers</p>
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
            {features.map((feature, index) => (
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
                } flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
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
                <Link to="/pricing">
                  Explore Plans →
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 animate-slide-in-right">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-center space-x-3 bg-white/80 dark:bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border hover-lift animate-fade-in-up stagger-${(index % 6) + 1}`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-xl">✅</span>
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
                } flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto shadow-xl relative z-10`}>
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
              <Link to="/pricing">View Plans</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 hover-scale shadow-2xl border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-full bg-white/90" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;