// import { useNavigate, useLocation } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { services } from "../lib/services";
// import { useState, useMemo } from "react";
// import { HeroSection } from "../screens/DesktopScreen/sections/HeroSection";
// import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
// import { Navbar } from "../components/Navbar";
// import { AnimatePresence, motion } from "framer-motion";

// const categories = [
//   { id: "Diary Tech Service", label: "Diary Tech ", value: "Diary Tech Service", categoryImage: "/image-352.png" },
//   { id: "Goat Farm Service", label: "Goat Farm ", value: "Goat Farm Service", categoryImage: "/image-348p.png" },
//   { id: "Poultry Farm Service", label: "Chicken Farm ", value: "Poultry Farm Service", categoryImage: "/image-352.png" },
// ];


// export const ServicesPage = (): JSX.Element => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get initial category from location state
//   const initialCategory = location.state?.category || "Diary Tech Service";
//   const [selectedCategory, setSelectedCategory] = useState(
//     categories.find(cat => cat.value === initialCategory)?.id || ""
//   );
//   const [searchQuery, setSearchQuery] = useState("");

//   // 🛠️ REPLACE your entire filteredServices useMemo block with this:
//   const filteredServices = useMemo(() => {
//     const activeCategory = categories.find(cat => cat.id === selectedCategory);

//     // Default to ALL services if no category checkbox is selected
//     let filtered = services;

//     if (activeCategory) {
//       filtered = services.filter(
//         (service) =>
//           service.category?.trim().toLowerCase() ===
//           activeCategory.value?.trim().toLowerCase()
//       );
//     }

//     // Apply search query filter on top of the results
//     if (searchQuery.trim()) {
//       filtered = filtered.filter(service =>
//         service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         service.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     return filtered;
//   }, [selectedCategory, searchQuery]);

//   // 🛠️ ADD this new helper function:
//   const handleCategoryChange = (categoryId: string) => {
//     if (selectedCategory === categoryId) {
//       setSelectedCategory(""); // Unchecks and displays all services
//     } else {
//       setSelectedCategory(categoryId);
//     }
//   };

//   const activeCategory = categories.find(cat => cat.id === selectedCategory);

//   return (
//     <div className="bg-white w-full min-h-screen flex flex-col">
//       {/* show only the navbar from the homepage hero */}

//       <Navbar />
// {/* HERO BANNER IMAGE (Identical to Shop Page) */}
// <div
//   className="
//     w-full
//     max-w-[1450px]
//     h-[280px]
//     md:h-[420px]
//     mx-auto
//     rounded-[12px]
//     overflow-hidden
//     mt-20
//     md:mt-24
//     px-4
//   "
// >
//   <img
//     src="/farm-banner.png"
//     alt="Farm Banner"
//     className="
//       w-full
//       h-full
//       object-cover
//       rounded-[12px]
//     "
//   />
// </div>
//       {/* Hero Banner */}
//       {/* <div className="w-full h-full  max-w-[1400px] max-h-[2000px] mx-auto rounded-[11px] md:h-80 bg-cover bg-center"
//            style={{ backgroundImage: "url('/farm-banner.png')" }}>
//       </div> */}

//       {/* Main Content */}
//       {/* Main Content */}
//       {/* 🛠️ MODIFIED: Added mt-24 to force the layout out from underneath a fixed/absolute Navbar */}
//       <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 pt-8 pb-8 md:py-12 mt-24">
//         <div className="flex flex-col lg:flex-row gap-8">

//           {/* Sidebar */}
//           <div className="w-full lg:w-64">
//             <h2 className="text-[28px] sm:text-[34px] font-bold text-black tracking-tight leading-tight mb-6">
//         Product<br />Collection
//       </h2>
//             {/* Search */}
//             <div className="mb-8">
//               <input
//                 type="text"
//                 placeholder="Search services..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8dc201] transition"
//               />
//             </div>


