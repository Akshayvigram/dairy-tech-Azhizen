import React, { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  suggestions?: { key: string; label: string }[];
  showWhatsapp?: boolean;
}

export const AIWidgetButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  const [hintText, setHintText] = useState("");
  const [questionCount, setQuestionCount] = useState(0);

  const WHATSAPP_NUMBER = "919750603988";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! Welcome to Farm 360 🌾. How can I help you today? Ask about our equipment, farm setup, or select a topic below.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ── Typewriter Effect for Hint Bubble ──
  useEffect(() => {
    const HINT_MESSAGES = [
      "Welcome to Farm 360! 🌾",
      "Ask how Farm 360 works! 🚜",
      "Need dairy & farm equipment? 🐄",
      "Chat with us on WhatsApp! 💬",
    ];
    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeHintText = () => {
      const currentMessage = HINT_MESSAGES[msgIndex];

      if (isDeleting) {
        setHintText(currentMessage.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setHintText(currentMessage.substring(0, charIndex + 1));
        charIndex++;
      }

      let delay = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        delay = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % HINT_MESSAGES.length;
        delay = 500;
      }

      timeoutId = setTimeout(typeHintText, delay);
    };

    timeoutId = setTimeout(typeHintText, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  // ── QA Knowledge Base ──
  const CUSTOM_QA_DATABASE: Record<
    string,
    { reply: string; suggestions: { key: string; label: string }[] }
  > = {
    how_works: {
      reply:
        "Farm 360 is a complete end-to-end smart dairy and farm management ecosystem. We provide high-efficiency milking machines, fodder cutters, automated dung scrapers, cooling tanks, and expert farm setup guidance to streamline daily operations.",
      suggestions: [
        { key: "capacity", label: "Cow Capacity" },
        { key: "profitability", label: "Farmer Profit" },
      ],
    },
    common_things: {
      reply:
        "Common tools used in modern dairy farming include:\n\n• Milking Machines (Single/Dual Bucket)\n• Chaff Cutters for fodder processing\n• Milk Cream Separators & Cooling Tanks\n• Automated Dung Scrapers\n• Cow Lifters & Health Tools",
      suggestions: [
        { key: "products", label: "Equipment Availability" },
        { key: "how_works", label: "How Farm 360 Works" },
      ],
    },
    capacity: {
      reply:
        "Farm 360 solutions scale from small family farms to large commercial dairies! Our modular setups and equipment can support anywhere from 2 to 500+ cows efficiently based on your layout and budget.",
      suggestions: [
        { key: "build_time", label: "Build Timeline" },
        { key: "profitability", label: "Farmer Profit" },
      ],
    },
    build_time: {
      reply:
        "Building a standard modern farmhouse/shed takes approximately 4 to 8 weeks depending on size, civil work, and automated equipment installation.",
      suggestions: [
        { key: "capacity", label: "Cow Capacity" },
        { key: "contact", label: "Contact Us" },
      ],
    },
    profitability: {
      reply:
        "Yes, absolutely! Farm 360 mechanization reduces labor costs by up to 60%, speeds up milking, cuts fodder wastage, and protects milk quality—significantly boosting net profit per cow.",
      suggestions: [
        { key: "how_works", label: "How Farm 360 Works" },
        { key: "products", label: "View Equipment" },
      ],
    },
    products: {
      reply:
        "Yes, all essential dairy machinery is available! We stock 2-Bucket Milking Machines (In Stock), Chaff Cutters, Cow Lifters, Grass Cutters, Milk Cream Separators, Dung Scrapers, Motors, and Bulk Milk Coolers.",
      suggestions: [
        { key: "how_works", label: "How Farm 360 Works" },
        { key: "contact", label: "Contact Us" },
      ],
    },
    contact: {
      reply: `For custom farm planning, site visits, or direct bulk pricing, please reach out to our team via WhatsApp or call us at +${WHATSAPP_NUMBER}.`,
      suggestions: [
        { key: "how_works", label: "How Farm 360 Works" },
        { key: "products", label: "Equipment Availability" },
      ],
    },
    default: {
      reply:
        "I can answer questions about Farm 360, dairy equipment availability, farm capacity, construction timelines, and farmer profitability.",
      suggestions: [
        { key: "how_works", label: "How Farm 360 Works" },
        { key: "common_things", label: "Common Farm Tools" },
        { key: "profitability", label: "Farmer Profit" },
      ],
    },
  };

  const handleSendMessage = (textToSend?: string, keyOverride?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");
    setIsTyping(true);

    const newCount = questionCount + 1;
    setQuestionCount(newCount);

    setTimeout(() => {
      setIsTyping(false);
      let botResponse = CUSTOM_QA_DATABASE.default;

      if (keyOverride && CUSTOM_QA_DATABASE[keyOverride]) {
        botResponse = CUSTOM_QA_DATABASE[keyOverride];
      } else {
        const query = text.toLowerCase();
        if (query.includes("how") && query.includes("work")) botResponse = CUSTOM_QA_DATABASE.how_works;
        else if (query.includes("common") || query.includes("thing") || query.includes("tool")) botResponse = CUSTOM_QA_DATABASE.common_things;
        else if (query.includes("how many cow") || query.includes("capacity") || query.includes("cow")) botResponse = CUSTOM_QA_DATABASE.capacity;
        else if (query.includes("long") || query.includes("build") || query.includes("time") || query.includes("house") || query.includes("shed")) botResponse = CUSTOM_QA_DATABASE.build_time;
        else if (query.includes("profit") || query.includes("benefit") || query.includes("earn")) botResponse = CUSTOM_QA_DATABASE.profitability;
        else if (query.includes("available") || query.includes("product") || query.includes("buy") || query.includes("price")) botResponse = CUSTOM_QA_DATABASE.products;
        else if (query.includes("contact") || query.includes("call") || query.includes("number")) botResponse = CUSTOM_QA_DATABASE.contact;
      }

      let replyText = botResponse.reply;
      let shouldShowWhatsapp = false;

      // 📍 After asking MORE THAN 2 QUESTIONS (> 2), add WhatsApp notification
      if (newCount > 2) {
        replyText += `\n\n💬 **For further enquiries, custom farm design, or direct ordering, please connect with us on WhatsApp!**`;
        shouldShowWhatsapp = true;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: replyText,
          suggestions: botResponse.suggestions,
          showWhatsapp: shouldShowWhatsapp,
        },
      ]);
    }, 600);
  };

  return (
    <>
      <style>{`
        #azhizen-chat-launcher {
          position: fixed;
          bottom: 38px;
          right: 18px;
          width: 68px;
          height: 68px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.16));
          -webkit-tap-highlight-color: transparent;
        }

        #azhizen-chat-container {
          position: fixed;
          bottom: 96px;
          right: 18px;
          width: 380px;
          max-width: calc(100vw - 36px);
          height: 560px;
          max-height: calc(100vh - 120px);
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(226, 232, 240, 0.8);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .azhizen-chat-header {
          background: linear-gradient(135deg, #7CB142, #5C9122);
          color: #ffffff;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .azhizen-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 14px;
          background-color: #f8fafc;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .azhizen-msg-row.user { justify-content: flex-end; }
        .azhizen-msg-row.bot { justify-content: flex-start; }

        .azhizen-msg-bubble {
          max-width: 88%;
          padding: 9px 13px;
          font-size: 13px;
          line-height: 1.45;
          border-radius: 12px;
          white-space: pre-line;
          word-break: break-word;
        }

        .azhizen-msg-row.user .azhizen-msg-bubble {
          background-color: #7CB142;
          color: #ffffff;
          border-bottom-right-radius: 2px;
        }

        .azhizen-msg-row.bot .azhizen-msg-bubble {
          background-color: #ffffff;
          color: #0f172a;
          border-bottom-left-radius: 2px;
          border: 1px solid rgba(226, 232, 240, 0.9);
        }

        .azhizen-q-chip {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.2s ease;
          line-height: 1.3;
        }

        .azhizen-q-chip:hover {
          border-color: #7CB142;
          color: #7CB142;
          background-color: #f4fce8;
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #25D366;
          color: #ffffff;
          font-weight: 600;
          font-size: 11.5px;
          padding: 6px 12px;
          border-radius: 20px;
          text-decoration: none;
          margin-top: 6px;
          transition: background-color 0.2s ease;
        }

        .whatsapp-btn:hover {
          background-color: #1ebc57;
        }

        #azhizen-chat-hint {
          position: fixed;
          bottom: 34px;
          right: 92px;
          background-color: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border-radius: 30px;
          padding: 7px 14px;
          font-size: 12px;
          font-weight: 600;
          color: #0f172a;
          z-index: 9998;
          cursor: pointer;
          white-space: nowrap;
        }

        /* ── Desktop & Tablet Enhancements (min-width: 640px) ── */
        @media (min-width: 640px) {
          #azhizen-chat-launcher {
            bottom: 24px;
            right: 24px;
            width: 80px;
            height: 80px;
          }
          #azhizen-chat-launcher:hover {
            transform: scale(1.08) translateY(-3px);
            filter: drop-shadow(0 10px 24px rgba(124, 177, 66, 0.35));
          }
          #azhizen-chat-container {
            bottom: 116px;
            right: 24px;
            width: 390px;
            height: 580px;
          }
          #azhizen-chat-hint {
            bottom: 44px;
            right: 112px;
            padding: 9px 16px;
            font-size: 13.5px;
          }
          .azhizen-msg-bubble {
            font-size: 13.5px;
            padding: 10px 14px;
          }
          .azhizen-q-chip {
            font-size: 11.5px;
            padding: 5px 11px;
          }
          .whatsapp-btn {
            font-size: 12px;
            padding: 7px 14px;
          }
        }

        /* ── Mobile Layout Fine-tuning (max-width: 480px) ── */
        @media (max-width: 480px) {
          #azhizen-chat-container {
            bottom: 84px;
            right: 12px;
            left: 12px;
            width: auto;
            max-width: none;
            height: calc(100vh - 100px);
          }
          #azhizen-chat-hint {
            display: none; /* Keeps mobile viewport clutter-free */
          }
          .azhizen-msg-bubble {
            font-size: 12.5px;
          }
          .azhizen-q-chip {
            font-size: 10.5px;
            padding: 4px 8px;
          }
        }
      `}</style>

      {/* Floating Hint Box */}
      {!isOpen && (
        <div id="azhizen-chat-hint" onClick={() => setIsOpen(true)}>
          <span>{hintText}</span>
          <span className="text-[#7CB142] font-bold ml-0.5 animate-pulse">|</span>
        </div>
      )}

      {/* Mascot Button */}
      <div id="azhizen-chat-launcher" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="/dairytechbot-removebg-preview.png"
          alt="Chat Mascot"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Chat Drawer Window */}
      {isOpen && (
        <div id="azhizen-chat-container">
          {/* Header */}
          <div className="azhizen-chat-header">
            <div className="flex items-center gap-2">
              <img
                src="/dairytechbot-removebg-preview.png"
                alt="Bot"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-white/80 object-cover shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[14px] sm:text-[15px] font-bold leading-tight">
                  Farm 360 Assistant
                </span>
                <span className="text-[10px] sm:text-[11px] opacity-90 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />{" "}
                  Online
                </span>
              </div>
            </div>
            <button
              className="text-white text-2xl leading-none px-2 py-1 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="azhizen-chat-messages">
            {messages.map((msg) => (
              <React.Fragment key={msg.id}>
                <div className={`azhizen-msg-row flex ${msg.sender}`}>
                  <div className="azhizen-msg-bubble">
                    {msg.text}
                    {msg.showWhatsapp && (
                      <div className="mt-1">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Farm360,%20I%20have%20an%20enquiry%20about%20your%20farm%20products%20and%20setup.`}
                          target="_blank"
                          rel="noreferrer"
                          className="whatsapp-btn"
                        >
                          💬 Contact on WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pl-1 sm:pl-2 my-1">
                    {msg.suggestions.map((item) => (
                      <button
                        key={item.key}
                        className="azhizen-q-chip"
                        onClick={() => handleSendMessage(item.label, item.key)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            {isTyping && (
              <div className="azhizen-msg-row flex bot">
                <div className="azhizen-msg-bubble flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-ping" />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-ping delay-100" />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-ping delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Topics Bottom Bar */}
          <div className="p-2.5 sm:p-3 bg-white border-t border-gray-100 flex flex-col gap-1.5">
            <span className="text-[10px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-wider pl-1">
              Popular Questions
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              <button
                className="azhizen-q-chip"
                onClick={() => handleSendMessage("How does Farm 360 work?", "how_works")}
              >
                How Farm 360 Works
              </button>
              <button
                className="azhizen-q-chip"
                onClick={() => handleSendMessage("How many cows can I use here?", "capacity")}
              >
                Cow Capacity
              </button>
              <button
                className="azhizen-q-chip"
                onClick={() => handleSendMessage("How long to build the farmhouse?", "build_time")}
              >
                Build Timeline
              </button>
              <button
                className="azhizen-q-chip"
                onClick={() => handleSendMessage("Will farmers get profit by this?", "profitability")}
              >
                Farmer Profit
              </button>
            </div>
          </div>

          {/* Form Footer */}
          <form
            className="p-2.5 sm:p-3 bg-white border-t border-gray-200 flex gap-2 items-center"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 border border-gray-300 rounded-full px-3.5 py-2 text-[14px] sm:text-xs outline-none focus:border-[#7CB142] transition-colors"
              placeholder="Ask about Farm 360..."
            />
            <button
              type="submit"
              className="bg-[#7CB142] hover:bg-[#669632] text-white rounded-full w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center cursor-pointer transition-colors shrink-0"
              aria-label="Send message"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIWidgetButton;