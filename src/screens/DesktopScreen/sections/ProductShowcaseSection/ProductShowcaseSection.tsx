// import { ChevronRightIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { products } from "../../../../lib/products";

// export const ProductShowcaseSection = (): JSX.Element => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);


//   return (
//     <section id="shop" className="w-full py-8 sm:py-12 md:py-16 bg-[#c4d1d4] relative mt-0">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex items-center justify-between mb-6 sm:mb-9 md:mb-12">
//           <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-lg sm:text-2xl md:text-3xl tracking-[0] leading-[normal]">
//             Product
//           </h2>
//           <button onClick={() => navigate('/shop')} className="p-2 sm:p-3 md:p-4 bg-[#032a4a] hover:bg-[#032a4a]/80 rounded-full transition-all duration-300 flex items-center justify-center flex-shrink-0">
//             <ChevronRightIcon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">          {products.slice(0, 3).map((product) => (
//             <Card
//               key={product.id}
//               className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
//             >
//               <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
//                 <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
//                   <img
//                     className="w-full h-full object-contain"
//                     alt={product.name}
//                     src={product.image}
//                   />
//                 </div>

//                 <h3 className="text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px] font-semibold text-center">
//                   {product.name}
//                 </h3>

//                 <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
//                   {product.description}
//                 </p>

//                 <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
//                   <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
//                     {product.price}
//                   </div>

