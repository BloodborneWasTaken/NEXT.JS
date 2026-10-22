import React from "react";

export const metadata = {
  title: {
    default: "Contact | Mohammad Mahdi Jerban",
  },
};

export default function ContactLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020207] text-white">
      {/* Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px] animate-contact-float" />
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-contact-float-reverse" />
        <div className="absolute bottom-[-200px] left-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />
      </div>

      {/* Animated Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.13]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.18)_1px,transparent_1px)] bg-[size:70px_70px] animate-contact-grid" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020207_80%)]" />
      </div>

      {/* Scan Line */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-contact-scan" />

      {/* Noise */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.025] mix-blend-screen">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      <style>{`
        @keyframes contact-grid {
          0% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(35px, 20px, 0);
          }

          100% {
            transform: translate3d(70px, 40px, 0);
          }
        }

        @keyframes contact-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(70px, 50px, 0) scale(1.12);
          }
        }

        @keyframes contact-float-reverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-60px, 40px, 0) scale(1.1);
          }
        }

        @keyframes contact-scan {
          0% {
            transform: translateY(-10px);
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

        .animate-contact-grid {
          animation: contact-grid 18s linear infinite;
        }

        .animate-contact-float {
          animation: contact-float 12s ease-in-out infinite;
        }

        .animate-contact-float-reverse {
          animation: contact-float-reverse 14s ease-in-out infinite;
        }

        .animate-contact-scan {
          animation: contact-scan 7s linear infinite;
        }
      `}</style>
    </div>
  );
}
