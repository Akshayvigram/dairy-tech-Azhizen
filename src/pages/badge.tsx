// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaInstagram,
//   FaWhatsapp,
//   FaFacebook
// } from "react-icons/fa";
// // import { Facebook, Instagram } from "lucide-react";
// import { MdOutlineVerified, MdVerifiedUser } from "react-icons/md";
// import { LuNotepadText } from "react-icons/lu";
// import { PiSpeedometerFill } from "react-icons/pi";




// const avatars = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

// export const BadgeSection = (): JSX.Element => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setIsVideoOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <section className="w-full py-6 sm:py-8 md:py-10 bg-[#F5F5F5]">
//       <div className="max-w-[1140px] mx-auto px-4">
        {/* <section className="w-full py-6 sm:py-8 md:py-10 bg-[#F5F5F5]">

    <div className="max-w-[1140px] mx-auto px-4"> */}

        {/* Main Grid */}
        // <div
        //   className="
        //   grid
        //   grid-cols-1
        //   lg:grid-cols-2
        //   gap-10
        //   lg:gap-16
        //   items-start
        // "
        // >

          {/* LEFT SIDE */}
          // <div className="flex flex-col">

          //   {/* Heading */}
            // <h2
            //   className="
            //   text-[32px]
            //   md:text-[44px]
            //   leading-[1.2]
            //   font-bold
            //   text-black
            //   font-[Poppins]
            //   max-w-[700px]
            // "
            // >
            //   Why is our dairy & cow farm maintenance company the right choice for your farm?
            // </h2>

            {/* Description */}
            // <p
            //   className="
            //   mt-8
            //   text-[18px]
            //   md:text-[22px]
            //   leading-[1.5]
            //   text-[#5B5555]
            //   font-[Poppins]
            //   max-w-[720px]
            // "
            // >
            //   Built on hands-on dairy farm experience, we understand cow health,
            //   hygiene, and equipment care. Our solutions are practical,
            //   field-tested, and focused on long-term farm success.
            // </p>

            {/* Social Icons */}
            {/* Social Icons */}
            {/* Social Icons */}
    //         <div className="flex items-center gap-6 mt-10">

    //           <FaInstagram
    //             className="
    //   text-[40px]
    //   text-[#555]
    //   cursor-pointer
    //   hover:text-pink-500
    //   transition
    // "
    //           />

    //           <FaWhatsapp
    //             className="
    //   text-[40px]
    //   text-[#555]
    //   cursor-pointer
    //   hover:text-green-500
    //   transition
    // "
    //           />

    //           <FaFacebook
    //             className="
    //   text-[40px]
    //   text-[#555]
    //   cursor-pointer
    //   hover:text-blue-500
    //   transition
    // "
    //           />

    //         </div>

            {/* Bottom Features */}
            // <div
            //   className="
            //   grid
            //   grid-cols-2
            //   sm:grid-cols-3
            //   gap-10
            //   mt-20
            // "
            // >

              {/* Item 1 */}
              // <div className="flex flex-col items-center text-center">

                {/* <img
                  src="/approved.png"
                  alt="Approved"
                  className="w-14 h-14 object-contain"
                /> */}
              //   <MdOutlineVerified />


              //   <h4
              //     className="
              //     mt-4
              //     text-[18px]
              //     font-semibold
              //     text-[#4F4A4A]
              //     leading-[1.3]
              //     font-[Poppins]
              //   "
              //   >
              //     Approved Product
              //   </h4>

              // </div>

              {/* Item 2 */}
              // <div className="flex flex-col items-center text-center">

                {/* <img
                  src="/secure.png"
                  alt="Secure"
                  className="w-14 h-14 object-contain"
                /> */}
              //   <MdVerifiedUser />

              //   <h4
              //     className="
              //     mt-4
              //     text-[18px]
              //     font-semibold
              //     text-[#4F4A4A]
              //     leading-[1.3]
              //     font-[Poppins]
              //   "
              //   >
              //     Safe & Secure Service
              //   </h4>

              // </div>

              {/* Item 3 */}
              // <div className="flex flex-col items-center text-center">

                {/* <img
                  src="/secure.png"
                  alt="Secure"
                  className="w-14 h-14 object-contain"
                /> */}
          //       <MdVerifiedUser />

          //       <h4
          //         className="
          //         mt-4
          //         text-[18px]
          //         font-semibold
          //         text-[#4F4A4A]
          //         leading-[1.3]
          //         font-[Poppins]
          //       "
          //       >
          //         Safe & Secure Service
          //       </h4>

          //     </div>

          //   </div>

          // </div>

          {/* RIGHT SIDE */}
          // <div className="flex flex-col gap-8">

            {/* Card 1 */}
            // <div
            //   className="
            //   bg-[#D9E2E1]
            //   rounded-2xl
            //   p-5
            //   flex
            //   gap-5
            //   items-start
            // "
            // >

              {/* Icon */}
              // <div
              //   className="
              //   min-w-[95px]
              //   h-[95px]
              //   bg-white
              //   rounded-lg
              //   flex
              //   items-center
              //   justify-center
              // "
              // >
                {/* <img
                  src="/document-icon.png"
                  alt="Solutions"
                  className="w-14 h-14 object-contain"
                /> */}
              //   <LuNotepadText />


              // </div>

              {/* Content */}
            //   <div>

            //     <h3
            //       className="
            //       text-[24px]
            //       font-bold
            //       text-black
            //       font-[Poppins]
            //     "
            //     >
            //       Scalable Solutions
            //     </h3>

            //     <p
            //       className="
            //       mt-3
            //       text-[18px]
            //       leading-[1.5]
            //       text-[#2F2F2F]
            //       font-[Poppins]
            //     "
            //     >
            //       From small family dairies to large commercial farms,
            //       we offer customized solutions based on your size,
            //       budget, and goals
            //     </p>

            //   </div>

            // </div>

            {/* Card 2 */}
            // <div
            //   className="
            //   bg-[#D9E2E1]
            //   rounded-2xl
            //   p-5
            //   flex
            //   gap-5
            //   items-start
            // "
            // >

            //   <div
            //     className="
            //     min-w-[95px]
            //     h-[95px]
            //     bg-white
            //     rounded-lg
            //     flex
            //     items-center
            //     justify-center
            //   "
            //   >
                {/* <img
                  src="/speed-icon.png"
                  alt="Fast Response"
                  className="w-14 h-14 object-contain"
                /> */}
            //     <PiSpeedometerFill />

            //   </div>

            //   <div>

            //     <h3
            //       className="
            //       text-[24px]
            //       font-bold
            //       text-black
            //       font-[Poppins]
            //     "
            //     >
            //       Fast Response
            //     </h3>

            //     <p
            //       className="
            //       mt-3
            //       text-[18px]
            //       leading-[1.5]
            //       text-[#2F2F2F]
            //       font-[Poppins]
            //     "
            //     >
            //       We provide fast support and quick response to ensure uninterrupted farm operations.
            //     </p>

            //   </div>

            // </div>

            // {/* Card 3 */}
            // <div
            //   className="
            //   bg-[#D9E2E1]
            //   rounded-2xl
            //   p-5
            //   flex
            //   gap-5
            //   items-start
            // "
            // >

            //   <div
            //     className="
            //     min-w-[95px]
            //     h-[95px]
            //     bg-white
            //     rounded-lg
            //     flex
            //     items-center
            //     justify-center
            //   "
            //   >
                {/* <img
                  src="/speed-icon.png"
                  alt="Fast Response"
                  className="w-14 h-14 object-contain"
                /> */}
  //               <PiSpeedometerFill />

  //             </div>

  //             <div>

  //               <h3
  //                 className="
  //                 text-[24px]
  //                 font-bold
  //                 text-black
  //                 font-[Poppins]
  //               "
  //               >
  //                 Fast Response
  //               </h3>

  //               <p
  //                 className="
  //                 mt-3
  //                 text-[18px]
  //                 leading-[1.5]
  //                 text-[#2F2F2F]
  //                 font-[Poppins]
  //               "
  //               >
  //                 We provide fast support and quick response to ensure uninterrupted farm operations.
  //               </p>

  //             </div>

  //           </div>

  //         </div>

  //       </div>

  //     </div>

  //   </section>
  // );



  {/* <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-10"
        >
          Left: Avatars + text
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={ "/profile.png"}
                  alt={`avatar-${i}`}
                  className={`w-13 h-12 sm:w-12  sm:h-14 rounded-full  object-cover `}
                  style={{ zIndex: avatars.length - i }}
                />
              ))}
            </div>

            <div>
              <h3 className="font-['Inter'] font-bold text-black text-[14px] sm:text-[16px]">
                100K+ Client With Positive Reviews
              </h3>

            </div>
          </div>

          Center: Circular badge (inline SVG with textPath)
          <div className="flex justify-center md:justify-center">
            <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  path for circular text slightly outside the white ring
                  <path id="circlePath" d="M100,35 a60,65 0 1,1 -0.1,0"/>
                </defs>
                outer thin stroke ring
                Outer Dark Green Border
      <circle cx="100" cy="100" r="95" fill="none" stroke="#0b3a16" strokeWidth="2.5" />
                white ring

                inner green hub
                <circle cx="100" cy="100" r="50" fill="#ffffff" />

                Cow-style 3-blade logo: three centered triangles rotated 120deg
                <g transform="translate(100,100) rotate(-20) scale(1.6)">
                  <g transform="rotate(0)">
                    <path d="M0 -20 L10 6 L-10 6 Z" fill="#175c2e" />
                  </g>
                  <g transform="rotate(120)">
                    <path d="M0 -20 L10 6 L-10 6 Z" fill="#175c2e" />
                  </g>
                  <g transform="rotate(240)">
                    <path d="M0 -20 L10 6 L-10 6 Z" fill="#175c2e" />
                  </g>
                </g>

                circular text along path, startOffset centers text at top
                <text  fontSize="19" fontWeight="bold" fill="#0b3a16"  style={{ fontFamily: 'Inter, sans-serif' }}>
                  <textPath href="#circlePath" startOffset="5%">• Dairy Farming  • Automation  • Services •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full" />
              </div>
            </div>
          </div>

          Right: Text + video thumbnail
          <div className="flex items-center gap-4 md:gap-6 justify-end">
            <div className="text-right hidden sm:block">
              <h3 className="font-['Inter']  font-bold text-black text-[14px] sm:text-[16px]">
                Healthy Life With Fresh Products and Services
              </h3>

            </div>

            <div className="relative w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-lg overflow-hidden shadow-md cursor-pointer">
              <button
                aria-label="Open video"
                onClick={() => setIsVideoOpen(true)}
                className="w-full h-full p-0 m-0"
                style={{ background: "none", border: "none" }}
              >
                <img src="https://img.youtube.com/vi/IxrIOiOpIwI/hqdefault.jpg" alt="video thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center opacity-95 hover:opacity-100 transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7L8 5z" fill="white" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div> */}








  //</div>
  //   { Video modal with YouTube iframe }
  //   {isVideoOpen && (
  //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setIsVideoOpen(false)}>
  //       <div className="relative w-[90%] max-w-[900px] aspect-video bg-black rounded" onClick={(e) => e.stopPropagation()}>
  //         <button
  //           onClick={() => setIsVideoOpen(false)}
  //           className="absolute top-3 right-3 text-white text-xl bg-black/40 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/60 transition z-10"
  //           aria-label="Close video"
  //         >
  //           ×
  //         </button>
  //         <iframe
  //           width="100%"
  //           height="100%"
  //           src="https://www.youtube.com/embed/IxrIOiOpIwI?autoplay=1&controls=1"
  //           title="YouTube video"
  //           frameBorder="0"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //           allowFullScreen
  //           className="rounded"
  //         />
  //       </div>
  //     </div>
  //   )}
  // </section>