//                   <Button
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       navigate(`/buy?id=${product.id}`);
//                     }}
//                     className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8 cursor-pointer">
//                     View
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


  //   return (
  //     <section id="shop" className="w-full bg--white relative overflow-hidden">
  //       <div className="">

  //         {/* Header Section */}
  //         <div className="flex items-center mt-10 justify-between mb-8 sm:mb-10 md:mb-14">
  //           <div className="flex  gap-1">
  //             <div className="h-9  w-1 ml-20 mb-17  bg-[#8dc63f] rounded-full" />
  //             <h2 className="font-inter  ml-2 font-bold text-[#032a4a] text-xl sm:text-3xl md:text-4xl tracking-tight">
  //               Featured Products
  //             </h2>


  //           <button
  //             onClick={() => navigate('/shop')}
  //             className="group p-2 sm:p-3 ml-[60rem] md:p-4 bg-[#8dc63f] hover:bg-[#043b66] rounded-full transition-all duration-300 shadow-lg hover:shadow-[#032a4a]/40 active:scale-95"
  //           >
  //             <ChevronRightIcon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-white transition-transform group-hover:translate-x-1" />
  //           </button>
  //           </div>
  //         </div>

  //         {/* Product Grid */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-10 md:gap-12 w-full max-w-[1300px] mx-auto px-2 sm:px-4 pb-0 py-2 sm:py-3 md:py-5">
  //           {products.slice(0, 4).map((product, index) => (
  //     <motion.div
  //       key={product.id}
  //       layout
  //       initial={{ opacity: 0, scale: 0.9 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       exit={{ opacity: 0, scale: 0.9 }}
  //       transition={{ duration: 0.3, delay: index * 0.05 }}
  //     >
  //       {/* Removed fixed h-[200rem] which was causing layout issues */}
  //       <Card className="group bg-white rounded-2xl overflow-hidden border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(3,42,74,0.12)] transition-all duration-500 h-[26rem] w-[20rem] gap-4 flex flex-col">
  //         <CardContent className="p-0 flex flex-col h-full">

  //           {/* Changed bg-[#f8fafb] to bg-white to remove the gray box background */}
  //           <div className="relative w-full h-64 bg-white overflow-hidden">
  //             <img
  //               className="w-full h-full mt-8 object-contain p-8 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
  //               alt={product.name}
  //               src={product.image}
  //             />
  //             {/* Badge remains with a slight blur for contrast */}
  //             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#032a4a] uppercase tracking-wider shadow-sm">
  //               {product.category}
  //             </div>
  //           </div>

  //           <div className="p-6 flex flex-col flex-grow">
  //             <h3 className="font-bold text-[#032a4a] text-lg mb-2 line-clamp-1">
  //               {product.name}
  //             </h3>
  //             <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
  //               {product.description}
  //             </p>

  //             <div className="mt-auto pt-5 border-t border-gray flex items-center justify-between">
  //               <div className="flex flex-col">
  //                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
  //                   Price
  //                 </span>
  //                 <span className="font-extrabold text-[#032a4a] text-xl">
  //                   {product.price}
  //                 </span>
  //               </div>
  //               <Link to={`/buy?id=${product.id}`}>
  //                 <Button className="flex-1 h-8 bg-[#8dc63f] w-[100px] hover:brightness-110 text-white text-sm font-medium rounded-lg">
  //                   View
  //                 </Button>
  //               </Link>
  //             </div>
  //           </div>
  //         </CardContent>
  //       </Card>
  //     </motion.div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  // return (
  //   <section
  //     id="shop"
  //     className="
  //       w-full
  //       bg-[#D9EEFF]
  //       py-14
  //       md:py-20
  //       overflow-hidden
  //     "
  //   >

  //     <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

  //       {/* Header */}
  //       <div className="flex items-center justify-between mb-10">

  //         {/* Left */}
  //         <div className="flex items-center gap-3">

  //           <div className="w-1 h-10 bg-[#8dc63f] rounded-full" />

  //           <h2
  //             className="
  //               font-bold
  //               text-[#032a4a]
  //               text-[28px]
  //               sm:text-[36px]
  //               md:text-[44px]
  //               leading-tight
  //             "
  //           >
  //             Product
  //           </h2>

  //         </div>

  //         {/* Arrow Button */}
  //         <button
  //           onClick={() => navigate('/shop')}
  //           className="
  //             group
  //             w-12
  //             h-12
  //             rounded-full
  //             bg-[#032a4a]
  //             hover:bg-[#8dc63f]
  //             transition-all
  //             duration-300
  //             flex
  //             items-center
  //             justify-center
  //             shadow-lg
  //           "
  //         >

  //           <ChevronRightIcon
  //             className="
  //               w-6
  //               h-6
  //               text-white
  //               transition-transform
  //               duration-300
  //               group-hover:translate-x-1
  //             "
  //           />

  //         </button>

  //       </div>

  //       {/* Product Grid */}
  //       <div
  //         className="
  //           grid
  //           grid-cols-1
  //           sm:grid-cols-2
  //           lg:grid-cols-4
  //           gap-6
  //         "
  //       >

  //         {products.slice(0, 4).map((product, index) => (

  //           <motion.div
  //             key={product.id}
  //             initial={{ opacity: 0, y: 30 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             transition={{
  //               duration: 0.4,
  //               delay: index * 0.08
  //             }}
  //             viewport={{ once: true }}
  //           >

  //             <Card
  //               className="
  //                 bg-white
  //                 rounded-[18px]
  //                 overflow-hidden
  //                 border-none
  //                 shadow-lg
  //                 hover:shadow-2xl
  //                 transition-all
  //                 duration-500
  //                 group
  //                 h-full
  //               "
  //             >

  //               <CardContent className="p-0 flex flex-col h-full">

  //                 {/* Image Section */}
  //                 <div
  //                   className="
  //                     h-[250px]
  //                     bg-[#EEF2F3]
  //                     flex
  //                     items-center
  //                     justify-center
  //                     overflow-hidden
  //                     p-6
  //                   "
  //                 >

  //                   <img
  //                     src={product.image}
  //                     alt={product.name}
  //                     className="
  //                       max-h-full
  //                       object-contain
  //                       transition-transform
  //                       duration-700
  //                       group-hover:scale-105
  //                     "
  //                   />

  //                 </div>

  //                 {/* Content */}
  //                 <div className="p-5 flex flex-col flex-grow">

  //                   {/* Title */}
  //                   <h3
  //                     className="
  //                       font-bold
  //                       text-[#032a4a]
  //                       text-sm
  //                       sm:text-base
  //                       uppercase
  //                       mb-2
  //                       line-clamp-2
  //                     "
  //                   >
  //                     {product.name}
  //                   </h3>

  //                   {/* Description */}
  //                   <p
  //                     className="
  //                       text-[#666]
  //                       text-xs
  //                       leading-relaxed
  //                       line-clamp-3
  //                       mb-5
  //                     "
  //                   >
  //                     {product.description}
  //                   </p>

  //                   {/* Bottom */}
  //                   <div className="mt-auto">

  //                     <div className="flex items-center justify-between">

  //                       {/* Price */}
  //                       <div>

  //                         <p
  //                           className="
  //                             text-[#032a4a]
  //                             font-bold
  //                             text-lg
  //                           "
  //                         >
  //                           {product.price}
  //                         </p>

  //                         <p className="text-[10px] text-[#666]">
  //                           +GST
  //                         </p>

  //                       </div>

  //                       {/* Button */}
  //                       <Link to={`/buy?id=${product.id}`}>

  //                         <Button
  //                           className="
  //                             bg-[#032a4a]
  //                             hover:bg-[#8dc63f]
  //                             text-white
  //                             rounded-md
  //                             px-8
  //                             h-9
  //                             text-sm
  //                             font-semibold
  //                             transition-all
  //                           "
  //                         >
  //                           View
  //                         </Button>

  //                       </Link>

  //                     </div>

  //                   </div>

  //                 </div>

  //               </CardContent>

  //             </Card>

  //           </motion.div>

  //         ))}

  //       </div>

  //     </div>

  //   </section>
  // );
  // }


import { ChevronRightIcon } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { products } from "../../../../lib/products";
import { motion } from "framer-motion";

// =========================================================
// 3D CARD UNFOLD ENTRANCE VARIANTS (CARDS ONLY)
// =========================================================
const cardFoldVariant = {
  hidden: {
    opacity: 0,
    rotateX: -70,
    y: 70,
    transformOrigin: "bottom center",
  },
  visible: (index: number) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transformOrigin: "bottom center",
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Smooth deceleration curve
      delay: index * 0.1,
    },
  }),
};

