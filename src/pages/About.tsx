import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Heart, Users, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers. Your satisfaction and success drive everything we do.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge technology and superior internet experiences.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in giving back and supporting the communities we serve through various initiatives.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement in our services, infrastructure, and customer experience is our commitment.",
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
            Connecting communities to the future
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            We're on a mission to provide fast, reliable, and affordable internet access to everyone
          </p>
        </div>
      </section>

      {/* Story Section with Side Image Layout */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-300 to-cyan-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
                          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 text-center animate-fade-in-up">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2015, Cable & Net Services began with a simple vision: to bring high-speed internet to underserved communities. What started as a small operation with just a handful of customers has grown into a trusted provider serving thousands of homes and businesses.
                </p>
                <p>
                  We saw how unreliable internet connections were holding people back from reaching their full potential. Students couldn't complete their homework, remote workers struggled with video calls, and families missed out on staying connected with loved ones. We knew we could do better.
                </p>
                <p>
                  Today, we're proud to offer some of the fastest and most reliable internet services in the region. Our commitment to innovation, customer service, and community investment has made us the ISP of choice for forward-thinking individuals and businesses.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-cyan-500 rounded-3xl rotate-3 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-yellow-50 to-cyan-50 dark:from-yellow-950/20 dark:to-cyan-950/20 rounded-3xl p-12 border-2 border-border">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-cyan-600 bg-clip-text text-transparent">2015</div>
                        <div className="text-sm text-muted-foreground">Founded</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl">👥</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">50K+</div>
                        <div className="text-sm text-muted-foreground">Customers Served</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">99.9%</div>
                        <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-green-50 to-cyan-50 dark:from-yellow-950/20 dark:via-green-950/20 dark:to-cyan-950/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
                          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 text-center animate-fade-in-up">
              The principles that guide everything we do
            </h2>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border-2 hover-lift hover-glow animate-scale-in stagger-${(index % 4) + 1} relative overflow-hidden ${
                  index === 0 ? 'border-yellow-400/30' :
                  index === 1 ? 'border-green-400/30' :
                  index === 2 ? 'border-cyan-400/30' :
                  'border-blue-400/30'
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                  index === 0 ? 'from-yellow-400/10 to-transparent' :
                  index === 1 ? 'from-green-400/10 to-transparent' :
                  index === 2 ? 'from-cyan-400/10 to-transparent' :
                  'from-blue-400/10 to-transparent'
                } rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                  index === 0 ? 'from-yellow-400 to-green-500' :
                  index === 1 ? 'from-green-400 to-cyan-500' :
                  index === 2 ? 'from-cyan-400 to-blue-500' :
                  'from-blue-400 to-cyan-500'
                } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 relative z-10">
                  {value.title}
                </h3>
                <p className="text-muted-foreground relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">1 Gbps</div>
              <div className="text-muted-foreground">Max Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-400 via-green-500 to-cyan-500 text-white relative overflow-hidden animate-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            To empower individuals, families, and businesses with reliable, high-speed internet connectivity that enables them to learn, work, play, and thrive in the digital age. We're committed to bridging the digital divide and ensuring that everyone has access to the opportunities that great internet provides.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
