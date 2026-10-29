import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mohammad Mahdi Jerban",
    template: "%s | Mohammad Mahdi Jerban",
  },
  description: "Welcome To The Future",
  keywords: [
    "Mohammad Mahdi Jerban",
    "Mohammad Mahdi",
    "Portfolio",
    "Developer",
    "Web Developer",
  ],
  authors: [{ name: "Mohammad Mahdi Jerban" }],
  creator: "Mohammad Mahdi Jerban",

  openGraph: {
    title: "Mohammad Mahdi Jerban",
    description: "Welcome To The Future",
    url: "https://your-domain.com",
    siteName: "Mohammad Mahdi Jerban",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Mahdi Jerban",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammad Mahdi Jerban",
    description: "Welcome To The Future",
    images: ["/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-black text-white">
          {/* Global Background */}
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(124,58,237,0.2),transparent_35%),radial-gradient(ellipse_at_85%_25%,rgba(236,72,153,0.14),transparent_30%),radial-gradient(ellipse_at_50%_100%,rgba(6,182,212,0.1),transparent_40%)]" />

          {/* Animated Grid */}
          <div
            className="pointer-events-none fixed inset-0 z-0 animate-[gridMove_18s_linear_infinite] opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.45) 1px, transparent 1px)",
              backgroundSize: "65px 65px",
              maskImage:
                "radial-gradient(ellipse at center, black 15%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 15%, transparent 85%)",
            }}
          />

          {/* Animated Perspective Grid */}
          <div
            className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[45vh] origin-bottom opacity-[0.13]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.65) 1px, transparent 1px)",
              backgroundSize: "55px 45px",
              transform: "perspective(350px) rotateX(60deg) scale(1.8)",
              maskImage: "linear-gradient(to top, black, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to top, black, transparent 85%)",
              animation: "perspectiveGrid 8s ease-in-out infinite alternate",
            }}
          />

          {/* Ambient Orbs */}
          <div className="pointer-events-none fixed -left-40 -top-40 z-0 h-[480px] w-[480px] rounded-full bg-purple-600/15 blur-[130px] animate-[orbFloat_12s_ease-in-out_infinite]" />

          <div className="pointer-events-none fixed -right-40 top-[20%] z-0 h-[420px] w-[420px] rounded-full bg-pink-600/10 blur-[140px] animate-[orbFloat_15s_ease-in-out_infinite_reverse]" />

          <div className="pointer-events-none fixed -bottom-48 left-[30%] z-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px] animate-[orbFloat_17s_ease-in-out_infinite]" />

          {/* Floating Particles */}
          <div className="pointer-events-none fixed left-[8%] top-[22%] z-0 h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_15px_#a855f7] animate-[particleFloat_6s_ease-in-out_infinite]" />

          <div className="pointer-events-none fixed right-[10%] top-[38%] z-0 h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_18px_#ec4899] animate-[particleFloat_8s_ease-in-out_infinite_1s]" />

          <div className="pointer-events-none fixed bottom-[25%] left-[18%] z-0 h-1 w-1 rounded-full bg-fuchsia-400 shadow-[0_0_15px_#d946ef] animate-[particleFloat_7s_ease-in-out_infinite_2s]" />

          <div className="pointer-events-none fixed right-[25%] top-[15%] z-0 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee] animate-[particleFloat_9s_ease-in-out_infinite_1s]" />

          <div className="pointer-events-none fixed bottom-[15%] right-[12%] z-0 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7] animate-[particleFloat_7s_ease-in-out_infinite_3s]" />

          {/* Global Scan Line */}
          <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden opacity-[0.12]">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-[globalScan_10s_linear_infinite]" />
          </div>

          {/* Navbar */}
          <header className="fixed left-0 right-0 top-0 z-50">
            {/* Navbar Glass Background */}
            <div className="absolute inset-0 border-b border-white/[0.07] bg-black/70 shadow-[0_10px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl" />

            {/* Animated Top Line */}
            <div className="absolute left-0 right-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-purple-400 to-cyan-400 animate-[navLine_5s_ease-in-out_infinite]" />

            {/* Navbar Glow */}
            <div className="absolute -bottom-8 left-1/2 h-10 w-2/3 -translate-x-1/2 bg-purple-500/15 blur-3xl" />

            <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
              {/* Logo */}
              <Link
                href="/"
                className="group relative flex shrink-0 items-center gap-3"
              >
                {/* Logo Icon */}
                <div className="logo-frame relative flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-cyan-500/15 shadow-[0_0_25px_rgba(168,85,247,0.16)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                  <div className="absolute inset-1 rounded-lg border border-white/[0.08]" />

                  <img
                    src="/icon.png"
                    alt="Mohammad Mahdi Jerban"
                    className="relative z-10 h-7 w-7 object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-black bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse" />
                  <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.9)] animate-pulse" />
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <div className="bg-[length:200%_auto] bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-sm font-black tracking-[0.16em] text-transparent animate-[logoGradient_5s_linear_infinite]">
                    MOHAMMAD MAHDI
                  </div>

                  <div className="mt-1 text-[8px] uppercase tracking-[0.38em] text-gray-500 transition-colors duration-300 group-hover:text-cyan-300/80">
                    Welcome To The Future
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-1 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl md:flex">
                <Link
                  href="/"
                  className="nav-link group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500/10 hover:text-white"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all duration-300 group-hover:w-3/4" />
                </Link>

                <Link
                  href="/about"
                  className="nav-link group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500/10 hover:text-white"
                >
                  <span className="relative z-10">About</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all duration-300 group-hover:w-3/4" />
                </Link>

                <Link
                  href="/products"
                  className="nav-link group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  <span className="relative z-10">Products</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:w-3/4" />
                </Link>

                <Link
                  href="/contact"
                  className="nav-link group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-500/10 hover:text-white"
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-pink-400 to-purple-400 shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all duration-300 group-hover:w-3/4" />
                </Link>
              </div>

              {/* Desktop Auth */}
              <div className="hidden items-center gap-3 md:flex">
                <Link
                  href="/singIn"
                  className="group relative overflow-hidden rounded-xl border border-purple-400/25 bg-white/[0.025] px-4 py-2 text-sm text-purple-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/60 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]"
                >
                  <span className="relative z-10">Sign In</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>

                <Link
                  href="/singUp"
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_100%] px-4 py-2 text-sm font-semibold shadow-[0_0_22px_rgba(217,70,239,0.23)] transition-all duration-500 animate-[buttonGradient_5s_ease_infinite] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_35px_rgba(217,70,239,0.45)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10">Sign Up</span>
                </Link>
              </div>

              {/* Mobile Hamburger Toggle - CSS only */}
              <input
                type="checkbox"
                id="mobile-menu-toggle"
                className="peer sr-only md:hidden"
                aria-label="Toggle navigation menu"
              />

              <label
                htmlFor="mobile-menu-toggle"
                className="mobile-menu-button group relative z-[60] flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-purple-400/30 bg-white/[0.04] shadow-[0_0_18px_rgba(168,85,247,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/50 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.16)] md:hidden"
                aria-label="Open or close navigation"
              >
                <span className="sr-only">Toggle menu</span>
                <span className="hamburger-line absolute h-0.5 w-5 -translate-y-[7px] rounded-full bg-gradient-to-r from-purple-300 to-pink-300 shadow-[0_0_8px_rgba(168,85,247,0.55)] transition-all duration-300" />
                <span className="hamburger-line absolute h-0.5 w-5 rounded-full bg-gradient-to-r from-pink-300 to-cyan-300 shadow-[0_0_8px_rgba(236,72,153,0.45)] transition-all duration-300" />
                <span className="hamburger-line absolute h-0.5 w-5 translate-y-[7px] rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 shadow-[0_0_8px_rgba(34,211,238,0.45)] transition-all duration-300" />
              </label>

              {/* Mobile Menu */}
              <div
                className="mobile-menu-panel pointer-events-none invisible absolute left-4 right-4 top-full z-50 translate-y-3 rounded-2xl border border-purple-400/20 bg-[#080710]/95 p-3 opacity-0 shadow-[0_20px_70px_rgba(0,0,0,0.65),0_0_35px_rgba(168,85,247,0.12)] backdrop-blur-2xl transition-all duration-300 peer-checked:pointer-events-auto peer-checked:visible peer-checked:translate-y-2 peer-checked:opacity-100 md:hidden"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {/* Mobile Menu Decoration */}
                <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl" />

                <div className="relative flex flex-col gap-1">
                  <Link
                    href="/"
                    className="mobile-nav-link group flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:border-purple-400/20 hover:bg-purple-500/10 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] transition-all duration-300 group-hover:scale-150" />
                    Home
                    <span className="ml-auto text-[10px] tracking-[0.2em] text-gray-600 group-hover:text-purple-300">
                      01
                    </span>
                  </Link>

                  <Link
                    href="/about"
                    className="mobile-nav-link group flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:border-purple-400/20 hover:bg-purple-500/10 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#d946ef] transition-all duration-300 group-hover:scale-150" />
                    About
                    <span className="ml-auto text-[10px] tracking-[0.2em] text-gray-600 group-hover:text-fuchsia-300">
                      02
                    </span>
                  </Link>

                  <Link
                    href="/products"
                    className="mobile-nav-link group flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee] transition-all duration-300 group-hover:scale-150" />
                    Products
                    <span className="ml-auto text-[10px] tracking-[0.2em] text-gray-600 group-hover:text-cyan-300">
                      03
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="mobile-nav-link group flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:border-pink-400/20 hover:bg-pink-500/10 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899] transition-all duration-300 group-hover:scale-150" />
                    Contact
                    <span className="ml-auto text-[10px] tracking-[0.2em] text-gray-600 group-hover:text-pink-300">
                      04
                    </span>
                  </Link>

                  <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/singIn"
                      className="group relative flex items-center justify-center overflow-hidden rounded-xl border border-purple-400/25 bg-purple-500/[0.07] px-3 py-3 text-sm text-purple-200 transition-all duration-300 hover:border-purple-300/60 hover:bg-purple-500/15 hover:text-white"
                    >
                      <span className="relative z-10">Sign In</span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-300/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </Link>

                    <Link
                      href="/singUp"
                      className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_100%] px-3 py-3 text-sm font-semibold shadow-[0_0_18px_rgba(217,70,239,0.2)] transition-all duration-300 animate-[buttonGradient_5s_ease_infinite] hover:shadow-[0_0_28px_rgba(217,70,239,0.4)]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <span className="relative z-10">Sign Up ↗</span>
                    </Link>
                  </div>

                  <div className="flex items-center justify-center gap-2 pb-1 pt-3 text-[8px] uppercase tracking-[0.35em] text-gray-600">
                    <span className="h-px w-5 bg-purple-500/40" />
                    Welcome To The Future
                    <span className="h-px w-5 bg-cyan-500/40" />
                  </div>
                </div>
              </div>
            </nav>
          </header>

          {/* Page Content */}
          <main className="relative z-10 min-h-screen pt-20">{children}</main>

          {/* Global Vignette */}
          <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.3)_100%)]" />

          {/* Bottom Neon Line */}
          <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-cyan-400/50 animate-[navLine_6s_ease-in-out_infinite]" />
        </div>

        <style>{`
          @keyframes gridMove {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 65px 65px;
            }
          }

          @keyframes perspectiveGrid {
            0% {
              opacity: 0.07;
              transform: perspective(350px) rotateX(60deg) scale(1.65) translateY(0);
            }
            100% {
              opacity: 0.18;
              transform: perspective(350px) rotateX(60deg) scale(1.9) translateY(12px);
            }
          }

          @keyframes orbFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            25% {
              transform: translate3d(25px, -15px, 0) scale(1.04);
            }
            50% {
              transform: translate3d(35px, -35px, 0) scale(1.1);
            }
            75% {
              transform: translate3d(-10px, -20px, 0) scale(1.03);
            }
          }

          @keyframes particleFloat {
            0%, 100% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.3;
            }
            25% {
              transform: translateY(-12px) translateX(8px) scale(1.2);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-30px) translateX(-5px) scale(1.8);
              opacity: 1;
            }
            75% {
              transform: translateY(-10px) translateX(-12px) scale(1.2);
              opacity: 0.6;
            }
          }

          @keyframes navLine {
            0%, 100% {
              opacity: 0.25;
              transform: scaleX(0.4);
            }
            50% {
              opacity: 1;
              transform: scaleX(1);
            }
          }

          @keyframes logoGradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes buttonGradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes globalScan {
            0% {
              transform: translateY(-120%);
            }
            100% {
              transform: translateY(110vh);
            }
          }

          #mobile-menu-toggle:checked + .mobile-menu-button .hamburger-line:nth-of-type(1) {
            transform: translateY(0) rotate(45deg);
            width: 1.35rem;
          }

          #mobile-menu-toggle:checked + .mobile-menu-button .hamburger-line:nth-of-type(2) {
            transform: scaleX(0);
            opacity: 0;
          }

          #mobile-menu-toggle:checked + .mobile-menu-button .hamburger-line:nth-of-type(3) {
            transform: translateY(0) rotate(-45deg);
            width: 1.35rem;
          }

          #mobile-menu-toggle:checked + .mobile-menu-button {
            border-color: rgba(34, 211, 238, 0.45);
            box-shadow: 0 0 25px rgba(34, 211, 238, 0.14);
            background: rgba(168, 85, 247, 0.12);
          }

          #mobile-menu-toggle:checked ~ .mobile-menu-panel {
            animation: mobileMenuReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          @keyframes mobileMenuReveal {
            0% {
              transform: translateY(-8px) scale(0.98);
              opacity: 0;
            }
            100% {
              transform: translateY(8px) scale(1);
              opacity: 1;
            }
          }

          .logo-frame::before {
            content: "";
            position: absolute;
            inset: -1px;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(135deg, rgba(192,132,252,0.6), transparent, rgba(34,211,238,0.5));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .logo-frame:hover::before {
            opacity: 1;
          }

          .nav-link::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(120deg, transparent, rgba(168,85,247,0.08), transparent);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
          }

          .nav-link:hover::before {
            transform: translateX(100%);
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
