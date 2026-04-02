

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ---------------- MOBILE FEATURES DATA ---------------- */

const PHONE_FEATURES = [
  {
    title: "Dashboard",
    description:
      "Your legal command center<br /> Get a consolidated view of ongoing cases, upcoming hearings, recent activity, and key alerts. Just everything you need at a glance.",
    image: "/dashboardiphone.png",
    bg: "#E3F2FD",
    textColor: "#000000",
  },
  {
    title: "All Cases",
    description:
      "Complete case repository<br /> Access, track, and manage all your cases across courts and jurisdictions with advanced filtering and real-time status updates.",
    image: "/allcases.png",
    bg: "#FFF5EB",
    textColor: "#000000",
  },
  {
    title: "Calendar",
    description:
      "Never miss a legal deadline<br /> Stay on top of hearings, filings, meetings, and reminders with an integrated legal calendar synced to your cases.",
    image: "/Calender.png",
    bg: "#ECEBFF",
    textColor: "#000000",
  },
  {
    title: "Export Cases",
    description:
      "One-click case documentation<br /> Export case details, timelines, and documents in structured formats.",
    image: "/exportcause.png",
    bg: "#E5F1FF",
    textColor: "#000000",
  },
  {
    title: "Feedback",
    description: "Feel free to reach us!",
    image: "/blackscreen.png",
    bg: "#000000",
    textColor: "#FFFFFF",
  },
];

/* ---------------- STICKY PHONE ---------------- */

const StickyPhone = ({ progress, opacity }) => {
  const y = useTransform(
    progress,
    [0, 1],
    ["0%", `-${(PHONE_FEATURES.length - 1) * 100}%`]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-[18vh] right-[8vw] z-30 pointer-events-none"
    >
      <div className="relative w-[240px]">
        <div className="absolute top-[1.2%] right-[3%] w-[94.5%] h-[97.8%] overflow-hidden rounded-[40px] bg-black">
          <motion.div style={{ y }} className="flex flex-col h-full">
            {PHONE_FEATURES.map((f, i) => (
              <div key={i} className="w-full h-full shrink-0">
                <img src={f.image} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        <img src="/codewayphone.png" className="relative z-10" />
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const MobileFeatures = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* 🔥 HARD VISIBILITY LIMITS */
  const opacity = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.85, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[360vh] overflow-hidden"
    >
      {PHONE_FEATURES.map((feature, index) => (
        <section
          key={index}
          className="w-[90%] h-[70vh] rounded-[32px] flex items-center shadow-[0_40px_120px_rgba(0,0,0,0.12)] my-[8vh] border border-black mx-auto"
          style={{ backgroundColor: feature.bg }}
        >
          <div className="max-w-xl px-10">
            <h2
              className="text-4xl font-semibold"
              style={{ color: feature.textColor }}
            >
              {feature.title}
            </h2>

            <p className="mt-6 text-lg" style={{ color: feature.textColor }}>
              {feature.description.split("<br />").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <div className="mt-10 max-w-xs">
              <a className="flex justify-center border-2 border-black rounded-full px-6 py-3 mb-4 font-medium hover:bg-black hover:text-white transition">
                Google Play
              </a>
              <a className="flex justify-center border-2 border-black rounded-full px-6 py-3 mb-6 font-medium hover:bg-black hover:text-white transition">
                App Store
              </a>
              <div className="h-px w-full bg-black/30 mb-4" />
              <a className="font-semibold text-lg hover:underline">
                See on Web →
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* PHONE */}
      <StickyPhone progress={scrollYProgress} opacity={opacity} />
    </section>
  );
};

export default MobileFeatures;

























