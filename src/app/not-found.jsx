import Link from "next/link";
import React from "react";

export const metadata = {
  title: {
    default: "Not Found | Mohammad Mahdi Jerban",
  },
};

export default async function NotFound() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 4000);
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6 py-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-black to-pink-950/40 animate-[backgroundShift_12s_ease-in-out_infinite]" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.09] animate-[gridMove_18s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.55) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Perspective Grid */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[55%] opacity-[0.12] pointer-events-none"
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
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[160px] animate-[orbFloat_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[160px] animate-[orbFloat_10s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[130px] animate-[pulseGlow_5s_ease-in-out_infinite]" />

      {/* Floating Particles */}
      <div className="absolute top-[15%] left-[12%] w-1 h-1 rounded-full bg-purple-300 shadow-[0_0_12px_#c084fc] animate-[particleFloat_5s_ease-in-out_infinite]" />
      <div className="absolute top-[25%] right-[16%] w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_15px_#f9a8d4] animate-[particleFloat_7s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-[20%] left-[20%] w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7] animate-[particleFloat_6s_ease-in-out_infinite_2s]" />
      <div className="absolute bottom-[28%] right-[12%] w-1 h-1 rounded-full bg-pink-400 shadow-[0_0_12px_#ec4899] animate-[particleFloat_8s_ease-in-out_infinite_1.5s]" />

      {/* Scan Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent animate-[scanLine_5s_linear_infinite]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent animate-[scanLine_8s_linear_infinite_2s]" />

      {/* Side Lasers */}
      <div className="absolute top-0 left-[8%] w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-[laserPulse_4s_ease-in-out_infinite]" />
      <div className="absolute top-0 right-[8%] w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent animate-[laserPulse_5s_ease-in-out_infinite_1s]" />

      {/* Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-purple-500/10 animate-[spinSlow_25s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-pink-500/10 border-dashed animate-[spinReverse_18s_linear_infinite]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Error Code */}
        <div className="relative animate-[errorReveal_1s_ease-out_forwards]">
          {/* Back Glow */}
          <div className="absolute inset-0 flex items-center justify-center blur-3xl opacity-50 animate-[numberGlow_3s_ease-in-out_infinite]">
            <span className="text-[180px] md:text-[240px] font-black text-purple-600">
              404
            </span>
          </div>

          {/* Glitch Shadows */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 translate-x-2 text-[120px] sm:text-[160px] md:text-[210px] leading-none font-black text-pink-500 blur-[1px]">
            404
          </div>

          <h1 className="relative text-[120px] sm:text-[160px] md:text-[210px] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 drop-shadow-[0_0_40px_rgba(217,70,239,0.35)] animate-[numberFloat_4s_ease-in-out_infinite]">
            404
            {/* Shine */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-[shine_3s_linear_infinite]">
              404
            </span>
          </h1>

          {/* Underline */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-32 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 shadow-[0_0_20px_rgba(217,70,239,0.7)] animate-[lineExpand_1.2s_ease-out_0.5s_forwards] scale-x-0" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mt-8 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,0.08)] animate-[fadeUp_0.8s_ease-out_0.4s_both] hover:border-pink-500/40 hover:bg-pink-500/5 transition-all duration-500">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-pink-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-purple-300">
            Page Not Found
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-7 text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-300 animate-[fadeUp_0.8s_ease-out_0.6s_both]">
          Lost in the digital space?
        </h2>

        {/* Description */}
        <p className="max-w-lg mx-auto mt-5 text-sm md:text-base leading-7 text-gray-500 animate-[fadeUp_0.8s_ease-out_0.8s_both]">
          The page you are looking for doesn&apos;t exist, has been moved, or
          the URL you entered is incorrect.
        </p>

        {/* Card */}
        <div className="relative mt-9 p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.08)] overflow-hidden animate-[cardReveal_1s_ease-out_1s_both]">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none">
            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-pink-500/0 bg-[length:200%_100%] animate-[borderFlow_4s_linear_infinite]" />
          </div>

          {/* Top Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

          {/* Dots */}
          <div className="relative flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)] animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)] animate-pulse [animation-delay:200ms]" />
            <span className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.8)] animate-pulse [animation-delay:400ms]" />
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          {/* Buttons */}
          <div className="relative mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group relative w-full sm:w-auto min-w-[150px] px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_100%] animate-[buttonGradient_4s_ease_infinite] font-semibold text-sm shadow-[0_0_25px_rgba(217,70,239,0.2)] hover:shadow-[0_0_45px_rgba(217,70,239,0.5)] hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative">
                <span className="mr-2">⌂</span>
                Go Home
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/products"
              className="group relative w-full sm:w-auto min-w-[150px] px-7 py-3.5 rounded-xl border border-purple-500/20 bg-white/5 text-purple-200 font-semibold text-sm hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-white hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative">
                <span className="mr-2">✦</span>
                Explore Products
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-700 animate-[fadeUp_0.8s_ease-out_1.3s_both]">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500/30" />
          <span className="animate-pulse">ERROR CODE 404</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-pink-500/30" />
        </div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      <style>{`
        @keyframes backgroundShift {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 60px 60px;
          }
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(30px, -25px, 0) scale(1.08);
          }
        }

        @keyframes pulseGlow {
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

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-35px) scale(1.8);
            opacity: 1;
          }
        }

        @keyframes scanLine {
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

        @keyframes laserPulse {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes spinSlow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes errorReveal {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.85);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes numberFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes numberGlow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.05);
          }
        }

        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes lineExpand {
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.97);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes buttonGradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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
