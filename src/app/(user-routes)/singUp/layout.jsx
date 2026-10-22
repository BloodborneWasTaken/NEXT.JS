import React from "react";

export const metadata = {
  title: {
    default: "Sing Up | Mohammad Mahdi Jerban",
  },
};

export default function SignUpLayout({ children }) {
  return (
    <div>
      {/* Background Glow */}
      {children}
      <style>{`
        @keyframes signup-orb {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(75px, 55px, 0) scale(1.13);
          }
        }

        @keyframes signup-orb-reverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-65px, -45px, 0) scale(1.12);
          }
        }

        @keyframes signup-small-orb {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.4;
          }

          50% {
            transform: translate3d(80px, -45px, 0);
            opacity: 0.8;
          }
        }

        @keyframes signup-grid {
          0% {
            transform: perspective(750px) rotateX(64deg) scale(1.55)
              translate3d(0, 0, 0);
          }

          100% {
            transform: perspective(750px) rotateX(64deg) scale(1.55)
              translate3d(0, 72px, 0);
          }
        }

        @keyframes signup-ring {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.6;
          }

          50% {
            transform: scale(1.05) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes signup-ring-reverse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }

          50% {
            transform: scale(0.95) rotate(-180deg);
          }
        }

        @keyframes signup-particle {
          0%,
          100% {
            opacity: 0.15;
            transform: translateY(0) scale(0.7);
          }

          50% {
            opacity: 1;
            transform: translateY(-35px) scale(1.4);
          }
        }

        @keyframes signup-scan {
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

        @keyframes signup-reveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
            filter: blur(14px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .animate-signup-orb {
          animation: signup-orb 12s ease-in-out infinite;
        }

        .animate-signup-orb-reverse {
          animation: signup-orb-reverse 14s ease-in-out infinite;
        }

        .animate-signup-small-orb {
          animation: signup-small-orb 9s ease-in-out infinite;
        }

        .animate-signup-grid {
          animation: signup-grid 18s linear infinite;
        }

        .animate-signup-ring {
          animation: signup-ring 15s ease-in-out infinite;
        }

        .animate-signup-ring-reverse {
          animation: signup-ring-reverse 19s ease-in-out infinite;
        }

        .animate-signup-particle {
          animation: signup-particle 6s ease-in-out infinite;
        }

        .animate-signup-scan {
          animation: signup-scan 7s linear infinite;
        }

        .animate-signup-reveal {
          animation: signup-reveal 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
