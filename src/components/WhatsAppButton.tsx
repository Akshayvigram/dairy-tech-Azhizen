// import React from "react";

// interface WhatsAppButtonProps {
//   phoneNumber?: string;
//   message?: string;
// }

// export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
//   phoneNumber = "919952132492",
//   message = "Hello! I would like to know more about your services.",
// }) => {
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   return (
//     <>
//       <style>{`
//         @keyframes wa-float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-4px); }
//         }
//         @keyframes wa-wiggle {
//           0%, 100% { transform: rotate(0); }
//           25% { transform: rotate(-10deg); }
//           75% { transform: rotate(10deg); }
//         }
//         .wa-pill-btn {
//           animation: wa-float 3s infinite ease-in-out;
//           transition: transform 0.3s ease;
//           text-decoration: none;
//         }
//         .wa-pill-btn:hover .wa-svg-icon {
//           animation: wa-wiggle 0.5s ease-in-out infinite;
//         }
//       `}</style>

//       <a
//         href={whatsappUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="fixed bottom-[43px] left-6 z-[9999] flex items-center focus:outline-none cursor-pointer wa-pill-btn"
//       >
//         <div className="relative z-20 flex items-center justify-center w-[44px] h-[44px] shrink-0">
//           <svg
//             className="w-[44px] h-[44px] shrink-0 wa-svg-icon"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="-2 -2 28 28"
//           >
//             <path
//               fill="#FFF"
//               stroke="#FFF"
//               strokeWidth="1.8"
//               strokeLinejoin="round"
//               d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"
//             />
//             <path
//               fill="#25D366"
//               d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
//             />
//           </svg>
//         </div>
//       </a>
//     </>
//   );
// };

// export default WhatsAppButton;






import React from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "918300233988",
  message = "Hello! I would like to know more about Azhizen Solutions and your technology services.",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <style>{`
        /* Drawer expand keyframe animation */
        @keyframes wa-drawer-expand {
          0%, 10% {
            width: 0px;
            opacity: 0;
            padding-left: 0;
            padding-right: 0;
            margin-left: -44px;
            border-color: transparent;
            box-shadow: none;
          }
          20%, 65% {
            width: 126px;
            opacity: 1;
            padding-left: 26px;
            padding-right: 12px;
            margin-left: -22px;
            border-color: rgba(229, 231, 235, 0.9);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          }
          75%, 100% {
            width: 0px;
            opacity: 0;
            padding-left: 0;
            padding-right: 0;
            margin-left: -44px;
            border-color: transparent;
            box-shadow: none;
          }
        }

        /* Text fade keyframe animation */
        @keyframes wa-text-fade {
          0%, 15% {
            opacity: 0;
            transform: translateX(-12px);
          }
          22%, 63% {
            opacity: 1;
            transform: translateX(0);
          }
          70%, 100% {
            opacity: 0;
            transform: translateX(-12px);
          }
        }

        /* Floating animation */
        // @keyframes wa-float {
        //   0%, 100% {
        //     transform: translateY(0);
        //   }
        //   50% {
        //     transform: translateY(-4px);
        //   }
        // }

        /* Wiggle icon animation on hover */
        // @keyframes wa-wiggle {
        //   0%, 100% { transform: rotate(0); }
        //   25% { transform: rotate(-10deg); }
        //   75% { transform: rotate(10deg); }
        // }

        /* Main Button Styling */
        .wa-pill-btn {
          position: fixed;
          bottom: 43px;
          left: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          cursor: pointer;
          outline: none;
          text-decoration: none;
          animation: wa-float 3s infinite ease-in-out;
          transition: all 0.3s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        /* Slide-out Pill Drawer */
        .wa-drawer {
          animation: wa-drawer-expand 10s infinite ease-in-out;
          box-sizing: border-box;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        /* Drawer Text */
        .wa-pill-btn-text {
          animation: wa-text-fade 10s infinite ease-in-out;
          display: inline-block;
          white-space: nowrap;
        }

        /* Hover States */
        .wa-pill-btn:hover .wa-drawer {
          animation: none !important;
          width: 126px !important;
          opacity: 1 !important;
          padding-left: 26px !important;
          padding-right: 12px !important;
          margin-left: -22px !important;
          border-color: rgba(229, 231, 235, 0.9) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
        }

        .wa-pill-btn:hover .wa-pill-btn-text {
          animation: none !important;
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        .wa-pill-btn:hover .wa-svg-icon {
          animation: wa-wiggle 0.5s ease-in-out infinite;
        }

        /* Mobile responsiveness */
        @media (max-width: 767px) {
          .wa-drawer {
            display: none !important;
          }
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[43px] left-6 z-[9999] flex items-center focus:outline-none cursor-pointer wa-pill-btn"
      >
        {/* Clean single-render layered WhatsApp icon */}
        <div className="relative z-20 flex items-center justify-center w-[44px] h-[44px] shrink-0">
          <svg
            className="w-[44px] h-[44px] shrink-0 wa-svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            {/* 1. White Outer Speech Bubble Border */}
            <path
              fill="#FFFFFF"
              d="M16 2C8.268 2 2 8.268 2 16c0 2.738.788 5.297 2.148 7.458L2.055 30l6.737-2.052A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
            />
            {/* 2. Green Inner Bubble */}
            <path
              fill="#25D366"
              d="M16 3.5c6.903 0 12.5 5.597 12.5 12.5S22.903 28.5 16 28.5c-2.385 0-4.622-.672-6.529-1.841l-.468-.288-4.858 1.479 1.488-4.757-.306-.487A12.44 12.44 0 013.5 16C3.5 9.097 9.097 3.5 16 3.5z"
            />
            {/* 3. Pure White Handset (Single, Crisp) */}
            <path
              fill="#FFFFFF"
              d="M21.848 18.917c-.321-.16-1.897-.936-2.191-1.043-.294-.107-.508-.16-.722.16-.214.321-.828 1.043-1.015 1.257-.187.214-.374.241-.695.08-.321-.16-1.354-.499-2.579-1.591-.953-.85-1.597-1.9-1.784-2.221-.187-.321-.02-.494.141-.654.145-.144.321-.374.481-.562.16-.187.214-.321.321-.535.107-.214.054-.401-.027-.562-.08-.16-.722-1.74-.989-2.382-.26-.625-.525-.54-.722-.551l-.615-.011c-.214 0-.562.08-.855.401-.294.321-1.122 1.097-1.122 2.675 0 1.578 1.149 3.103 1.309 3.317.16.214 2.261 3.454 5.478 4.842.765.33 1.363.528 1.829.675.769.244 1.468.21 2.021.127.616-.092 1.897-.775 2.164-1.524.267-.749.267-1.391.187-1.525-.08-.134-.294-.214-.615-.374z"
            />
          </svg>
        </div>

        {/* Text Drawer (slides out/in from behind the logo) */}
        <div className="relative z-10 flex items-center h-[34px] bg-[#ECE5DD] border border-transparent rounded-r-full overflow-hidden wa-drawer">
          <span
            className="wa-pill-btn-text"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "13px",
              fontWeight: "550",
              color: "#475569",
              letterSpacing: "0.1px",
            }}
          >
            WhatsApp us
          </span>
        </div>
      </a>
    </>
  );
};

export default WhatsAppButton;