// };

// const featureCards = [
//   {
//     icon: "/frame-886-2.svg",
//     title: "Scalable Solutions",
//     description: "From small family dairies to large commercial farms, we offer customized solutions based on your size, budget, and goals",
//   },
//   {
//     icon: "/frame-886.svg",
//     title: "Fast Response",
//     description: "We provide fast support and quick response to ensure uninterrupted farm to operations.",
//   },
//   {
//     icon: "/frame-886.svg",
//     title: "Fast Response",
//     description: "We provide fast support and quick response to ensure uninterrupted farm operations.",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // Cards will appear one after another
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     x: 50, // Start slightly to the right
//     rotateY: 15
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     rotateY: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.3,
//       duration: 0.8
//     }
//   },
// };

// const socialIcons = [
//   { src: "/ri-instagram-line.svg", alt: "Instagram", label: "Instagram" },
//   { src: "/ic-baseline-whatsapp.svg", alt: "WhatsApp", label: "WhatsApp" },
//   { src: "/ic-baseline-facebook.svg", alt: "Facebook", label: "Facebook" },
// ];

// const badges = [
//   {
//     icon: "/bitcoin-icons-verify-filled.svg",
//     alt: "Verified",
//     title: "Approved Product",
//   },
//   {
//     icon: "/mingcute-safety-certificate-fill.svg",
//     alt: "Safe",
//     title: "Safe & Secure Service",
//   },
//   {
//     icon: "/mingcute-safety-certificate-fill.svg",
//     alt: "Secure",
//     title: "Safe & Secure Service",
//   },
// ];
// export const WhyChooseFarm = (): JSX.Element => {
//   return (
//     <div id="about" className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
//       <div className="max-w-[1140px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 md:gap-16">

