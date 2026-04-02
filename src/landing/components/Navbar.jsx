

//final code
import React, { useState, useEffect, useRef } from "react";
import Circle from "../assets/Vector-1.svg";
import Collar from "../assets/Rectangle(1).png";
import J from "../assets/Vector.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX, HiArrowUp } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const lastScrollY = useRef(0);
  const NAVBAR_HEIGHT = 80;

  /* ---------------- SCROLL BEHAVIOR ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 10) {
        setShowNavbar(true);
        setShowArrow(false);
      } else {
        setShowNavbar(false);

        if (currentScrollY < lastScrollY.current) {
          setShowArrow(true); // scrolling up
        } else {
          setShowArrow(false); // scrolling down
        }

        setIsOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- SCROLL TO TOP ---------------- */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ---------------- SMOOTH SCROLL ---------------- */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAVBAR_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (path, sectionId = null) => {
    if (sectionId) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 150);
      } else {
        scrollToSection(sectionId);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Why Jurident?", path: "/", sectionId: "features" },
    { name: "About Us", path: "/aboutUs" },
    { name: "AI Drafting", path: "/aiDrafting" },
    { name: "Subscription", path: "/subPlans" },
    { name: "Help", path: "/", sectionId: "help" },
  ];

  return (
    <>
      {/* FLOATING WRAPPER */}
      <div
        className={`fixed top-5 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
      >
        <div className="px-4 sm:px-6">
          <div className="mx-auto max-w-[1300px] relative">

            {/* Gradient Glow Border */}
            <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#23216E] via-[#D0A95C] to-[#23216E] opacity-60 blur-sm"></div>

            {/* MAIN NAVBAR */}
            <nav
              className={`
                relative rounded-full
                backdrop-blur-xl
                transition-all duration-500
                ${
                  scrolled
                    ? "bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                    : "bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
                }
              `}
            >
              <div className="flex items-center justify-between px-8 py-3">

                {/* LOGO */}
                <div
                  onClick={() => navigate("/")}
                  className="flex items-end gap-0.5 w-[135px] h-[52px] cursor-pointer group"
                >
                  <div className="relative w-[28px] h-[52px] transition-transform duration-300 group-hover:scale-105">
                    <img src={J} alt="J" className="absolute bottom-0 left-0 w-[28px]" />
                    <img src={Circle} alt="Circle" className="absolute top-0 left-[20%] w-[18px]" />
                    <img src={Collar} alt="Collar" className="absolute top-[6%] left-[20%] w-[18px]" />
                  </div>
                  <span className="text-[#CB9F47] font-semibold text-[28px] tracking-wide">
                    urident
                  </span>
                </div>

                {/* DESKTOP NAV */}
                <ul className="hidden md:flex flex-grow justify-center gap-8">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          handleNavigation(item.path, item.sectionId)
                        }
                        className="relative text-[#141414] font-medium text-[16px]
                        transition-all duration-300
                        hover:text-[#CB9F47]
                        after:absolute after:left-1/2 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-[#CB9F47]
                        after:transition-all after:duration-300
                        after:-translate-x-1/2 hover:after:w-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* DESKTOP CTA */}
                <div className="hidden md:flex gap-4 items-center">

                  <button
                    onClick={() => navigate("/portal")}
                    className="bg-black text-white px-6 py-2.5 rounded-full font-medium text-sm
                    transition-all duration-300
                    hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                    active:scale-95"
                  >
                    Explore Jurident
                  </button>

                  <div className="p-[1px] rounded-full bg-gradient-to-r from-[#23216E] via-[#D0A95C] to-[#23216E]">
                    <button
                      onClick={() => navigate("/demo")}
                      className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm
                      transition-all duration-300 ease-in-out
                      hover:bg-transparent hover:text-white"
                    >
                      Book Demo
                    </button>
                  </div>
                </div>

                {/* MOBILE TOGGLE */}
                <div className="md:hidden">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                      <HiOutlineX className="w-6 h-6" />
                    ) : (
                      <HiOutlineMenu className="w-6 h-6" />
                    )}
                  </button>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>

     
    {/* SCROLL TO TOP ARROW */}
{showArrow && (
 <button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
>
  <HiArrowUp className="w-5 h-5" />
</button>
)}

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-[110px] left-4 right-4 backdrop-blur-2xl bg-white/85 shadow-[0_30px_80px_rgba(0,0,0,0.2)] rounded-3xl z-40 md:hidden animate-slideDown">
          <div className="px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      handleNavigation(item.path, item.sectionId)
                    }
                    className="w-full py-3 rounded-xl text-lg font-medium hover:bg-black/5 transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-4 items-center">
              <button
                onClick={() => navigate("/portal")}
                className="bg-black text-white py-3 rounded-full w-4/5"
              >
                Explore Jurident
              </button>

              <button
                onClick={() => {
                  navigate("/demo");
                  setIsOpen(false);
                }}
                className="border py-3 rounded-full w-4/5 text-[#23216E]"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.35s ease-out;
        }
      `}</style>
    </>
  );
}