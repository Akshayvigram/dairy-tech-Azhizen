// import { useLocation, useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import { FooterSection } from "../FooterSection";
// import { HeroSection } from "../HeroSection";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { services, type Service } from "../../../../lib/services";
// import { Navbar } from "../../../../components/Navbar";
// import { AnimatePresence, motion } from "framer-motion";

// const ServiceView: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const service = location.state?.service as Service;

//   const [mainImage, setMainImage] = useState(service?.image || 'https://via.placeholder.com/400x400');
//   const [tab, setTab] = useState<"features" | "specs" | "apps">("features");

//   // Thumbnails matching the layout
//   const thumbs = [service?.image || 'https://via.placeholder.com/80', 'https://via.placeholder.com/80/eee', 'https://via.placeholder.com/80/ddd'];

//   if (!service) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <HeroSection showOnlyNav />
//         <div className="max-w-3xl mx-auto p-8">Service not found.</div>
//         <FooterSection />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white py-6" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>

//       {/* Navigation */}
//       <Navbar showOnlyNav />

//       <main className="max-w-[1200px] mx-auto w-full px-6 py-12">
//         {/* TOP SERVICE SECTION */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* LEFT IMAGE BLOCK: Circular styling from image */}
//           <div className="flex flex-col items-center">
//             <div className="relative">
//                 <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-[6px] border-gray-50 shadow-xl">
//                 <img
//                     src={mainImage}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                 />
//                 </div>
//                 {/* Decorative curve line from the original design */}
//                 {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 border-b border-gray-300 rounded-[50%]"></div>
//                 <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-3 h-3 bg-lime-500 rounded-full border-2 border-white"></div> */}
//             </div>

//             <div className="flex gap-4 mt-12">
//               {/* {thumbs.map((t, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setMainImage(t)}
//                   className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${mainImage === t ? 'border-lime-500 scale-105' : 'border-transparent hover:border-gray-300'}`}
//                 >
//                   <img src={t} className="w-full h-full object-cover" />
//                 </button>
//               ))} */}
//             </div>
//           </div>

//           {/* RIGHT SERVICE INFO */}
//           <div className="flex flex-col">
//             <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">{service.category}</p>
//             <h1 className="text-4xl font-extrabold mt-2 text-gray-900 leading-tight">
//               {service.title}
//             </h1>
//             <p className="text-lg font-medium text-gray-600 mt-2 italic">
//               {service.subtitle}
//             </p>

//             <div className="text-3xl font-black mt-6 text-gray-900">
//               {service.price}
//             </div>

//             <p className="text-gray-600 mt-6 leading-relaxed text-base max-w-[500px]">
//               {service.description}
//             </p>

//             {/* EXPERT GUIDANCE BOX */}
//             <div className="mt-36   flex justify-between items-center ">
//               <p className="text-sm text-gray-700 font-semibold leading-snug">
//                 Share Your Requirements And Get<br />Expert Guidance Today.
//               </p>
//               <Button
//                 onClick={() => navigate('/enquiry', { state: { service } })}
//                 className="bg-[#8cc63f] hover:bg-[#043b66] text-white px-10 py-6 rounded-md text-xl font-bold transition-colors cursor-pointer">
//                 Let's Talk
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* TABS SECTION */}
//         <div className="mt-24">
//           <div className="flex gap-8 text-sm border-b pb-2">
//             {["features", "specs", "apps"].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setTab(t as any)}
//                 className={`pb-2 ${
//                   tab === t
//                     ? "border-b-2 border-black font-semibold"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {t === "features" && "Key Features Section"}
//                 {t === "specs" && "Specifications Section"}
//                 {t === "apps" && "Applications Section"}
//               </button>
//             ))}
//           </div>

