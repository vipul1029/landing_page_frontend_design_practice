
import {
  FileText,
  ScrollText,
  BookMarked,
  Timer,
  BadgeCheck,
  Handshake
} from "lucide-react";

const AIDrafting = () => {
  const content = [
    {
      text: "Jurident's advanced AI Drafting feature streamlines the complex process of legal document creation by generating meticulously structured, professional-grade drafts within seconds.",
      icon: FileText,
    },
    {
      text: "Whether you need contracts, petitions, affidavits, or legal notices, our intelligent system is engineered to comprehend the nuances of legal language and context, ensuring that each document aligns with jurisdictional standards and client-specific requirements.",
      icon: ScrollText,
    },
    {
      text: "By leveraging state-of-the-art natural language processing and legal domain expertise, Jurident empowers legal professionals to produce high-quality, review-ready documents with unparalleled speed and precision.",
      icon: BookMarked,
    },
    {
      text: "This not only reduces the risk of human error but also significantly cuts down the time spent on repetitive drafting tasks, allowing practitioners to allocate more time to critical legal analysis and strategic decision-making.",
      icon: Timer,
    },
    {
      text: "With Jurident, legal teams can enhance their operational efficiency, maintain compliance, and deliver consistent, accurate documentation—every time.",
      icon: BadgeCheck,
    },
    {
      text: "Let our AI handle the paperwork, while you focus on what truly matters: providing exceptional legal counsel.",
      icon: Handshake,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white flex justify-center overflow-hidden soft-bg">

      {/* Background image */}
      <img
        src="image 3.png"
        alt="Background"
        className="absolute w-[90%] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 sm:opacity-60 sm:w-[70%]"
      />

      {/* Content */}
      <div className="relative z-10 w-[90%] sm:w-[75%] mt-[100px] sm:mt-[150px] pb-16 px-4 sm:px-8">

        {/* Heading */}
        <h1 className="text-[22px] sm:text-[36px] font-extrabold text-[#bfa87c] mb-10 tracking-wide">
          AI Drafting
        </h1>

        {/* Feature Blocks */}
        <div className="space-y-6 sm:space-y-5">
          {content.map(({ text, icon: Icon }, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-4 sm:p-5 rounded-2xl
              bg-white/60 backdrop-blur-md
              border border-[#bfa87c]/10
              shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              transition-all duration-300
              hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              {/* Icon */}
              <div className="mt-[2px] flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#bfa87c]/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#bfa87c]" />
                </div>
              </div>

              {/* Text */}
              <p className="text-[14px] sm:text-[18px] font-medium text-[#4a4a4a] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-10">
          <button className="coming-soon-btn text-sm sm:text-lg font-semibold text-white
            px-6 py-2.5 sm:px-10 sm:py-3 rounded-full
            bg-[#bfa87c] shadow-lg transition-all duration-300">
            Coming Soon
          </button>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes glowFadeGold {
          0%, 100% {
            box-shadow: 0 0 10px rgba(191,168,124,.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(191,168,124,.9);
          }
        }

        .coming-soon-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 40px rgba(191,168,124,.5);
        }

        @media (max-width: 640px) {
          .coming-soon-btn {
            animation: glowFadeGold 2.5s ease-in-out infinite;
          }
        }

        .soft-bg {
          background-color: #ffffff;
          background-image:
            radial-gradient(circle, rgba(191,168,124,0.05) 1px, transparent 1px),
            linear-gradient(45deg, rgba(191,168,124,0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(191,168,124,0.02) 25%, transparent 25%);
          background-size: 3px 3px, 30px 30px, 30px 30px;
        }
      `}</style>
    </div>
  );
};

export default AIDrafting;