//           {/* LEFT COLUMN - CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex flex-col"
//           >
//             {/* Heading + Text */}
//             <div className="mb-8 sm:mb-10 md:mb-12">
//               <h1 className="font-['Inter'] font-bold text-black text-[20px] sm:text-[28px] md:text-[34px] leading-[1.2] mb-3 sm:mb-4 md:mb-5 max-w-[520px]">
//                 Why is our dairy & cow farm maintenance company the right choice for your farm?
//               </h1>
//               <p className="font-['Inter'] font-medium text-[#605a5a] text-[13px] sm:text-[15px] md:text-[17px] leading-[1.6] max-w-[520px]">
//                 Built on hands-on dairy farm experience, we understand cow health, hygiene, and equipment care.
//               </p>
//             </div>
//                         {/* Badges */}
//             <div className="flex justify-start gap-3 sm:gap-4 md:gap-9 py-2 sm:py-3 md:py-4 flex-wrap mb-8 sm:mb-12 md:mb-16">
//               {badges.map((badge, index) => (
//                 <div key={index} className="flex flex-col items-center gap-3 sm:gap-3 ">
//                   <div className="w-8 sm:w-9 md:w-12  hover:scale-110 transition gap-60">
//                     <img
//                       className="w-full h-full object-contain"
//                       alt={badge.alt}
//                       src={badge.icon}
//                     />
//                   </div>