//           <div className="bg-[#f0f4f7] mt-8 p-10 rounded-xl border border-gray-100">
//             {tab === "features" && (
//               <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
//                 {service.keyFeatures?.map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
//                         <span className="text-black text-xl leading-none">•</span>
//                         {item}
//                     </li>
//                 ))}
//               </ul>
//             )}
//             {tab === "specs" && (
//               <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
//                 {service.specifications?.map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
//                         <span className="text-black text-xl leading-none">•</span>
//                         {item}
//                     </li>
//                 ))}
//               </ul>
//             )}
//             {tab === "apps" && (
//               <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
//                 {service.applications?.map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
//                         <span className="text-black text-xl leading-none">•</span>
//                         {item}
//                     </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* SIMILAR PRODUCTS */}
//         <div className="mt-12">
//           <h3 className="text-xl font-bold mb-4">
//             View Similar Products
//           </h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[1300px] mx-auto px-2 sm:px-4 pb-0 py-2 sm:py-3 md:py-5">
//               {services.map((service) => (


//                     <motion.div
//                       key={service.id}
//                       layout
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.3, delay: 0.1 }}
//                     >
//                     <Card className="h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
//                       <CardContent className="p-0">
//                         <div className="relative h-[200px] overflow-hidden">
//                           <img
//                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                             alt={service.title}
//                             src={service.image}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                         </div>

//                         <div className="p-4">
//                           <h4 className="font-inter font-semibold text-black mb-1 line-clamp-1">
//                             {service.title}
//                           </h4>
//                           <p className="text-gray-600 text-xs mb-3 line-clamp-2">
//                             {service.description}
//                           </p>
//                           <div className="flex gap-2">
//                             <Button
//                               onClick={() => {
//                                 window.scrollTo(0, 0);
//                                 navigate('/service', { state: { service } });
//                               }}
//                               variant="ghost"
//                               className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-xs font-medium rounded-lg"
//                             >
//                               View
//                             </Button>
//                             <Button
//                               onClick={() => navigate('/enquiry', { state: { service } })}
//                               className="flex-1 h-8 bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium rounded-lg"
//                             >
//                               Enquire
//                             </Button>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}

//             </div>
//         </div>
//       </main>

//       <FooterSection />
//     </div>
//   );
// };

// export default ServiceView;


