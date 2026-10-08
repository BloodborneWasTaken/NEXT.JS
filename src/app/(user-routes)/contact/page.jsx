import React from "react";

export default async function Contact() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 2000);
  });
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative px-6 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-950/40 via-black to-pink-950/30" />

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
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-[0.04] animate-[gridPulse_6s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg) scale(1.8)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px] top-0 left-0 animate-[floatGlow_8s_ease-in-out_infinite]" />

      <div className="absolute w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[160px] bottom-0 right-0 animate-[floatGlowReverse_10s_ease-in-out_infinite]" />

      <div className="absolute w-72 h-72 bg-fuchsia-500/10 rounded-full blur-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbPulse_7s_ease-in-out_infinite]" />

      {/* Floating Rings */}
      <div className="absolute w-56 h-56 rounded-full border border-purple-400/10 top-[12%] right-[7%] animate-[orbit_15s_linear_infinite]" />

      <div className="absolute w-72 h-72 rounded-full border border-pink-400/10 bottom-[10%] left-[4%] animate-[orbitReverse_18s_linear_infinite]" />

      {/* Floating Particles */}
      <div className="absolute top-[18%] left-[10%] w-1 h-1 rounded-full bg-purple-300 shadow-[0_0_15px_rgba(216,180,254,1)] animate-[particleOne_7s_ease-in-out_infinite]" />

      <div className="absolute top-[32%] right-[15%] w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_18px_rgba(244,114,182,1)] animate-[particleTwo_8s_ease-in-out_infinite]" />

      <div className="absolute bottom-[25%] left-[18%] w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,1)] animate-[particleThree_6s_ease-in-out_infinite]" />

      <div className="absolute bottom-[38%] right-[9%] w-1 h-1 rounded-full bg-fuchsia-300 shadow-[0_0_15px_rgba(232,121,249,1)] animate-[particleFour_9s_ease-in-out_infinite]" />

      {/* Scan Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/70 to-transparent shadow-[0_0_25px_5px_rgba(236,72,153,0.3)] animate-[scan_6s_linear_infinite]" />

      <div className="absolute top-[42%] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-[laser_9s_linear_infinite]" />

      {/* CRT Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.72)_100%)]" />

      {/* Main */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-[fadeUp_0.9s_cubic-bezier(.16,1,.3,1)_both]">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <div
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-purple-500/20 bg-white/[0.03]
              backdrop-blur-xl
              shadow-[0_0_30px_rgba(168,85,247,0.08)]
              hover:border-pink-500/40
              hover:bg-pink-500/[0.05]
              hover:shadow-[0_0_45px_rgba(236,72,153,0.2)]
              hover:scale-105
              transition-all duration-500"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-75" />
                <span className="relative w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,1)] animate-[dotPulse_2s_ease-in-out_infinite]" />
              </span>

              <span className="text-xs uppercase tracking-[0.3em] text-purple-200/70 group-hover:text-pink-200 transition-colors">
                Let's connect
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="relative inline-block text-5xl md:text-7xl font-black tracking-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-purple-300 via-pink-400 to-purple-400
            bg-[length:250%_250%]
            animate-[gradientMove_5s_ease_infinite,titleFloat_5s_ease-in-out_infinite]
            drop-shadow-[0_0_30px_rgba(217,70,239,0.45)]
            hover:drop-shadow-[0_0_65px_rgba(236,72,153,0.7)]
            transition-all duration-500"
          >
            CONTACT
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-[titleShine_3s_linear_infinite] pointer-events-none">
              CONTACT
            </span>
          </h1>

          {/* Header Line */}
          <div className="mt-5 flex justify-center">
            <div className="relative h-[2px] w-40 md:w-56 overflow-hidden bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_20px_3px_rgba(236,72,153,0.5)] animate-[lineGlow_3s_ease-in-out_infinite]">
              <div className="absolute inset-y-0 -left-full w-1/2 bg-white/90 blur-sm animate-[lineScan_2s_ease-in-out_infinite]" />
            </div>
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-sm md:text-base leading-7 animate-[fadeUp_1s_ease-out_0.25s_both]">
            Have something to say, an idea to share, or simply want to get in
            touch? Send a message and let's connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Intro Card */}
            <div
              className="group relative overflow-hidden rounded-3xl
              border border-purple-500/15
              bg-white/[0.03] backdrop-blur-xl
              p-7 md:p-8
              shadow-[0_0_40px_rgba(168,85,247,0.08)]
              hover:-translate-y-3
              hover:border-purple-500/40
              hover:bg-purple-500/[0.035]
              hover:shadow-[0_0_65px_rgba(168,85,247,0.2)]
              transition-all duration-500
              opacity-0
              animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.2s_forwards]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/[0.08] via-transparent to-pink-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

              <div className="absolute w-48 h-48 bg-purple-600/10 rounded-full blur-[90px] -top-20 -left-20 animate-[floatGlow_7s_ease-in-out_infinite]" />

              <div className="relative">
                {/* Icon */}
                <div
                  className="relative w-14 h-14 rounded-2xl
                  flex items-center justify-center
                  bg-purple-500/10
                  border border-purple-400/20
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
                  transition-all duration-500"
                >
                  <span className="absolute inset-0 rounded-2xl border border-purple-400/10 animate-[iconRing_3s_ease-in-out_infinite]" />
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    ✉
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6 group-hover:text-purple-100 transition-colors">
                  Let's talk
                </h2>

                <p className="mt-4 text-sm text-gray-500 leading-7">
                  Whether you have a question, an idea, or just want to say
                  hello, this is the place to reach out.
                </p>
              </div>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {/* Email */}
              <div
                className="group relative overflow-hidden flex items-center gap-4
                rounded-2xl border border-white/5
                bg-white/[0.025] backdrop-blur-xl
                p-5
                hover:border-purple-500/30
                hover:bg-purple-500/[0.05]
                hover:-translate-y-2
                hover:shadow-[0_10px_35px_rgba(168,85,247,0.18)]
                transition-all duration-300
                opacity-0 animate-[slideRight_0.8s_ease-out_0.4s_forwards]"
              >
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-400 to-transparent group-hover:w-full transition-all duration-500" />

                <div
                  className="relative w-11 h-11 rounded-xl
                  flex items-center justify-center
                  bg-purple-500/10
                  text-purple-300
                  border border-purple-400/10
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]
                  transition-all duration-300"
                >
                  @
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-gray-300 group-hover:text-purple-200 transition-colors">
                    your@email.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div
                className="group relative overflow-hidden flex items-center gap-4
                rounded-2xl border border-white/5
                bg-white/[0.025] backdrop-blur-xl
                p-5
                hover:border-pink-500/30
                hover:bg-pink-500/[0.05]
                hover:-translate-y-2
                hover:shadow-[0_10px_35px_rgba(236,72,153,0.18)]
                transition-all duration-300
                opacity-0 animate-[slideRight_0.8s_ease-out_0.55s_forwards]"
              >
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-pink-400 to-transparent group-hover:w-full transition-all duration-500" />

                <div
                  className="relative w-11 h-11 rounded-xl
                  flex items-center justify-center
                  bg-pink-500/10
                  text-pink-300
                  border border-pink-400/10
                  group-hover:scale-110
                  group-hover:-rotate-6
                  group-hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]
                  transition-all duration-300"
                >
                  ◎
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-300 group-hover:text-pink-200 transition-colors">
                    Somewhere on Earth
                  </p>
                </div>
              </div>

              {/* Response */}
              <div
                className="group relative overflow-hidden flex items-center gap-4
                rounded-2xl border border-white/5
                bg-white/[0.025] backdrop-blur-xl
                p-5
                hover:border-fuchsia-500/30
                hover:bg-fuchsia-500/[0.05]
                hover:-translate-y-2
                hover:shadow-[0_10px_35px_rgba(217,70,239,0.18)]
                transition-all duration-300
                opacity-0 animate-[slideRight_0.8s_ease-out_0.7s_forwards]"
              >
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-fuchsia-400 to-transparent group-hover:w-full transition-all duration-500" />

                <div
                  className="relative w-11 h-11 rounded-xl
                  flex items-center justify-center
                  bg-fuchsia-500/10
                  text-fuchsia-300
                  border border-fuchsia-400/10
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:shadow-[0_0_25px_rgba(217,70,239,0.3)]
                  transition-all duration-300"
                >
                  ⚡
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Response
                  </p>

                  <p className="mt-1 text-sm text-gray-300 group-hover:text-fuchsia-200 transition-colors">
                    Usually as soon as possible
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="lg:col-span-3 group relative
            rounded-3xl border border-pink-500/15
            bg-white/[0.03] backdrop-blur-xl
            p-7 md:p-9
            overflow-hidden
            shadow-[0_0_45px_rgba(236,72,153,0.07)]
            hover:border-pink-500/35
            hover:shadow-[0_0_75px_rgba(236,72,153,0.18)]
            transition-all duration-500
            opacity-0
            animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.35s_forwards]"
          >
            <div
              className="absolute inset-0 rounded-3xl
              bg-gradient-to-br from-pink-500/[0.06]
              via-transparent to-purple-500/[0.06]
              opacity-80"
            />

            <div className="absolute top-0 right-0 h-px w-0 bg-gradient-to-l from-pink-400 via-purple-400 to-cyan-400 group-hover:w-full transition-all duration-1000" />

            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl opacity-70 animate-[floatGlowReverse_8s_ease-in-out_infinite]" />

            <div className="relative">
              {/* Form Header */}
              <div className="mb-8 animate-[fadeUp_0.8s_ease-out_0.55s_both]">
                <p className="text-xs uppercase tracking-[0.3em] text-pink-300/50">
                  Send a message
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mt-2 group-hover:text-pink-100 transition-colors">
                  Get in touch
                </h2>

                <div className="mt-3 w-16 h-px bg-gradient-to-r from-pink-400 to-transparent animate-[lineExpand_3s_ease-in-out_infinite]" />
              </div>

              <form className="flex flex-col gap-5">
                {/* Name */}
                <div className="group/field opacity-0 animate-[formField_0.7s_ease-out_0.6s_forwards]">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within/field:text-purple-300 transition-colors">
                    Your name
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="peer w-full bg-black/40 border border-purple-500/20
                      rounded-xl px-4 py-3.5 text-sm text-purple-100
                      placeholder-gray-600 outline-none
                      focus:border-pink-500/70
                      focus:bg-pink-500/[0.03]
                      focus:shadow-[0_0_25px_rgba(236,72,153,0.18)]
                      hover:border-purple-400/40
                      transition-all duration-300"
                    />

                    <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 peer-focus:w-full peer-focus:left-0 transition-all duration-500" />
                  </div>
                </div>

                {/* Email */}
                <div className="group/field opacity-0 animate-[formField_0.7s_ease-out_0.7s_forwards]">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within/field:text-pink-300 transition-colors">
                    Your email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="peer w-full bg-black/40 border border-purple-500/20
                      rounded-xl px-4 py-3.5 text-sm text-purple-100
                      placeholder-gray-600 outline-none
                      focus:border-pink-500/70
                      focus:bg-pink-500/[0.03]
                      focus:shadow-[0_0_25px_rgba(236,72,153,0.18)]
                      hover:border-pink-400/40
                      transition-all duration-300"
                    />

                    <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 peer-focus:w-full peer-focus:left-0 transition-all duration-500" />
                  </div>
                </div>

                {/* Message */}
                <div className="group/field opacity-0 animate-[formField_0.7s_ease-out_0.8s_forwards]">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within/field:text-fuchsia-300 transition-colors">
                    Your message
                  </label>

                  <div className="relative">
                    <textarea
                      placeholder="Write your message..."
                      rows={6}
                      className="peer w-full bg-black/40 border border-purple-500/20
                      rounded-xl px-4 py-3.5 text-sm text-purple-100
                      placeholder-gray-600 outline-none
                      focus:border-pink-500/70
                      focus:bg-pink-500/[0.03]
                      focus:shadow-[0_0_25px_rgba(236,72,153,0.18)]
                      hover:border-fuchsia-400/40
                      transition-all duration-300 resize-none"
                    />

                    <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 peer-focus:w-full peer-focus:left-0 transition-all duration-500" />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group/button relative overflow-hidden
                  mt-2 w-full px-6 py-4 rounded-xl
                  bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600
                  bg-[length:200%_100%]
                  text-white text-sm font-semibold
                  shadow-[0_0_25px_rgba(217,70,239,0.2)]
                  hover:shadow-[0_0_45px_rgba(217,70,239,0.45)]
                  hover:-translate-y-1
                  hover:scale-[1.01]
                  animate-[buttonGradient_4s_ease_infinite]
                  transition-all duration-300"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" />

                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <span className="group-hover/button:translate-x-1 group-hover/button:scale-125 transition-all duration-300">
                      →
                    </span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex items-center justify-center gap-4 animate-[fadeUp_1.4s_ease-out_both]">
          <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent to-purple-500/40 animate-[lineExpand_3s_ease-in-out_infinite]" />

          <div className="relative w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,1)] animate-[dotPulse_2s_ease-in-out_infinite]">
            <div className="absolute -inset-1 rounded-full bg-pink-400/30 animate-ping" />
            <div className="absolute -inset-3 rounded-full border border-pink-400/20 animate-[ringPulse_2.5s_ease-out_infinite]" />
          </div>

          <div className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent to-purple-500/40 animate-[lineExpand_3s_ease-in-out_infinite]" />
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

        @keyframes slideRight {
          0% {
            opacity: 0;
            transform: translateX(-35px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes formField {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.35);
          }
        }

        @keyframes iconRing {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.18);
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