//             {/* Service Categories - Shop Style */}
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold mb-4">Service Categories</h3>
//               <div className="space-y-3">
//                 {categories.map((category) => {
//                   const count = services.filter(s => s.category === category.value).length;
//                   return (
//                     <label key={category.id} className="flex items-center gap-2 cursor-pointer">
//                       {/* 🛠️ UPDATE the input tag inside categories.map to look like this: */}
//                       <input
//                         type="checkbox"
//                         checked={selectedCategory === category.id}
//                         onChange={() => handleCategoryChange(category.id)} // Intersected line
//                         className="w-4 h-4 accent-[#8dc63f]"
//                       />
//                       <span className="text-sm">{category.label}</span>
//                       <span className="text-xs text-gray-500 ml-auto">{count}</span>
//                     </label>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Filter Button */}
//             <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
//               Show less
//             </button>
//           </div>

//           {/* Services Grid */}
//           <div className="flex-1">
//             {/* Header */}


//             {/* Services Grid
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-10">

//   {filteredServices && filteredServices.length > 0 ? (

//     <AnimatePresence mode="wait">

//       {filteredServices.map((service, index) => (

//         <motion.div
//           key={`${selectedCategory}-${service.id}`}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{
//             duration: 0.5,
//             delay: index * 0.1,
//           }}
//         >

//           <Card className="h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group">

//             <CardContent className="p-0">

//               <div className="relative h-[200px] overflow-hidden">

//                 <img
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   alt={service.title}
//                   src={service.image}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//               </div>

//               <div className="p-4">

//                 <h4 className="font-inter font-semibold text-black mb-1 line-clamp-1">
//                   {service.title}
//                 </h4>

//                 <p className="text-gray-600 text-xs mb-3 line-clamp-2">
//                   {service.description}
//                 </p>

//                 <div className="flex gap-2">

//                   <Button
//                     onClick={() => {
//                       window.scrollTo(0, 0);
//                       navigate("/service", {
//                         state: { service },
//                       });
//                     }}
//                     variant="ghost"
//                     className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-xs font-medium rounded-lg"
//                   >
//                     View
//                   </Button>

//                   <Button
//                     onClick={() =>
//                       navigate("/enquiry", {
//                         state: { service },
//                       })
//                     }
//                     className="flex-1 h-8 bg-[#8dc63f] hover:brightness-110 text-white text-xs font-medium rounded-lg"
//                   >
//                     Enquire
//                   </Button>

//                 </div>

//               </div>

//             </CardContent>

//           </Card>

//         </motion.div>

//       ))}

//     </AnimatePresence>

//   ) : (

//     <div className="col-span-full text-center py-12">

//       <p className="text-gray-500 text-base">
//         {searchQuery
//           ? "No services found matching your search"
//           : "No services found for this category"}
//       </p>

//     </div>

//   )}

// </div> */}
//             {/* Services Grid Content Area */}
//             {/* 🛠️ MODIFIED: Added pt-8 and pb-8 to ensure both top and bottom rows have breathing room for shadows */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8 pb-8">
//               {filteredServices && filteredServices.length > 0 ? (
//                 <AnimatePresence mode="popLayout">
//                   {filteredServices.map((service, index) => (
//                     <motion.div
//                       key={`${selectedCategory}-${service.id}`}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       transition={{
//                         duration: 0.4,
//                         delay: index * 0.05,
//                       }}
//                       layout
//                       // 🛠️ ADDED: mt-2 ensures the motion component itself leaves space for top shadow scaling
//                       className="mt-2 text-left"
//                     >
//                       {/* 🛠️ MODIFIED: Removed 'overflow-hidden' from the Card base so shadows aren't chopped off, moved it to the image wrapper instead */}
//                       <Card className="h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative">
//                         <CardContent className="p-0 flex flex-col h-full">

//                           {/* Card Image Wrapper */}
//                           {/* 🛠️ SAFETY NOTE: Keep overflow-hidden isolated here so only the image corners stay rounded */}
//                           <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl bg-gray-50">
//                             <img
//                               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                               alt={service.title}
//                               src={service.image}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                           </div>

//                           {/* Content Section */}
//                          <div className="p-4 flex flex-col flex-grow">
//   {/* TITLE: 18px */}
//   <h4 className="font-[Poppins] font-semibold text-black text-[18px] tracking-tight mb-2 line-clamp-2 leading-snug">
//     {service.title}
//   </h4>

//   {/* DESCRIPTION: 14px */}
//   <p className="text-gray-500 text-[14px] leading-relaxed mb-4 line-clamp-3 flex-grow">
//     {service.description}
//   </p>

