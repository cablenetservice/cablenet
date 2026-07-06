import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-yellow-200 via-green-200 to-cyan-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-green-100 to-cyan-200 opacity-20"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold text-black mb-6">
            Terms & Conditions
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
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using Cable & Net Services' internet services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                2. Service Description
              </h2>
              <p className="text-muted-foreground mb-4">
                Cable & Net Services provides residential and business internet connectivity services. Our services include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>High-speed internet access</li>
                <li>Equipment rental (modem and router)</li>
                <li>Technical support and customer service</li>
                <li>Optional value-added services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                3. Service Plans and Pricing
              </h2>
              <p className="text-muted-foreground">
                Service plans are offered at various speeds and price points. All prices are subject to change with 30 days' notice. Promotional pricing may be available for limited periods. Taxes and fees are additional to advertised prices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                4. Payment Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                Payment is due monthly in advance. Accepted payment methods include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Credit or debit card</li>
                <li>Bank account (ACH)</li>
                <li>Check or money order</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Late payments may result in service interruption or termination. A late fee may be applied to overdue accounts.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                5. Service Installation
              </h2>
              <p className="text-muted-foreground">
                Professional installation is available for a one-time fee. Self-installation kits may be provided for eligible locations. Installation appointments must be scheduled in advance and require someone 18 years or older to be present.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                6. Equipment
              </h2>
              <p className="text-muted-foreground">
                All equipment provided remains the property of Cable & Net Services and must be returned upon service termination. You are responsible for the equipment while in your possession. Lost or damaged equipment will be charged at replacement cost.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                7. Acceptable Use Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use our services for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Illegal activities or transmission of illegal content</li>
                <li>Harassment, threats, or abuse of others</li>
                <li>Unauthorized access to systems or networks</li>
                <li>Distribution of malware or viruses</li>
                <li>Spamming or unsolicited bulk email</li>
                <li>Commercial use of residential services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                8. Service Availability
              </h2>
              <p className="text-muted-foreground">
                While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. Scheduled maintenance will be communicated in advance when possible. We are not liable for service interruptions caused by factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                9. Speed and Performance
              </h2>
              <p className="text-muted-foreground">
                Advertised speeds are maximum speeds. Actual speeds may vary based on location, network congestion, equipment, and other factors. We do not guarantee specific speeds at all times.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                10. Cancellation and Termination
              </h2>
              <p className="text-muted-foreground">
                You may cancel service at any time with 30 days' notice. No refunds will be provided for partial months. We reserve the right to terminate service for non-payment or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                Cable & Net Services' liability is limited to the amount paid for services in the month in which the issue occurred. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-muted-foreground">
                Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive the right to participate in class actions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                14. Contact Information
              </h2>
              <p className="text-muted-foreground">
                For questions about these Terms and Conditions, contact us at:
                <br />
                <br />
                Email: legal@cablenetservices.com
                <br />
                Phone: 1-800-NET-SPEED
                <br />
                Address: 123 Tech Boulevard, Suite 400, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
