

import { motion } from "framer-motion";

const AboutUs = () => {
  const content = [
    {
      heading: "ABOUT",
      desc: "Jurident is a modern legal-tech platform built to simplify the way people seek, access, and manage legal support. Whether you're an individual confused about your legal options or a lawyer looking to streamline your practice, Jurident bridges the gap with a seamless, secure, and AI-assisted experience. From fetching court cases, matching with verified lawyers, and scheduling consultations, to drafting legal documents and managing proceedings — Jurident brings the entire legal process under one digital roof. Designed with clarity and trust at its core, the platform eliminates middlemen, protects against misinformation, and empowers users to make informed legal decisions."
    },
    {
      heading: "VISION",
      desc: "Jurident envisions a world where legal support is not a privilege but a right — accessible, understandable, and reliable for everyone, regardless of their background or legal knowledge. We strive to bridge the gap between the complexities of the legal system and the people who need help navigating it. By leveraging technology and simplifying legal interactions, our vision is to empower individuals and legal professionals alike with tools that ensure justice is approachable, transparent, and timely."
    },
    {
      heading: "GOAL",
      desc: "Our goal is to create a comprehensive, intelligent legal platform that addresses real-world challenges faced by clients and lawyers. From helping users identify their legal issues with clarity to connecting them with verified legal professionals, Jurident focuses on making every step of the legal journey smoother. We aim to eliminate misinformation, reduce dependency on unreliable intermediaries, and streamline documentation, communication, and case tracking — all while ensuring privacy, trust, and professional integrity."
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* Decorative mark */}
      <img
        src="Group 967.png"
        className="absolute right-[8%] top-[40%] w-[14%] opacity-20 hidden lg:block"
        alt="Decoration"
      />

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-[110px] lg:pt-[150px] pb-32">

        {/* Page Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-[32px] sm:text-[44px] font-extrabold tracking-tight text-[#111] leading-tight">
            Redefining how legal
            <span className="block text-[#cda454]">services are accessed</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] sm:text-[18px] text-[#555] leading-relaxed">
            Jurident is built at the intersection of law, technology, and trust designed to
            simplify complexity and empower informed legal decisions.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#cda454]/40 pl-10 space-y-24">

          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Gold Dot */}
              <span className="absolute -left-[11px] top-2 w-4 h-4 rounded-full bg-[#cda454] shadow-[0_0_20px_rgba(205,164,84,0.6)]" />

              {/* Card */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                border border-[#cda454]/10
                transition-all duration-500 hover:-translate-y-2"
              >
                <h2 className="text-[13px] tracking-[0.3em] text-[#cda454] font-semibold mb-4">
                  {item.heading}
                </h2>

                <p className="text-[14px] sm:text-[18px] leading-[1.9] text-[#222]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background texture */}
      <style>{`
        section {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(205,164,84,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
