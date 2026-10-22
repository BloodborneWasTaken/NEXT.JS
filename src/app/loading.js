export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-pink-950/30" />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[150px] animate-[loaderGlow_4s_ease-in-out_infinite]" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[130px] animate-[loaderGlowReverse_5s_ease-in-out_infinite]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06] animate-[gridMove_12s_linear_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Loader */}
      <div className="relative flex flex-col items-center">
        {/* Outer rings */}
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border border-purple-500/20" />

          <div
            className="absolute inset-2 rounded-full border border-transparent
            border-t-fuchsia-400 border-r-purple-500
            shadow-[0_0_25px_rgba(217,70,239,.4)]
            animate-[spin_2s_linear_infinite]"
          />

          <div
            className="absolute inset-5 rounded-full border border-transparent
            border-b-cyan-400 border-l-pink-500
            shadow-[0_0_25px_rgba(34,211,238,.35)]
            animate-[spinReverse_1.5s_linear_infinite]"
          />

          {/* Orbiting dot */}
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
            <div
              className="absolute -top-1 left-1/2 -translate-x-1/2
              w-2.5 h-2.5 rounded-full bg-fuchsia-300
              shadow-[0_0_15px_5px_rgba(217,70,239,.8)]"
            />
          </div>

          {/* Core */}
          <div
            className="absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-16 h-16 rounded-full
            bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400
            shadow-[0_0_35px_rgba(217,70,239,.7)]
            animate-[corePulse_2s_ease-in-out_infinite]"
          >
            <div className="absolute inset-2 rounded-full bg-black/70 backdrop-blur-sm" />

            <div
              className="absolute inset-0 rounded-full
              border border-white/30
              animate-ping opacity-30"
            />
          </div>
        </div>

        {/* Text */}
        <div className="mt-8 text-center">
          <p
            className="text-xs uppercase tracking-[0.5em]
            text-purple-300/70 animate-[textPulse_2s_ease-in-out_infinite]"
          >
            Initializing
          </p>

          <div className="mt-3 flex items-center justify-center gap-1">
            <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-pink-400 animate-[dotDelay_1.5s_infinite]" />
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-[dotDelay_1.5s_.3s_infinite]" />
          </div>
        </div>

        {/* Loading line */}
        <div className="relative mt-6 w-48 h-[2px] overflow-hidden rounded-full bg-white/10">
          <div
            className="absolute inset-y-0 w-1/2
            bg-gradient-to-r from-transparent via-fuchsia-400 to-cyan-400
            shadow-[0_0_15px_rgba(217,70,239,.8)]
            animate-[loaderLine_1.5s_ease-in-out_infinite]"
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes corePulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(.9);
            box-shadow: 0 0 25px rgba(217,70,239,.5);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
            box-shadow:
              0 0 50px rgba(217,70,239,.9),
              0 0 90px rgba(34,211,238,.25);
          }
        }

        @keyframes loaderGlow {
          0%, 100% {
            transform: scale(.8);
            opacity: .4;
          }
          50% {
            transform: scale(1.2);
            opacity: .8;
          }
        }

        @keyframes loaderGlowReverse {
          0%, 100% {
            transform: translate(80px, -40px) scale(1);
          }
          50% {
            transform: translate(-80px, 40px) scale(.7);
          }
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 50px 50px;
          }
        }

        @keyframes textPulse {
          0%, 100% {
            opacity: .45;
            letter-spacing: .45em;
          }
          50% {
            opacity: 1;
            letter-spacing: .55em;
          }
        }

        @keyframes loaderLine {
          0% {
            left: -50%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes dotDelay {
          0%, 100% {
            opacity: .25;
            transform: scale(.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