import { useLocation, useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FooterSection } from "../FooterSection";
import { Button } from "../../../../components/ui/button";
import { services, type Service } from "../../../../lib/services";
import { Navbar } from "../../../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const ServiceView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const service = location.state?.service as Service;

  // Track active thumbnail selection by array index
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [tab, setTab] = useState<"features" | "specs" | "apps" | null>("features");

  // Reset tab and active image whenever service changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setTab("features");
    setActiveIndex(0);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col font-[Poppins]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Service not found</h2>
            <Button onClick={() => navigate("/shop")}>Back To Shop</Button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  // Gallery fallback
  const thumbs =
    (service as any).gallery && (service as any).gallery.length > 0
      ? (service as any).gallery
      : [
          service.image || "https://via.placeholder.com/400",
          service.image || "https://via.placeholder.com/400",
          service.image || "https://via.placeholder.com/400",
          service.image || "https://via.placeholder.com/400",
        ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-[Poppins] overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="max-w-[1800px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-12 pt-24 sm:pt-28 pb-6 md:pb-12 flex-1">

        {/* TOP PRODUCT SECTION */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 sm:gap-8 lg:gap-10 py-2 sm:py-6 max-w-[1100px] mx-auto w-full">

          {/* LEFT: GALLERY AREA */}
          <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">

            {/* 1. THUMBNAIL STACK CONTAINER */}
            <div className="w-[98px] sm:w-[108px] h-[360px] sm:h-[420px] flex flex-col flex-shrink-0 rounded-[12px] overflow-hidden shadow-xs border-l-2 border-t-2 border-b-2 border-[#4A4A4A] relative">
              {thumbs.slice(0, 4).map((imgUrl: string, i: number) => {
                const isActive = activeIndex === i;

                return (
                  <div
                    key={i}
                    className={`
                      relative
                      flex-1
                      w-full
                      min-h-0
                      overflow-hidden
                      ${i !== thumbs.slice(0, 4).length - 1 ? "border-b-2 border-[#4A4A4A]" : ""}
                    `}
                  >
                    {/* Right Gradient Border */}
                    <div
                      className="
                        absolute
                        top-0
                        right-0
                        w-[2px]
                        h-full
                        z-20
                        pointer-events-none
                      "
                      style={{
                        background:
                          "linear-gradient(to bottom, #1A1A1A 0%, #333333 10%, #B5B5B5 75%, #FFFFFF 100%)",
                        borderTopRightRadius: i === 0 ? "12px" : "0",
                        borderBottomRightRadius: i === 3 ? "12px" : "0",
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`
                        w-full h-full
                        flex items-center justify-center
                        p-0
                        transition-all duration-200
                        cursor-pointer
                        outline-none border-none
                        ${isActive ? "bg-white" : "bg-[#E1F2B4] hover:opacity-90"}
                      `}
                    >
                      <img
                        src={imgUrl}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* 2. MAIN DISPLAY CARD WITH CURVED ARC */}
            <div className="relative w-full max-w-[340px] h-[280px] sm:h-[335px] bg-white rounded-[12px] border-2 border-[#555555] p-4 sm:p-6 flex items-center justify-center shadow-xs">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                src={thumbs[activeIndex] || service.image}
                alt={service.title || "Service"}
                className="w-[85%] h-[85%] object-contain relative z-10"
              />

              {/* CURVED BOTTOM ACCENT LINE */}
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-[45px] sm:h-[55px] pointer-events-none z-0">
                <div className="w-full h-full border-b-[2px] border-[#d1d5db] rounded-b-[100%]" />
                <div className="absolute left-1/2 bottom-[-5px] -translate-x-1/2 w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] rounded-full bg-[#82b444] border-[3px] border-white shadow-xs" />
              </div>
            </div>

          </div>

          {/* RIGHT: DETAILS & CTA */}
          <div className="flex-1 w-full lg:max-w-[540px] flex flex-col justify-between self-stretch py-1 pl-0 lg:pl-2 text-left font-['Inter']">
            <div>
              {/* 1. CATEGORY BADGE WITH CHECKMARK */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f0f9e8] text-[#6bb01a] rounded-full text-xs font-semibold mb-4 border border-[#e1f2cd]">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{service.category || "Motor"}</span>
              </div>

              {/* TITLE & SUBTITLE BLOCK */}
              <div className="mb-4">
                <h1 className="text-black font-bold text-[22px] sm:text-[26px] leading-[130%] capitalize">
                  {service.title}
                </h1>
                <p className="text-gray-600 font-medium text-[14px] sm:text-[15px] leading-[130%] capitalize mt-1">
                  {service.subtitle || "Belt Drive Model | 2 Bucket Capacity"}
                </p>
              </div>

              {/* 2. PRICE PILL BADGE */}
              <div className="inline-block bg-[#f0f9e8] px-4 py-2 rounded-xl border border-[#e1f2cd] my-3">
                <span className="text-[#80cc00] font-extrabold text-[20px] sm:text-[22px]">
                  {service.price || "₹7,000"}
                </span>
                <span className="text-black font-bold text-xs uppercase ml-1">
                  + GST
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#333333] font-normal text-[14px] sm:text-[15px] leading-[150%] capitalize max-w-[520px] mt-2">
                {service.description ||
                  "Comes with a reliable pulsator system, durable liners, and 240 CC claw for smooth milking. Ideal for small to medium dairy farms, ensuring comfort for animals and better milk flow"}
              </p>
            </div>

            {/* 3. CTA CARD CONTAINER WITH ELEVATED SHADOW & ACCURATE "LET'S TALK ->" BUTTON */}
            <div className="mt-8 bg-white border border-gray-200/80 shadow-[0_8px_20px_rgba(0,0,0,0.08)] rounded-[14px] p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                {/* Headset Icon Circle */}
                <div className="w-11 h-11 rounded-full bg-[#f0f9e8] border border-[#e1f2cd] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#80cc00]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H5v-2a7 7 0 0 1 14 0v2h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <h4 className="text-black font-bold text-[14px] sm:text-[15px] leading-tight tracking-tight">
                    Share Your Requirements
                  </h4>
                  <p className="text-[#a0aab8] font-normal text-[12px] sm:text-[13px] leading-tight mt-1">
                    And Get Expert Guidance Today.
                  </p>
                </div>
              </div>

              <Button
                onClick={() =>
                  navigate("/enquiry", {
                    state: { service },
                  })
                }
                className="
                  w-full sm:w-auto
                  h-[42px]
                  px-6
                  text-[15px]
                  rounded-[10px]
                  bg-[#80cc00] hover:bg-[#72b800]
                  text-white
                  font-bold
                  shadow-none
                  transition-all
                  cursor-pointer
                  whitespace-nowrap
                  flex items-center justify-center gap-2.5
                "
              >
                <span>Let’s Talk</span>
                <svg
                  className="w-4 h-4 stroke-[2.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </div>

        </div>

        {/* BOTTOM TABS SECTION */}
        <div className="mt-8 sm:mt-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-none rounded-none sm:rounded-[16px] overflow-hidden font-['Poppins'] shadow-xs">

          {/* =========================================================
              1. MOBILE VIEW (< lg): ACCORDION / FAQ STYLE
              ========================================================= */}
          <div className="flex lg:hidden flex-col bg-[#EBFEDE] border-none">
            {[
              { id: "features", label: "Key Features Section" },
              { id: "specs", label: "Specifications Section" },
              { id: "apps", label: "Applications Section" },
            ].map((item) => {
              const isActive = tab === item.id;

              const contentList =
                item.id === "features"
                  ? service.keyFeatures || [
                      "Dual 25L Stainless Steel Buckets for increased volume.",
                      "High Suction Capacity – 450 LPM.",
                      "Belt Drive Motor for stable and quiet operation.",
                      "Heavy-Duty Trolley with wheels for easy farm mobility.",
                      "Oil-lubricated vacuum pump ensures smooth and low-noise performance.",
                    ]
                  : item.id === "specs"
                  ? service.specifications || [
                      "Bucket Capacity: 2 x 25 Liters (Stainless Steel 304).",
                      "Pumping Capacity: 450 Liters Per Minute.",
                      "Motor Rating: 1.0 HP / single-phase heavy-duty motor.",
                      "Pulsator Type: Pneumatic 60/40 ratio pulsation.",
                      "Operating Pressure: Standard 350-400 mmHg adjustable gauge.",
                    ]
                  : service.applications || [
                      "Suitable for small to medium-scale dairy farms.",
                      "Ideal for simultaneous milking of two cows or buffaloes.",
                      "Portable setup for remote shed and pasture operations.",
                      "Optimized for high-yield, hygienic raw milk collection.",
                      "Reduces manual labor time and improves animal comfort.",
                    ];

              return (
                <div key={item.id} className="border-b border-[#85e2fc]/60 last:border-b-0 w-full">
                  {/* Accordion Title Button */}
                  <button
                    type="button"
                    onClick={() => setTab(tab === item.id ? null : (item.id as any))}
                    className={`
                      w-full flex items-center justify-between
                      py-3.5 px-5 text-left
                      text-[15px] sm:text-[16px]
                      transition-all cursor-pointer outline-none
                      ${
                        isActive
                          ? "text-black font-bold bg-[#e1f9b3]"
                          : "text-[#7a8c71] font-semibold bg-[#EBFEDE] hover:text-black"
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    <span className={`text-xs transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {isActive && (
                    <div className="py-4 px-5 bg-[#e1f9b3] border-t border-[#85e2fc]/40">
                      <ul className="space-y-2.5 w-full pl-0 text-left flex flex-col">
                        {contentList.map((contentItem: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-[13px] sm:text-[14px] font-medium text-black leading-snug"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                            <span>{contentItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* =========================================================
              2. DESKTOP VIEW (≥ lg): SIDE-BY-SIDE TABS
              ========================================================= */}
          <div className="hidden lg:flex flex-row min-h-[180px] border border-[#85e2fc] rounded-[16px] overflow-hidden">
            {/* LEFT COLUMN: TABS */}
            <div className="w-[650px] bg-[#EBFEDE] border-r border-[#85e2fc] flex flex-col justify-stretch flex-shrink-0">
              {[
                { id: "features", label: "Key Features Section" },
                { id: "specs", label: "Specifications Section" },
                { id: "apps", label: "Applications Section" },
              ].map((item) => {
                const isActive = tab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTab(item.id as any)}
                    className={`
                      w-full flex-1
                      flex items-center justify-center
                      py-4 px-8 text-center
                      text-[18px] transition-all
                      border-b border-[#85e2fc]/60
                      last:border-b-0 cursor-pointer
                      ${
                        isActive
                          ? "text-black font-bold bg-transparent"
                          : "text-[#7a8c71] font-semibold hover:text-black bg-transparent"
                      }
                    `}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* RIGHT COLUMN: CONTENT PANE */}
            <div className="flex-1 py-6 px-8 bg-[#e1f9b3] flex items-center justify-start">
              <ul className="space-y-2 w-full max-w-[750px] pl-0 text-left flex flex-col justify-center">
                {(
                  tab === "features"
                    ? service.keyFeatures || [
                        "Dual 25L Stainless Steel Buckets for increased volume.",
                        "High Suction Capacity – 450 LPM.",
                        "Belt Drive Motor for stable and quiet operation.",
                        "Heavy-Duty Trolley with wheels for easy farm mobility.",
                        "Oil-lubricated vacuum pump ensures smooth and low-noise performance.",
                      ]
                    : tab === "specs"
                    ? service.specifications || [
                        "Bucket Capacity: 2 x 25 Liters (Stainless Steel 304).",
                        "Pumping Capacity: 450 Liters Per Minute.",
                        "Motor Rating: 1.0 HP / single-phase heavy-duty motor.",
                        "Pulsator Type: Pneumatic 60/40 ratio pulsation.",
                        "Operating Pressure: Standard 350-400 mmHg adjustable gauge.",
                      ]
                    : service.applications || [
                        "Suitable for small to medium-scale dairy farms.",
                        "Ideal for simultaneous milking of two cows or buffaloes.",
                        "Portable setup for remote shed and pasture operations.",
                        "Optimized for high-yield, hygienic raw milk collection.",
                        "Reduces manual labor time and improves animal comfort.",
                      ]
                ).map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[15px] font-medium text-black leading-snug"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* VIEW SIMILAR PRODUCTS SECTION */}
        <div className="mt-12 sm:mt-16 w-full max-w-[1150px] mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <h2 className="text-[20px] sm:text-[22px] font-semibold text-black mb-6 text-left">
            View Similar Products
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full justify-items-center sm:justify-items-start">
            <AnimatePresence mode="popLayout">
              {services
                .filter((s) => s.id !== service.id)
                .slice(0, 4)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="w-full max-w-[280px]"
                  >
                    {/* Card Frame */}
                    <div className="bg-white rounded-[16px] p-3 border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all flex flex-col justify-between h-full">
                      <div>
                        {/* Grey Image Container */}
                        <div className="h-[180px] bg-[#dce3e6] rounded-[12px] mb-3 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Content Area */}
                        <div className="px-1 text-left">
                          {/* Product Title */}
                          <h3 className="text-[13px] font-extrabold text-black uppercase tracking-tight line-clamp-1 mb-1">
                            {item.title}
                          </h3>

                          {/* Product Description */}
                          <p className="text-[11px] text-gray-500 font-medium leading-[1.35] line-clamp-4">
                            {item.description ||
                              "Comes With A Reliable Pulsator System, Durable Liners, And 240 CC Claw For Smooth Milking. Ideal For Small To Medium Dairy Farms, Ensuring Comfort For Animals And Better Milk Flow"}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-1 pt-4 pb-1 flex items-center justify-between gap-2 mt-auto">
                        {/* Price Display */}
                        <div className="flex flex-col text-left leading-tight">
                          <span className="font-extrabold text-[15px] text-black">
                            {item.price || "₹7,000"}
                          </span>
                          {item.price?.toString().includes("+") ||
                          item.price?.toString().includes("7000") ? (
                            <span className="text-[9px] font-bold text-gray-700 uppercase mt-0.5">
                              +GST
                            </span>
                          ) : null}
                        </div>

                        {/* Bright Green View Button */}
                        <Button
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            navigate("/service", {
                              state: { service: item },
                            });
                          }}
                          className="h-[34px] px-7 bg-[#8cc600] hover:bg-[#7bb000] text-white text-[13px] font-bold rounded-[6px] transition-colors cursor-pointer shadow-none"
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
};

export default ServiceView;