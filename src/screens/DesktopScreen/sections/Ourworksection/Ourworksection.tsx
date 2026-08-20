// import React from "react";
// import { motion } from "framer-motion";

// interface Step {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
//   desktopTop: string;
//   desktopLeft: string;
//   desktopRight: string;
//   desktopBottom: string;
// }

// const steps: Step[] = [
//   {
//     id: 1,
//     title: "Farm Planning & Design",
//     description:
//       "Strategic Farm Layout Planning, Infrastructure Design, Resource Optimization And Sustainable Development For Maximum Productivity.",
//     icon: "/public/Frame 1523.png",
//     desktopTop: "8.5%",
//     desktopLeft: "10.5%",
//     desktopRight: "5%",
//     desktopBottom: "6%",
//   },
//   {
//     id: 2,
//     title: "Farm Contracting",
//     description:
//       "End-To-End Farm Construction Services Including Sheds, Livestock Housing, Farmhouses, Fencing, Water Systems And Civil Infrastructure.",
//     icon: "/public/Frame 1525.png",
//     desktopTop: "25%",
//     desktopLeft: "20.5%",
//     desktopRight: "5%",
//     desktopBottom: "6%",
//   },
//   {
//     id: 3,
//     title: "Farm House Development",
//     description:
//       "End-To-End Farm Construction Services Including Sheds, Livestock Housing, Farmhouses, Fencing, Water Systems And Civil Infrastructure.",
//     icon: "/public/Frame 1526.png",
//     desktopTop: "44%",
//     desktopLeft: "23.9%",
//     desktopRight: "5%",
//     desktopBottom: "6%",
//   },
//   {
//     id: 4,
//     title: "Farm Automation & Equipment Installation",
//     description:
//       "Smart Farming Solutions With Automated Feeding Systems, Climate Control, IoT Monitoring, Machinery Setup And Equipment Installation.",
//     icon: "/public/Frame 1528.png",
//     desktopTop: "63%",
//     desktopLeft: "20.5%",
//     desktopRight: "6%",
//     desktopBottom: "6%",
//   },
//   {
//     id: 5,
//     title: "Farm Management System",
//     description:
//       "Digital Farm Management Solutions For Monitoring Operations, Production Tracking, Inventory Control, Financial Management And Performance Analytics.",
//     icon: "/public/Frame 1529.png",
//     desktopTop: "80%",
//     desktopLeft: "10%",
//     desktopRight: "5%",
//     desktopBottom: "6%",
//   },
// ];

// export const Ourworksection = (): JSX.Element => {
//   return (
//     <section className="relative w-full overflow-hidden #8f0c0c py-16 lg:py-24">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">

//         {/* ================= HEADER ================= */}
//         <div className="flex justify-end mb-12 lg:mb-0 lg:absolute lg:right-16 lg:top-0 lg:z-30">
//           <div className="text-right">
//             <h2 className="font-[Poppins] font-bold text-[#111111] text-[32px] md:text-[44px] leading-tight tracking-tight">
//               Our Working Method
//             </h2>
//             <p className="mt-2 font-[Poppins] font-semibold text-[#82B444] text-[16px] md:text-[20px]">
//               Azhizen Work
//             </p>
//           </div>
//         </div>

//         {/* ================= TIMELINE AREA ================= */}
//         <div className="relative w-full min-h-auto lg:h-[780px] flex flex-col lg:block mt-8">

//           {/* BACKGROUND CIRCLE GRAPHIC (Desktop Only) */}
//           <div
//             className="hidden lg:block absolute border-[1.5px] border-gray-300 rounded-full pointer-events-none z-0"
//             style={{
//               width: "580px",
//               height: "600px",
//               left: "-225px",
//               top: "90px",
//             }}
//           />

//           {/* ================= TIMELINE ITEMS ================= */}
//           <div className="flex flex-col gap-12 lg:gap-0 w-full h-full relative z-10">
//             {steps.map((step, i) => (
//               <motion.div
//                 key={step.id}
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:absolute lg:w-[680px] xl:w-[780px]"
//                 style={{
//                   top: typeof window !== "undefined" && window.innerWidth >= 1024 ? step.desktopTop : undefined,
//                   left: typeof window !== "undefined" && window.innerWidth >= 1024 ? step.desktopLeft : undefined,
//                   transform: typeof window !== "undefined" && window.innerWidth >= 1024 ? "translate(-48px, -48px)" : undefined,
//                 }}
//               >
//                 {/* Step Circle Badge */}
//                 <div className="w-24 h-24 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center flex-shrink-0 p-5 hover:scale-105 transition-all duration-300 relative z-20">
//                   <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
//                 </div>

//                 {/* Text Block */}
//                 <div className="flex flex-col max-w-[540px] lg:pl-2">
//                   <h3 className="font-[Poppins] font-bold text-[18px] md:text-[19px] text-[#111111] mb-1.5 leading-snug">
//                     {step.title}
//                   </h3>
//                   <p className="font-[Poppins] text-[#4A4A4A] text-[13.5px] md:text-[14px] leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile vertical line */}
//           <div className="absolute left-[47px] top-[48px] bottom-[48px] w-[1.5px] bg-gray-300 lg:hidden -z-10" />

//         </div>
//       </div>
//     </section>
//   );
// };


