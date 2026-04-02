

//phone ok ok
import { motion } from "framer-motion";
import { useState } from "react";
import { User, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Efficient to use and easy to handle, this case management application has streamlined my workflow significantly. Managing clients, documents, and schedules has never been this smooth.",
    name: "Ayush Mangal Gupta",
    role: "Lawyer · High Court",
  },
  {
    text: "Highly efficient and remarkably intuitive. The intelligent scheduling ensures nothing ever falls through the cracks.",
    name: "Vasu Sangal",
    role: "Lawyer · District Court",
  },
  {
    text: "The team collaboration features are outstanding. Case sharing and task updates feel effortless and precise.",
    name: "Ajay Kumar",
    role: "Lawyer · Supreme Court",
  },
  {
    text: "The organized file management saves me hours every week. It lets me focus entirely on my clients.",
    name: "Krishnam Soni",
    role: "Lawyer · High Court",
  },
  {
    text: "Cause list and event tracking are extremely reliable. Every hearing and deadline stays clear.",
    name: "Indresh Goswami",
    role: "Lawyer · Supreme Court",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : prev
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#F6F8FC] via-white to-[#F8F7F4] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0B1220]">
            Trusted by Legal Professionals
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from lawyers using Jurident in their daily practice.
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex justify-center items-center min-h-[320px] md:min-h-[360px]">

          {/* MOBILE VIEW (Only Active Card) */}
          <div className="block md:hidden w-full">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="
                w-full
                rounded-[24px]
                bg-white/90 backdrop-blur-xl
                border border-slate-200
                shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                p-6
              "
            >
              <div className="text-indigo-500 text-4xl font-serif mb-4">“</div>

              <p className="text-[16px] leading-relaxed text-slate-900">
                {testimonials[index].text}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <User size={14} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {testimonials[index].name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* DESKTOP VIEW (UNCHANGED) */}
          <div className="hidden md:flex justify-center items-center w-full">
            {testimonials.map((t, i) => {
              const offset = i - index;
              if (Math.abs(offset) > 2) return null;

              return (
                <motion.div
                  key={i}
                  animate={{
                    scale: offset === 0 ? 1 : 0.92,
                    opacity: offset === 0 ? 1 : 0.25,
                    x: offset * 260,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="
                    absolute w-full max-w-xl
                    rounded-[28px]
                    bg-white/80 backdrop-blur-xl
                    border border-slate-200
                    shadow-[0_30px_80px_rgba(15,23,42,0.18)]
                    p-10
                  "
                  style={{ zIndex: 10 - Math.abs(offset) }}
                >
                  <div className="text-indigo-500 text-5xl font-serif mb-6">“</div>

                  <p className="text-[20px] leading-relaxed text-slate-900">
                    {t.text}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      <User size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-600">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Arrows (Responsive Positioning) */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-0 md:-left-16 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:scale-110 transition z-50"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:right-0 md:-right-16 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:scale-110 transition z-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10 md:mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-indigo-600 w-6"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}






