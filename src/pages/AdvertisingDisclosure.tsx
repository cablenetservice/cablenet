import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const AdvertisingDisclosure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-yellow-200 via-green-200 to-cyan-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-green-100 to-cyan-200 opacity-20"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold text-black mb-6">
            Advertising Disclosure
          </h1>
          <p className="text-gray-800 font-medium mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                1. Website Owner
              </h2>
              <p className="text-muted-foreground mb-4">
                This website is owned and operated by <strong>Carol Jordan</strong>.
              </p>
              <div className="bg-white dark:bg-card rounded-2xl p-6 border-2 border-border">
                <a 
                  href="mailto:cablenetservices0@gmail.com" 
                  className="flex items-center gap-3 text-foreground hover:text-black dark:hover:text-white transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">cablenetservices0@gmail.com</span>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                2. Nature of Our Business
              </h2>
              <p className="text-muted-foreground mb-4">
                Cable & Net Services operates as a telecommunications service provider, offering internet and cable services to residential and business customers. We may engage in various forms of advertising and promotional activities to inform potential customers about our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                3. Advertising Relationships
              </h2>
              <p className="text-muted-foreground mb-4">
                We may participate in affiliate marketing programs and may receive compensation for referrals or purchases made through links on our website. This compensation does not affect the price you pay for any services.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We may display advertisements from third-party providers</li>
                <li>Some links on our website may be affiliate links</li>
                <li>We may receive commissions from partner services we recommend</li>
                <li>All sponsored content will be clearly marked as such</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                4. Editorial Independence
              </h2>
              <p className="text-muted-foreground mb-4">
                While we may receive compensation from advertisers and partners, our editorial content remains independent. We strive to provide accurate, honest information about our services and offerings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                5. Testimonials and Reviews
              </h2>
              <p className="text-muted-foreground mb-4">
                Customer testimonials and reviews displayed on our website represent the genuine experiences of our customers. We may select which testimonials to display, but we do not alter or fabricate customer feedback.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                6. Pricing and Service Information
              </h2>
              <p className="text-muted-foreground mb-4">
                All pricing and service information is accurate at the time of publication. However, prices, promotions, and service offerings may change. We encourage you to contact us directly for the most current information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                7. Third-Party Content
              </h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or advertising practices of these third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                8. FTC Compliance
              </h2>
              <p className="text-muted-foreground mb-4">
                We comply with the Federal Trade Commission (FTC) guidelines regarding endorsements and testimonials in advertising. Any material connections between Cable & Net Services and its endorsers will be disclosed in accordance with FTC requirements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                9. Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about our advertising practices or this disclosure statement, please contact us:
              </p>
              <div className="bg-white dark:bg-card rounded-2xl p-6 border-2 border-border space-y-3">
                <p className="text-foreground">
                  <strong>Carol Jordan</strong><br />
                  Cable & Net Services
                </p>
                <a 
                  href="mailto:cablenetservices0@gmail.com" 
                  className="flex items-center gap-3 text-foreground hover:text-black dark:hover:text-white transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">cablenetservices0@gmail.com</span>
                </a>
                <p className="text-muted-foreground">Phone: (855) 661-0984</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                10. Updates to This Disclosure
              </h2>
              <p className="text-muted-foreground mb-4">
                We may update this Advertising Disclosure from time to time. We will notify you of any changes by posting the new disclosure on this page with an updated "Last updated" date.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvertisingDisclosure;