//                   <p className="font-['Inter'] font-medium text-[#4e4d4d] text-[10px] sm:text-[11px] md:text-[13px] text-center max-w-[80px] sm:max-w-[100px] md:max-w-[110px]">
//                     {badge.title}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Social Icons & Badges logic remains similar but with motion */}
//             <div className="flex gap-3 sm:gap-4 mb-8  sm:mb-10 md:mb-12">
//               {socialIcons.map((icon, index) => (
//                 <motion.a

//                   key={index} href="#" className="w-9"
//                 >
//                   <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
//                 </motion.a>
//               ))}

//             </div>
//           </motion.div>



//           {/* RIGHT COLUMN - ANIMATED CARDS */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:w-[450px]"
//           >
//             {featureCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{
//                   scale: 1.03,
//                   x: -5,
//                   boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"
//                 }}
//                 className="bg-[#c4d1d4] rounded-lg sm:rounded-xl flex items-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-[22px] cursor-default border border-transparent hover:border-white/50 transition-colors"
//               >
//                 {/* Icon Box */}
//                 <div className="bg-white rounded-[8px] sm:rounded-[10px] w-[60px] sm:w-[80px] md:w-[90px] h-[70px] sm:h-[80px] md:h-[100px] flex items-center justify-center flex-shrink-0 shadow-sm">
//                   <motion.img
//                     initial={{ scale: 0.8 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     src={card.icon}
//                     alt={card.title}
//                     className="w-2/2 h-full object-contain"
//                   />
//                 </div>





//                 {/* Text */}
//                 <div className="flex flex-col gap-1">
//                   <h3 className="font-['Inter'] font-bold text-black text-[14px] sm:text-[16px] md:text-[18px]">
//                     {card.title}
//                   </h3>
//                   <p className="font-['Inter'] text-black/80 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5]">
//                     {card.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { motion } from "framer-motion";
// import { LuArrowUpRight } from "react-icons/lu";
// import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

// export const BadgeSection = (): JSX.Element => {
//   return (
//     <section
//       id="about"
//       className="w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden"
//     >
//       <div className="max-w-[1510px] mx-auto px-18 md:px-24 relative">

//         {/* Two-Column Responsive Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-8 lg:gap-20 items-start w-full">

//           {/* ================= LEFT SIDE: MARKETING CONTENT & ACTIONS ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-start w-full"
//           >
//             {/* Main Heading Text */}
//             <h2 className="font-[Poppins] font-bold mt-20 text-[#1F4D2F] text-[25px] sm:text-[30px] md:text-[30px] leading-[1.2] tracking-tight mb-6 max-w-[500px]" >
//              Let's Plan.Build.Grow.Thrive.
//               <br />
//               Farm House Solutions
//               <br />
//               by Azhizen
//             </h2>

//             {/* Paragraph Body Text */}
//             <p className="text-[#555555] font-[Poppins] text-[22px] lg:text-[18px] leading-[1.6] tracking-wide mb-8">
//               Built on hands-on dairy farm experience, we understand cow health,
//               hygiene, and equipment care. Our solutions are practical,
//               field-tested, and focused on long-term farm success.
//             </p>

//             {/* Brand Green Explore Action Button */}
//             <button className="inline-flex items-center gap-3 rounded-full bg-[#7CB142] hover:bg-[#669632] transition-colors pl-5 pr-1.5 py-1.5 shadow-sm mb-6 group active:scale-98">
//               <span className="font-medium text-[15px] text-white font-[Poppins]">
//                 Explore service
//               </span>

//               {/* 🛠️ FIXED: Replaced text symbol with standard thick icon vector, centered flawlessly */}
//               <span className="w-7 h-7 rounded-full bg-white text-[#7CB142] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
//                 <LuArrowUpRight className="text-base stroke-[3.5]" />
//               </span>
//             </button>

