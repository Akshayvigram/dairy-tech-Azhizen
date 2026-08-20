// import { useState } from "react";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: string;
//   image: string;
//   description: string;
//   title?: string;
//   imageClasses?: string;
//   titleClasses?: string;
//   priceExtra?: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 2,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 3,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 4,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 5,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
//   {
//     id: 6,
//     name: "MOLIN PAD PACK",
//     category: "Motor Category",
//     price: "$299",
//     image: "/motor-1.png",
//     description: "High-quality motor pack",
//   },
// ];

// const categories = [
//   { name: "Milking Machine", count: 12 },
//   { name: "Milk Tanks", count: 8 },
//   { name: "Pump", count: 5 },
//   { name: "Motor", count: 15 },
//   { name: "Milking Machine", count: 12 },
//   { name: "Milk Tanks", count: 8 },
//   { name: "Pump", count: 5 },
//   { name: "Motor", count: 15 },
// ];

// export const ShopPage = (): JSX.Element => {
//   const [selectedCategory, setSelectedCategory] = useState<string>("Motor Category");

//   return (
//     <div className="bg-white w-full min-h-screen flex flex-col">
//       {/* show only the navbar from the homepage hero */}
//       <HeroSection showOnlyNav />

//       {/* Hero Banner */}
//       <div className="w-full h-64 md:h-80 bg-cover bg-center"
//            style={{ backgroundImage: "url('/farm-banner.jpg')" }}>
//         <div className="w-full h-full bg-black/30 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white">Our Products</h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 py-8 md:py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="w-full lg:w-64">
//             {/* Search */}
//             <div className="mb-8">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             {/* Product Collection */}
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold mb-4">Product Collection</h3>
//               <div className="space-y-3">
//                 {categories.map((category) => (
//                   <label key={category.name} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={selectedCategory === category.name}
//                       onChange={() => setSelectedCategory(category.name)}
//                       className="w-4 h-4"
//                     />
//                     <span className="text-sm">{category.name}</span>
//                     <span className="text-xs text-gray-500 ml-auto">{category.count}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>


//             {/* Filter Button */}
//             <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
//               Show less
//             </button>
//           </div>

//           {/* Products Grid */}
//           <div className="flex-1">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-2xl font-semibold">Motor Category</h2>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
//                   Filter +sort
//                 </button>
//               </div>
//             </div>

//               {/* Products */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-9 max-w-[100%] px-3 sm:px-4 md:px-6 mx-auto">
//                 {products.map((product, index) => (
//                   <Card
//                     key={index}
//                     className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-[0px_4px_4px_#00000040] border-0"
//                   >
//                     <CardContent className="p-2 sm:p-3 md:p-[13px] flex flex-col h-full">
//                       <div className="w-full h-[150px] sm:h-[180px] md:h-[291px] flex bg-[#c4d1d48f] rounded-[8px] sm:rounded-[10px] overflow-hidden mb-3 sm:mb-4 md:mb-[20px]">
//                         <img
//                           className="w-full h-full object-cover"
//                           alt={product.name}
//                           src={product.image}
//                         />
//                       </div>

//                       <h3 className="text-[11px] sm:text-[13px] md:text-base mb-1 sm:mb-[5px] px-1 sm:px-[2px] font-semibold">
//                         {product.name}
//                       </h3>

//                       <p className="[font-family:'Inter',Helvetica] font-medium text-[#322e2e] text-[10px] sm:text-[11px] md:text-xs tracking-[0] leading-[normal] mb-auto line-clamp-2">
//                         {product.description}
//                       </p>

//                       <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 md:mt-[10px]">
//                         <div className="[font-family:'Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
//                           {product.price}
//                         </div>

//                         <Button className="bg-[#032a4a] hover:bg-[#032a4a]/90 text-white [font-family:'Inter',Helvetica] font-bold text-xs sm:text-sm md:text-base rounded-[5px] h-[28px] sm:h-[32px] md:h-[35px] px-4 sm:px-6 md:px-8">
//                           Order Now
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//       {/* Footer */}
//       <FooterSection />
//     </div>
//   );
// };


// import { useState, useMemo, useEffect } from "react";
// import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Link, useLocation } from "react-router-dom";
// import { products } from "../lib/products";
// import { ChevronDownIcon } from "lucide-react";
// import { Navbar } from "../components/Navbar";
// import { motion, AnimatePresence } from "framer-motion";

// export const ShopPage = (): JSX.Element => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [sortBy, setSortBy] = useState<string>("none");
//   const [showSortDropdown, setShowSortDropdown] = useState(false);
//   const location = useLocation();

//   // Scroll to top on page load
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   // 1. Get unique categories and their counts
//   const categories = useMemo(() => {
//     const categoryMap = new Map<string, number>();
//     products.forEach((product) => {
//       categoryMap.set(product.category, (categoryMap.get(product.category) || 0) + 1);
//     });
//     return Array.from(categoryMap.entries()).map(([name, count]) => ({
//       name,
//       count,
//     }));
//   }, []);

