

// import { FaEnvelope } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { PiDiscordLogo } from "react-icons/pi";
// import { SlSocialYoutube } from "react-icons/sl";
// import { FaXTwitter } from "react-icons/fa6";
// import { LuInstagram } from "react-icons/lu";
// import { useRef, useState } from "react";

// const BookADemo = () => {
//   const nameRef = useRef("");
//   const lastNameRef = useRef("");
//   const emailRef = useRef("");
//   const phoneRef = useRef("");
//   const message = useRef("");

//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formStatus, setFormStatus] = useState("");

//   const validateForm = () => {
//     return !(
//       nameRef.current.value === "" ||
//       emailRef.current.value === "" ||
//       phoneRef.current.value === "" ||
//       message.current.value === ""
//     );
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);

//     if (validateForm()) {
//       const body = {
//         name: nameRef.current.value,
//         email: emailRef.current.value,
//         phoneNumber: phoneRef.current.value,
//         message: message.current.value,
//         ...(lastNameRef.current.value && { lastName: lastNameRef.current.value }),
//       };

//       try {
//         await fetch(
//           "https://juridentfeedbackmailbackend.onrender.com/send-demoRequest",
//           {
//             method: "POST",
//             body: JSON.stringify(body),
//             headers: { "Content-Type": "application/json" },
//           }
//         );

//         [nameRef, lastNameRef, emailRef, phoneRef, message].forEach(
//           ref => (ref.current.value = "")
//         );
//         setFormStatus("success");
//       } catch {
//         setFormStatus("error");
//       }
//     } else {
//       setIsError(true);
//       setFormStatus("error");
//       [nameRef, emailRef, phoneRef, message].forEach(ref => {
//         ref.current.value = "Required";
//       });
//     }

//     setTimeout(() => {
//       setIsError(false);
//       setFormStatus("");
//       [nameRef, lastNameRef, emailRef, phoneRef, message].forEach(
//         ref => (ref.current.value = "")
//       );
//     }, 3000);

//     setIsLoading(false);
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-[#fafafa]">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl
//         bg-white/70 backdrop-blur-xl
//         shadow-[0_30px_80px_rgba(0,0,0,0.12)]
//         border border-[#D0A95C]/20 overflow-hidden">

//         {/* LEFT PANEL */}
//         <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-[#111] to-[#1b1b1b] text-white">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-extrabold text-[#D0A95C] mb-6">
//               Book Demo
//             </h1>

//             <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
//               Drop in your details and our team will connect with you shortly to
//               walk you through Jurident’s capabilities.
//             </p>

//             <div className="mt-10 space-y-4 text-sm">
//               <div className="flex items-center gap-3">
//                 <FaEnvelope />
//                 <span>connect@valscotech.com</span>
//               </div>

//               <div className="flex items-start gap-3">
//                 <FaLocationDot className="mt-1" />
//                 <span>
//                   Valsco Technology <br />
//                   J-3 Shatabdi Enclave <br />
//                   Noida-201301, UP
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ✅ CLICKABLE SOCIAL ICONS */}
//           <div className="flex gap-4 text-xl text-gray-400 mt-10">
//             <a
//               href="https://discord.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#D0A95C] transition hover:scale-110"
//             >
//               <PiDiscordLogo />
//             </a>

//             <a
//               href="https://www.youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#D0A95C] transition hover:scale-110"
//             >
//               <SlSocialYoutube />
//             </a>

//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#D0A95C] transition hover:scale-110"
//             >
//               <FaXTwitter />
//             </a>

//             <a
//               href="https://www.instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#D0A95C] transition hover:scale-110"
//             >
//               <LuInstagram />
//             </a>
//           </div>
//         </div>

//         {/* FORM PANEL */}
//         <div className="p-10 flex flex-col justify-center">
//           <div className="space-y-8">

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="First Name*" refProp={nameRef} isError={isError} />
//               <Input label="Last Name" refProp={lastNameRef} />
//               <Input label="Email*" refProp={emailRef} isError={isError} />
//               <Input label="Phone*" refProp={phoneRef} isError={isError} />
//             </div>

//             <div>
//               <p className="text-[#D0A95C] font-semibold text-sm mb-1">
//                 Message*
//               </p>

//               <p className={`text-sm font-semibold transition-all ${
//                 formStatus === "success"
//                   ? "text-green-600"
//                   : formStatus === "error"
//                   ? "text-red-500"
//                   : "hidden"
//               }`}>
//                 {formStatus === "success"
//                   ? "Request sent successfully"
//                   : "Error sending request"}
//               </p>

