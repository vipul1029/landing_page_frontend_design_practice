import React, { useState } from "react";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import DiscordLogo from "../assets/DiscordLogo.svg";
import JLogoFoot from "../assets/Jlogofoot2.png";


export default function Footer() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", query: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (form.firstName.trim().length < 2) newErrors.firstName = "First name must be at least 2 characters.";
    if (form.lastName.trim().length < 2) newErrors.lastName = "Last name must be at least 2 characters.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email address.";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) newErrors.phone = "Phone number must be 10 digits.";
    if (form.query.trim().length < 3) newErrors.query = "Query must be at least 3 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const body = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phone,
      query: form.query
    };
    try {
      const resp = await fetch("https://juridentfeedbackmailbackend-4qnu.onrender.com/send-juridentContact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      });
      await resp.text();
      setForm({ firstName: "", lastName: "", email: "", phone: "", query: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  return (
    <footer id="help" className="bg-black text-white py-10 px-6 md:px-20 relative">
      {/* Success Message */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 transform z-50 ${
          showSuccess ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-sm border-2 border-[#CB9F47] text-white px-8 py-6 rounded-2xl shadow-[0_0_20px_rgba(203,159,71,0.3)] flex items-center space-x-4 min-w-[300px] relative">
          <button
            onClick={() => setShowSuccess(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-[#CB9F47]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="bg-[#CB9F47]/20 p-2 rounded-full">
            <svg className="w-8 h-8 text-[#CB9F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-[#CB9F47]">Success!</span>
            <span className="text-white/90">Thank you for reaching out! We'll get back to you soon.</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="pt-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <h2 className="text-lg md:text-2xl font-bold text-[#CB9F47] mb-4">
              EMPOWER. TRANSFORM. IGNITE YOUR LEGAL TECH EVOLUTION.
            </h2>
            <h3 className="text-base md:text-xl font-semibold mb-6">Ready to revolutionize your legal practice?</h3>

            <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300 max-w-xl">
              <p>
                Connect with Valsco today and discover how our cutting-edge legal tech solutions can transform your practice.
              </p>
              <p>
                From case management to document automation, we deliver secure and intuitive solutions tailored for law firms.
              </p>
              <p className="font-semibold text-white">Unlock the future of law with Valsco.</p>
              <p className="text-[#CB9F47] font-medium">Schedule a consultation now to begin your transformation.</p>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form
            onSubmit={(e) => { e.preventDefault(); if (validate()) handleSubmit(); }}
            className="space-y-6 p-6 md:p-8 bg-black/30 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm md:text-base">First Name</label>
                <input
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  className={`p-3 bg-transparent border ${errors.firstName ? "border-red-500" : "border-gray-100"} rounded-lg focus:border-2 focus:border-white outline-none`}
                  placeholder="Enter first name"
                />
                {errors.firstName && <small className="text-red-400">{errors.firstName}</small>}
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm md:text-base">Last Name</label>
                <input
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  className={`p-3 bg-transparent border ${errors.lastName ? "border-red-500" : "border-gray-100"} rounded-lg focus:border-2 focus:border-white outline-none`}
                  placeholder="Enter last name"
                />
                {errors.lastName && <small className="text-red-400">{errors.lastName}</small>}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base">Email</label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                className={`p-3 bg-transparent border ${errors.email ? "border-red-500" : "border-gray-100"} rounded-lg focus:border-2 focus:border-white outline-none`}
                placeholder="Enter your email"
              />
              {errors.email && <small className="text-red-400">{errors.email}</small>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base">Phone</label>
              <input
                value={form.phone}
                onChange={handleChange("phone")}
                className={`p-3 bg-transparent border ${errors.phone ? "border-red-500" : "border-gray-100"} rounded-lg focus:border-2 focus:border-white outline-none`}
                placeholder="Enter phone number"
              />
              {errors.phone && <small className="text-red-400">{errors.phone}</small>}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base">Query</label>
              <textarea
                value={form.query}
                onChange={handleChange("query")}
                className={`p-3 bg-transparent border ${errors.query ? "border-red-500" : "border-gray-100"} rounded-lg focus:border-2 focus:border-white outline-none min-h-[100px]`}
                placeholder="Type your message here"
              />
              {errors.query && <small className="text-red-400">{errors.query}</small>}
            </div>

            <div className="w-full md:w-[50%] flex md:justify-start justify-center">
              <button
                className={`
                  w-full md:w-65 px-6 py-2 md:py-3 mt-4 font-medium rounded-3xl border border-white
                  text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden
                  ${isLoading ? "opacity-60 cursor-not-allowed" : ""}
                  animated-gradient-button
                `}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-sm md:text-base">
        {/* Left */}
        <div>
          <div className="flex items-center mb-3">
            <img src={JLogoFoot} alt="Jurident Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-[#CB9F47] text-lg font-bold ml-2">Jurident</h2>
          </div>
          <p>Valsco Technology<br />J-3 Shatabdi Enclave<br />Noida-201301, Uttar Pradesh</p>
          <p className="mt-3">connect@valscotech.com</p>
          <p className="mt-4 font-semibold">Join our community</p>
          <div className="flex gap-4 mt-2">
            {[DiscordLogo, YoutubeLogo, TwitterLogo, InstagramLogo].map((logo, i) => (
              <img key={i} src={logo} className="w-5 h-5" alt="social" />
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h2 className="text-base md:text-lg font-bold mb-3">Use Cases</h2>
          <ul className="space-y-2">
            <li>Case Management</li>
            <li>Legal Assistance (All Bare Acts)</li>
            <li>AI-Powered Document Drafting</li>
            <li>Case Sharing & Collaboration</li>
            <li>Client Management</li>
            <li>Task & Reminder Automation</li>
            <li>Calendar & Hearing Date Integration</li>
            <li>Team Workflow Management</li>
          </ul>
        </div>
        
       {/* Company */}
        <div>
          <h2 className="text-base md:text-lg font-bold mb-3">Company</h2>
          <ul className="space-y-2">
            <li><a href="https://share.google/eMJcAnQDuWGo8K3VS" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="https://www.valscotech.com/" target="_blank" rel="noopener noreferrer">About Us</a></li>
          </ul>
        </div>
        
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-600 pt-4 text-left text-xs md:text-sm">
        © 2025, Valsco Technology. All Rights Reserved
      </div>

      {/* CSS Styles for Animated Gradient */}
      <style>{`
        @keyframes movingGradient {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .animated-gradient-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            transparent 30%,
rgba(255, 255, 255, 0.15) 44%,
rgba(255, 255, 255, 0.25) 50%,
rgba(255, 255, 255, 0.15) 56%,
transparent 70%
          );
          background-size: 200% 100%;
          animation: movingGradient 4s linear infinite;
          border-radius: inherit;
        }

        .animated-gradient-button {
          position: relative;
          z-index: 1;
        }

        .animated-gradient-button > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </footer>
  );
}