//   // 2. Combined Filter AND Sort logic (Fixes variable shadowing/let errors)
//   const filteredProducts = useMemo(() => {
//     // Start with filtering
//     let result = products.filter((product) => {
//       const matchesCategory = !selectedCategory || product.category === selectedCategory;
//       const matchesSearch =
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });

//     // Apply sorting to the filtered result
//     if (sortBy === "Price: Low to High") {
//       result.sort((a, b) => {
//         const priceA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
//         const priceB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
//         return priceA - priceB;
//       });
//     } else if (sortBy === "Price: High to Low") {
//       result.sort((a, b) => {
//         const priceA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
//         const priceB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
//         return priceB - priceA;
//       });
//     } else if (sortBy === "Name: A to Z") {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     }

//     return result;
//   }, [selectedCategory, searchTerm, sortBy]);

//   const displayCategory = selectedCategory || "All Products";

//   return (
//     <div className="bg-white py-3 w-full min-h-screen flex flex-col">
//       {/* show only the navbar from the homepage hero */}

//       <Navbar  />

//       {/* Hero Banner */}
//       <div className="w-full h-full  max-w-[1400px] max-h-[2000px] mx-auto rounded-[11px] md:h-80 bg-cover bg-center"
//            style={{ backgroundImage: "url('/farm-banner.png')" }}>
//       </div>

//       <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 py-8 md:py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <aside className="w-[350px] lg:w-72 flex-shrink-0">
//             <div className="sticky top-24">
//               <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Search</h3>
//               <input
//                 type="text"
//                 placeholder="Find a product..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#032a4a] outline-none transition-all mb-8"
//               />

//               <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Categories</h3>
//               <div className="space-y-2">
//                 <button
//                   onClick={() => setSelectedCategory(null)}
//                   className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
//                     selectedCategory === null ? "bg-[#032a4a] text-white" : "hover:bg-gray-100 text-gray-600"
//                   }`}
//                 >
//                   <span>All Products</span>
//                   <span className="opacity-60">{products.length}</span>
//                 </button>
//                 {categories.map((cat) => (
//                   <button
//                     key={cat.name}
//                     onClick={() => setSelectedCategory(cat.name)}
//                     className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
//                       selectedCategory === cat.name ? "bg-[#032a4a] text-white" : "hover:bg-gray-100 text-gray-600"
//                     }`}
//                   >
//                     <span>{cat.name}</span>
//                     <span className="opacity-60">{cat.count}</span>
//                   </button>
//                 ))}
//               </div>

//               {(selectedCategory || searchTerm) && (
//                 <button
//                   onClick={() => { setSelectedCategory(null); setSearchTerm(""); }}
//                   className="w-full mt-6 bg-gray-100 text-gray-500 py-3 rounded-xl font-bold hover:bg-red-50 hover:text-red-500 transition-all"
//                 >
//                   Clear Filters
//                 </button>
//               )}
//             </div>
//           </aside>

//           {/* Product Section */}
//           <div className="flex-1">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-2xl font-bold text-[#032a4a]">
//                 {displayCategory} <span className="text-gray-400 font-normal ml-2">({filteredProducts.length})</span>
//               </h2>

//               <div className="relative">
//                 <button
//                   onClick={() => setShowSortDropdown(!showSortDropdown)}
//                   className="px-5 py-2.5 text-sm font-semibold border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2 bg-white"
//                 >
//                   <span>Sort: {sortBy === "none" ? "Default" : sortBy}</span>
//                   <ChevronDownIcon className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
//                 </button>

//                 {showSortDropdown && (
//                   <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
//                     {["none", "Price: Low to High", "Price: High to Low", "Name: A to Z"].map((opt) => (
//                       <button
//                         key={opt}
//                         onClick={() => { setSortBy(opt); setShowSortDropdown(false); }}
//                         className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${sortBy === opt ? "text-[#032a4a] font-bold" : "text-gray-600"}`}
//                       >
//                         {opt === "none" ? "Default" : opt}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {filteredProducts.length > 0 ? (
//               <motion.div layout className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <AnimatePresence mode="popLayout">
//                   {filteredProducts.map((product, index) => (
//   <motion.div
//     key={product.id}
//     layout
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0, scale: 0.9 }}
//     transition={{ duration: 0.3, delay: index * 0.05 }}
//   >
//     {/* Removed fixed h-[200rem] which was causing layout issues */}
//     <Card className="group bg-white rounded-2xl overflow-hidden border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(3,42,74,0.12)] transition-all duration-500 h-[26rem] flex flex-col">
//       <CardContent className="p-0 flex flex-col h-full">

