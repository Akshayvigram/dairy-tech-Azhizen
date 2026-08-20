// import { useState } from "react";
// import { Navbar } from "../components/Navbar";
// import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";

// interface FormData {
//   name: string;
//   phone: string;
//   location: string;
//   state: string;
//   city: string;
//   pincode: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   phone?: string;
//   location?: string;
//   state?: string;
//   city?: string;
//   pincode?: string;
//   message?: string;
// }

// const STATES = [
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//   "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//   "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
//   "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
//   "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
// ];

// const EnquiryForm = () => {
//   const [form, setForm] = useState<FormData>({
//     name: "",
//     phone: "",
//     location: "",
//     state: "",
//     city: "",
//     pincode: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<FormErrors>({});

//   const validate = (): FormErrors => {
//     const newErrors: FormErrors = {};
//     if (!form.name.trim()) newErrors.name = "Name is required";
//     if (!form.phone.trim()) newErrors.phone = "Phone number is required";
//     else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter a valid 10-digit number";
//     if (!form.location.trim()) newErrors.location = "Location is required";
//     if (!form.state) newErrors.state = "State is required";
//     if (!form.city.trim()) newErrors.city = "City is required";
//     if (!form.pincode.trim()) newErrors.pincode = "Pincode is required";
//     else if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Enter valid 6-digit pincode";
//     if (!form.message.trim()) newErrors.message = "Requirement message is required";
//     return newErrors;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSend = () => {
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     alert(
//       `Form submitted!\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nState: ${form.state}\nCity: ${form.city}\nPincode: ${form.pincode}\nMessage: ${form.message}`
//     );
//   };

//   const inputBase =
//     "w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition";
//   const inputError = "border-red-400 bg-red-50";
//   const inputNormal = "border-gray-200";

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
//       <Navbar showOnlyNav />

//       {/* Main */}
//       <main className="flex-1 flex items-start justify-center px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">

//           {/* Left: Form Card */}
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1">

//             {/* Support Banner inside form card */}
//             <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
//               <p className="text-xs text-gray-500">
//                 If You Have Any Troubles Please Contact Ur Support
//               </p>
//               <p className="text-xs font-semibold text-gray-500 ml-3 whitespace-nowrap">
//                 987456321
//               </p>
//             </div>

//             <h2 className="text-base font-semibold text-gray-800 mb-5">General Information</h2>

//             {/* Name */}
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
//                 Name <span className="text-red-400">*</span>
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
//               />
//               {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
//                 Phone Number <span className="text-red-400">*</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
//                   </svg>
//                 </span>
//                 <input
//                   id="phone"
//                   type="tel"
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   placeholder="Enter 10-digit phone number"
//                   maxLength={10}
//                   className={`${inputBase} pl-9 ${errors.phone ? inputError : inputNormal}`}
//                 />
//               </div>
//               {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
//             </div>

//             {/* Location */}
//             <div className="mb-3">
//               <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
//                 Location <span className="text-red-400">*</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
//                   </svg>
//                 </span>
//                 <input
//                   id="location"
//                   type="text"
//                   name="location"
//                   value={form.location}
//                   onChange={handleChange}
//                   placeholder="Enter your street / area"
//                   className={`${inputBase} pl-9 ${errors.location ? inputError : inputNormal}`}
//                 />
//               </div>
//               {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
//             </div>

//             {/* State / City / Pincode */}
//             <div className="grid grid-cols-3 gap-3 mb-5">
//               {/* State */}
//               <div>
//                 <label htmlFor="state" className="block text-xs text-gray-500 mb-1">
//                   State <span className="text-red-400">*</span>
//                 </label>
//                 <div className="relative">
//                   <select
//                     id="state"
//                     name="state"
//                     value={form.state}
//                     onChange={handleChange}
//                     className={`w-full appearance-none border rounded-lg px-3 py-2.5 text-sm text-gray-600 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition cursor-pointer ${
//                       errors.state ? inputError : inputNormal
//                     }`}
//                   >
//                     <option value="">State</option>
//                     {STATES.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                   <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </span>
//                 </div>
//                 {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
//               </div>

//               {/* City */}
//               <div>
//                 <label htmlFor="city" className="block text-xs text-gray-500 mb-1">
//                   City <span className="text-red-400">*</span>
//                 </label>
//                 <input
//                   id="city"
//                   type="text"
//                   name="city"
//                   value={form.city}
//                   onChange={handleChange}
//                   placeholder="City"
//                   className={`${inputBase} ${errors.city ? inputError : inputNormal}`}
//                 />
//                 {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
//               </div>

//               {/* Pincode */}
//               <div>
//                 <label htmlFor="pincode" className="block text-xs text-gray-500 mb-1">
//                   Pincode <span className="text-red-400">*</span>
//                 </label>
//                 <input
//                   id="pincode"
//                   type="text"
//                   name="pincode"
//                   value={form.pincode}
//                   onChange={handleChange}
//                   placeholder="Pincode"
//                   maxLength={6}
//                   className={`${inputBase} ${errors.pincode ? inputError : inputNormal}`}
//                 />
//                 {errors.pincode && <p className="text-red-400 text-xs mt-1">{errors.pincode}</p>}
//               </div>
//             </div>

//             {/* Requirement Message */}
//             <div className="mb-6">
//               <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
//                 Requirement Message <span className="text-red-400">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 placeholder="Example: I have 20 Cows, so provide me a Quotation for the requirement. My Number 91234563201"
//                 value={form.message}
//                 onChange={handleChange}
//                 className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
//               />
//               {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
//             </div>

//             {/* Send Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleSend}
//                 className="bg-lime-300 hover:bg-lime-400 active:scale-95 text-black font-semibold text-sm px-10 py-2.5 rounded-lg transition-all duration-150 shadow-sm"
//               >
//                 Send
//               </button>
//             </div>
//           </div>

//           {/* Right: Order Summary Card */}
//           <div className="w-full md:w-64 flex-shrink-0">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
//               {/* Product Image */}
//               <div className="rounded-lg overflow-hidden mb-3 border-2 border-blue-400">
//                 <img
//                   src="image-359.png"
//                   alt="Construction Building"
//                   className="w-full h-36 object-cover"
//                   onError={(e) => {
//                     (e.target as HTMLImageElement).src =
//                       "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=400&q=80";
//                   }}
//                 />
//               </div>

//               {/* Title & Price */}
//               <p className="text-xs font-semibold text-gray-700 mb-0.5">
//                 Construction Building for Sale
//               </p>
//               {/* ✅ Changed from text-green-600 to text-lime-400 (light green) */}
//               <p className="text-sm font-bold text-lime-400 mb-3">₹2,00,000</p>

//               <hr className="border-dashed border-gray-200 mb-3" />

//               {/* Price Breakdown */}
//               <div className="space-y-1.5 text-xs text-gray-600 mb-4">
//                 <div className="flex justify-between">
//                   <span>Amount</span>
//                   <span className="text-gray-800">₹2,00,000</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Service Charge</span>
//                   <span className="text-gray-800">₹0</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Discount</span>
//                   <span className="text-gray-800">10%</span>
//                 </div>
//                 <div className="flex justify-between font-semibold text-sm text-gray-800 pt-1 border-t border-gray-100 mt-1">
//                   <span>Total</span>
//                   <span>₹1,80,000</span>
//                 </div>
//               </div>

//               {/* Edit Order Button */}
//               <button className="w-full bg-lime-300 hover:bg-lime-400 text-black text-sm font-medium py-2 rounded-lg active:scale-95 transition-all duration-150">
//                 Edit Order
//               </button>
//             </div>
//           </div>

//         </div>
//       </main>

//       <FooterSection />
//     </div>
//   );
// };

// export default EnquiryForm;

import { useState, useMemo, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { FooterSection } from "../screens/DesktopScreen/sections/FooterSection";
import { ChevronDown, MapPin, Check, ShoppingBag, Wrench } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../lib/products";
import { services } from "../lib/services";

export const EnquiryForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialService = location.state?.service;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Multi-Selection State for Products & Services ---
  const [selectedItems, setSelectedItems] = useState<any[]>(
    initialService ? [initialService] : []
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    phone1: "",
    phone2: "",
    location: "",
    state: "",
    city: "",
    pincode: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showSelectionMenu, setShowSelectionMenu] = useState(false);

  // Close dropdown automatically when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Helper: Parse numeric prices (e.g., "₹12,499" -> 12499) ---
  const parsePrice = (priceStr: string | number): number => {
    if (typeof priceStr === "number") return priceStr;
    if (!priceStr) return 0;
    const numeric = priceStr.replace(/[^0-9.]/g, "");
    return parseFloat(numeric) || 0;
  };

  // --- Calculate total price across all checked items ---
  const totalPrice = useMemo(() => {
    return selectedItems.reduce((acc, item) => acc + parsePrice(item.price), 0);
  }, [selectedItems]);

  // --- Format price back to currency string ---
  const formattedTotalPrice = useMemo(() => {
    return `₹${totalPrice.toLocaleString("en-IN")}`;
  }, [totalPrice]);

  // --- Toggle item selection ---
  const handleItemToggle = (item: any, type: "product" | "service") => {
    setSelectedItems((prev) => {
      const exists = prev.some(
        (i) => i.id === item.id && (('name' in i && type === 'product') || ('title' in i && type === 'service'))
      );
      if (exists) {
        return prev.filter(
          (i) => !(i.id === item.id && (('name' in i && type === 'product') || ('title' in i && type === 'service')))
        );
      } else {
        return [...prev, item];
      }
    });

    if (errors.selectedProduct) {
      setErrors((prev: any) => ({ ...prev, selectedProduct: "" }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleEditItem = () => {
    if (selectedItems.length === 0) return;
    const firstItem = selectedItems[0];
    if ('title' in firstItem) {
      navigate('/services', { state: { category: firstItem.category } });
    } else {
      navigate('/shop');
    }
  };

  const handleSend = async () => {
    // Validate form
    const validationErrors: any = {};
    if (!form.name.trim()) validationErrors.name = "Name is required";
    if (!form.phone1.trim()) validationErrors.phone1 = "Phone number is required";
    if (!form.location.trim()) validationErrors.location = "Location is required";
    if (!form.state) validationErrors.state = "State is required";
    if (!form.city.trim()) validationErrors.city = "City is required";
    if (!form.pincode.trim()) validationErrors.pincode = "Pincode is required";
    if (!form.message.trim()) validationErrors.message = "Message is required";
    if (selectedItems.length === 0) validationErrors.selectedProduct = "Please select at least one product or service";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const enquiryData = {
        ...form,
        selectedProducts: selectedItems.map((item) => ({
          id: item.id,
          name: item.name || item.title,
          type: 'name' in item ? 'product' : 'service',
          category: item.category,
          price: item.price,
          description: item.description,
        })),
        totalPrice: formattedTotalPrice,
      };

      const response = await fetch('http://localhost:5000/api/enquiries/submit-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Enquiry Submitted Successfully!");
        setForm({
          name: "",
          phone1: "",
          phone2: "",
          location: "",
          state: "",
          city: "",
          pincode: "",
          message: "",
        });
        setSelectedItems([]);
      } else {
        alert("Error submitting enquiry: " + result.message);
      }
    } catch (err) {
      console.error("Connection failed", err);
      alert("Failed to submit enquiry. Please check your connection.");
    }
  };

  const handleSelectFromShop = () => {
    navigate('/shop');
    setShowSelectionMenu(false);
  };

  const handleSelectFromServices = () => {
    navigate('/', { state: { scrollTo: 'service-showcase' } });
    setShowSelectionMenu(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar showOnlyNav />

<main className="flex-1 flex flex-col items-center px-4 pt-16 sm:pt-24 pb-12">
        <div className="w-full max-w-5xl">

          {/* Top Support Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 px-2 gap-2">
            <p className="text-sm font-medium text-gray-500">
              If You Have Any Troubles Please Contact Our Support
            </p>
            <p className="text-sm font-bold text-gray-700">987456321</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">

            {/* Left: Form Card */}
            <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100 p-6 sm:p-8 flex-1">
              <h2 className="text-lg font-bold text-gray-800 mb-6">General Information</h2>

              {/* DROPDOWN WITH CHECKBOXES FOR ALL SERVICES AND PRODUCTS */}
              <div className="mb-6 relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Services/Products <span className="text-red-500">*</span>
                </label>

                {/* Dropdown Selector Header */}
                <div
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-medium bg-white flex items-center justify-between cursor-pointer transition select-none ${
                    errors.selectedProduct ? 'border-red-400' : 'border-gray-300 hover:border-[#8dc63f]'
                  }`}
                >
                  <span className={selectedItems.length > 0 ? "text-gray-900 font-semibold" : "text-gray-400"}>
                    {selectedItems.length > 0
                      ? `${selectedItems.length} item(s) selected (${formattedTotalPrice})`
                      : "Select any services/products"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Pop-down Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 z-50 max-h-[300px] overflow-y-auto space-y-4">

                    {/* PRODUCTS SECTION */}
                    <div>
                      <div className="flex items-center gap-2 mb-2 pb-1 border-b border-gray-200">
                        <ShoppingBag className="w-4 h-4 text-[#8dc63f]" />
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Products</span>
                      </div>

                      <div className="space-y-1 pl-1">
                        {Array.isArray(products) && products.map((product) => {
                          const isChecked = selectedItems.some((i) => i.id === product.id && 'name' in i);
                          return (
                            <label
                              key={`prod-${product.id}`}
                              className={`flex items-center justify-between p-2.5 rounded-lg border transition cursor-pointer select-none ${
                                isChecked
                                  ? "bg-lime-50/80 border-[#8dc63f] text-gray-900 font-medium"
                                  : "bg-white border-gray-100 hover:bg-gray-50 text-gray-700"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleItemToggle(product, "product")}
                                  className="w-4 h-4 accent-[#8dc63f] rounded cursor-pointer"
                                />
                                <span className="text-xs sm:text-sm">{product.name}</span>
                              </div>
                              <span className="text-xs font-bold text-gray-900">{product.price || "Contact"}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* SERVICES SECTION */}
                    <div>
                      <div className="flex items-center gap-2 mb-2 pb-1 border-b border-gray-200 pt-2">
                        <Wrench className="w-4 h-4 text-[#8dc63f]" />
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Services</span>
                      </div>

                      <div className="space-y-1 pl-1">
                        {Array.isArray(services) && services.map((service) => {
                          const isChecked = selectedItems.some((i) => i.id === service.id && 'title' in i);
                          return (
                            <label
                              key={`serv-${service.id}`}
                              className={`flex items-center justify-between p-2.5 rounded-lg border transition cursor-pointer select-none ${
                                isChecked
                                  ? "bg-lime-50/80 border-[#8dc63f] text-gray-900 font-medium"
                                  : "bg-white border-gray-100 hover:bg-gray-50 text-gray-700"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleItemToggle(service, "service")}
                                  className="w-4 h-4 accent-[#8dc63f] rounded cursor-pointer"
                                />
                                <span className="text-xs sm:text-sm">{service.title}</span>
                              </div>
                              <span className="text-xs font-bold text-gray-900">{service.price || "On Request"}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                )}

                {errors.selectedProduct && <p className="text-red-500 text-xs mt-1">{errors.selectedProduct}</p>}
                {selectedItems.length > 0 && (
                  <p className="text-green-600 text-xs mt-1.5 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> {selectedItems.length} item(s) selected
                  </p>
                )}
              </div>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full border rounded-md px-3 py-3 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone1"
                    value={form.phone1}
                    onChange={handleChange}
                    placeholder="784512369"
                    className={`w-full border rounded-md px-3 py-3 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ${
                      errors.phone1 ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone1 && <p className="text-red-500 text-xs mt-1">{errors.phone1}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number 2 (Optional)</label>
                  <input
                    type="text"
                    name="phone2"
                    value={form.phone2}
                    onChange={handleChange}
                    placeholder="2136544789"
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900" />
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Kalai Annai Nagar, sevagoundanur, bhavani"
                    className={`w-full border rounded-md px-3 py-3 pl-10 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ${
                      errors.location ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>

              {/* State / City / Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className={`w-full appearance-none border rounded-md px-3 py-3 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition cursor-pointer ${
                        errors.state ? 'border-red-400 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={`w-full border rounded-md px-3 py-3 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ${
                      errors.city ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    maxLength={6}
                    className={`w-full border rounded-md px-3 py-3 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ${
                      errors.pincode ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                </div>
              </div>

              {/* Requirement Message */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirement Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Example: I have 20 Cows, so provide me Quotation for the requirement, My Number 91234563201"
                  className={`w-full border rounded-md px-3 py-3 text-sm text-gray-800 bg-gray-50/50 focus:outline-none focus:ring-1 focus:ring-lime-500 transition resize-none ${
                    errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Send Button */}
              <div className="flex justify-end">
                <button onClick={handleSend} className="bg-[#a3cc00] hover:bg-[#8eb300] text-white font-bold px-12 py-3 rounded-md transition-colors shadow-md uppercase tracking-wider text-sm cursor-pointer">
                  Send
                </button>
              </div>
            </div>

            {/* Right: Order Summary Card */}
            <div className="w-full md:w-[320px] flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 relative">
                {selectedItems.length > 0 ? (
                  <>
                    <div className="p-4 overflow-hidden">
                      <img
                        src={selectedItems[0]?.image || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000"}
                        alt={selectedItems[0]?.name || selectedItems[0]?.title}
                        className={
                          'name' in selectedItems[0]
                            ? 'w-full h-36 object-contain rounded-lg bg-gray-50 p-2'
                            : 'w-full h-48 object-cover rounded-lg'
                        }
                      />
                    </div>

                    <div className="px-5 pb-6">
                      <h3 className="font-bold text-gray-800 text-sm">
                        {selectedItems.length === 1
                          ? selectedItems[0].name || selectedItems[0].title
                          : `${selectedItems.length} Items Selected`}
                      </h3>
                      <p className="text-[10px] text-gray-500 mb-2">
                        {selectedItems.length === 1
                          ? selectedItems[0].subtitle || selectedItems[0].description
                          : selectedItems.map((i) => i.name || i.title).join(", ")}
                      </p>

                      <div className="border-t border-dashed border-gray-300 my-4"></div>

                      {/* ITEM-BY-ITEM PRICE LIST */}
                      <div className="space-y-2.5 text-[11px] font-medium text-gray-600 max-h-[180px] overflow-y-auto pr-1">
                        {selectedItems.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-start gap-2">
                            <span className="text-gray-800 truncate flex-1">{item.name || item.title}</span>
                            <span className="text-gray-900 font-semibold">{item.price || "—"}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 my-4"></div>

                      <div className="flex justify-between text-sm font-bold text-gray-900">
                        <span>Calculated Total</span>
                        <span className="text-[#8dc63f] text-base">{formattedTotalPrice}</span>
                      </div>

                      <button
                        onClick={handleEditItem}
                        className="w-full mt-6 border-2 border-[#a3cc00] text-[#a3cc00] py-2 rounded-md font-bold hover:bg-lime-50 transition-colors cursor-pointer text-xs"
                      >
                        Change Item
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4">
                      <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000"
                        alt="Select Product"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>

                    <div className="px-5 pb-6">
                      <h3 className="font-bold text-gray-800 text-sm">No Item Selected</h3>
                      <p className="text-[10px] text-gray-500 mb-2">Select products or services using the dropdown on the left...</p>

                      <div className="border-t border-dashed border-gray-300 my-4"></div>

                      <div className="space-y-3 text-[11px] font-medium text-gray-500">
                        <div className="flex justify-between">
                          <span>Status</span>
                          <span className="text-gray-700">Awaiting Selection</span>
                        </div>
                      </div>

                      <div className="relative mt-6">
                        <button
                          type="button"
                          onClick={() => setShowSelectionMenu(!showSelectionMenu)}
                          className="w-full border-2 border-green-500 text-green-600 py-2 rounded-md font-bold bg-white hover:bg-green-50 transition-colors flex items-center justify-between px-4 text-xs"
                        >
                          Browse Options
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${showSelectionMenu ? "rotate-180" : ""}`}
                          />
                        </button>
                        {showSelectionMenu && (
                          <div className="absolute left-0 right-0 top-full mt-2 border border-gray-300 rounded-md bg-white shadow-xl z-[999]">
                            <button
                              type="button"
                              onClick={handleSelectFromShop}
                              className="w-full text-left px-4 py-3 hover:bg-green-50 border-b border-gray-200 font-bold text-gray-700 text-xs"
                            >
                              Products
                            </button>
                            <button
                              type="button"
                              onClick={handleSelectFromServices}
                              className="w-full text-left px-4 py-3 hover:bg-green-50 font-bold text-gray-700 text-xs"
                            >
                              Services
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default EnquiryForm;