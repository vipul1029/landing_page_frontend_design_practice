

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import Features from "./Features";
import GetApp from "./GetApp";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import MobileFeatures from "./MobileFeatures";

const smoothSpring = {
  stiffness: 40,
  damping: 30,
  mass: 1.2,
};

const Home = () => {
  const toolsRef = useRef(null);

  const { scrollYProgress: toolsProgress } = useScroll({
    target: toolsRef,
    offset: ["start end", "end start"],
  });

  const toolsHeadingY = useSpring(
    useTransform(toolsProgress, [0.25, 0.55], [60, -60]),
    smoothSpring
  );

  return (
    <main className="bg-white text-[#141414] overflow-hidden">
      
      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= TOOLS BUILT FOR LEGAL EXCELLENCE ================= */}
      <section
        ref={toolsRef}
        className="
          relative py-24 md:py-44 overflow-hidden
          bg-[radial-gradient(ellipse_at_top,#FFF7ED_0%,#F8FAFF_45%,#FFFFFF_100%)]
        "
      >
        {/* Background glow effects */}
        <div className="absolute -top-20 md:-top-32 left-1/4 w-[260px] md:w-[520px] h-[260px] md:h-[520px] bg-indigo-400/15 rounded-full blur-[100px] md:blur-[160px]" />
        <div className="absolute top-32 md:top-40 right-1/4 w-[220px] md:w-[420px] h-[220px] md:h-[420px] bg-violet-300/15 rounded-full blur-[90px] md:blur-[140px]" />

        {/* Heading animation container */}
        <div className="relative overflow-hidden h-[110px] md:h-[180px]">
          
          <div className="absolute inset-0 flex justify-center items-center">
            <h2 className="text-2xl md:text-6xl font-semibold tracking-tight text-[#CBD3E3] text-center px-4">
              Tools Built for Legal Excellence
            </h2>
          </div>

          <motion.div
            style={{ y: toolsHeadingY }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <h2 className="text-2xl md:text-6xl font-semibold tracking-tight text-[#1E2A44] text-center px-4">
              Tools Built for Legal Excellence
            </h2>
          </motion.div>

        </div>

        <p className="mt-8 md:mt-12 max-w-3xl mx-auto text-base md:text-xl text-[#4A5B7C] leading-relaxed text-center px-6">
          Modernize your practice with tools purpose-built for legal workflows —
          enhancing accuracy, efficiency, and confidence at every stage.
        </p>

        <div className="mt-14 md:mt-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-6">
          
          {[
            {
              title: "Designed for Lawyers",
              desc: "Every feature mirrors real courtroom and office workflows.",
            },
            {
              title: "Precision & Control",
              desc: "Structured systems that prioritize compliance and clarity.",
            },
            {
              title: "Scalable by Nature",
              desc: "Equally powerful for solo practitioners and legal teams.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 160 }}
              className="
                rounded-[24px] md:rounded-[28px]
                bg-white/85
                backdrop-blur-xl
                border border-[#E2E8F4]
                p-6 md:p-9
                shadow-[0_20px_60px_rgba(30,40,90,0.14)]
              "
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#1E2A44]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm md:text-base text-[#55658A] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= MOBILE FEATURES ================= */}
      <section>
        <MobileFeatures />
      </section>

      {/* ================= FEATURES ================= */}
      {/* <Features /> */}

      {/* ================= TESTIMONIALS ================= */}
      <section>
        <Testimonials />
      </section>

      {/* ================= GET APP ================= */}
      <section>
        <GetApp />
      </section>

    </main>
  );
};

export default Home;