//         {/* Changed bg-[#f8fafb] to bg-white to remove the gray box background */}
//         <div className="relative w-full h-64 bg-white overflow-hidden">
//           <img
//             className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
//             alt={product.name}
//             src={product.image}
//           />
//           {/* Badge remains with a slight blur for contrast */}
//           <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#032a4a] uppercase tracking-wider shadow-sm">
//             {product.category}
//           </div>
//         </div>

//         <div className="p-6 flex flex-col flex-grow">
//           <h3 className="font-bold text-[#032a4a] text-lg mb-2 line-clamp-1">
//             {product.name}
//           </h3>
//           <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
//             {product.description}
//           </p>

//           <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
//             <div className="flex flex-col">
//               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
//                 Price
//               </span>
//               <span className="font-extrabold text-[#032a4a] text-xl">
//                 {product.price}
//               </span>
//             </div>
//             <Link to={`/buy?id=${product.id}`}>
//               <Button className="flex-1 h-10 bg-[#8dc63f] w-[100px] hover:brightness-110 text-white text-sm font-medium rounded-lg">
//                 View
//               </Button>

//             </Link>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </motion.div>
//             ) : (
//               <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
//                 <p className="text-gray-400 font-medium">No products found matching your criteria.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <FooterSection />
//     </div>
//   );
// };

import { useState, useMemo, useEffect, useRef } from "react";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "../lib/products";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search } from "lucide-react";

