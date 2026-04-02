

import React from "react";
import { motion } from "framer-motion";
import phoneImage from "../assets/newScreen.png";
import googleLogo from "../assets/googlelogo.png";
import { FaApple } from "react-icons/fa";

const GetApp = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F7F4] via-white to-[#FAFAFA]">
      
      {/* Ambient light glows */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-[#E6C77B]/30 rounded-full blur-[160px]" />
      <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] bg-[#6E63FF]/20 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36 flex flex-col md:flex-row items-center gap-20">

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center md:justify-end relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-tr from-[#E6C77B]/30 to-[#6E63FF]/25 rounded-full blur-[110px]" />

          <motion.img
            src={phoneImage}
            alt="Jurident Mobile App"
            className="relative w-[150px] sm:w-[170px] md:w-[200px] lg:w-[230px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#B58B2A] mb-6 font-medium">
            Jurident Mobile App
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-[56px] leading-tight md:leading-[72px] font-semibold text-gray-900">
            Your Legal Partner,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B58B2A] via-[#E6C77B] to-[#6E63FF]">
              Anytime. Anywhere.
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-[22px] text-gray-600 max-w-xl leading-relaxed">
            Built for modern legal professionals who value{" "}
            <span className="font-semibold text-gray-900">precision</span>,{" "}
            <span className="font-semibold text-gray-900">security</span>, and{" "}
            <span className="font-semibold text-gray-900">elegance</span>.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-12 flex-wrap">
            <motion.a
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://apps.apple.com/in/app/jurident/id6475091173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              <FaApple className="w-6 h-6" />
              <span className="text-lg font-medium">App Store</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://play.google.com/store/apps/details?id=com.jurident.valsco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              <img src={googleLogo} alt="Google Play" className="w-6 h-6" />
              <span className="text-lg font-medium">Play Store</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetApp;