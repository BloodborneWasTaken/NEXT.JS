import React from "react";

export const metadata = {
  title: {
    default: "Home | Mohammad Mahdi Jerban",
  },
};

export default async function Home() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 2000);
  });
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/60 via-black to-pink-950/50" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0 animate-[gridMove_14s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Perspective Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] animate-[gridPulse_5s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
          transform: "perspective(500px) rotateX(55deg) scale(1.8)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Purple Orb */}
      <div className="absolute w-[650px] h-[650px] bg-purple-700/20 rounded-full blur-[180px] -top-56 -left-56 animate-[orbFloat_10s_ease-in-out_infinite]" />

      {/* Pink Orb */}
      <div className="absolute w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[180px] -bottom-60 -right-60 animate-[orbFloatReverse_12s_ease-in-out_infinite]" />

      {/* Cyan Orb */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbPulse_7s_ease-in-out_infinite]" />

      {/* Floating Energy */}
      <div className="absolute w-[250px] h-[250px] rounded-full border border-purple-500/10 top-[18%] right-[15%] animate-[orbit_14s_linear_infinite]" />
      <div className="absolute w-[350px] h-[350px] rounded-full border border-pink-500/10 bottom-[15%] left-[12%] animate-[orbitReverse_18s_linear_infinite]" />

      {/* Horizontal Laser */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent shadow-[0_0_25px_5px_rgba(217,70,239,0.35)] animate-[scan_5s_ease-in-out_infinite]" />

      <div className="absolute inset-x-0 top-[35%] h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-[laser_8s_linear_infinite]" />

      <div className="absolute inset-x-0 bottom-[25%] h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-[laserReverse_10s_linear_infinite]" />

      {/* Floating Particles */}
      <div className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,1)] animate-[particleOne_6s_ease-in-out_infinite]" />
      <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_15px_rgba(244,114,182,1)] animate-[particleTwo_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[25%] left-[25%] w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,1)] animate-[particleThree_7s_ease-in-out_infinite]" />
      <div className="absolute bottom-[35%] right-[12%] w-1 h-1 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,1)] animate-[particleFour_9s_ease-in-out_infinite]" />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-6xl">
          {/* Welcome Badge */}
          <div className="flex justify-center mb-8 animate-[badgeEntrance_1s_cubic-bezier(.16,1,.3,1)_both]">
            <div
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full
              border border-purple-500/20
              bg-white/[0.03]
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(168,85,247,0.12)]
              hover:border-fuchsia-400/50
              hover:shadow-[0_0_50px_rgba(217,70,239,0.3)]
              hover:scale-105
              transition-all duration-500"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-pink-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-pink-300 shadow-[0_0_18px_rgba(244,114,182,1)] animate-[dotPulse_2s_ease-in-out_infinite]" />
              </span>

              <span className="relative text-xs sm:text-sm text-purple-200/80 tracking-widest uppercase group-hover:text-fuchsia-200 transition-colors">
                Welcome to the future
              </span>
            </div>
          </div>

          {/* Hero */}
          <div className="text-center">
            <p className="text-sm md:text-base uppercase tracking-[0.5em] text-purple-300/60 mb-5 animate-[fadeUp_0.8s_ease-out_both]">
              Creative Digital Experience
            </p>

            <h1
              className="relative text-5xl sm:text-6xl md:text-8xl font-black tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300
              bg-[length:250%_250%]
              animate-[gradientMove_6s_ease_infinite,heroFloat_5s_ease-in-out_infinite,fadeUp_1s_ease-out_both]
              drop-shadow-[0_0_35px_rgba(217,70,239,0.35)]
              hover:drop-shadow-[0_0_70px_rgba(236,72,153,0.7)]
              transition-all duration-700"
            >
              THIS IS HOME
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-[titleShine_3.5s_linear_infinite] pointer-events-none">
                THIS IS HOME
              </span>
            </h1>

            {/* Hero Line */}
            <div className="mt-5 flex justify-center">
              <div className="relative h-[2px] w-32 md:w-56 overflow-hidden bg-gradient-to-r from-transparent via-pink-500 to-cyan-400 shadow-[0_0_20px_3px_rgba(236,72,153,0.45)] animate-[lineGlow_3s_ease-in-out_infinite]">
                <div className="absolute inset-y-0 -left-full w-1/2 bg-white/90 blur-sm animate-[lineScan_2s_ease-in-out_infinite]" />
              </div>
            </div>

            <p className="max-w-2xl mx-auto mt-7 text-sm md:text-lg leading-8 text-gray-400 animate-[fadeUp_1.2s_ease-out_both]">
              Welcome to a modern digital space where elegant design, futuristic
              visuals and immersive experiences come together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <button
                type="button"
                className="group relative px-7 py-3.5 rounded-xl overflow-hidden
                bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600
                bg-[length:200%_200%]
                animate-[gradientMove_5s_ease_infinite]
                font-semibold text-sm md:text-base
                shadow-[0_0_30px_rgba(168,85,247,0.25)]
                hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]
                hover:scale-105
                hover:-translate-y-1
                active:scale-95
                transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700" />

                <span className="relative z-10">Explore More</span>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button
                type="button"
                className="group relative px-7 py-3.5 rounded-xl border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                text-gray-300 font-semibold text-sm md:text-base
                overflow-hidden
                hover:bg-white/[0.07]
                hover:border-cyan-400/50
                hover:text-white
                hover:shadow-[0_0_45px_rgba(34,211,238,0.2)]
                hover:scale-105
                hover:-translate-y-1
                active:scale-95
                transition-all duration-300"
              >
                <span className="relative z-10">Discover More</span>

                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <span className="absolute inset-0 rounded-xl border border-cyan-400/0 group-hover:border-cyan-400/30 group-hover:animate-pulse" />
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
            {/* Card 1 */}
            <div
              className="group relative rounded-2xl border border-purple-500/15
              bg-white/[0.025]
              backdrop-blur-xl
              p-6
              overflow-hidden
              opacity-0 blur-md
              animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_0.2s_forwards]
              hover:-translate-y-4
              hover:rotate-[0.5deg]
              hover:border-purple-400/50
              hover:bg-purple-500/[0.05]
              hover:shadow-[0_25px_80px_rgba(139,92,246,0.25)]
              transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/15 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-700" />

              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center
                  bg-purple-500/10
                  border border-purple-400/20
                  mb-5
                  shadow-[0_0_25px_rgba(168,85,247,0.12)]
                  group-hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]
                  group-hover:rotate-6
                  group-hover:scale-110
                  transition-all duration-500"
                >
                  <span className="text-xl text-purple-300 group-hover:text-fuchsia-300 group-hover:animate-[iconPulse_1.5s_ease-in-out_infinite] transition-colors">
                    ✦
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  Modern Design
                </h3>

                <p className="text-sm leading-6 text-gray-500 group-hover:text-gray-400 transition-colors">
                  Clean interfaces with futuristic visuals and beautiful
                  details.
                </p>

                <div className="mt-5 h-px w-0 bg-gradient-to-r from-purple-500 to-transparent group-hover:w-full transition-all duration-700" />
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative rounded-2xl border border-pink-500/15
              bg-white/[0.025]
              backdrop-blur-xl
              p-6
              overflow-hidden
              opacity-0 blur-md
              animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_0.4s_forwards]
              hover:-translate-y-4
              hover:rotate-[-0.5deg]
              hover:border-pink-400/50
              hover:bg-pink-500/[0.05]
              hover:shadow-[0_25px_80px_rgba(236,72,153,0.25)]
              transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/15 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-full transition-all duration-700" />

              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center
                  bg-pink-500/10
                  border border-pink-400/20
                  mb-5
                  shadow-[0_0_25px_rgba(236,72,153,0.12)]
                  group-hover:shadow-[0_0_40px_rgba(236,72,153,0.45)]
                  group-hover:-rotate-6
                  group-hover:scale-110
                  transition-all duration-500"
                >
                  <span className="text-xl text-pink-300 group-hover:text-cyan-300 group-hover:animate-[iconPulse_1.5s_ease-in-out_infinite] transition-colors">
                    ◈
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                  Smooth Experience
                </h3>

                <p className="text-sm leading-6 text-gray-500 group-hover:text-gray-400 transition-colors">
                  Subtle animations and interactions designed to feel natural.
                </p>

                <div className="mt-5 h-px w-0 bg-gradient-to-r from-pink-500 to-transparent group-hover:w-full transition-all duration-700" />
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative rounded-2xl border border-fuchsia-500/15
              bg-white/[0.025]
              backdrop-blur-xl
              p-6
              overflow-hidden
              opacity-0 blur-md
              animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_0.6s_forwards]
              hover:-translate-y-4
              hover:rotate-[0.5deg]
              hover:border-cyan-400/50
              hover:bg-fuchsia-500/[0.05]
              hover:shadow-[0_25px_80px_rgba(217,70,239,0.25)]
              transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/15 via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-fuchsia-400 to-cyan-400 group-hover:w-full transition-all duration-700" />

              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center
                  bg-fuchsia-500/10
                  border border-fuchsia-400/20
                  mb-5
                  shadow-[0_0_25px_rgba(217,70,239,0.12)]
                  group-hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
                  group-hover:rotate-6
                  group-hover:scale-110
                  transition-all duration-500"
                >
                  <span className="text-xl text-fuchsia-300 group-hover:text-cyan-300 group-hover:animate-[iconPulse_1.5s_ease-in-out_infinite] transition-colors">
                    ⚡
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  Powerful Visuals
                </h3>

                <p className="text-sm leading-6 text-gray-500 group-hover:text-gray-400 transition-colors">
                  Neon gradients, glass effects and glowing elements for a
                  unique look.
                </p>

                <div className="mt-5 h-px w-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </div>

          {/* Bottom Energy Line */}
          <div className="mt-16 flex items-center justify-center gap-4 animate-[fadeUp_1.5s_ease-out_both]">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-purple-500/40 animate-[lineExpand_3s_ease-in-out_infinite]" />

            <div className="relative w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,1)] animate-[dotPulse_2s_ease-in-out_infinite]">
              <div className="absolute -inset-1 rounded-full bg-pink-400/30 animate-ping" />
              <div className="absolute -inset-3 rounded-full border border-pink-400/20 animate-[ringPulse_2.5s_ease-out_infinite]" />
            </div>

            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-cyan-500/40 animate-[lineExpand_3s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.03;
          }
          50% {
            opacity: 0.08;
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

        @keyframes scan {
          0% {
            transform: translateY(-20vh);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh);
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

        @keyframes laserReverse {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
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

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(8px);
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
            filter: blur(14px);
            transform: translateY(45px) scale(0.92) rotateX(10deg);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1) rotateX(0);
          }
        }

        @keyframes badgeEntrance {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.8);
            filter: blur(8px);
          }
          70% {
            transform: translateY(5px) scale(1.04);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
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
            opacity: 0.5;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.15);
          }
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(70px, -50px, 0) scale(1.12);
          }
          66% {
            transform: translate3d(-40px, 60px, 0) scale(0.92);
          }
        }

        @keyframes orbFloatReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(-70px, 50px, 0) scale(0.9);
          }
          66% {
            transform: translate3d(50px, -60px, 0) scale(1.12);
          }
        }

        @keyframes orbPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.8;
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
            transform: translate(-70px, 90px);
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
            transform: translate(60px, -80px);
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
            transform: translate(-90px, -50px);
            opacity: 1;
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(244, 114, 182, 0.5);
          }
          50% {
            transform: scale(1.35);
            box-shadow: 0 0 25px rgba(244, 114, 182, 1);
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

        @keyframes lineExpand {
          0%,
          100% {
            opacity: 0.4;
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
