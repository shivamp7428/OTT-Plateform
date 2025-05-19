import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Privacy = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black text-white min-h-80 flex justify-center items-center px-4 py-10 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-sm sm:text-base">
            <a href="#" className="hover:underline">Home</a> /
            <a href="#" className="hover:underline ml-1">Privacy</a>
          </p>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="bg-black/90 text-white px-6 md:px-20 py-16 text-sm leading-relaxed font-serif">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="flex items-center gap-2 text-xs tracking-widest text-red-500 font-light">
              PLEASE REVIEW <BsArrowDown />
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Your Privacy Matters</h2>
            <p>
              At ShivSubStar, we value your privacy and are committed to protecting your personal information.
              This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">1. Information We Collect</h2>
            <p className="mt-2">
              We collect personal information you provide during registration, such as your name, email, and payment details.
              We also gather technical data like IP addresses, browser type, and viewing history to improve your experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">2. How We Use Your Data</h2>
            <p className="mt-2">
              Your data is used to deliver content, personalize recommendations, process payments, send notifications,
              and enhance platform functionality. We do not sell or rent your information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">3. Cookies & Tracking</h2>
            <p className="mt-2">
              We use cookies and similar technologies to track user behavior, remember preferences, and improve performance.
              You may disable cookies in your browser settings, but this could affect your experience on our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">4. Third-Party Services</h2>
            <p className="mt-2">
              We may use trusted third-party services for analytics, payment processing, and content delivery. These partners
              are bound by confidentiality and data protection agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">5. Data Security</h2>
            <p className="mt-2">
              We implement strong security measures to protect your data from unauthorized access, alteration, or disclosure.
              However, no method of transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">6. Your Rights</h2>
            <p className="mt-2">
              You have the right to access, update, or delete your personal data. You can also opt out of marketing communications
              at any time by contacting us or adjusting your account settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">7. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. We encourage you to review it periodically.
              Continued use of the platform implies acceptance of any revisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">8. Contact Us</h2>
            <p className="mt-2">
              If you have any questions or concerns regarding this policy, please contact us at:
              <br />
              <span className="text-red-300">privacy@shivsubstar.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
