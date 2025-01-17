import React from "react";
import { FaRegFileAlt, FaDollarSign, FaHandshake, FaBuilding, FaPhoneAlt, FaUsers } from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h1 className="text-center font-title text-4xl font-bold text-green-600 uppercase mb-10">
          Terms and <span className="text-black">Conditions</span>
        </h1>
        <div className="space-y-12">
          {/* Reservation */}
          <div className="flex font-title items-start space-x-4">
            <FaRegFileAlt className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Reservation</h2>
              <p className="mt-2 text-gray-700">
                Applications for apartment allotment in Nexa Skyline must be submitted using the
                prescribed form, signed by the applicant, along with the earnest money and required
                documents. Allotments are made on a <strong>first come, first served</strong> basis.
                Nexa Developments Limited reserves the right to accept or reject any application
                without providing reasons.
              </p>
            </div>
          </div>

          {/* Allotment */}
          <div className="flex font-title items-start space-x-4">
            <FaHandshake className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Allotment</h2>
              <p className="mt-2 text-gray-700">
                Upon receipt of the application and payment, Nexa Developments Limited will issue
                an agreement outlining the payment schedule. The allottee must adhere to this
                schedule.
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="flex font-title items-start space-x-4">
            <FaDollarSign className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Payment</h2>
              <p className="mt-2 text-gray-700">
                All payments, including booking money and installments, should be made to Nexa
                Developments Limited. Foreigners and non-resident Bangladeshis can make payments
                in foreign currency via TT or DD at the current exchange rate.
              </p>
            </div>
          </div>

          {/* Documentation */}
          <div className="flex font-title items-start space-x-4">
            <FaRegFileAlt className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Documentation and Charges</h2>
              <p className="mt-2 text-gray-700">
                The allottee is responsible for all applicable fees, including stamp duties, VAT,
                registration fees, and other associated costs.
              </p>
            </div>
          </div>

          {/* Developer's Rights */}
          <div className="flex font-title items-start space-x-4">
            <FaBuilding className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Developers Rights</h2>
              <p className="mt-2 text-gray-700">
                The company reserves the right to modify architectural and structural designs as
                deemed necessary.
              </p>
            </div>
          </div>

          {/* Possession */}
          <div className="flex font-title items-start space-x-4">
            <FaHandshake className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Possession</h2>
              <p className="mt-2 text-gray-700">
                Possession of the apartment will be granted upon completion of construction and full
                payment of all charges.
              </p>
            </div>
          </div>

          {/* Customer Care */}
          <div className="flex font-title items-start space-x-4">
            <FaPhoneAlt className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Customer Care</h2>
              <p className="mt-2 text-gray-700">
                After signing the agreement, allottees should contact our Customer Care Department
                for any inquiries or assistance. We are committed to providing exceptional
                post-sales service.
              </p>
            </div>
          </div>

          {/* Owner's Association */}
          <div className="flex font-title items-start space-x-4">
            <FaUsers className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Owners Association</h2>
              <p className="mt-2 text-gray-700">
                An Owners Association will be formed to maintain the general affairs of the
                building, and allottees must comply with its rules and regulations.
              </p>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="flex font-title items-start space-x-4">
            <FaRegFileAlt className="text-green-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Additional Notes</h2>
              <p className="mt-2 text-gray-700">
                Additional financial terms will follow company policies. All changes to the exterior
                design of the apartments are prohibited without prior approval. Upgrades to
                finishing materials may incur additional costs. All terms will be detailed in the
                Deed of Agreement for allotment as per company policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