//             {/* Social Media Link Bar */}
//             <div className="flex items-center gap-4 mt-20 w-full justify-start">
//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors duration-200"
//               >
//                 <FaInstagram className="text-[30px]" />
//               </a>
//               <a
//                 href="#"
//                 aria-label="WhatsApp"
//                 className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors duration-200"
//               >
//                 <FaWhatsapp className="text-[30px]" />
//               </a>
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors duration-200"
//               >
//                 <FaFacebook className="text-[30px]" />
//               </a>
//             </div>
//           </motion.div>

//          {/* ================= RIGHT SIDE: BRAND LOGO & ANIMAL CARDS GRID ================= */}
// <div className="w-full flex flex-col items-end lg:pt-3">

//   {/* Brand Green Logo Placement Layer - Tied cleanly to the right boundary edge */}
//   <div className="w-full flex justify-end -mt-20 mb-17 pr-1">
//     <img
//       src="/azhizen-logo-green.png"
//       alt="Azhizen"
//       className="w-[130px] sm:w-[145px] md:w-[155px] object-contain"
//     />
//   </div>
//             {/* Three-Column Livestock Display Cards Grid */}
// <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.7, delay: 0.1 }}
//   className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start w-full max-w-[850px]"
// >
//   {/* GOAT CARD */}
//   <div className="w-full group">
//     {/* 🛠️ CHANGED FROM aspect-[3/4] TO aspect-[3/5] FOR GREATER HEIGHT */}
//     <div className="overflow-hidden rounded-[12px] bg-[#f7f7f7] aspect-[3/5] w-full shadow-sm">
//       <img
//         src="/Frame 1530.png"
//         alt="Goat"
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
//       />
//     </div>
//     <h3 className="mt-3 text-[15px] md:text-[16px] font-semibold text-[#333333] font-[Poppins]">
//       Goat
//     </h3>
//   </div>

//   {/* COW CARD */}
//   <div className="w-full group">
//     {/* 🛠️ CHANGED TO aspect-[3/5] */}
//     <div className="overflow-hidden rounded-[12px] bg-[#f7f7f7] aspect-[3/5] w-full shadow-sm">
//       <img
//         src="/Frame 1531.png"
//         alt="Cow"
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
//       />
//     </div>
//     <h3 className="mt-3 text-[15px] md:text-[16px] font-semibold text-[#333333] font-[Poppins]">
//       Cow
//     </h3>
//   </div>

//   {/* CHICKEN CARD */}
//   <div className="w-full group">
//     {/* 🛠️ CHANGED TO aspect-[3/5] */}
//     <div className="overflow-hidden rounded-[12px] bg-[#f7f7f7] aspect-[3/5] w-full shadow-sm">
//       <img
//         src="/Frame 1532.png"
//         alt="Chicken"
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
//       />
//     </div>
//     <h3 className="mt-3 text-[15px] md:text-[16px] font-semibold text-[#333333] font-[Poppins]">
//       Chicken
//     </h3>
//   </div>
// </motion.div>
// </div>

//         </div>

//       </div>
//     </section>
//   );
// };

//this is the new code below

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { LuArrowUpRight } from "react-icons/lu";
// import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

// const cardData = [
//   { src: "/Frame 1530.png", alt: "Goat", title: "Goat", num: "01" },
//   { src: "/Frame 1531.png", alt: "Cow", title: "Cow", num: "02" },
//   { src: "/Frame 1532.png", alt: "Chicken", title: "Chicken", num: "03" },
// ];

// export const BadgeSection = (): JSX.Element => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 350px", "end end"],
//   });

//   // CARD 1: Base card (Goat) — shrinks slightly as cards overlay
//   const scale1 = useTransform(
//     scrollYProgress,
//     [0.1, 0.4, 0.7],
//     [1, 0.96, 0.92]
//   );

//   // CARD 2: Cow — starts at 0px in default view, slides UP (-420px) over Card 1 on scroll
//   const y2 = useTransform(scrollYProgress, [0.1, 0.45], [0, -420]);
//   const scale2 = useTransform(scrollYProgress, [0.45, 0.75], [1, 0.96]);

//   // CARD 3: Chicken — starts at 0px in default view, begins moving at 0.25 (before Card 2 finishes) and slides UP (-840px) over Card 2
//   const y3 = useTransform(scrollYProgress, [0.25, 0.75], [0, -840]);

//   return (
//     <section id="about" className="w-full bg-white py-12 md:py-20 lg:py-24">
//       <div className="max-w-[1510px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
//         <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-20 items-start w-full">

//           {/* ================= LEFT SIDE ================= */}
//           <div className="flex flex-col items-start w-full">
//             <h2 className="font-[Poppins] font-bold mt-4 lg:mt-20 text-[#1F4D2F] text-[26px] sm:text-[32px] md:text-[36px] leading-[1.2] tracking-tight mb-6 max-w-[500px]">
//               Let's Plan.Build.Grow.Thrive.
//               <br />
//               Farm House Solutions
//               <br />
//               by Azhizen
//             </h2>

