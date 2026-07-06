import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-yellow-200 via-green-200 to-cyan-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-green-100 to-cyan-200 opacity-20"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-5xl font-bold text-black mb-6">
            Refund Policy
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
                1. Service Satisfaction Guarantee
              </h2>
              <p className="text-muted-foreground">
                Cable & Net Services is committed to your satisfaction. We offer a 30-day money-back guarantee for new customers. If you're not completely satisfied with our service within the first 30 days, you may cancel and receive a full refund of monthly service fees.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                2. Refund Eligibility
              </h2>
              <p className="text-muted-foreground mb-4">
                Refunds are available under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service cancellation within the first 30 days of activation</li>
                <li>Service outages exceeding our uptime guarantee</li>
                <li>Duplicate or erroneous billing charges</li>
                <li>Service not available at your location after installation attempt</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                3. Non-Refundable Fees
              </h2>
              <p className="text-muted-foreground mb-4">
                The following fees are non-refundable:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Installation fees</li>
                <li>Equipment fees for lost or damaged equipment</li>
                <li>Early termination fees (if applicable to your plan)</li>
                <li>Service fees paid beyond the 30-day guarantee period</li>
                <li>Third-party service fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                4. Partial Month Refunds
              </h2>
              <p className="text-muted-foreground">
                Cable & Net Services does not provide refunds for partial months of service. If you cancel mid-month, you will have access to the service until the end of your billing cycle, but no prorated refund will be issued.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                5. Service Downtime Credits
              </h2>
              <p className="text-muted-foreground mb-4">
                If service is unavailable for more than 4 continuous hours due to issues within our control, you may be eligible for a service credit:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>4-24 hours downtime: 10% credit of monthly service fee</li>
                <li>24-48 hours downtime: 25% credit of monthly service fee</li>
                <li>48+ hours downtime: 50% credit of monthly service fee</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Credits must be requested within 30 days of the outage and will be applied to your next billing cycle.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                6. How to Request a Refund
              </h2>
              <p className="text-muted-foreground mb-4">
                To request a refund, please contact our customer service team:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Phone: (888) 890-0043</li>
                <li>Email: billing@cablenetservices.com</li>
                <li>Online: Through your account portal</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please include your account number and reason for the refund request.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                7. Refund Processing Time
              </h2>
              <p className="text-muted-foreground">
                Approved refunds will be processed within 7-10 business days. Refunds will be issued to the original payment method. Please allow additional time for your financial institution to process the refund.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                8. Promotional Pricing
              </h2>
              <p className="text-muted-foreground">
                If you received promotional pricing and cancel within the promotional period, any discount received may be deducted from your refund. Promotional offers are subject to specific terms and conditions provided at the time of signup.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                9. Equipment Return
              </h2>
              <p className="text-muted-foreground">
                All Cable & Net Services equipment must be returned within 14 days of service cancellation to avoid equipment charges. Equipment should be returned in good working condition with all original accessories. A prepaid return label will be provided upon request.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                10. Disputed Charges
              </h2>
              <p className="text-muted-foreground">
                If you dispute a charge on your account, please contact our billing department before disputing with your financial institution. We're committed to resolving billing issues quickly and fairly. Chargebacks may result in account suspension.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                11. Business Account Refunds
              </h2>
              <p className="text-muted-foreground">
                Business accounts may have different refund policies based on their service agreements. Please refer to your business service agreement or contact our business sales team for specific refund terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                12. Changes to Refund Policy
              </h2>
              <p className="text-muted-foreground">
                Cable & Net Services reserves the right to modify this refund policy at any time. Changes will be posted on our website and will apply to services purchased after the effective date of the change.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                13. Contact Information
              </h2>
              <p className="text-muted-foreground">
                For questions about our refund policy or to request a refund, please contact:
                <br />
                <br />
                Email: billing@cablenetservices.com
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

export default Refund;
