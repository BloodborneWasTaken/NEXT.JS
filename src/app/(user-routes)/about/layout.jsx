import Link from "next/link";
import React from "react";

export const metadata = {
  title: {
    default: "About | Mohammad Mahdi Jerban",
  },
};

export default function AboutLayout({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* About Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-purple-950/40 via-black to-pink-950/30" />

      {/* Animated Grid */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.07] animate-[gridMove_18s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Perspective Grid */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[160%] h-[45%] opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,70,239,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          transform: "translateX(-50%) perspective(500px) rotateX(62deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent 90%)",
        }}
      />

      {/* Ambient Glows */}
      <div className="fixed -top-48 -left-48 -z-10 w-[550px] h-[550px] rounded-full bg-purple-600/20 blur-[170px] animate-[aboutOrb_9s_ease-in-out_infinite]" />

      <div className="fixed -bottom-48 -right-48 -z-10 w-[550px] h-[550px] rounded-full bg-pink-500/15 blur-[170px] animate-[aboutOrb_11s_ease-in-out_infinite_reverse]" />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] rounded-full bg-purple-500/[0.06] blur-[130px] animate-[aboutPulse_6s_ease-in-out_infinite]" />

      {/* Decorative Rings */}
      <div className="fixed top-[18%] right-[8%] -z-10 w-56 h-56 rounded-full border border-purple-500/[0.08] animate-[aboutSpin_25s_linear_infinite]" />

      <div className="fixed bottom-[12%] left-[6%] -z-10 w-72 h-72 rounded-full border border-pink-500/[0.06] border-dashed animate-[aboutSpinReverse_30s_linear_infinite]" />

      {/* Floating Particles */}
      <div className="fixed top-[20%] left-[12%] -z-10 w-1 h-1 rounded-full bg-purple-300 shadow-[0_0_12px_#c084fc] animate-[aboutParticle_6s_ease-in-out_infinite]" />

      <div className="fixed top-[30%] right-[15%] -z-10 w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_14px_#f9a8d4] animate-[aboutParticle_8s_ease-in-out_infinite_1s]" />

      <div className="fixed bottom-[25%] left-[20%] -z-10 w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7] animate-[aboutParticle_7s_ease-in-out_infinite_2s]" />

      <div className="fixed bottom-[18%] right-[20%] -z-10 w-1 h-1 rounded-full bg-pink-400 shadow-[0_0_12px_#ec4899] animate-[aboutParticle_9s_ease-in-out_infinite_1.5s]" />

      {/* Scan Lines */}
      <div className="fixed top-0 left-0 right-0 -z-10 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-[aboutScan_7s_linear_infinite]" />

      <div className="fixed top-0 left-[5%] -z-10 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-[aboutLine_5s_ease-in-out_infinite]" />

      <div className="fixed top-0 right-[5%] -z-10 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-[aboutLine_6s_ease-in-out_infinite_1s]" />

      {/* Sidebar */}
      <aside className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex w-16 lg:w-20 flex-col items-center py-5 rounded-3xl border border-purple-500/20 bg-black/50 backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.12)]">
        {/* Sidebar Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/[0.08] via-transparent to-pink-500/[0.08] pointer-events-none" />

        {/* Logo */}
        <Link
          href="/about"
          className="relative group flex items-center justify-center w-11 h-11 rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:border-pink-400/50 hover:bg-pink-500/10 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)] hover:scale-105 transition-all duration-300"
        >
          <span className="text-sm font-black tracking-tighter bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
            MM
          </span>

          <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg border border-purple-500/20 bg-black/80 backdrop-blur-xl text-[10px] uppercase tracking-[0.2em] text-purple-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            About
          </span>
        </Link>

        {/* Divider */}
        <div className="my-5 w-8 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        {/* Nationality */}
        <Link
          href="/about/nationality"
          className="relative group flex items-center justify-center w-11 h-11 rounded-2xl border border-purple-500/20 bg-white/[0.03] text-purple-300 hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-purple-500/15 hover:to-pink-500/10 hover:text-pink-200 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-xl">🌐</span>

          {/* Active Dot */}
          <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_12px_rgba(217,70,239,0.8)] animate-pulse" />

          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg border border-purple-500/20 bg-black/80 backdrop-blur-xl text-[10px] uppercase tracking-[0.2em] text-purple-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Nationality
          </span>
        </Link>

        {/* Small Navigation Indicator */}
        <div className="mt-5 flex flex-col gap-2">
          <span className="w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7] animate-pulse" />
          <span className="w-1 h-1 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899] animate-pulse [animation-delay:200ms]" />
          <span className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse [animation-delay:400ms]" />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-3 px-4 py-3 rounded-2xl border border-purple-500/20 bg-black/60 backdrop-blur-2xl shadow-[0_0_35px_rgba(168,85,247,0.15)]">
        <Link
          href="/about"
          className="flex items-center justify-center w-11 h-11 rounded-xl border border-purple-500/30 bg-purple-500/10 text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"
        >
          MM
        </Link>

        <div className="w-px h-7 bg-purple-500/20" />

        <Link
          href="/about/nationality"
          className="flex items-center justify-center w-11 h-11 rounded-xl border border-purple-500/20 bg-white/[0.03] text-xl hover:bg-purple-500/10 hover:border-pink-400/40 transition-all duration-300"
        >
          🌐
        </Link>
      </div>

      {/* Children */}
      <div className="relative z-10 w-full md:pl-24 lg:pl-28">{children}</div>

      {/* Vignette */}
      <div className="pointer-events-none fixed inset-0 -z-5 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      <style>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: 60px 60px;
          }
        }

        @keyframes aboutOrb {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(35px, -30px, 0) scale(1.08);
          }
        }

        @keyframes aboutPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: translate(-50%, -50%) scale(0.95);
          }

          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes aboutSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aboutSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes aboutParticle {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }

          50% {
            transform: translateY(-35px) scale(1.8);
            opacity: 1;
          }
        }

        @keyframes aboutScan {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes aboutLine {
          0%,
          100% {
            opacity: 0.2;
          }

          50% {
            opacity: 0.7;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