//             <p className="text-[#555555] font-[Poppins] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] tracking-wide mb-8">
//               Built on hands-on dairy farm experience, we understand cow health,
//               hygiene, and equipment care. Our solutions are practical,
//               field-tested, and focused on long-term farm success.
//             </p>

//             <button className="inline-flex items-center gap-3 rounded-full bg-[#7CB142] hover:bg-[#669632] transition-colors pl-5 pr-1.5 py-1.5 shadow-sm mb-6 group active:scale-98 cursor-pointer">
//               <span className="font-medium text-[15px] text-white font-[Poppins]">
//                 Explore service
//               </span>
//               <span className="w-7 h-7 rounded-full bg-white text-[#7CB142] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
//                 <LuArrowUpRight className="text-base stroke-[3.5]" />
//               </span>
//             </button>

//             <div className="flex flex-row items-center justify-between gap-4 mt-8 w-full">
//               <div className="flex items-center gap-4">
//                 <a
//                   href="#"
//                   aria-label="Instagram"
//                   className="w-10 h-10 border-gray-300 flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors duration-200"
//                 >
//                   <FaInstagram className="text-[25px]" />
//                 </a>

//                 <a
//                   href="#"
//                   aria-label="WhatsApp"
//                   className="w-10 h-10 border-gray-300 flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors duration-200"
//                 >
//                   <FaWhatsapp className="text-[25px]" />
//                 </a>

//                 <a
//                   href="#"
//                   aria-label="Facebook"
//                   className="w-10 h-10 border-gray-300 flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors duration-200"
//                 >
//                   <FaFacebook className="text-[25px]" />
//                 </a>
//               </div>

//               <div className="flex items-center select-none lg:hidden">
//                 <span className="font-[Poppins] font-black text-[#1F4D2F] text-[22px] tracking-tight uppercase">
//                   AZ<span className="text-[#7CB142]">H</span>IZEN
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT SIDE ================= */}
//           <div className="w-full flex flex-col items-center lg:items-end lg:pt-3">

//             <div className="hidden lg:flex w-full justify-end -mt-20 mb-17 pr-1">
//               <img
//                 src="/azhizen-logo-green.png"
//                 alt="Azhizen"
//                 className="w-[155px] object-contain"
//               />
//             </div>

//             {/* 📱 MOBILE VIEW: ASPECT-[4/5] CARDS (< sm) */}
//             <div
//               ref={containerRef}
//               className="sm:hidden relative w-full h-[250vh]"
//             >
//               <div className="sticky top-[20px] w-full max-w-[340px] mx-auto flex flex-col space-y-6">

//                 {/* --- CARD 1: GOAT --- */}
//                 <motion.div
//                   style={{ scale: scale1 }}
//                   className="w-full bg-white rounded-[24px] p-3.5 shadow-2xl border border-gray-100 z-10 origin-top"
//                 >
//                   <div className="overflow-hidden rounded-[16px] bg-[#f7f7f7] aspect-[4/5] w-full shadow-sm">
//                     <img
//                       src={cardData[0].src}
//                       alt={cardData[0].alt}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <div className="mt-3 py-1 flex items-center justify-between px-2">
//                     <span className="text-xs font-bold uppercase tracking-widest text-[#7CB142]">
//                       01
//                     </span>
//                     <h3 className="text-base font-bold text-[#1F4D2F] font-[Poppins]">
//                       {cardData[0].title}
//                     </h3>
//                   </div>
//                 </motion.div>

//                 {/* --- CARD 2: COW --- */}
//                 <motion.div
//                   style={{ y: y2, scale: scale2 }}
//                   className="w-full bg-white rounded-[24px] p-3.5 shadow-2xl border border-gray-100 z-20 origin-top relative"
//                 >
//                   <div className="overflow-hidden rounded-[16px] bg-[#f7f7f7] aspect-[4/5] w-full shadow-sm">
//                     <img
//                       src={cardData[1].src}
//                       alt={cardData[1].alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="mt-3 py-1 flex items-center justify-between px-2">
//                     <span className="text-xs font-bold uppercase tracking-widest text-[#7CB142]">
//                       02
//                     </span>
//                     <h3 className="text-base font-bold text-[#1F4D2F] font-[Poppins]">
//                       {cardData[1].title}
//                     </h3>
//                   </div>
//                 </motion.div>

