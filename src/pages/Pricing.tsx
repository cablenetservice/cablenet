import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const plans = [
    {
      name: "Basic",
      speed: "100 Mbps",
      price: "$39.99",
      description: "Perfect for browsing and streaming",
      features: [
        "100 Mbps download speed",
        "10 Mbps upload speed",
        "Unlimited data",
        "Free modem & router",
        "24/7 customer support",
        "No contracts",
      ],
      popular: false,
    },
    {
      name: "Plus",
      speed: "500 Mbps",
      price: "$59.99",
      description: "Ideal for families and remote work",
      features: [
        "500 Mbps download speed",
        "50 Mbps upload speed",
        "Unlimited data",
        "Free modem & router",
        "Priority support",
        "No contracts",
        "Advanced security suite",
        "Mesh WiFi included",
      ],
      popular: true,
    },
    {
      name: "Pro",
      speed: "1 Gbps",
      price: "$79.99",
      description: "Ultimate speed for power users",
      features: [
        "1 Gbps download speed",
        "100 Mbps upload speed",
        "Unlimited data",
        "Free premium modem & router",
        "VIP support with dedicated line",
        "No contracts",
        "Advanced security suite",
        "Mesh WiFi included",
        "Static IP available",
        "Professional installation",
      ],
      popular: false,
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
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards with Enhanced Design */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-300 to-green-300 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative animate-scale-in stagger-${index + 1} ${
                  plan.popular ? 'lg:-mt-8 lg:mb-0' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse-glow">
                      🌟 MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className={`relative h-full ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-white via-cyan-50 to-blue-50 dark:from-card dark:via-cyan-950/20 dark:to-blue-950/20' 
                    : 'bg-white/80 dark:bg-card/80'
                } backdrop-blur-sm rounded-3xl p-8 shadow-xl hover-lift transition-all duration-300 group ${
                  plan.popular ? 'border-4 border-transparent bg-clip-padding' : 'border-2 border-border'
                }`}
                style={plan.popular ? {
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #FBBF24, #22D3EE)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                } : {}}>
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8 relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-yellow-400 to-cyan-500' 
                        : 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800'
                    }`}>
                      <span className="text-3xl">{index === 0 ? '📱' : index === 1 ? '⚡' : '🚀'}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className={`text-6xl font-black mb-2 ${
                      plan.popular 
                        ? 'text-black dark:text-white'
                        : 'text-foreground'
                    }`}>
                      {plan.price}
                    </div>
                    
                    <div className="text-lg text-muted-foreground mb-1">/month</div>
                    
                    <div className={`text-4xl font-bold mb-3 ${
                      plan.popular 
                        ? 'text-cyan-600' 
                        : 'text-foreground'
                    }`}>
                      {plan.speed}
                    </div>
                    
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 relative z-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-foreground group/item">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform ${
                          plan.popular 
                            ? 'bg-gradient-to-br from-yellow-400 to-cyan-500' 
                            : 'bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all relative z-10 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-500 to-cyan-500 hover:from-yellow-600 hover:to-cyan-600 text-black' 
                        : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white'
                    }`}
                    asChild
                  >
                    <Link to="/contact" onClick={handleLinkClick}>
                      Get Started →
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-yellow-50 via-green-50 to-cyan-50 dark:from-yellow-950/20 dark:via-green-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground mb-2 text-lg">
                💡 All prices shown are monthly rates. Installation fee may apply.
              </p>
              <p className="text-muted-foreground text-lg">
                Need a custom solution?{" "}
                <Link to="/contact" className="text-black dark:text-white font-bold hover:opacity-70" onClick={handleLinkClick}>
                  Contact our sales team →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plans CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-green-50 to-cyan-50 dark:from-yellow-950/20 dark:via-green-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Looking for business plans?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We offer customized solutions for businesses with dedicated bandwidth and priority support
          </p>
          <Button size="lg" asChild>
            <Link to="/contact" onClick={handleLinkClick}>Contact Business Sales</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
