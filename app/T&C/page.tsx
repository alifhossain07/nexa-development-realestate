import SocialSidebar from "../shared/SocialSidebar";
import AboutBackgroundImage from "@/public/images/ad.webp";
const TermsAndConditions = () => {
  return (
    <div>
      <SocialSidebar></SocialSidebar>
      <div className="bg-white text-green-800 ">
        <div data-aos="fade-down">
          {/* About Section with Gradient Overlay */}
          <div
            className="relative h-[500px] lg:h-[700px] bg-cover bg-center text-center mb-16 flex items-center justify-center"
            style={{
              backgroundImage: `url(${AboutBackgroundImage.src})`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-4 lg:px-0 max-w-3xl text-center">
              <h1 className="text-2xl lg:text-5xl font-title font-bold uppercase text-white mb-6">
                Terms and Conditions of <br />{" "}
                <span className="text-green-500">
                  Nexa Developments Limited
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">
                Reservation
              </h2>
              <p className="text-green-900 text-justify">
                Applications for apartment allotment in Nexa Skyline must be
                submitted using the prescribed form, signed by the applicant,
                along with the earnest money and required documents. Allotments
                are made on a &quot;first come, first served&quot; basis. Nexa
                Developments Limited reserves the right to accept or reject any
                application without providing reasons.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">
                Allotment
              </h2>
              <p className="text-green-900 text-justify">
                Upon receipt of the application and payment, Nexa Developments
                Limited will issue an agreement outlining the payment schedule.
                The allottee must adhere to this schedule.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">Payment</h2>
              <p className="text-green-900 text-justify">
                All payments, including booking money and installments, should
                be made to Nexa Developments Limited. Foreigners and
                non-resident Bangladeshis can make payments in foreign currency
                via TT or DD at the current exchange rate.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">
                Documentation and Charges
              </h2>
              <p className="text-green-900 text-justify">
                The allottee is responsible for all applicable fees, including
                stamp duties, VAT, registration fees, and other associated
                costs.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">
                Developer&apos;s Rights
              </h2>
              <p className="text-green-900 text-justify">
                The company reserves the right to modify architectural and
                structural designs as deemed necessary.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">
                Possession
              </h2>
              <p className="text-green-900 text-justify">
                Possession of the apartment will be granted upon completion of
                construction and full payment of all charges.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">
                Customer Care
              </h2>
              <p className="text-green-900 text-justify">
                After signing the agreement, allottees should contact our
                Customer Care Department for any inquiries or assistance. We are
                committed to providing exceptional post-sales service.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">
                Owner&apos;s Association
              </h2>
              <p className="text-green-900 text-justify">
                An Owners Association will be formed to maintain the general
                affairs of the building, and allottees must comply with its
                rules and regulations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 my-5">Note</h2>
              <p className="text-green-900 text-justify">
                Additional financial terms will follow company policies. All
                changes to the exterior design of the apartments are prohibited
                without prior approval. Upgrades to finishing materials may
                incur additional costs. All terms will be detailed in the Deed
                of Agreement for allotment as per company policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
