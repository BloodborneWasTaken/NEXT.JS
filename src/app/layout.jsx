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
        url: "https://example.com/image.jpg",
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
    images: ["https://your-domain.com/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function Layout({children}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-black text-white">
          {/* Global Background */}
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.10),transparent_30%)]" />

          {/* Animated Grid */}
          <div
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.045] animate-[gridMove_20s_linear_infinite]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Ambient Orbs */}
          <div className="pointer-events-none fixed -top-40 -left-40 z-0 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[150px] animate-[orbFloat_10s_ease-in-out_infinite]" />

          <div className="pointer-events-none fixed -bottom-40 -right-40 z-0 h-[450px] w-[450px] rounded-full bg-pink-600/10 blur-[150px] animate-[orbFloat_12s_ease-in-out_infinite_reverse]" />

          {/* Floating Particles */}
          <div className="pointer-events-none fixed top-[22%] left-[8%] z-0 h-1 w-1 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7] animate-[particleFloat_6s_ease-in-out_infinite]" />

          <div className="pointer-events-none fixed top-[38%] right-[10%] z-0 h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_14px_#ec4899] animate-[particleFloat_8s_ease-in-out_infinite_1s]" />

          <div className="pointer-events-none fixed bottom-[25%] left-[18%] z-0 h-1 w-1 rounded-full bg-fuchsia-400 shadow-[0_0_12px_#d946ef] animate-[particleFloat_7s_ease-in-out_infinite_2s]" />

          {/* Navbar */}
          <header className="fixed top-0 left-0 right-0 z-50">
            {/* Navbar Glow */}
            <div className="absolute inset-0 bg-black/65 backdrop-blur-2xl border-b border-white/5" />

            {/* Animated Top Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent animate-[navLine_4s_ease-in-out_infinite]" />

            {/* Navbar Shadow */}
            <div className="absolute -bottom-8 left-1/2 h-8 w-2/3 -translate-x-1/2 bg-purple-500/10 blur-2xl" />

            <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
              {/* Logo */}
              <Link href="/" className="group relative flex items-center gap-3">
                {/* Logo Icon */}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-600/20 via-fuchsia-500/10 to-pink-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-400/60 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <div className="absolute inset-1 rounded-lg border border-purple-400/10" />

                  <span className="relative text-sm font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-pink-300">
                    MM
                  </span>

                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.9)] animate-pulse" />
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <div className="text-sm font-black tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-[length:200%_auto] animate-[logoGradient_4s_linear_infinite]">
                    MOHAMMAD MAHDI
                  </div>

                  <div className="mt-0.5 text-[8px] uppercase tracking-[0.38em] text-gray-600">
                    Welcome To The Future
                  </div>
                </div>
              </Link>

              {/* Navigation */}
              <div className="hidden md:flex items-center gap-1 rounded-2xl border border-white/5 bg-white/[0.02] p-1.5 backdrop-blur-xl">
                <Link
                  href="/"
                  className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-purple-500/10 hover:text-white"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all duration-300 group-hover:w-1/2" />
                </Link>

                <Link
                  href="/about"
                  className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-purple-500/10 hover:text-white"
                >
                  <span className="relative z-10">About</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all duration-300 group-hover:w-1/2" />
                </Link>

                <Link
                  href="/products"
                  className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  <span className="relative z-10">Products</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all duration-300 group-hover:w-1/2" />
                </Link>

                <Link
                  href="/contact"
                  className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-purple-500/10 hover:text-white"
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all duration-300 group-hover:w-1/2" />
                </Link>
              </div>

              {/* Auth */}
              <div className="flex items-center gap-3">
                <Link
                  href="/singIn"
                  className="group hidden sm:block rounded-xl border border-purple-500/20 bg-white/[0.02] px-4 py-2 text-sm text-purple-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                >
                  Sign In
                </Link>

                <Link
                  href="/singUp"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_100%] px-4 py-2 text-sm font-medium shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all duration-500 animate-[buttonGradient_4s_ease_infinite] hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_0_35px_rgba(217,70,239,0.45)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">Sign Up</span>
                </Link>
              </div>
            </nav>
          </header>

          {/* Page Content */}
          <main className="relative z-10 pt-20">{children}</main>

          {/* Global Vignette */}
          <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]" />
        </div>

        <style>{`
          @keyframes gridMove {
            from {
              background-position: 0 0;
            }

            to {
              background-position: 70px 70px;
            }
          }

          @keyframes orbFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(25px, -25px, 0) scale(1.08);
            }
          }

          @keyframes particleFloat {
            0%,
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.35;
            }

            50% {
              transform: translateY(-30px) scale(1.8);
              opacity: 1;
            }
          }

          @keyframes navLine {
            0%,
            100% {
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
      </body>
    </html>
  );
}