//                             {/* Action Row Hooks */}
//                             <div className="flex gap-2 mt-auto pt-2">
//                               <Button
//                                 onClick={() => {
//                                   window.scrollTo(0, 0);
//                                   navigate("/service", { state: { service } });
//                                 }}
//                                 variant="ghost"
//                                 className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-xs font-medium rounded-lg text-gray-700 transition-colors"
//                               >
//                                 View
//                               </Button>
//                               <Button
//                                 onClick={() =>
//                                   navigate("/enquiry", { state: { service } })
//                                 }
//                                 className="flex-1 h-8 bg-[#8dc63f] hover:bg-[#7cb337] text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
//                               >
//                                 Enquire
//                               </Button>
//                             </div>
//                           </div>

//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               ) : (
//                 <div className="col-span-full text-center py-16 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
//                   <p className="text-gray-400 text-sm font-medium">
//                     No services found.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <FooterSection />
//     </div>
//   );
// };

import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { services } from "../lib/services";
import { useState, useMemo, useRef, useEffect } from "react";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { Navbar } from "../components/Navbar";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Search } from "lucide-react";

const categories = [
  { id: "Diary Tech Service", label: "Diary Tech ", value: "Diary Tech Service", categoryImage: "/image-352.png" },
  { id: "Goat Farm Service", label: "Goat Farm ", value: "Goat Farm Service", categoryImage: "/image-348p.png" },
  { id: "Poultry Farm Service", label: "Poultry Farm ", value: "Poultry Farm Service", categoryImage: "/image-352.png" },
];