//               <input
//                 ref={message}
//                 placeholder="Write your message"
//                 className={`w-full mt-2 border-b bg-transparent outline-none py-2 text-sm
//                 ${isError ? "border-red-500 text-red-500" : "border-black"}`}
//               />
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="w-full py-3 rounded-xl font-semibold text-white
//               bg-gradient-to-r from-[#D0A95C] to-[#bfa06a]
//               shadow-[0_15px_40px_rgba(208,169,92,0.4)]
//               hover:scale-[1.03] transition-all disabled:opacity-60"
//             >
//               {isLoading ? "Sending..." : "Book Demo"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* Reusable Input */
// const Input = ({ label, refProp, isError }) => (
//   <div>
//     <p className="text-[#D0A95C] font-semibold text-sm mb-1">{label}</p>
//     <input
//       ref={refProp}
//       className={`w-full border-b bg-transparent outline-none py-2 text-sm
//       ${isError ? "border-red-500 text-red-500" : "border-black"}`}
//     />
//   </div>
// );

// export default BookADemo;
























import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiDiscordLogo } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { useRef, useState } from "react";

const BookADemo = () => {
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const message = useRef("");

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const validateForm = () => {
    return !(
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      phoneRef.current.value === "" ||
      message.current.value === ""
    );
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    if (validateForm()) {
      const body = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneRef.current.value,
        message: message.current.value,
        ...(lastNameRef.current.value && { lastName: lastNameRef.current.value }),
      };

      try {
        await fetch(
          "https://juridentfeedbackmailbackend.onrender.com/send-demoRequest",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
          }
        );

        [nameRef, lastNameRef, emailRef, phoneRef, message].forEach(
          ref => (ref.current.value = "")
        );
        setFormStatus("success");
      } catch {
        setFormStatus("error");
      }
    } else {
      setIsError(true);
      setFormStatus("error");
      [nameRef, emailRef, phoneRef, message].forEach(ref => {
        ref.current.value = "Required";
      });
    }

    setTimeout(() => {
      setIsError(false);
      setFormStatus("");
      [nameRef, lastNameRef, emailRef, phoneRef, message].forEach(
        ref => (ref.current.value = "")
      );
    }, 3000);

    setIsLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-[#fafafa]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl
        bg-white/70 backdrop-blur-xl
        shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        border border-[#D0A95C]/20 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-[#111] to-[#1b1b1b] text-white">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#D0A95C] mb-6">
              Book Demo
            </h1>

            <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
              Drop in your details and our team will connect with you shortly to
              walk you through Jurident’s capabilities.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>connect@valscotech.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1" />
                <span>
                  Valsco Technology <br />
                  J-3 Shatabdi Enclave <br />
                  Noida-201301, UP
                </span>
              </div>
            </div>
          </div>

          {/* ✅ CLICKABLE SOCIAL ICONS */}
          <div className="flex gap-4 text-xl text-gray-400 mt-10">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D0A95C] transition hover:scale-110"
            >
              <PiDiscordLogo />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D0A95C] transition hover:scale-110"
            >
              <SlSocialYoutube />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D0A95C] transition hover:scale-110"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D0A95C] transition hover:scale-110"
            >
              <LuInstagram />
            </a>
          </div>
        </div>

        {/* FORM PANEL */}
        <div className="p-10 flex flex-col justify-center">
          <div className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="First Name*" refProp={nameRef} isError={isError} />
              <Input label="Last Name" refProp={lastNameRef} />
              <Input label="Email*" refProp={emailRef} isError={isError} />
              <Input label="Phone*" refProp={phoneRef} isError={isError} />
            </div>

            <div>
              <p className="text-[#D0A95C] font-semibold text-sm mb-1">
                Message*
              </p>

              <p className={`text-sm font-semibold transition-all ${
                formStatus === "success"
                  ? "text-green-600"
                  : formStatus === "error"
                  ? "text-red-500"
                  : "hidden"
              }`}>
                {formStatus === "success"
                  ? "Request sent successfully"
                  : "Error sending request"}
              </p>

              <input
                ref={message}
                placeholder="Write your message"
                className={`w-full mt-2 border-b bg-transparent outline-none py-2 text-sm
                ${isError ? "border-red-500 text-red-500" : "border-black"}`}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-[#D0A95C] to-[#bfa06a]
              shadow-[0_15px_40px_rgba(208,169,92,0.4)]
              hover:scale-[1.03] transition-all disabled:opacity-60"
            >
              {isLoading ? "Sending..." : "Book Demo"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Input */
const Input = ({ label, refProp, isError }) => (
  <div>
    <p className="text-[#D0A95C] font-semibold text-sm mb-1">{label}</p>
    <input
      ref={refProp}
      className={`w-full border-b bg-transparent outline-none py-2 text-sm
      ${isError ? "border-red-500 text-red-500" : "border-black"}`}
    />
  </div>
);

export default BookADemo;
