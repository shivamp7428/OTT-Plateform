import React, { useState } from "react";
import { BsArrowDown, BsChevronDown, BsChevronUp } from "react-icons/bs";

const faqData = [
  {
    question: "What is ShivSubStar?",
    answer:
      "ShivSubStar is an OTT platform offering a wide range of movies, web series, and exclusive originals across genres like action, comedy, drama, and spirituality.",
  },
  {
    question: "How can I subscribe to ShivSubStar?",
    answer:
      "You can subscribe by signing up on our website and selecting one of the available subscription plans. Payments can be made securely via UPI, cards, or net banking.",
  },
  {
    question: "Can I watch content offline?",
    answer:
      "Currently, offline viewing is not supported. However, you can stream content anytime with a stable internet connection.",
  },
  {
    question: "On which devices can I watch?",
    answer:
      "You can watch ShivSubStar on your smartphone, tablet, laptop, or smart TV. Our platform is optimized for cross-device compatibility.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use industry-standard encryption and secure payment gateways to ensure your payment details are protected.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black text-white min-h-80 flex justify-center items-center px-4 py-10 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">FAQs</h1>
          <p className="mt-4 text-sm sm:text-base">
            <a href="#" className="hover:underline">Home</a> /
            <a href="#" className="hover:underline ml-1">FAQ</a>
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="bg-black/90 text-white px-6 md:px-20 py-16 font-serif">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="flex items-center gap-2 text-sm font-light tracking-widest text-red-500">
              GOT QUESTIONS? <BsArrowDown />
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mt-2">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Find answers to the most common questions about ShivSubStar, subscriptions, content, and support.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-xl p-4 bg-black/60"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-white">{item.question}</span>
                  {activeIndex === index ? (
                    <BsChevronUp className="text-red-500" />
                  ) : (
                    <BsChevronDown className="text-red-500" />
                  )}
                </button>
                {activeIndex === index && (
                  <p className="text-sm text-gray-300 mt-3">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