export const ServicesPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialCategory = location.state?.category || "";
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory ? (categories.find(cat => cat.value === initialCategory)?.id || "") : ""
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredServices = useMemo(() => {
    const activeCategory = categories.find(cat => cat.id === selectedCategory);

    let filtered = services;

    if (activeCategory) {
      filtered = services.filter(
        (service) =>
          service.category?.trim().toLowerCase() ===
          activeCategory.value?.trim().toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(categoryId);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white w-full min-h-screen flex flex-col font-[Poppins]">
      <Navbar />

      {/* HERO BANNER */}
      <div className="relative w-full h-[210px] sm:h-[290px] md:h-[450px] overflow-hidden bg-black mt-16 sm:mt-20">
        <img
          src="/banner services.png"
          alt="Azhizen Service for your Farm"
          className="w-full h-full object-cover object-center block border-0 outline-none select-none"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 md:px-20 max-w-[720px] z-10 text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#8dc201] leading-[1.08] tracking-tight drop-shadow-md">
            Azhizen Service
          </h1>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight drop-shadow-md">
            for your Farm
          </h1>

          <p className="text-xs sm:text-xs md:text-sm font-medium text-white/90 leading-relaxed tracking-wide drop-shadow max-w-[420px] mt-2 sm:mt-3">
            we provide you complete set and service to <br />
            your farm
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div ref={sectionRef} className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start relative">

          {/* 📌 STICKY SIDEBAR (PINNED DURING SCROLL ON DESKTOP) */}
          <div className="hidden lg:block w-64 flex-shrink-0 text-left sticky top-28 self-start z-10">
            <h2 className="text-[28px] sm:text-[34px] font-semibold text-black tracking-tight leading-tight mb-6">
              Services<br />Collection
            </h2>

            <div className="mb-6">
              <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                Category
              </label>
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-[10px] text-sm focus:outline-none focus:border-[#8dc201] transition bg-white"
              />
            </div>

            <div className="border border-gray-200 rounded-[10px] overflow-hidden mb-6 bg-gray-50/50">
              {categories.map((category) => {
                const count = services.filter(s => s.category === category.value).length;
                return (
                  <label
                    key={category.id}
                    className="flex items-center gap-3 p-3 border-b border-gray-200 last:border-b-0 cursor-pointer hover:bg-white transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategory === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                      className="w-4 h-4 accent-[#8dc63f] rounded cursor-pointer"
                    />
                    <span className="text-sm font-medium text-black">{category.label}</span>
                    <span className="text-xs text-gray-400 ml-auto">{count}</span>
                  </label>
                );
              })}
            </div>

            <button
              onClick={() => {
                setSelectedCategory("");
                setSearchQuery("");
              }}
              className="w-full bg-black text-white py-2.5 rounded-[10px] text-xs font-semibold hover:bg-gray-800 transition cursor-pointer"
            >
              Show less
            </button>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="flex-1 w-full min-w-0">
            <div className="flex justify-between items-center mb-6 gap-2 w-full">
              <h2 className="text-[20px] sm:text-[34px] font-semibold text-black tracking-tight text-left truncate">
                {selectedCategory
                  ? categories.find(c => c.id === selectedCategory)?.label
                  : "Services Collection"}
              </h2>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setShowMobileFilter((prev) => !prev)}
                  className="
                    lg:hidden
                    h-[40px]
                    w-[40px]
                    rounded-lg
                    border
                    border-gray-300
                    bg-[#F3F3F3]
                    hover:bg-[#EBEBEB]
                    flex
                    items-center
                    justify-center
                    transition-colors
                    cursor-pointer
                  "
                  aria-label="Toggle Menu"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showMobileFilter && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="lg:hidden overflow-hidden mb-6 text-left w-full"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl w-full">
                    <p className="text-xs font-black text-black uppercase tracking-wider mb-3">
                      CATEGORY
                    </p>

                    <div className="relative mb-4">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-black focus:outline-none focus:border-black transition"
                      />
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 divide-y divide-gray-100 bg-white">
                      {categories.map((category) => {
                        const count = services.filter(s => s.category === category.value).length;
                        return (
                          <label
                            key={category.id}
                            className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 transition select-none"
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={selectedCategory === category.id}
                                onChange={() => handleCategoryChange(category.id)}
                                className="w-4 h-4 accent-black rounded cursor-pointer"
                              />
                              <span className="text-xs font-semibold text-black">
                                {category.label}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-gray-400">
                              {count}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setShowMobileFilter(false)}
                      className="w-full bg-black text-white py-2.5 rounded-xl text-xs font-semibold hover:bg-gray-800 transition active:scale-98 cursor-pointer"
                    >
                      Show less
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SERVICES CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-8 w-full">
              {filteredServices && filteredServices.length > 0 ? (
                <AnimatePresence mode="popLayout">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={`${selectedCategory}-${service.id}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.06,
                        ease: "easeOut",
                      }}
                      className="mt-2 text-left h-full w-full"
                    >
                      {/* Entire Card Clickable Handler Added */}
                      <Card
                        onClick={() => {
                          window.scrollTo(0, 0);
                          navigate("/service", { state: { service } });
                        }}
                        className="h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden cursor-pointer"
                      >
                        <CardContent className="p-0 flex flex-col h-full">

                          <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl bg-gray-50">
                            <img
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              alt={service.title}
                              src={service.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          <div className="p-4 flex flex-col flex-grow">
                            <h4 className="font-[Poppins] font-semibold text-black text-[14px] tracking-tight mb-2 line-clamp-2 leading-snug">
                              {service.title}
                            </h4>

                            <p className="text-gray-500 text-[12px] leading-relaxed mb-4 line-clamp-3 flex-grow">
                              {service.description}
                            </p>

                            <div className="flex gap-2 mt-auto pt-2">
                              {/* View Button with e.stopPropagation() */}
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.scrollTo(0, 0);
                                  navigate("/service", { state: { service } });
                                }}
                                variant="ghost"
                                className="flex-1 h-8 bg-gray-100 hover:bg-gray-200 text-xs font-medium rounded-lg text-gray-700 transition-colors cursor-pointer"
                              >
                                View
                              </Button>

                              {/* Enquire Button with e.stopPropagation() */}
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate("/enquiry", { state: { service } });
                                }}
                                className="flex-1 h-8 bg-[#8dc63f] hover:bg-[#7cb337] text-white text-xs font-medium rounded-lg transition-colors shadow-sm cursor-pointer"
                              >
                                Enquire
                              </Button>
                            </div>
                          </div>

                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              ) : (
                <div className="col-span-full text-center py-16 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200 w-full">
                  <p className="text-gray-400 text-sm font-medium">
                    No services found.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ServicesPage;



