import SocialSidebar from "../shared/SocialSidebar";
import AboutBackgroundImage from "@/public/images/ad.webp";

const PrivacyPolicy = () => {
  return (
    <div>
      <SocialSidebar />
      <div data-aos="fade-down">
        {/* About Section with Gradient Overlay */}
        <div
          className="relative h-[350px] md:h-[500px] lg:h-[700px] bg-cover bg-center text-center md:mb-16 flex items-center justify-center"
          style={{
            backgroundImage: `url(${AboutBackgroundImage.src})`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>

          {/* Content */}
          <div className="relative md:z-10 px-4 lg:px-0 max-w-3xl text-center">
            <h1 className="text-xl lg:text-5xl font-title font-bold uppercase text-white mb-6">
              Privacy Policy of <br />
              <span className="text-green-500">Nexa Developments Limited</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white bg-opacity-90 py-5 md:py-12 px-6 max-w-5xl mx-auto rounded-lg shadow-md">
        <div className="md:space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-green-700 text-center my-5">
              Introduction
            </h2>
            <p className="text-green-900 text-justify">
              Welcome to Nexa Development Limited&apos;s privacy policy. We are
              committed to safeguarding your personal information and ensuring
              your privacy is protected. This document outlines how we collect,
              use, and protect your information when you interact with our
              website and services.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-green-700 text-center my-5">
              Information We Collect
            </h2>
            <p className="text-green-900 text-justify">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-green-900 text-justify">
              <li>
                Your name, email address, phone number, and mailing address.
              </li>
              <li>
                Property preferences, including location, budget, and other
                criteria.
              </li>
              <li>
                Details of transactions or inquiries you make through our
                website.
              </li>
              <li>
                Technical information such as IP address, browser type, and
                cookies.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-green-700 text-center my-5">
              How We Use Your Information
            </h2>
            <p className="text-green-900 text-justify">
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc list-inside text-green-900 text-justify">
              <li>To process your inquiries, applications, or transactions.</li>
              <li>
                To provide property recommendations tailored to your needs.
              </li>
              <li>
                To send updates about new properties, promotions, or services.
              </li>
              <li>To improve our website and customer experience.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-green-700 text-center my-5">
              Information Sharing
            </h2>
            <p className="text-green-900 text-justify">
              We do not sell, rent, or share your personal information with
              third parties except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-green-900 text-justify">
              <li>
                With trusted partners who assist us in delivering services
                (e.g., payment processors or IT service providers).
              </li>
              <li>
                If required by law, regulation, or legal processes to disclose
                information.
              </li>
              <li>
                In connection with a corporate transaction such as a merger,
                acquisition, or sale of assets.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-green-700 text-center my-5">
              Security of Your Information
            </h2>
            <p className="text-green-900 text-justify">
              We take appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no online system
              is entirely secure, and we cannot guarantee absolute security.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-green-700 text-center my-5">
              Your Rights
            </h2>
            <p className="text-green-900 text-justify">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-green-900 text-justify">
              <li>Access and review the information we hold about you.</li>
              <li>Request corrections or updates to your information.</li>
              <li>Withdraw consent for specific uses of your information.</li>
              <li>
                Request deletion of your personal data, subject to legal
                requirements.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-green-700 text-center my-5">
              Cookies and Tracking
            </h2>
            <p className="text-green-900 text-justify">
              Our website uses cookies to enhance your experience and analyze
              site traffic. You can manage your cookie preferences through your
              browser settings.
            </p>
          </section>

          <section>
            <p className="text-green-900 text-sm my-5 text-justify">
              This policy is effective as of 01.01.2025. We may update this
              policy periodically. Please check this page for the latest
              version.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
