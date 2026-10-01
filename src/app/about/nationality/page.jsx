import Link from "next/link";
import React from "react";

export default function Nationality() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative px-6 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-pink-950/30" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(236,72,153,0.14),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.1),transparent_30%)",
        }}
      />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] animate-[gridMove_12s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Perspective Grid */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-[0.045] animate-[gridPulse_6s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg) scale(1.8)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Ambient Lights */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px] -top-32 -left-32 animate-[floatGlow_8s_ease-in-out_infinite]" />

      <div className="absolute w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[160px] -bottom-32 -right-32 animate-[floatGlowReverse_10s_ease-in-out_infinite]" />

      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbPulse_7s_ease-in-out_infinite]" />

      {/* Floating Rings */}
      <div className="absolute w-56 h-56 rounded-full border border-purple-400/10 top-[18%] right-[8%] animate-[orbit_14s_linear_infinite]" />

      <div className="absolute w-72 h-72 rounded-full border border-pink-400/10 bottom-[12%] left-[5%] animate-[orbitReverse_18s_linear_infinite]" />

      {/* Floating Particles */}
      <div className="absolute top-[18%] left-[12%] w-1 h-1 rounded-full bg-purple-300 shadow-[0_0_14px_rgba(216,180,254,1)] animate-[particleOne_7s_ease-in-out_infinite]" />

      <div className="absolute top-[30%] right-[18%] w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_16px_rgba(244,114,182,1)] animate-[particleTwo_8s_ease-in-out_infinite]" />

      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,1)] animate-[particleThree_6s_ease-in-out_infinite]" />

      <div className="absolute bottom-[35%] right-[10%] w-1 h-1 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(232,121,249,1)] animate-[particleFour_9s_ease-in-out_infinite]" />

      {/* Scan Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent shadow-[0_0_25px_5px_rgba(236,72,153,0.3)] animate-[scan_6s_linear_infinite]" />

      <div className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-[laser_9s_linear_infinite]" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

      {/* Main */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-[fadeUp_0.9s_cubic-bezier(.16,1,.3,1)_both]">
          {/* Personal Identity */}
          <div className="flex justify-center mb-5">
            <div
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-pink-500/20 bg-white/[0.03]
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(236,72,153,0.08)]
              hover:border-purple-500/40
              hover:bg-purple-500/[0.05]
              hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]
              hover:scale-105
              transition-all duration-500"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75" />
                <span className="relative w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,1)] animate-[dotPulse_2s_ease-in-out_infinite]" />
              </span>

              <span className="text-xs uppercase tracking-[0.3em] text-pink-200/70 group-hover:text-purple-200 transition-colors">
                Personal Identity
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="relative inline-block text-5xl md:text-7xl font-black tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300
            bg-[length:250%_250%]
            animate-[gradientMove_5s_ease_infinite,titleFloat_5s_ease-in-out_infinite]
            drop-shadow-[0_0_30px_rgba(217,70,239,0.45)]
            hover:drop-shadow-[0_0_65px_rgba(236,72,153,0.7)]
            transition-all duration-500"
          >
            MY NATIONALITY
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-[titleShine_3s_linear_infinite] pointer-events-none">
              MY NATIONALITY
            </span>
          </h1>

          {/* Header Line */}
          <div className="mt-6 flex justify-center">
            <div className="relative h-[2px] w-40 md:w-56 overflow-hidden bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_20px_3px_rgba(236,72,153,0.5)] animate-[lineGlow_3s_ease-in-out_infinite]">
              <div className="absolute inset-y-0 -left-full w-1/2 bg-white/90 blur-sm animate-[lineScan_2s_ease-in-out_infinite]" />
            </div>
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-sm md:text-base leading-7 animate-[fadeUp_1s_ease-out_0.25s_both]">
            A little part of my identity, background and the place I call home.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Identity Visual */}
          <div
            className="lg:col-span-2 group relative overflow-hidden rounded-3xl
            border border-purple-500/15 bg-white/[0.03]
            backdrop-blur-xl min-h-[360px]
            flex items-center justify-center
            shadow-[0_0_45px_rgba(168,85,247,0.08)]
            hover:-translate-y-3
            hover:border-purple-500/45
            hover:bg-purple-500/[0.035]
            hover:shadow-[0_0_70px_rgba(168,85,247,0.22)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.2s_forwards]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.12] via-transparent to-pink-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

            {/* Inner Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] animate-[orbPulse_5s_ease-in-out_infinite]" />

            <div className="absolute w-52 h-52 rounded-full bg-cyan-500/10 blur-[90px] -bottom-20 -right-20 animate-[floatGlow_7s_ease-in-out_infinite]" />

            {/* Rotating Ring */}
            <div className="absolute w-64 h-64 rounded-full border border-purple-400/10 animate-[spinSlow_18s_linear_infinite]" />

            <div className="relative text-center">
              <div
                className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full
                border border-purple-400/30
                bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-cyan-500/10
                flex items-center justify-center
                shadow-[0_0_50px_rgba(168,85,247,0.2)]
                group-hover:scale-110
                group-hover:rotate-3
                group-hover:shadow-[0_0_75px_rgba(236,72,153,0.35)]
                transition-all duration-700"
              >
                <div className="absolute inset-2 rounded-full border border-pink-400/10 animate-[spinSlowReverse_10s_linear_infinite]" />

                <span className="relative text-6xl md:text-7xl drop-shadow-[0_0_25px_rgba(236,72,153,0.6)] animate-[worldFloat_4s_ease-in-out_infinite]">
                  🌍
                </span>
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.35em] text-purple-300/50">
                My Identity
              </p>

              <h2
                className="mt-2 text-2xl md:text-3xl font-bold
                text-transparent bg-clip-text
                bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300
                bg-[length:200%_auto]
                animate-[gradientMove_4s_ease_infinite]"
              >
                My Country
              </h2>
            </div>
          </div>

          {/* Information */}
          <div
            className="lg:col-span-3 group relative rounded-3xl
            border border-pink-500/15 bg-white/[0.03]
            backdrop-blur-xl p-7 md:p-9
            overflow-hidden
            hover:-translate-y-3
            hover:border-pink-500/40
            hover:bg-pink-500/[0.035]
            hover:shadow-[0_0_70px_rgba(236,72,153,0.2)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.4s_forwards]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/[0.08] via-transparent to-purple-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 right-0 h-px w-0 bg-gradient-to-l from-pink-400 via-purple-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-2xl
                  flex items-center justify-center
                  bg-pink-500/10 border border-pink-400/20
                  shadow-[0_0_25px_rgba(236,72,153,0.12)]
                  group-hover:scale-110 group-hover:rotate-6
                  group-hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                  transition-all duration-500"
                >
                  <span className="text-xl text-pink-300 group-hover:text-cyan-300 group-hover:animate-[iconPulse_1.5s_ease-in-out_infinite]">
                    ✦
                  </span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-pink-300/50">
                    About my roots
                  </p>

                  <h2 className="text-xl font-bold group-hover:text-pink-100 transition-colors">
                    Where I come from
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-8">
                My nationality is an important part of who I am. It connects me
                to a culture, history, language and traditions that shape my
                identity.
              </p>

              <p className="mt-5 text-gray-500 text-sm leading-7">
                This page is a small window into that part of my story. More
                details can be added here later as the website grows.
              </p>

              {/* Info Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div
                  className="group/item relative overflow-hidden rounded-2xl border border-white/5
                  bg-black/20 p-5
                  hover:border-purple-500/30
                  hover:bg-purple-500/[0.05]
                  hover:-translate-y-2
                  hover:shadow-[0_10px_35px_rgba(168,85,247,0.18)]
                  transition-all duration-300"
                >
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-400 to-transparent group-hover/item:w-full transition-all duration-500" />

                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Country
                  </p>

                  <p className="mt-2 text-lg font-semibold text-purple-300 group-hover/item:text-purple-200 transition-colors">
                    My Country
                  </p>
                </div>

                <div
                  className="group/item relative overflow-hidden rounded-2xl border border-white/5
                  bg-black/20 p-5
                  hover:border-pink-500/30
                  hover:bg-pink-500/[0.05]
                  hover:-translate-y-2
                  hover:shadow-[0_10px_35px_rgba(236,72,153,0.18)]
                  transition-all duration-300"
                >
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-transparent group-hover/item:w-full transition-all duration-500" />

                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Identity
                  </p>

                  <p className="mt-2 text-lg font-semibold text-pink-300 group-hover/item:text-pink-200 transition-colors">
                    My Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote / Message */}
        <div
          className="group relative mt-6 rounded-3xl
          border border-purple-500/10
          bg-white/[0.025] backdrop-blur-xl
          p-7 md:p-9 text-center
          overflow-hidden
          hover:border-purple-500/30
          hover:bg-purple-500/[0.025]
          hover:shadow-[0_0_55px_rgba(168,85,247,0.16)]
          transition-all duration-500
          opacity-0
          animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.6s_forwards]"
        >
          <div className="absolute w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbPulse_6s_ease-in-out_infinite]" />

          <div className="absolute w-40 h-40 bg-pink-500/10 rounded-full blur-[80px] top-0 right-0 animate-[floatGlow_7s_ease-in-out_infinite]" />

          <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

          <div className="relative">
            <span className="text-4xl text-purple-400/50 animate-[quoteFloat_3s_ease-in-out_infinite] inline-block">
              “
            </span>

            <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-8">
              Identity is more than a name or a place. It is a collection of
              stories, memories, culture and experiences that make each person
              unique.
            </p>

            <span className="block text-4xl text-pink-400/50 mt-2 animate-[quoteFloat_3s_ease-in-out_infinite_reverse]">
              ”
            </span>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/about"
            className="group relative overflow-hidden flex items-center gap-3 px-6 py-3.5
            rounded-xl border border-white/10
            bg-white/[0.03] backdrop-blur-xl
            text-gray-400 text-sm font-medium
            hover:text-white
            hover:border-purple-400/40
            hover:bg-purple-500/[0.06]
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]
            transition-all duration-300"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />

            <span className="relative z-10 group-hover:-translate-x-1 transition-transform">
              ←
            </span>

            <span className="relative z-10">Back to About</span>
          </Link>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 flex items-center justify-center gap-4 animate-[fadeUp_1.4s_ease-out_both]">
          <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent to-purple-500/40 animate-[lineExpand_3s_ease-in-out_infinite]" />

          <div className="relative w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,1)] animate-[dotPulse_2s_ease-in-out_infinite]">
            <div className="absolute -inset-1 rounded-full bg-pink-400/30 animate-ping" />
            <div className="absolute -inset-3 rounded-full border border-pink-400/20 animate-[ringPulse_2.5s_ease-out_infinite]" />
          </div>

          <div className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent to-cyan-500/40 animate-[lineExpand_3s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(50px, 50px, 0);
          }
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.025;
          }
          50% {
            opacity: 0.07;
          }
        }

        @keyframes floatGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(35px, -30px, 0) scale(1.08);
          }
          66% {
            transform: translate3d(-25px, 25px, 0) scale(0.94);
          }
        }

        @keyframes floatGlowReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(-35px, 30px, 0) scale(0.94);
          }
          66% {
            transform: translate3d(25px, -25px, 0) scale(1.08);
          }
        }

        @keyframes orbPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.35;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.8;
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes laser {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.98);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes cardReveal {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.94) rotateX(8deg);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes gradientMove {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes titleFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes titleShine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes lineGlow {
          0%,
          100% {
            opacity: 0.45;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.12);
          }
        }

        @keyframes lineScan {
          0% {
            left: -50%;
          }
          100% {
            left: 150%;
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.35);
          }
        }

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
            filter: drop-shadow(0 0 10px currentColor);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinSlowReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes worldFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(35px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(35px) rotate(-360deg);
          }
        }

        @keyframes orbitReverse {
          from {
            transform: rotate(360deg) translateX(45px) rotate(-360deg);
          }
          to {
            transform: rotate(0deg) translateX(45px) rotate(0deg);
          }
        }

        @keyframes particleOne {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(80px, -60px);
            opacity: 1;
          }
        }

        @keyframes particleTwo {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(-70px, 80px);
            opacity: 1;
          }
        }

        @keyframes particleThree {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(65px, -75px);
            opacity: 1;
          }
        }

        @keyframes particleFour {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(-80px, -55px);
            opacity: 1;
          }
        }

        @keyframes quoteFloat {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        @keyframes lineExpand {
          0%,
          100% {
            opacity: 0.35;
            transform: scaleX(0.75);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.1);
          }
        }

        @keyframes ringPulse {
          0% {
            transform: scale(0.7);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
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
    </div>
  );
}
