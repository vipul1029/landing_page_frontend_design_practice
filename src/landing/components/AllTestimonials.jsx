import React from "react";
import { User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: "“Efficient to use and easy to handle, this case management application has streamlined my workflow significantly. Managing clients, documents, and schedules has never been this smooth—it's truly a game-changer for legal professionals.”",
    name: "Ayush Mangal Gupta",
    role: "Lawyer/High Court",
    borderColor: "shadow-[inset_0px_4px_22px_#C9D4FF]",
  },
  {
    text: "“Highly efficient and remarkably intuitive, this case management application has transformed the way I organize my legal work. The intelligent case scheduling feature simplifies the process of binding and tracking cases, ensuring nothing falls through the cracks.”",
    name: "Vasu Sangal",
    role: "Lawyer/District Court",
    borderColor: "shadow-[inset_0px_4px_22px_#B4F8C8]",
  },
  {
    text: "“The team assistance feature is a standout addition that greatly enhances collaboration. It allows effortless sharing of case details, tasks, and updates among peers, ensuring everyone stays aligned and informed throughout the legal process.”",
    name: "Ajay Kumar",
    role: "Lawyer/Supreme Court",
    borderColor: "shadow-[inset_0px_4px_22px_#FFD699]",
  },
  {
    text: "“Efficient case file management has never been easier. The organized and intuitive system saves my hours each week, letting me focus on what matters—serving my clients better.”",
    name: "Krishnam Soni",
    role: "Lawyer/High Court",
    borderColor: "shadow-[inset_0px_4px_22px_#A0E7E5]",
  },
  {
    text: "“The cause list generation and event management features are incredibly well-executed. They help me stay on top of every hearing, deadline, and client meeting with absolute clarity and zero stress. It's a must-have for any legal professional aiming for efficiency.”",
    name: "Indresh Goswami",
    role: "Lawyer/Supreme Court",
    borderColor: "shadow-[inset_0px_4px_22px_#FFE0AC]",
  },
  {
    text: "“The ability to seamlessly export case data from both High Court and District Court portals is a standout feature. It eliminates manual entry, reduces errors, and ensures that my case records are always accurate and up to date. Truly a benchmark in legal tech efficiency.”",
    name: "Nitin Shrivastava",
    role: "Lawyer/Supreme Court",
    borderColor: "shadow-[inset_0px_4px_22px_#D1BBFF]",
  },
];

const AllTestimonials = () => {
  return (
    <section className="px-6 md:px-20 py-14 max-w-7xl mx-auto">
      {/* Back button on the extreme left */}
      <div className="flex justify-start mb-0 mt-10">
        <Link
          to="/"
          className="flex items-center text-yellow-600 hover:text-yellow-500"
        >
          <ArrowLeft size={24} />
          <span className="ml-2 font-medium text-lg">Back</span>
        </Link>
      </div>

      {/* Centered Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F0F0F] font-[Inter] tracking-tight">
          All Testimonials
        </h2>
        <p className="text-base md:text-lg text-[#3A3A3A] font-medium mt-2">
          Hear from legal professionals across the board.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-[#FAFAFA] border border-black rounded-2xl flex flex-col justify-between items-stretch overflow-hidden ${testimonial.borderColor}`}
          >
            {/* Text */}
            <div className="px-6 py-10 text-left flex-grow">
              <p className="text-[#1E1E1E] text-base font-[DM Sans] leading-relaxed whitespace-normal break-words">
                {testimonial.text}
              </p>
            </div>

            {/* Footer */}
            <div className="bg-[#1E1E1E] px-6 py-4 text-white text-left rounded-b-2xl">
              <p className="font-bold">{testimonial.name}</p>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <User size={16} className="text-purple-400" />
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTestimonials;
