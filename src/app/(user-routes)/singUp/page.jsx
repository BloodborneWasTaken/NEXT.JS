import Link from "next/link";
import React from "react";

export default async function SingUp() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 2000);
  });

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative px-6 py-16 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-pink-950/40 via-black to-purple-950/40" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] animate-[gridMove_14s_linear_infinite]"
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
            "linear-gradient(rgba(236,72,153,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg) scale(1.8)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[160px] top-1/4 right-1/4 animate-[floatGlow_8s_ease-in-out_infinite]" />

      <div className="absolute w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px] bottom-1/4 left-1/4 animate-[floatGlowReverse_10s_ease-in-out_infinite]" />

      <div className="absolute w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbPulse_7s_ease-in-out_infinite]" />

      {/* Floating Rings */}
      <div className="absolute w-56 h-56 rounded-full border border-pink-400/10 top-[12%] left-[8%] animate-[orbit_16s_linear_infinite]" />

      <div className="absolute w-72 h-72 rounded-full border border-purple-400/10 bottom-[8%] right-[6%] animate-[orbitReverse_20s_linear_infinite]" />

      {/* Floating Particles */}
      <div className="absolute top-[18%] right-[12%] w-1 h-1 rounded-full bg-pink-300 shadow-[0_0_15px_rgba(244,114,182,1)] animate-[particleOne_7s_ease-in-out_infinite]" />

      <div className="absolute top-[30%] left-[16%] w-1.5 h-1.5 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(216,180,254,1)] animate-[particleTwo_8s_ease-in-out_infinite]" />

      <div className="absolute bottom-[20%] right-[18%] w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,1)] animate-[particleThree_6s_ease-in-out_infinite]" />

      <div className="absolute bottom-[32%] left-[10%] w-1 h-1 rounded-full bg-fuchsia-300 shadow-[0_0_15px_rgba(232,121,249,1)] animate-[particleFour_9s_ease-in-out_infinite]" />

      {/* Scan Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent shadow-[0_0_25px_5px_rgba(168,85,247,0.3)] animate-[scan_6s_linear_infinite]" />

      {/* Laser */}
      <div className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-[laser_9s_linear_infinite]" />

      {/* CRT Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)]" />

      {/* Main */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-7 animate-[fadeDown_0.9s_cubic-bezier(.16,1,.3,1)_both]">
          <div
            className="group relative w-16 h-16 rounded-2xl
            flex items-center justify-center
            bg-gradient-to-br from-pink-500/20 to-purple-500/20
            border border-pink-400/20
            shadow-[0_0_40px_rgba(236,72,153,0.2)]
            backdrop-blur-xl
            hover:scale-110
            hover:-rotate-6
            hover:border-purple-400/50
            hover:shadow-[0_0_65px_rgba(168,85,247,0.4)]
            transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl border border-purple-400/10 animate-[iconRing_3s_ease-in-out_infinite]" />

            <div className="absolute -inset-2 rounded-3xl border border-pink-400/10 animate-[ringPulse_3s_ease-out_infinite]" />

            <span className="relative text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 animate-[iconFloat_3s_ease-in-out_infinite]">
              ✦
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center animate-[fadeUp_0.9s_cubic-bezier(.16,1,.3,1)_0.15s_both]">
          <p className="text-xs uppercase tracking-[0.35em] text-pink-300/50 mb-3">
            Start your journey
          </p>

          <h1
            className="relative inline-block text-4xl md:text-5xl font-black tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-pink-300 via-purple-400 to-pink-400
            bg-[length:250%_250%]
            animate-[gradientMove_5s_ease_infinite,titleFloat_5s_ease-in-out_infinite]
            drop-shadow-[0_0_25px_rgba(217,70,239,0.45)]"
          >
            SIGN UP
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-[titleShine_3s_linear_infinite] pointer-events-none">
              SIGN UP
            </span>
          </h1>

          {/* Heading Line */}
          <div className="mt-5 flex justify-center">
            <div className="relative h-[2px] w-24 overflow-hidden bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_2px_rgba(168,85,247,0.6)] animate-[lineGlow_3s_ease-in-out_infinite]">
              <div className="absolute inset-y-0 -left-full w-1/2 bg-white/90 blur-sm animate-[lineScan_2s_ease-in-out_infinite]" />
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Create your account and join the experience.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="group relative mt-9 p-7 md:p-8 rounded-3xl
          border border-pink-500/15
          bg-white/[0.035] backdrop-blur-2xl
          shadow-[0_0_50px_rgba(236,72,153,0.1)]
          hover:border-pink-500/35
          hover:shadow-[0_0_75px_rgba(236,72,153,0.2)]
          transition-all duration-500
          opacity-0
          animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.3s_forwards]"
        >
          {/* Card Glow */}
          <div
            className="absolute inset-0 rounded-3xl
            bg-gradient-to-br from-pink-500/[0.07]
            via-transparent to-purple-500/[0.06]
            pointer-events-none"
          />

          {/* Top Border */}
          <div className="absolute top-0 right-0 h-px w-0 bg-gradient-to-l from-pink-400 via-purple-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

          {/* Card Orb */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl animate-[floatGlow_8s_ease-in-out_infinite]" />

          <form className="relative flex flex-col gap-5">
            {/* Full Name */}
            <div className="opacity-0 animate-[formField_0.7s_ease-out_0.5s_forwards]">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Full name
              </label>

              <div className="relative group/input">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400/50 group-focus-within/input:text-purple-400 transition-colors duration-300">
                  ◉
                </span>

                <input
                  type="text"
                  placeholder="Your full name"
                  className="peer w-full bg-black/40
                  border border-pink-500/20
                  rounded-xl pl-10 pr-4 py-3.5
                  text-sm text-pink-100
                  placeholder-gray-600
                  outline-none
                  hover:border-pink-400/40
                  focus:border-purple-500/70
                  focus:bg-purple-500/[0.03]
                  focus:shadow-[0_0_25px_rgba(168,85,247,0.18)]
                  transition-all duration-300"
                />

                <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 peer-focus:w-full peer-focus:left-0 transition-all duration-500" />
              </div>
            </div>

            {/* Email */}
            <div className="opacity-0 animate-[formField_0.7s_ease-out_0.65s_forwards]">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Email address
              </label>

              <div className="relative group/input">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/50 group-focus-within/input:text-pink-400 transition-colors duration-300">
                  @
                </span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="peer w-full bg-black/40
                  border border-pink-500/20
                  rounded-xl pl-10 pr-4 py-3.5
                  text-sm text-pink-100
                  placeholder-gray-600
                  outline-none
                  hover:border-purple-400/40
                  focus:border-purple-500/70
                  focus:bg-purple-500/[0.03]
                  focus:shadow-[0_0_25px_rgba(168,85,247,0.18)]
                  transition-all duration-300"
                />

                <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 peer-focus:w-full peer-focus:left-0 transition-all duration-500" />
              </div>
            </div>

            {/* Password */}
            <div className="opacity-0 animate-[formField_0.7s_ease-out_0.8s_forwards]">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Password
              </label>

              <div className="relative group/input">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400/50 group-focus-within/input:text-purple-400 transition-colors duration-300">
                  •
                </span>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="peer w-full bg-black/40
                  border border-pink-500/20
                  rounded-xl pl-10 pr-4 py-3.5
                  text-sm text-pink-100
                  placeholder-gray-600
                  outline-none
                  hover:border-pink-400/40
                  focus:border-purple-500/70
                  focus:bg-purple-500/[0.03]
                  focus:shadow-[0_0_25px_rgba(168,85,247,0.18)]
                  transition-all duration-300"
                />

                <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 peer-focus:w-full peer-focus:left-0 transition-all duration-500" />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="opacity-0 animate-[formField_0.7s_ease-out_0.95s_forwards]">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Confirm password
              </label>

              <div className="relative group/input">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/50 group-focus-within/input:text-pink-400 transition-colors duration-300">
                  •
                </span>

                <input
                  type="password"
                  placeholder="Repeat your password"
                  className="peer w-full bg-black/40
                  border border-pink-500/20
                  rounded-xl pl-10 pr-4 py-3.5
                  text-sm text-pink-100
                  placeholder-gray-600
                  outline-none
                  hover:border-purple-400/40
                  focus:border-purple-500/70
                  focus:bg-purple-500/[0.03]
                  focus:shadow-[0_0_25px_rgba(168,85,247,0.18)]
                  transition-all duration-300"
                />

                <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 peer-focus:w-full peer-focus:left-0 transition-all duration-500" />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer group/terms opacity-0 animate-[formField_0.7s_ease-out_1.1s_forwards]">
              <div className="relative">
                <input
                  type="checkbox"
                  className="peer mt-0.5 w-4 h-4 accent-purple-500 cursor-pointer"
                />

                <div className="absolute -inset-1 rounded-md border border-purple-400/0 peer-checked:border-purple-400/30 peer-checked:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all pointer-events-none" />
              </div>

              <span className="text-xs text-gray-500 leading-5 group-hover/terms:text-gray-300 transition-colors">
                I agree to the terms and conditions.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group/button relative overflow-hidden
              mt-2 w-full px-5 py-4 rounded-xl
              bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600
              bg-[length:200%_100%]
              text-white text-sm font-semibold
              shadow-[0_0_25px_rgba(217,70,239,0.2)]
              hover:shadow-[0_0_45px_rgba(217,70,239,0.5)]
              hover:-translate-y-1
              hover:scale-[1.01]
              animate-[buttonGradient_4s_ease_infinite]
              opacity-0
              animate-[buttonReveal_0.8s_ease-out_1.2s_forwards,buttonGradient_4s_ease_infinite]"
            >
              <span className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" />

              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />

              <span className="absolute inset-0 rounded-xl border border-white/10 group-hover/button:border-white/25 transition-colors" />

              <span className="relative z-10 flex items-center justify-center gap-3">
                Create Account
                <span className="group-hover/button:translate-x-1 group-hover/button:scale-125 transition-all duration-300">
                  →
                </span>
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center gap-4 my-7 opacity-0 animate-[fadeUp_0.7s_ease-out_1.3s_forwards]">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/5" />

            <span className="text-[10px] uppercase tracking-widest text-gray-700">
              already a member?
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/5" />
          </div>

          {/* Sign In */}
          <p className="text-xs text-gray-500 text-center opacity-0 animate-[fadeUp_0.7s_ease-out_1.4s_forwards]">
            Already have an account?{" "}
            <Link
              href="/singIn"
              className="text-pink-400 hover:text-pink-300 hover:underline hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] transition-all duration-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Bottom Status */}
        <div className="flex items-center justify-center gap-2 mt-7 opacity-0 animate-[fadeUp_0.8s_ease-out_1.5s_forwards]">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-60" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)] animate-[dotPulse_2s_ease-in-out_infinite]" />
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-700">
            Create your account
          </span>
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
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.75;
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

        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
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
            transform: translateY(45px) scale(0.94) rotateX(8deg);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes formField {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(7px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        @keyframes buttonGradient {
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
            transform: translateY(-5px);
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
            transform: scaleX(1.15);
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
            transform: scale(1.4);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-8deg);
          }
        }

        @keyframes iconRing {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
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
            transform: translate(-80px, 60px);
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
            transform: translate(70px, -80px);
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
            transform: translate(-65px, -75px);
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
            transform: translate(80px, -55px);
            opacity: 1;
          }
        }

        @keyframes ringPulse {
          0% {
            transform: scale(0.7);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.8);
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