import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  desktopTop: string;
  desktopLeft: string;
  desktopRight: string;
  desktopBottom: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Farm Planning & Design",
    description:
      "Strategic Farm Layout Planning, Infrastructure Design, Resource Optimization And Sustainable Development For Maximum Productivity.",
    icon: "/Frame 1523.png",
    desktopTop: "8.5%",
    desktopLeft: "10.5%",
    desktopRight: "5%",
    desktopBottom: "6%",
  },
  {
    id: 2,
    title: "Farm Contracting",
    description:
      "End-To-End Farm Construction Services Including Sheds, Livestock Housing, Farmhouses, Fencing, Water Systems And Civil Infrastructure.",
    icon: "/Frame 1525.png",
    desktopTop: "25%",
    desktopLeft: "20.5%",
    desktopRight: "5%",
    desktopBottom: "6%",
  },
  {
    id: 3,
    title: "Farm House Development",
    description:
      "End-To-End Farm Construction Services Including Sheds, Livestock Housing, Farmhouses, Fencing, Water Systems And Civil Infrastructure.",
    icon: "/Frame 1526.png",
    desktopTop: "44%",
    desktopLeft: "23.9%",
    desktopRight: "5%",
    desktopBottom: "6%",
  },
  {
    id: 4,
    title: "Farm Automation & Equipment Installation",
    description:
      "Smart Farming Solutions With Automated Feeding Systems, Climate Control, IoT Monitoring, Machinery Setup And Equipment Installation.",
    icon: "/Frame 1528.png",
    desktopTop: "63%",
    desktopLeft: "20.5%",
    desktopRight: "6%",
    desktopBottom: "6%",
  },
  {
    id: 5,
    title: "Farm Management System",
    description:
      "Digital Farm Management Solutions For Monitoring Operations, Production Tracking, Inventory Control, Financial Management And Performance Analytics.",
    icon: "/Frame 1529.png",
    desktopTop: "80%",
    desktopLeft: "10%",
    desktopRight: "5%",
    desktopBottom: "6%",
  },
];

export const Ourworksection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#F4F4F4] pt-6 pb-16 lg:pt-8 lg:pb-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">

        {/* ================= HEADER (FADE IN FROM TOP) ================= */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end mb-16 lg:mb-0 lg:absolute lg:right-16 lg:top-0 lg:z-30"
        >
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
            <h2 className="font-[Poppins] font-bold text-[#111111] text-[32px] md:text-[44px] leading-tight tracking-tight">
              Our Working Method
            </h2>
            <p className="mt-2 font-[Poppins] font-semibold text-[#82B444] text-[16px] md:text-[20px]">
              Azhizen Work
            </p>
            {/* 🟢 Mobile decorative accent line under header */}
            <div className="flex gap-1.5 mt-3 lg:hidden">
              <span className="w-10 h-1.5 rounded-full bg-[#82B444]"></span>
              <span className="w-2 h-1.5 rounded-full bg-[#82B444]"></span>
            </div>
          </div>
        </motion.div>

        {/* ================= TIMELINE AREA ================= */}
        <div className="relative w-full min-h-auto lg:h-[780px] flex flex-col lg:block mt-8">

          {/* BACKGROUND CIRCLE GRAPHIC (FADE IN WITH SCALE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block absolute border-[1.5px] border-gray-300 rounded-full pointer-events-none z-0"
            style={{
              width: "580px",
              height: "600px",
              left: "-225px",
              top: "90px",
            }}
          />

          {/* ================= TIMELINE ITEMS SYSTEM CONTAINER ================= */}
          <div className="flex flex-col gap-10 lg:gap-0 w-full h-full relative z-10 pl-2 sm:pl-8 lg:pl-0">

            {/* 🛠️ VERTICAL TIMELINE TRACK RAIL (Mobile Only - Fade In) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-[47px] sm:left-[55px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-gray-300 lg:hidden z-0"
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, x: 0 }
                    : { opacity: 0, y: 30, x: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.12, // Staggered fade-in effect
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-row items-stretch gap-6 sm:gap-10 lg:absolute lg:w-[680px] xl:w-[780px] max-lg:!top-auto max-lg:!left-auto max-lg:!transform-none lg:-translate-x-12 lg:-translate-y-12 z-10"
                style={{
                  top: step.desktopTop,
                  left: step.desktopLeft,
                }}
              >
                {/* TIMELINE COUNTER BUBBLE LINK ANCHOR */}
                <div className="flex flex-col items-center justify-start flex-shrink-0 relative">
                  {/* Step Circle Badge */}
                  <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] flex items-center justify-center p-5 hover:scale-105 transition-all duration-300 relative z-20">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />

                    {/* 🟢 Green Step Counter Bubble Number */}
                    <span className="absolute -top-1.5 -right-1.5 lg:hidden w-7 h-7 rounded-full bg-[#4CB038] text-white text-[12px] font-bold flex items-center justify-center font-[Poppins] shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* White Descriptive Container Card */}
                <div className="flex-grow flex flex-col justify-center bg-white rounded-[14px] border border-gray-100/80 p-5 sm:p-7 shadow-[0px_8px_30px_rgba(0,0,0,0.04)] lg:shadow-none lg:border-none lg:p-0 lg:bg-transparent max-w-[580px] border-l-[4px] border-l-[#7CB142]/30 lg:border-l-0">
                  <h3 className="font-[Poppins] font-bold text-[17px] sm:text-[19px] text-[#111111] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-[Poppins] text-[#555555] text-[13px] sm:text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};