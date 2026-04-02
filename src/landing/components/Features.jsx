

import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const FEATURES = [
  { title: "Dashboard", image: "/legal.png" },
  { title: "All Cases", image: "/casemanage.png" },
  { title: "Calendar", image: "/calander.png" },
  { title: "Export Cases", image: "/Home.png" },
  { title: "Expenses", image: "/expenses.png" }
];

export default function Features() {

  const outerScrollRef = useRef(null);
  const laptopScrollRef = useRef(null);
  const [active,setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    container:laptopScrollRef
  });

  const progressHeight = useSpring(
    useTransform(scrollYProgress,[0,1],["0%","100%"]),
    { stiffness:120,damping:30 }
  );

  useEffect(()=>{

    const outer = outerScrollRef.current;
    const laptop = laptopScrollRef.current;

    if(!outer || !laptop) return;

    const handleOuterScroll = () => {

      const maxOuter = outer.scrollHeight - outer.clientHeight;
      if(maxOuter <=0) return;

      let progress = outer.scrollTop / maxOuter;
      progress = Math.min(Math.max(progress,0),1);

      const maxLaptop = laptop.scrollHeight - laptop.clientHeight;
      laptop.scrollTop = progress * maxLaptop;

      const index = Math.round(progress * (FEATURES.length-1));
      setActive(index);
    };

    outer.addEventListener("scroll",handleOuterScroll);
    return ()=>outer.removeEventListener("scroll",handleOuterScroll);

  },[]);

  return(

<section className="relative py-20 bg-[#FAF9F6] overflow-hidden">

<style>{`
.hide-scrollbar::-webkit-scrollbar{
display:none;
}
.hide-scrollbar{
-ms-overflow-style:none;
scrollbar-width:none;
}
`}</style>

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-28">

{/* LEFT SIDE */}

<div>

<h2 className="text-6xl font-semibold leading-tight text-gray-900 tracking-tight">
We are not limited to just a Application!
</h2>

<p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
Manage cases, schedules, and documents with precision.  
Jurident simplifies every part of your practice with
a seamless experience.
</p>

<div className="mt-14 space-y-7">

{FEATURES.map((f,i)=>(
<motion.div
key={i}
animate={{
opacity:active===i?1:0.4,
x:active===i?14:0
}}
transition={{ duration:0.35 }}
className="flex items-center gap-4"
>

<div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
active===i
? "bg-gradient-to-r from-yellow-400 to-orange-400 shadow-[0_0_12px_rgba(255,180,50,0.7)]"
: "bg-gray-300"
}`} />

<p className={`text-lg transition-all duration-300 ${
active===i
? "font-semibold text-black"
: "text-gray-500"
}`}>
{f.title}
</p>

</motion.div>
))}

</div>

<motion.button
whileHover={{ scale:1.06 }}
whileTap={{ scale:0.97 }}
className="mt-12 px-9 py-3 rounded-full bg-black text-white font-medium shadow-xl hover:shadow-2xl transition"
>
Get Started →
</motion.button>

</div>


{/* RIGHT SIDE */}

<div className="relative flex justify-center overflow-visible">

<motion.div
animate={{ rotate:360 }}
transition={{ repeat:Infinity,duration:55,ease:"linear" }}
className="absolute w-[780px] h-[780px] rounded-full bg-gradient-to-r from-indigo-200/30 via-blue-200/30 to-yellow-200/30 blur-[140px]"
/>

<div
ref={outerScrollRef}
className="relative h-[650px] w-[900px] -left-[100px] overflow-y-scroll hide-scrollbar"
>
<div className="h-[4000px]" />
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="relative outline outline-1 outline-gray-300/60 rounded-2xl p-6">

<motion.div
initial={{ scale:1 }}
whileHover={{
scale:1.12,
rotateX:10,
rotateY:-10,
y:-25
}}
transition={{
type:"spring",
stiffness:200,
damping:20
}}
style={{ perspective:1400 }}
>

<div className="relative">

<div className="absolute -inset-24 bg-gradient-to-r from-indigo-400/20 via-blue-300/20 to-yellow-300/20 blur-[140px] rounded-full"/>

<img
src="/laptoptrans.png"
className="relative w-[700px] max-w-none drop-shadow-[0_120px_200px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_160px_260px_rgba(0,0,0,0.6)] transition-all duration-500"
/>

<div
  ref={laptopScrollRef}
  className="absolute top-[27%] left-[17.5%] w-[65%] h-[43%] overflow-y-auto rounded-xl 
  bg-black hide-scrollbar shadow-inner 
  border border-white/15 ring-1 ring-black/40"
>

{FEATURES.map((f,i)=>(
<img
key={i}
src={f.image}
className="w-full h-full object-cover"
/>
))}

</div>

</div>

</motion.div>

</div>

</div>

<div className="absolute right-[-35px] top-1/2 -translate-y-1/2 h-[340px] w-[3px] bg-gray-200 rounded-full overflow-hidden">

<motion.div
className="w-full bg-gradient-to-b from-yellow-400 to-orange-400"
style={{ height:progressHeight }}
/>

</div>

</div>

</div>

</section>
  );
}
