import { useEffect, useState } from "react";

const texts = [
  "Tools Built for Legal Excellence",
  "Modernize your practice with features designed by and for legal professionals","Secure, efficient, and client-ready"
];

const CultureSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("culture-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress from 0 → 1 inside section
      const p = Math.min(Math.max((vh - rect.top) / vh, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Text motion
  const oldTextY = -progress * 80;          // moves UP
  const newTextY = 80 - progress * 80;      // comes from DOWN

  const oldOpacity = 1 - progress;
  const newOpacity = progress;

  return (
    <section
      id="culture-section"
      className="relative bg-white"
      style={{ height: "200vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* OLD TEXT */}
        <h1
          className="absolute text-5xl md:text-7xl font-semibold text-center"
          style={{
            transform: `translateY(${oldTextY}px)`,
            opacity: oldOpacity,
            willChange: "transform, opacity",
          }}
        >
          {texts[0]}
        </h1>

        {/* NEW TEXT */}
        <h1
          className="absolute text-5xl md:text-7xl font-semibold text-center"
          style={{
            transform: `translateY(${newTextY}px)`,
            opacity: newOpacity,
            willChange: "transform, opacity",
          }}
        >
          {texts[1]}
        </h1>

      </div>
    </section>
  );
};

export default CultureSection;



