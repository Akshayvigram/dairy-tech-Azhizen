import { useState, useEffect } from 'react';
import { FooterSection } from '../screens/DesktopScreen/sections/FooterSection';
import { Navbar } from "../components/Navbar";

// ─── Feature Icons (PNG Images) ────────────────────────────────────────────────

const PlanningIcon = () => <img src="/icon-planning.png" alt="Planning" className="w-full h-full object-contain" />;
const TechnologyIcon = () => <img src="/icon-technology.png" alt="Technology" className="w-full h-full object-contain" />;
const AutomationIcon = () => <img src="/icon-automation.png" alt="Automation" className="w-full h-full object-contain" />;
const PerformanceIcon = () => <img src="/icon-performance.png" alt="Performance" className="w-full h-full object-contain" />;

const features = [
  { label: 'Planning',    Icon: PlanningIcon    },
  { label: 'Technology',  Icon: TechnologyIcon  },
  { label: 'Automation',  Icon: AutomationIcon  },
  { label: 'Performance', Icon: PerformanceIcon },
];

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function Aboutus() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delayClass: string) => `${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700 ${delayClass}`;
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
  <div className="bg-white w-full min-h-screen flex flex-col overflow-x-hidden font-[Poppins]">
    {/* Embedded Keyframes for Continuous Marquee */}
    <style>{`
      @keyframes marqueeScroll {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .marquee-wrapper {
        display: flex;
        width: max-content;
        flex-wrap: nowrap;
        animation: marqueeScroll 16s linear infinite;
        will-change: transform;
      }

      .marquee-wrapper:hover {
        animation-play-state: paused;
      }
    `}</style>

    {/* Navigation */}
    <Navbar />

    {/* HERO */}
    <div className="max-w-[1200px] mx-auto pt-24 px-8">
      <div className={`grid md:grid-cols-2 gap-16 items-center ${fade('delay-75')}`}>

        {/* Left — farm image */}
        <div className="flex justify-center">
          <img
            src="/image-354.png"
            alt="Modern Dairy Farm Facility"
            className="w-full max-w-[480px] h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Right — copy */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-3 tracking-wider">Farm 360</p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Transforming Your Land Into A <span className="text-[#7CB142]">Fully Automated, Technology-Driven Dairy Farm Ecosystem.</span>
          </h1>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Azhizen Dairy Tech Solution Design And Implement Smart Dairy Infrastructure Equipped With Automation, Real-Time Monitoring, And Data-Driven Management Systems To Maximize Productivity And Ensure Sustainable Farm Operations.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t-2 border-green-50 pt-6">
            {[['15+','Team Members'],['10+','Happy Clients'],['99%','Client Satisfaction']].map(([n,l]) => (
              <div key={l}>
                <div className="text-4xl font-extrabold text-[#7CB142] mb-1">{n}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* GOAL STATEMENT */}
    <div className={`${fade('delay-200')} w-full bg-slate-100 mt-20 py-20`}>
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-base md:text-3xl text-[#7CB142] mb-2">Our</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Goal Statement</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-[980px]">
          With Years Of Industry Experience, We Are Committed To Delivering Intelligent Solutions That Address The Evolving Challenges Of The Dairy Sector. We Connect You With The Right Expertise, Technology, And Resources To Achieve Sustainable And Profitable Dairy Farming.
        </p>
      </div>
    </div>
{/* GREEN FEATURE BAR */}
    <div className={`${fade('delay-400')} w-full bg-[#7CB142] py-6 overflow-hidden relative z-10 select-none`}>

      {/* ================= MOBILE VIEW: CONTINUOUS AUTO-SCROLL MARQUEE (< md) ================= */}
      <div className="flex md:hidden w-full overflow-hidden">
        {/* Animated Single Wrapper Containing Dual Tracks */}
        <div className="marquee-wrapper flex flex-nowrap items-center">

          {/* Track 1 */}
          <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 shrink-0 flex-nowrap">
            {features.map(({ label, Icon }) => (
              <div className="flex items-center gap-3 shrink-0 whitespace-nowrap" key={label}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                  <Icon />
                </div>
                <span className="text-lg font-bold text-gray-900 whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>

          {/* Track 2 (Clone for Infinite Seamless Loop) */}
          <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 shrink-0 flex-nowrap" aria-hidden="true">
            {features.map(({ label, Icon }) => (
              <div className="flex items-center gap-3 shrink-0 whitespace-nowrap" key={`dup-${label}`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                  <Icon />
                </div>
                <span className="text-lg font-bold text-gray-900 whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= DESKTOP VIEW: STATIC EVENLY SPACED ROW (>= md) ================= */}
      <div className="hidden md:flex max-w-[1200px] mx-auto items-center justify-between gap-6 px-8">
        {features.map(({ label, Icon }) => (
          <div className="flex items-center gap-4" key={label}>
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <Icon />
            </div>
            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>

    </div>

    {/* Footer */}
    <FooterSection />
  </div>
);
}