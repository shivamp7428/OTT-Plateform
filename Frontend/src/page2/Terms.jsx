import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Terms = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-black text-white min-h-80 flex justify-center items-center px-4 py-10 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Terms of Use</h1>
          <p className="mt-4 text-sm sm:text-base">
            <a href="#" className=" hover:underline">Home</a> / 
            <a href="#" className=" hover:underline ml-1">Terms</a>
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="bg-black/90 text-white px-6 md:px-20 py-16 text-sm leading-relaxed font-serif">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="flex items-center gap-2 text-xs tracking-widest text-red-500 font-light">
              PLEASE READ <BsArrowDown />
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Introduction</h2>
            <p>
              Welcome to ShivSubStar. By accessing or using our OTT platform, you agree to comply with
              and be bound by the following Terms of Use. Please review them carefully. If you do not
              agree, you should not use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing this website or any of our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms. These terms apply to all visitors, users,
              and others who access or use the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">2. User Conduct</h2>
            <p className="mt-2">
              You agree to use our services only for lawful purposes. You shall not post or transmit
              through our platform any material that violates or infringes the rights of others or is
              threatening, abusive, defamatory, invasive of privacy, vulgar, obscene, or otherwise
              objectionable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">3. Intellectual Property</h2>
            <p className="mt-2">
              All content on ShivSubStar, including movies, series, images, and branding, are owned
              or licensed by us. You may not use, copy, reproduce, or distribute our content without
              written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">4. Subscription & Billing</h2>
            <p className="mt-2">
              Our services may include subscription-based content. You agree to provide accurate
              billing information and authorize us to charge your payment method for subscription fees.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">5. Termination</h2>
            <p className="mt-2">
              We reserve the right to suspend or terminate your access if you violate any of these Terms,
              without notice and without liability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">6. Disclaimer of Warranties</h2>
            <p className="mt-2">
              Our service is provided "as is" and "as available" without any warranties of any kind,
              express or implied. We do not guarantee uninterrupted or error-free service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">7. Limitation of Liability</h2>
            <p className="mt-2">
              In no event shall ShivSubStar or its affiliates be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">8. Changes to Terms</h2>
            <p className="mt-2">
              We reserve the right to modify or update these Terms at any time. Continued use of the
              service after changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400">9. Contact Information</h2>
            <p className="mt-2">
              For any questions or concerns regarding these Terms, please contact us at:
              <br />
              <span className="text-red-300">support@shivsubstar.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
