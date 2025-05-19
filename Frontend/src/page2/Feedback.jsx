import React, { useState } from "react";

const Feedback = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle submission logic here (e.g., API call)
    console.log("Feedback Submitted:", form);
    alert("Thank you for your feedback!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Header */}
      <div className="bg-black text-white py-14 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Share Feedback</h1>
        <p className="text-sm mt-2 text-gray-400">
          <a href="/" className="hover:underline">Home</a> / Share Feedback
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-black/90 min-h-screen text-white px-6 py-16 flex justify-center items-start">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-zinc-900 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Your Feedback</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              placeholder="Share your thoughts, issues, or suggestions..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition text-white py-2 px-6 rounded-full"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