//                 {/* --- CARD 3: CHICKEN --- */}
//                 <motion.div
//                   style={{ y: y3 }}
//                   className="w-full bg-white rounded-[24px] p-3.5 shadow-2xl border border-gray-100 z-30 origin-top relative"
//                 >
//                   <div className="overflow-hidden rounded-[16px] bg-[#f7f7f7] aspect-[4/5] w-full shadow-sm">
//                     <img
//                       src={cardData[2].src}
//                       alt={cardData[2].alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="mt-3 py-1 flex items-center justify-between px-2">
//                     <span className="text-xs font-bold uppercase tracking-widest text-[#7CB142]">
//                       03
//                     </span>
//                     <h3 className="text-base font-bold text-[#1F4D2F] font-[Poppins]">
//                       {cardData[2].title}
//                     </h3>
//                   </div>
//                 </motion.div>

//               </div>
//             </div>

//             {/* 💻 DESKTOP VIEW: STANDARD GRID (>= sm) */}
//             <div className="hidden sm:grid sm:grid-cols-3 gap-5 w-full max-w-[850px] mt-8 lg:mt-0 items-start">
//               {cardData.map((card) => (
//                 <div key={card.title} className="w-full group">
//                   <div className="overflow-hidden rounded-[12px] bg-[#f7f7f7] aspect-[3/5] w-full shadow-sm">
//                     <img
//                       src={card.src}
//                       alt={card.alt}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                     />
//                   </div>
//                   <h3 className="mt-3 text-[15px] md:text-[16px] font-semibold text-[#333333] font-[Poppins]">
//                     {card.title}
//                   </h3>
//                 </div>
//               ))}
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuArrowUpRight } from "react-icons/lu";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export interface CardItem {
  title: string;
  number: string;
  image: string;
  alt: string;
}

const CARDS_DATA: CardItem[] = [
  {
    title: "Goat",
    number: "01",
    image: "/Frame 1530.png",
    alt: "Goat Solution",
  },
  {
    title: "Cow",
    number: "02",
    image: "/Frame 1531.png",
    alt: "Cow Solution",
  },
  {
    title: "Chicken",
    number: "03",
    image: "/Frame 1532.png",
    alt: "Chicken Solution",
  },
];