export const ProductShowcaseSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section
      id="shop"
      className="w-full bg-[#FAFAF8] overflow-hidden select-none"
    >
      {/* ================= HERO BANNER ================= */}
      <div
        className="w-full relative overflow-hidden flex items-center justify-center text-center opacity-100"
        style={{
          height: "200px",
          background: "linear-gradient(4.23deg, #7EB447 2.46%, #B5D196 95.59%)"
        }}
      >
        {/* Embedded CSS for Floating Circles Animation */}
        <style>{`
          @keyframes floatUp {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
            }
            100% {
              transform: translateY(-300px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
            }
          }
        `}</style>

        {/* Central triangular peak overlay */}
        <div
          className="absolute inset-0 bg-[#A3D66B] pointer-events-none opacity-40 z-0"
          style={{
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* FLOATING ANIMATED CIRCLES CONTAINER */}
        <ul className="absolute inset-0 overflow-hidden z-0 m-0 p-0 pointer-events-none">
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[25%] w-[120px] h-[120px]" style={{ animation: "floatUp 15s linear infinite", animationDelay: "0s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[10%] w-[35px] h-[35px]" style={{ animation: "floatUp 10s linear infinite", animationDelay: "2s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[70%] w-[35px] h-[35px]" style={{ animation: "floatUp 15s linear infinite", animationDelay: "4s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[40%] w-[90px] h-[90px]" style={{ animation: "floatUp 12s linear infinite", animationDelay: "0s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[65%] w-[35px] h-[35px]" style={{ animation: "floatUp 15s linear infinite", animationDelay: "0s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[75%] w-[100px] h-[100px]" style={{ animation: "floatUp 13s linear infinite", animationDelay: "3s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[35%] w-[120px] h-[120px]" style={{ animation: "floatUp 16s linear infinite", animationDelay: "7s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[50%] w-[45px] h-[45px]" style={{ animation: "floatUp 20s linear infinite", animationDelay: "5s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[20%] w-[30px] h-[30px]" style={{ animation: "floatUp 18s linear infinite", animationDelay: "2s" }}></li>
          <li className="absolute block list-none bg-white/20 bottom-[-80px] left-[85%] w-[110px] h-[110px]" style={{ animation: "floatUp 11s linear infinite", animationDelay: "0s" }}></li>
        </ul>

        {/* Banner Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col items-center justify-center pointer-events-none">
          <h2 className="font-[Poppins] font-semibold text-black text-[32px] sm:text-[38px] md:text-[30px] leading-tight tracking-tight">
            Creating Smart Product
          </h2>
          <p className="font-[Poppins] font-medium text-white text-[16px] sm:text-[18px] md:text-[21px] mt-1 tracking-wide">
            farmer Love it!
          </p>
        </div>
      </div>

      {/* ================= PRODUCTS CARDS CONTENT CONTAINER ================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12 md:py-16">

        {/* Main Row Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="font-[Poppins] font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Product
          </h2>

          <button
            onClick={() => navigate("/shop")}
            className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#7CB142] hover:bg-[#669632] transition-colors duration-300 flex items-center justify-center shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* CAROUSEL RAIL WITH 3D UNFOLD ANIMATION ON CARDS */}
        <div
          className="
            flex
            w-full
            gap-4
            overflow-x-auto
            pb-8
            pt-4
            snap-x
            snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              variants={cardFoldVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                w-[250px]
                sm:w-[calc(40%-12px)]
                lg:w-[calc(25%-12px)]
                xl:w-[calc(20%-13px)]
                flex-shrink-0
                snap-start
                h-auto
                select-none
              "
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            >
              <Card className="bg-white rounded-[14px] overflow-hidden border border-gray-100 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] flex flex-col h-full group hover:shadow-lg transition-shadow duration-200 select-none">
                <CardContent className="p-4 flex flex-col h-full select-none">

                  {/* Image Container */}
                  <div className="w-full h-[220px] sm:h-[230px] flex items-center justify-center bg-[#E5ECEF] rounded-[10px] overflow-hidden p-5 mb-4 pointer-events-none select-none">
                    <img
                      className="max-w-full max-h-full object-contain mix-blend-multiply pointer-events-none select-none"
                      alt={product.name}
                      src={product.image}
                      draggable={false}
                    />
                  </div>

                  {/* Product Details (PLAIN STATIC TEXT) */}
                  <div className="flex flex-col flex-grow pointer-events-none select-none">
                    <h3 className="font-[Poppins] font-semibold text-black text-[14px] tracking-tight mb-2 line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Actions Base */}
                  <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-50 gap-3">
                    <div className="flex flex-col select-none">
                      <span className="font-[Poppins] font-bold text-black text-[16px] sm:text-[18px] tracking-tight">
                        {product.price}
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold -mt-1 block">
                        +GST
                      </span>
                    </div>

                    <Link to={`/buy?id=${product.id}`} className="flex-shrink-0">
                      <Button className="bg-[#7CB142] hover:bg-[#669632] text-white font-semibold text-[12px] rounded-[10px] h-9 px-6 shadow-sm transition-colors duration-200 cursor-pointer">
                        View
                      </Button>
                    </Link>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};