import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How Does The Farm 360 Works?",
    answer:
      "Our Farm 360 solution provides end-to-end integration of automated systems, monitoring everything from livestock health to structural environment control metrics effortlessly.",
  },
  {
    id: 2,
    question: "What Are The Common Thing Used In Farming?",
    answer:
      "Modern farming utilizes highly efficient infrastructure setups including automated feeding stations, smart ventilation grids, milk processing machinery, and deep bedding management solutions.",
  },
  {
    id: 3,
    question: "How Many Cow Can I Used Here?",
    answer:
      "Our layouts are completely scalable. Solutions can be custom tailored whether you are operating a boutique family dairy farm of 20 cows or a commercial full-scale site housing thousands.",
  },
  {
    id: 4,
    question: "How Long It Take To Build The Farm House?",
    answer:
      "Depending on structure complexity and site scale parameters, typical field contracting development phases range anywhere from 4 to 12 weeks from planning to deployment.",
  },
  {
    id: 5,
    question: "Will The Farmer Get Profit By This?",
    answer:
      "Yes. By introducing strategic planning and automation design configurations, our systems drastically minimize labor overhead, prevent resource waste, and maximize overall daily yield throughput.",
  },
];

export const FaqSection = (): JSX.Element => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [questionText, setQuestionText] = useState("");

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted question:", questionText);
    setQuestionText("");
  };

  return (
    <section id="faq" className="w-full bg-[#E2F6D3] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Responsive Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

          {/* ================= LEFT SIDE: SLIDES IN FROM LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full flex flex-col items-start text-left"
          >
            <h2 className="font-[Poppins] font-bold text-black text-2xl sm:text-3xl md:text-4xl tracking-tight mb-8">
              Frequently Asked
              <br />
              Questions
            </h2>

            <form
              onSubmit={handleSend}
              className="w-full lg:max-w-[420px] flex flex-col gap-4"
            >
              <textarea
                value={questionText}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setQuestionText(e.target.value)
                }
                placeholder="Have a question? you may ask some question to our team"
                className="w-full h-36 sm:h-44 bg-white rounded-[14px] p-4 sm:p-5 text-gray-600 text-[14px] font-[Poppins] leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-[#7CB142] border border-transparent shadow-sm"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#7CB142] hover:bg-[#669632] text-white font-[Poppins] font-semibold text-[14px] rounded-[8px] px-5 py-2.5 w-full sm:w-fit transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transform -translate-y-[0.5px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span>Send</span>
              </button>
            </form>
          </motion.div>

          {/* ================= RIGHT SIDE: ACCORDION LIST SLIDES IN FROM RIGHT ================= */}
          <div className="w-full flex flex-col gap-5 sm:gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1, // Staggered entry for each card
                    ease: "easeOut",
                  }}
                  className="w-full bg-white rounded-[20px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:shadow-sm border border-gray-100/80 sm:border-transparent transition-all duration-300"
                >
                  {/* Accordion Toggle Header Trigger Button */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between py-5 px-5 sm:p-5 md:p-6 text-left transition-colors hover:bg-gray-50/50 cursor-pointer focus:outline-none gap-4"
                  >
                    {/* Question Text */}
                    <span className="font-[Poppins] font-semibold text-[#111111] text-[15px] sm:text-[14px] md:text-[16px] leading-snug">
                      {faq.question}
                    </span>

                    {/* Original Brand Green (#7CB142) Round Badge Indicator */}
                    <div className="w-8 h-8 rounded-full bg-[#7CB142] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-200 shadow-sm">
                      {isOpen ? (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Smooth Collapsible Answer Pane via Framer Motion */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 md:px-6 font-[Poppins] text-gray-500 text-[13.5px] md:text-[14.5px] leading-relaxed border-t border-gray-50 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};