export const ShopPage = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Reference for scroll-triggered entrance animation
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.1 });

  const handleCategoryToggle = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null); // Unchecks current category and defaults to ALL
    } else {
      setSelectedCategory(categoryName);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  /* =========================
      CATEGORY COUNTS
  ========================== */
  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();

    products.forEach((product) => {
      categoryMap.set(
        product.category,
        (categoryMap.get(product.category) || 0) + 1
      );
    });

    return Array.from(categoryMap.entries()).map(([name, count]) => ({
      name,
      count,
    }));
  }, []);

  /* =========================
      FILTER PRODUCTS
  ========================== */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const displayCategory = selectedCategory || "All Categories";

  return (
    <div className="bg-[#F7F7F7] min-h-screen w-full flex flex-col font-[Poppins] m-0 p-0">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO IMAGE BANNER SECTION */}
      <div className="relative w-full h-[210px] sm:h-[290px] md:h-[450px] overflow-hidden mt-16 sm:mt-20 bg-black">
        {/* Background Banner Image */}
        <img
          src="/banner product.png"
          alt="Product Collection Banner"
          className="w-full h-full object-cover object-center block border-0 outline-none select-none"
        />

        {/* Dark Bottom Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Responsive Bottom Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-2.5 sm:pb-4 md:pb-6 px-4 z-10 text-center">
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-white tracking-tight leading-tight sm:leading-relaxed max-w-[95%] xl:max-w-none xl:whitespace-nowrap drop-shadow-md">
            From milking systems to pumps, motors, milk cooling tanks, and automation equipment—built to improve productivity and maximize milk yield.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 max-w-[1450px] mx-auto w-full px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start relative">

          {/* 📌 STICKY DESKTOP SIDEBAR (FOLLOWS PAGE SCROLL) */}
          <aside className="hidden lg:block w-[260px] flex-shrink-0 sticky top-28 self-start z-10">
            <div className="bg-transparent text-left">
              {/* TITLE */}
              <h2 className="text-[22px] md:text-[34px] font-black font-semibold text-black mb-6 leading-tight">
                Product Collection
              </h2>

              {/* CATEGORY */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[15px] font-semibold text-black">
                    Category
                  </h3>
                </div>

                {/* SEARCH */}
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                    w-full
                    h-[50px]
                    px-4
                    border
                    border-gray-300
                    rounded-xl
                    bg-white
                    mb-5
                    outline-none
                    focus:border-[#7CB142]
                    transition
                  "
                />

                {/* CATEGORY LIST */}
                <div className="border border-gray-300 rounded-xl overflow-hidden bg-white">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      type="button"
                      onClick={() => handleCategoryToggle(category.name)}
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        px-4
                        py-4
                        border-b
                        border-gray-200
                        last:border-b-0
                        hover:bg-gray-50
                        transition-all
                        cursor-pointer
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            w-5
                            h-5
                            border
                            border-gray-400
                            rounded
                            flex
                            items-center
                            justify-center
                            text-xs
                            ${
                              selectedCategory === category.name
                                ? "bg-black text-white border-black"
                                : "bg-white"
                            }
                          `}
                        >
                          {selectedCategory === category.name && "✓"}
                        </div>

                        <span className="text-sm font-medium text-black">
                          {category.name}
                        </span>
                      </div>

                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SHOW LESS / RESET BUTTON */}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm("");
                }}
                className="
                  w-full
                  h-[50px]
                  bg-[#7CB142]
                  hover:bg-[#669632]
                  rounded-xl
                  text-white
                  font-semibold
                  transition-all
                  cursor-pointer
                "
              >
                Show less
              </button>
            </div>
          </aside>

          {/* RIGHT PRODUCT SECTION */}
          <div className="flex-1 w-full min-w-0" ref={gridRef}>
            {/* HEADER ROW WITH TITLE & 3-LINE MENU BUTTON */}
            <div className="flex justify-between items-center mb-6 gap-2 w-full">
              <h2 className="text-[20px] md:text-[34px] font-semibold text-black text-left truncate">
                {displayCategory}
              </h2>

              <div className="flex items-center gap-2 flex-shrink-0">
                {/* ☰ 3-LINE HAMBURGER ICON BUTTON (MOBILE ONLY) */}
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
                  aria-label="Toggle Category Filter"
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

            {/* 📱 MOBILE POP-DOWN FILTER PANEL */}
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

                    {/* Mobile Search Bar Input */}
                    <div className="relative mb-4">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-black focus:outline-none focus:border-black transition"
                      />
                    </div>

                    {/* Mobile Category Checkbox List */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 divide-y divide-gray-100 bg-white">
                      {categories.map((category) => (
                        <label
                          key={category.name}
                          className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 transition select-none"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={selectedCategory === category.name}
                              onChange={() => handleCategoryToggle(category.name)}
                              className="w-4 h-4 accent-black rounded cursor-pointer"
                            />
                            <span className="text-xs font-semibold text-black">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-gray-400">
                            {category.count}
                          </span>
                        </label>
                      ))}
                    </div>

                    {/* Show Less Button */}
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

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  xl:grid-cols-3
                  gap-5
                  w-full
                "
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                      className="text-left h-full w-full"
                    >
                      {/* Entire Card Click Handler Added */}
                      <Card
                        onClick={() => {
                          window.scrollTo(0, 0);
                          navigate(`/buy?id=${product.id}`);
                        }}
                        className="
                          bg-white
                          rounded-[12px]
                          border
                          border-gray-200
                          shadow-xs
                          hover:shadow-lg
                          transition-all
                          duration-300
                          overflow-hidden
                          h-full
                          cursor-pointer
                        "
                      >
                        <CardContent className="p-3 flex flex-col h-full">
                          {/* IMAGE BOX */}
                          <div
                            className="
                              w-full
                              h-[190px]
                              bg-[#DCE3E5]
                              rounded-[10px]
                              flex
                              items-center
                              justify-center
                              overflow-hidden
                              mb-4
                            "
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="
                                w-[120px]
                                h-[120px]
                                object-contain
                              "
                            />
                          </div>

                          {/* CONTENT WRAPPER */}
                          <div className="flex flex-col flex-grow">
                            {/* TITLE */}
                            <h3
                              className="
                                font-[Poppins]
                                font-semibold
                                text-black
                                text-[14px]
                                tracking-tight
                                mb-2
                                line-clamp-2
                                leading-snug
                              "
                            >
                              {product.name}
                            </h3>

                            {/* DESCRIPTION */}
                            <p
                              className="
                                text-gray-500
                                text-[12px]
                                leading-relaxed
                                line-clamp-3
                                mb-4
                                flex-grow
                              "
                            >
                              {product.description}
                            </p>
                          </div>

                          {/* FOOTER */}
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-3
                              mt-auto
                              pt-2
                              border-t
                              border-gray-50
                            "
                          >
                            {/* PRICE */}
                            <div>
                              <h4
                                className="
                                  font-[Poppins]
                                  font-bold
                                  text-black
                                  text-[16px]
                                  sm:text-[18px]
                                  tracking-tight
                                  leading-tight
                                "
                              >
                                {product.price}
                              </h4>

                              <p
                                className="
                                  text-[10px]
                                  text-gray-400
                                  font-bold
                                  -mt-0.5
                                  block
                                "
                              >
                                +GST
                              </p>
                            </div>

                            {/* ORDER NOW BUTTON (with e.stopPropagation()) */}
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.scrollTo(0, 0);
                                navigate(`/buy?id=${product.id}`);
                              }}
                              className="
                                h-[36px]
                                px-6
                                rounded-[8px]
                                bg-[#7CB142]
                                hover:bg-[#669632]
                                text-white
                                text-[14px]
                                font-semibold
                                transition-colors
                                duration-200
                                shadow-xs
                                cursor-pointer
                                flex-shrink-0
                              "
                            >
                              Order Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div
                className="
                  text-center
                  py-24
                  bg-gray-50
                  rounded-3xl
                  border-2
                  border-dashed
                  border-gray-200
                  w-full
                "
              >
                <p className="text-gray-400 font-medium">
                  No products found.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
};

export default ShopPage;