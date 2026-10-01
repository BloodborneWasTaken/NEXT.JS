import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative px-6 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-950/40 via-black to-purple-950/50" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.14),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.1),transparent_30%)",
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

      {/* Ambient Glow */}
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-[150px] top-0 right-0 animate-[floatGlow_7s_ease-in-out_infinite]" />

      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] bottom-0 left-0 animate-[floatGlow_9s_ease-in-out_infinite_reverse]" />

      <div className="absolute w-72 h-72 bg-fuchsia-500/10 rounded-full blur-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbPulse_7s_ease-in-out_infinite]" />

      <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px] top-1/4 left-1/3 animate-[floatGlow_8s_ease-in-out_infinite]" />

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

      {/* Scanlines Overlay */}
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
          {/* Get To Know Us - Above About Us */}
          <div className="flex justify-center mb-5">
            <div
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-purple-500/20 bg-white/[0.03] backdrop-blur-xl
              shadow-[0_0_30px_rgba(168,85,247,0.08)]
              hover:border-pink-500/40
              hover:bg-pink-500/[0.05]
              hover:shadow-[0_0_45px_rgba(236,72,153,0.25)]
              hover:scale-105
              transition-all duration-500"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-75" />
                <span className="relative w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,1)] animate-[dotPulse_2s_ease-in-out_infinite]" />
              </span>

              <span className="text-xs uppercase tracking-[0.3em] text-purple-200/70 group-hover:text-pink-200 transition-colors">
                Get to know us
              </span>
            </div>
          </div>

          {/* About Us */}
          <h1
            className="relative inline-block text-5xl md:text-7xl font-black tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300
            bg-[length:250%_250%]
            animate-[gradientMove_5s_ease_infinite,titleFloat_5s_ease-in-out_infinite]
            drop-shadow-[0_0_30px_rgba(217,70,239,0.4)]
            hover:drop-shadow-[0_0_60px_rgba(236,72,153,0.7)]
            transition-all duration-500"
          >
            ABOUT US
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-[titleShine_3s_linear_infinite] pointer-events-none">
              ABOUT US
            </span>
          </h1>

          {/* Header Line */}
          <div className="mt-6 flex justify-center">
            <div className="relative h-[2px] w-40 md:w-56 overflow-hidden bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_20px_3px_rgba(168,85,247,0.5)] animate-[lineGlow_3s_ease-in-out_infinite]">
              <div className="absolute inset-y-0 -left-full w-1/2 bg-white/90 blur-sm animate-[lineScan_2s_ease-in-out_infinite]" />
            </div>
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-7 text-sm md:text-base animate-[fadeUp_1s_ease-out_0.25s_both]">
            A small digital space built around creativity, technology, identity
            and a passion for creating unique experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* About Card */}
          <div
            className="lg:col-span-2 group relative rounded-3xl
            border border-purple-500/15 bg-white/[0.03]
            backdrop-blur-xl p-7 md:p-9
            overflow-hidden
            shadow-[0_0_40px_rgba(168,85,247,0.08)]
            hover:-translate-y-3
            hover:border-purple-500/50
            hover:bg-purple-500/[0.035]
            hover:shadow-[0_0_70px_rgba(168,85,247,0.22)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.2s_forwards]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.12] via-transparent to-pink-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700" />

            <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center
                  bg-purple-500/10 border border-purple-400/20
                  shadow-[0_0_25px_rgba(168,85,247,0.15)]
                  group-hover:rotate-6 group-hover:scale-110
                  group-hover:bg-purple-500/20
                  group-hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]
                  transition-all duration-500"
                >
                  <span className="text-xl text-purple-300 group-hover:text-pink-300 group-hover:animate-[iconPulse_1.5s_ease-in-out_infinite] transition-colors">
                    ✦
                  </span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-purple-300/50">
                    Who we are
                  </p>

                  <h2 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors">
                    Beyond the ordinary
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 leading-8 text-sm md:text-base">
                this is about page. This space is designed to bring together
                modern aesthetics, creative ideas and a futuristic digital
                atmosphere.
              </p>

              <p className="mt-5 text-gray-500 leading-7 text-sm">
                Every detail is built to keep the experience simple, interactive
                and visually engaging while maintaining the dark neon identity
                of the website.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div
                  className="group/item relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.025] p-4
                  hover:bg-purple-500/[0.07] hover:border-purple-500/30
                  hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(168,85,247,0.18)]
                  transition-all duration-300"
                >
                  <div className="absolute inset-x-0 bottom-0 h-px w-0 bg-purple-400 group-hover/item:w-full transition-all duration-500" />

                  <p className="text-2xl font-bold text-purple-300 group-hover/item:text-purple-200">
                    01
                  </p>

                  <p className="text-xs text-gray-500 mt-1">Creative</p>
                </div>

                <div
                  className="group/item relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.025] p-4
                  hover:bg-pink-500/[0.07] hover:border-pink-500/30
                  hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(236,72,153,0.18)]
                  transition-all duration-300"
                >
                  <div className="absolute inset-x-0 bottom-0 h-px w-0 bg-pink-400 group-hover/item:w-full transition-all duration-500" />

                  <p className="text-2xl font-bold text-pink-300 group-hover/item:text-pink-200">
                    02
                  </p>

                  <p className="text-xs text-gray-500 mt-1">Modern</p>
                </div>

                <div
                  className="group/item relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.025] p-4
                  hover:bg-cyan-500/[0.07] hover:border-cyan-400/30
                  hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(34,211,238,0.18)]
                  transition-all duration-300"
                >
                  <div className="absolute inset-x-0 bottom-0 h-px w-0 bg-cyan-400 group-hover/item:w-full transition-all duration-500" />

                  <p className="text-2xl font-bold text-cyan-300 group-hover/item:text-cyan-200">
                    03
                  </p>

                  <p className="text-xs text-gray-500 mt-1">Unique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Card */}
          <div
            className="group relative rounded-3xl
            border border-pink-500/15 bg-white/[0.03]
            backdrop-blur-xl p-7 overflow-hidden
            hover:-translate-y-3
            hover:border-pink-500/50
            hover:bg-pink-500/[0.035]
            hover:shadow-[0_0_70px_rgba(236,72,153,0.2)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.4s_forwards]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/[0.1] via-transparent to-cyan-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 right-0 w-0 h-px bg-gradient-to-l from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

            <div className="relative h-full flex flex-col">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center
                bg-pink-500/10 border border-pink-400/20
                shadow-[0_0_30px_rgba(236,72,153,0.12)]
                group-hover:rotate-6 group-hover:scale-110
                group-hover:shadow-[0_0_45px_rgba(236,72,153,0.4)]
                transition-all duration-500"
              >
                <span className="text-2xl text-pink-300 group-hover:text-cyan-300 group-hover:animate-[iconPulse_1.5s_ease-in-out_infinite]">
                  ◈
                </span>
              </div>

              <h3 className="text-xl font-bold mt-6 group-hover:text-pink-200 transition-colors">
                Discover more
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-3 flex-1">
                Want to know something more personal? Explore the next page and
                discover another part of the story.
              </p>

              <Link
                href="/about/nationality"
                className="group/link relative overflow-hidden mt-8 flex items-center justify-between
                px-5 py-4 rounded-2xl
                bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-cyan-500/80
                bg-[length:200%_auto]
                border border-white/10
                shadow-[0_0_25px_rgba(217,70,239,0.2)]
                hover:bg-right
                hover:shadow-[0_0_50px_rgba(217,70,239,0.5)]
                hover:-translate-y-1
                hover:scale-[1.02]
                transition-all duration-500"
              >
                <span className="absolute inset-0 -translate-x-full group-hover/link:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />

                <span className="relative z-10 font-semibold text-sm">
                  My Nationality
                </span>

                <span className="relative z-10 text-lg group-hover/link:translate-x-2 group-hover/link:text-cyan-200 transition-all duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-6
            hover:-translate-y-3 hover:bg-purple-500/[0.05]
            hover:border-purple-500/30
            hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_0.6s_forwards]"
          >
            <div className="absolute top-0 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-700" />

            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="text-purple-400 text-xl mb-4 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,1)] transition-all duration-300">
                ⚡
              </div>

              <h3 className="font-semibold mb-2 group-hover:text-purple-200 transition-colors">
                Fast & Simple
              </h3>

              <p className="text-sm text-gray-500 leading-6">
                Focused on keeping the experience clean and easy to explore.
              </p>
            </div>
          </div>

          <div
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-6
            hover:-translate-y-3 hover:bg-pink-500/[0.05]
            hover:border-pink-500/30
            hover:shadow-[0_0_40px_rgba(236,72,153,0.18)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_0.75s_forwards]"
          >
            <div className="absolute top-0 left-0 w-0 h-px bg-pink-400 group-hover:w-full transition-all duration-700" />

            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="text-pink-400 text-xl mb-4 group-hover:scale-125 group-hover:-rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,1)] transition-all duration-300">
                ✧
              </div>

              <h3 className="font-semibold mb-2 group-hover:text-pink-200 transition-colors">
                Unique Style
              </h3>

              <p className="text-sm text-gray-500 leading-6">
                A dark neon visual identity with glowing purple and pink tones.
              </p>
            </div>
          </div>

          <div
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-6
            hover:-translate-y-3 hover:bg-cyan-500/[0.05]
            hover:border-cyan-400/30
            hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_0.9s_forwards]"
          >
            <div className="absolute top-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-700" />

            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="text-cyan-400 text-xl mb-4 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,1)] transition-all duration-300">
                ∞
              </div>

              <h3 className="font-semibold mb-2 group-hover:text-cyan-200 transition-colors">
                Always Exploring
              </h3>

              <p className="text-sm text-gray-500 leading-6">
                More pages, ideas and experiences can be added along the way.
              </p>
            </div>
          </div>
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
            transform: translateY(35px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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