export const BadgeSection: React.FC = () => {
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const desktopGridRef = useRef<HTMLDivElement>(null);

  // Redirect to the Services page
  const handleNavigateToServicePage = () => {
    window.scrollTo(0, 0);
    navigate("/services"); // Change to "/services" if your route path uses the plural form
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =========================================================
      // 📱 MOBILE VIEW ANIMATION (< 640px) — UNTOUCHED
      // =========================================================
      mm.add("(max-width: 639px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".gsap-card");

        // Initial positions: Card 1 at 0%, Cards 2 & 3 hidden below off-screen
        gsap.set(cards[0], { yPercent: 0, zIndex: 10 });
        gsap.set(cards[1], { yPercent: 75, zIndex: 20 });
        gsap.set(cards[2], { yPercent: 75, zIndex: 30 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top+=70",
            end: "+=1400",
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            refreshPriority: 1,
          },
        });

        // 1. Card 2 (Cow) slides UP to cover Card 1 (Goat)
        tl.to(cards[1], {
          yPercent: 0,
          ease: "none",
        }).to(
          cards[0],
          { scale: 0.95, opacity: 0.8, ease: "none" },
          "<"
        );

        // 2. Card 3 (Chicken) slides UP to cover Card 2 (Cow)
        tl.to(cards[2], {
          yPercent: 0,
          ease: "none",
        }).to(
          cards[1],
          { scale: 0.95, opacity: 0.8, ease: "none" },
          "<"
        );
      });

      // =========================================================
      // 💻 DESKTOP VIEW ANIMATION (>= 640px)
      // TRIGGERS IMMEDIATELY AS SOON AS THE SECTION ENTERS VIEWPORT
      // =========================================================
      mm.add("(min-width: 640px)", () => {
        const desktopCards = gsap.utils.toArray<HTMLElement>(".desktop-card");

        // Set initial state
        gsap.set(leftContentRef.current, {
          x: -80,
          opacity: 0,
          filter: "blur(6px)",
        });
        gsap.set(desktopCards, {
          y: 80,
          opacity: 0,
          filter: "blur(6px)",
        });

        const desktopTl = gsap.timeline({
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 55%",
            toggleActions: "play none none none",
          },
        });

        // 1. Left Text Section slides in from LEFT immediately
        desktopTl.to(leftContentRef.current, {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        });

        // 2. Right Desktop Cards slide UP from BOTTOM immediately with stagger
        desktopTl.to(
          desktopCards,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      id="about"
      className="w-full bg-white py-6 sm:py-12 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1510px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-20 items-start w-full">

          {/* ================= LEFT SIDE (SLIDES FROM LEFT IMMEDIATELY) ================= */}
          <div ref={leftContentRef} className="flex flex-col items-start w-full">
            <h2 className="font-[Poppins] font-bold mt-4 lg:mt-20 text-[#1F4D2F] text-[26px] sm:text-[32px] md:text-[36px] leading-[1.2] tracking-tight mb-6 max-w-[500px]">
              Let's Plan.Build.Grow.Thrive.
              <br />
              Farm House Solutions
              <br />
              by Azhizen
            </h2>

            <p className="text-[#555555] font-[Poppins] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] tracking-wide mb-8">
              Built on hands-on dairy farm experience, we understand cow health,
              hygiene, and equipment care. Our solutions are practical,
              field-tested, and focused on long-term farm success.
            </p>

            <button
              type="button"
              onClick={handleNavigateToServicePage}
              className="inline-flex items-center gap-3 rounded-full bg-[#7CB142] hover:bg-[#669632] transition-colors pl-5 pr-1.5 py-1.5 shadow-sm mb-6 group cursor-pointer"
            >
              <span className="font-medium text-[15px] text-white font-[Poppins]">
                Explore service
              </span>
              <span className="w-7 h-7 rounded-full bg-white text-[#7CB142] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <LuArrowUpRight className="text-base stroke-[3.5]" />
              </span>
            </button>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex flex-row items-center gap-4 mt-8 w-full">
              <a
                href="https://www.instagram.com/azhizen_solutions?igsh=dHloc2RmY3pwd2o0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors"
              >
                <FaInstagram className="text-[20px]" />
              </a>
              <a
                href="https://wa.me/919750603988"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors"
              >
                <FaWhatsapp className="text-[20px]" />
              </a>
              <a
                href="https://www.facebook.com/people/Azhizen-Solutions/61575392279457/?rdid=hIBBPDB6iSirXVac&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18VmExM7xj%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:text-[#7CB142] hover:border-[#7CB142] transition-colors"
              >
                <FaFacebook className="text-[20px]" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full flex flex-col items-center lg:items-end">

            {/* Desktop Logo Header */}
            <div className="hidden lg:flex w-full justify-end -mt-20 mb-17 pr-1">
              <img
                src="/azhizen-logo-green.png"
                alt="Azhizen"
                className="w-[155px] object-contain"
              />
            </div>

            {/* 📱 MOBILE VIEW (< sm) — UNTOUCHED */}
            <div
              ref={pinContainerRef}
              className="sm:hidden w-full max-w-[390px] mx-auto flex flex-col gap-3 pt-3 pb-2"
            >
              <div className="w-full flex items-center justify-between px-2 pt-2 pb-2.5 border-b border-gray-100 bg-white/95 backdrop-blur-sm z-50">
                {/* Mobile Social Links */}
                <div className="flex items-center gap-3.5">
                  <a
                    href="https://www.instagram.com/azhizen_solutions?igsh=dHloc2RmY3pwd2o0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#7CB142]"
                  >
                    <FaInstagram className="text-[19px]" />
                  </a>
                  <a
                    href="https://wa.me/919750603988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#7CB142]"
                  >
                    <FaWhatsapp className="text-[19px]" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Azhizen-Solutions/61575392279457/?rdid=hIBBPDB6iSirXVac&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18VmExM7xj%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#7CB142]"
                  >
                    <FaFacebook className="text-[19px]" />
                  </a>
                </div>
                <span className="font-[Poppins] font-black text-[#1F4D2F] text-[19px] tracking-tight uppercase select-none">
                  AZ<span className="text-[#7CB142]">H</span>IZEN
                </span>
              </div>

              <div className="relative w-full h-[750px] overflow-hidden rounded-[26px]">
                {CARDS_DATA.map((card) => (
                  <div
                    key={card.number}
                    className="gsap-card absolute inset-0 w-full h-full bg-white rounded-[26px] p-4 border border-gray-100 shadow-2xl flex flex-col justify-between origin-top"
                  >
                    <div className="overflow-hidden rounded-[20px] bg-[#f7f7f7] w-full flex-1 min-h-0 shadow-sm">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-3 pb-1 flex items-center justify-between px-2 shrink-0">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#7CB142]">
                        {card.number}
                      </span>
                      <h3 className="text-base font-bold text-[#1F4D2F] font-[Poppins]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 💻 DESKTOP VIEW: SLIDES UP IMMEDIATELY FROM BOTTOM (>= sm) */}
            <div
              ref={desktopGridRef}
              className="hidden sm:grid sm:grid-cols-3 gap-5 w-full max-w-[850px] mt-8 lg:mt-0 items-start"
            >
              {CARDS_DATA.map((card) => (
                <div key={card.number} className="desktop-card w-full group">
                  <div className="overflow-hidden rounded-[20px] bg-[#f7f7f7] aspect-[3/5] w-full shadow-sm border border-gray-100">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-3 py-1 flex items-center justify-between px-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#7CB142]">
                      {card.number}
                    </span>
                    <h3 className="text-base font-bold text-[#1F4D2F] font-[Poppins]">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BadgeSection;