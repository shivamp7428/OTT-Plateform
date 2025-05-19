import React, { useState } from "react";
import { BsArrowRightShort, BsSearch } from "react-icons/bs";
import { MdSubscriptions, MdDevices, MdSecurity, MdHelp } from "react-icons/md";

const categories = [
  {
    icon: <MdSubscriptions className="text-3xl text-red-500" />,
    title: "Subscriptions",
    desc: "Learn about our plans, pricing, renewals, and cancellations.",
    faqs: [
      {
        q: "How do I change my subscription plan?",
        a: "You can change your subscription plan in the 'Account' section of your profile."
      },
      {
        q: "What happens when my subscription expires?",
        a: "When your subscription expires, you will lose access to premium content unless you renew."
      }
    ]
  },
  {
    icon: <MdDevices className="text-3xl text-red-500" />,
    title: "Device Support",
    desc: "Get help with streaming on your phone, TV, laptop, and more.",
    faqs: [
      {
        q: "Can I watch on multiple devices?",
        a: "Yes, you can stream on up to 5 devices at the same time."
      },
      {
        q: "How do I connect to a new device?",
        a: "To add a new device, go to 'Device Settings' in your account."
      }
    ]
  },
  {
    icon: <MdSecurity className="text-3xl text-red-500" />,
    title: "Account & Security",
    desc: "Manage your account, change password, or secure your login.",
    faqs: [
      {
        q: "How do I reset my password?",
        a: "You can reset your password by clicking 'Forgot Password' on the login screen."
      },
      {
        q: "How can I secure my account?",
        a: "We recommend enabling two-factor authentication in your account settings."
      }
    ]
  },
  {
    icon: <MdHelp className="text-3xl text-red-500" />,
    title: "General Help",
    desc: "Find answers to other common questions and issues.",
    faqs: [
      {
        q: "How do I contact support?",
        a: "You can reach our support team by clicking the 'Contact Support' button."
      },
      {
        q: "What devices are supported?",
        a: "We support all major streaming devices like Android, iOS, Roku, Smart TVs, and more."
      }
    ]
  }
];

const HelpCentre = () => {
  const [selected, setSelected] = useState(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleCategoryClick = (category) => {
    setSelected(category);
    setIsAnswerVisible(true);
  };

  const handleCloseAnswer = () => {
    setIsAnswerVisible(false);
    setSelected(null);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black text-white py-14 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Help Centre</h1>
        <p className="text-sm mt-2 text-gray-400">
          <a href="/" className="hover:underline">Home</a> / Visit Help Centre
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-black px-6 py-8 flex justify-center">
        <div className="w-full max-w-3xl relative">
          <input
            type="text"
            placeholder="Search articles, topics or questions..."
            className="w-full py-3 px-5 pr-12 rounded-full bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-red-500"
          />
          <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>

      {/* Help Categories */}
      <div className="bg-black/90 px-6 md:px-20 py-16 text-white">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-6 shadow-md"
              onClick={() => handleCategoryClick(cat)}
            >
              <div className="flex items-center gap-4 mb-4">
                {cat.icon}
                <h2 className="text-xl font-bold">{cat.title}</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">{cat.desc}</p>
              <a
                href="#"
                className="inline-flex items-center text-red-400 hover:underline text-sm"
              >
                Learn More <BsArrowRightShort className="ml-1 text-lg" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Section with Blur Effect */}
      {isAnswerVisible && (
        <div
          className="fixed inset-0 bg-black/60 z-10 flex items-center justify-center backdrop-blur-md"
          onClick={handleCloseAnswer}
        >
          <div
            className="bg-black/90 p-8 rounded-2xl max-w-3xl text-white relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the answer
          >
            {/* Cross Button */}
            <button
              onClick={handleCloseAnswer}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-white transition"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex items-center gap-4 mb-6">
              {selected.icon}
              <h2 className="text-3xl font-bold">{selected.title}</h2>
            </div>

            <p className="text-gray-300 mb-8">{selected.desc}</p>

            {/* FAQs */}
            <div className="space-y-6">
              {selected.faqs.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-white">{item.q}</h3>
                  <p className="text-gray-300 mt-2">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Support */}
      <div className="bg-black py-12 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Still need help?</h3>
        <p className="text-gray-400 mb-6">Our support team is just a message away.</p>
        <a
          href="/Feedback"
          className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-full inline-block"
        >
          Share Feedback
        </a>
      </div>
    </>
  );
};

export default HelpCentre;
