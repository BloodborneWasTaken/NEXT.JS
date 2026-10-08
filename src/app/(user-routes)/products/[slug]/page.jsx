import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: `product ${slug}`,
    description: `Product details for ${slug}`,
  };
}

const products = [
  {
    id: 1,
    slug: "wireless-headphones",
    title: "Wireless Headphones",
    badge: "NEW",
    category: "Audio",
    rating: 4.8,
    reviews: 124,
    description:
      "Premium wireless headphones with immersive sound, active noise cancellation, and all-day comfort.",
    currency: "$",
    price: 129,
    oldPrice: 159,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    slug: "mechanical-keyboard",
    title: "Mechanical Keyboard",
    badge: "HOT",
    category: "Gaming",
    rating: 4.9,
    reviews: 89,
    description:
      "RGB mechanical keyboard with responsive switches, customizable lighting, and a durable premium design.",
    currency: "$",
    price: 99,
    oldPrice: 129,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    slug: "smart-watch",
    title: "Smart Watch",
    badge: "SALE",
    category: "Wearables",
    rating: 4.7,
    reviews: 156,
    description:
      "Modern smart watch with fitness tracking, notifications, health features, and a stunning AMOLED display.",
    currency: "$",
    price: 149,
    oldPrice: 199,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    slug: "gaming-mouse",
    title: "Gaming Mouse",
    badge: "PRO",
    category: "Gaming",
    rating: 4.8,
    reviews: 97,
    description:
      "Ultra-fast gaming mouse with precision tracking, customizable buttons, and RGB lighting.",
    currency: "$",
    price: 59,
    oldPrice: 79,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    slug: "portable-speaker",
    title: "Portable Speaker",
    badge: "BEST",
    category: "Audio",
    rating: 4.6,
    reviews: 74,
    description:
      "Compact portable speaker delivering powerful sound, deep bass, and long-lasting battery life.",
    currency: "$",
    price: 79,
    oldPrice: 99,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    slug: "4k-monitor",
    title: "4K Monitor",
    badge: "ULTRA",
    category: "Display",
    rating: 4.9,
    reviews: 61,
    description:
      "Crystal-clear 4K monitor with vibrant colors, high refresh rate, and an immersive edge-to-edge display.",
    currency: "$",
    price: 349,
    oldPrice: 399,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    slug: "usb-c-hub",
    title: "USB-C Hub",
    badge: "SMART",
    category: "Accessories",
    rating: 4.5,
    reviews: 48,
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, SD card support, and fast charging capabilities.",
    currency: "$",
    price: 49,
    oldPrice: 69,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    slug: "gaming-controller",
    title: "Gaming Controller",
    badge: "PRO",
    category: "Gaming",
    rating: 4.8,
    reviews: 113,
    description:
      "Ergonomic gaming controller with precision analog sticks, responsive triggers, and wireless connectivity.",
    currency: "$",
    price: 69,
    oldPrice: 89,
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=1200&q=80",
  },
];

export default async function page({ params }) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 2000);
  });

  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#020204] text-white overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-[-100px] opacity-20 bg-[linear-gradient(rgba(168,85,247,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.25)_1px,transparent_1px)] bg-[size:55px_55px] animate-[gridMove_8s_linear_infinite]" />

          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[160px] animate-[orbFloat_7s_ease-in-out_infinite]" />

          <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-pink-600/15 blur-[160px] animate-[orbFloatReverse_9s_ease-in-out_infinite]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.9)_100%)]" />
        </div>

        <div className="relative z-10 text-center animate-[glitchIn_0.8s_ease-out]">
          <div className="text-xs tracking-[0.5em] text-red-400 mb-5 animate-[flicker_2s_infinite]">
            SYSTEM ERROR // 404
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent bg-[length:300%_300%] animate-[gradientMove_3s_ease_infinite]">
            PRODUCT LOST
          </h1>

          <Link
            href="/products"
            className="group relative inline-flex overflow-hidden px-8 py-4 rounded-xl border border-purple-400/40 bg-purple-500/10 text-purple-200 hover:text-white transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.45)]"
          >
            <span className="relative z-10">← BACK TO PRODUCTS</span>
            <span className="absolute inset-0 translate-x-[-110%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[110%] transition-transform duration-700" />
          </Link>
        </div>

        <style>{`
          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(55px, 55px);
            }
          }

          @keyframes orbFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
              transform: translate3d(120px, -70px, 0) scale(1.2);
            }
          }

          @keyframes orbFloatReverse {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
              transform: translate3d(-100px, 80px, 0) scale(1.15);
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

          @keyframes glitchIn {
            0% {
              opacity: 0;
              transform: scale(0.85) skewX(10deg);
              filter: blur(20px);
            }
            60% {
              opacity: 1;
              transform: scale(1.03) skewX(-3deg);
              filter: blur(0);
            }
            100% {
              transform: scale(1) skewX(0);
            }
          }

          @keyframes flicker {
            0%,
            18%,
            22%,
            63%,
            70%,
            100% {
              opacity: 1;
            }
            20%,
            21%,
            69% {
              opacity: 0.25;
            }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020204] text-white overflow-hidden relative">
      {/* ================= EPIC ANIMATED BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_38%),radial-gradient(circle_at_100%_50%,rgba(236,72,153,0.10),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(6,182,212,0.08),transparent_35%)]" />

        {/* Perspective Grid */}
        <div
          className="absolute left-[-30%] bottom-[-35%] w-[160%] h-[100%] opacity-[0.18] animate-[gridMove_12s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
            transform: "perspective(500px) rotateX(62deg) translateZ(0)",
            transformOrigin: "center top",
          }}
        />

        {/* Top Grid */}
        <div
          className="absolute left-[-30%] top-[-65%] w-[160%] h-[100%] opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transform: "perspective(700px) rotateX(-58deg) translateZ(0)",
            transformOrigin: "center bottom",
          }}
        />

        {/* Giant Purple Orb */}
        <div className="absolute -top-[300px] -left-[220px] w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-[180px] animate-[megaOrbOne_12s_ease-in-out_infinite]" />

        {/* Giant Pink Orb */}
        <div className="absolute top-[25%] -right-[300px] w-[700px] h-[700px] rounded-full bg-pink-600/15 blur-[190px] animate-[megaOrbTwo_15s_ease-in-out_infinite]" />

        {/* Cyan Orb */}
        <div className="absolute -bottom-[300px] left-[25%] w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[190px] animate-[megaOrbThree_13s_ease-in-out_infinite]" />

        {/* Moving Laser */}
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[2px] rotate-[25deg] bg-gradient-to-r from-transparent via-purple-300/70 to-transparent blur-sm animate-[laser_7s_linear_infinite]" />

        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[1px] rotate-[25deg] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent animate-[laser_10s_linear_infinite_reverse]" />

        {/* Vertical Laser */}
        <div className="absolute left-[20%] top-[-50%] w-px h-[200%] bg-gradient-to-b from-transparent via-pink-400/20 to-transparent rotate-[15deg] animate-[verticalLaser_9s_linear_infinite]" />

        {/* Scanline */}
        <div className="absolute inset-0 opacity-[0.035] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,rgba(255,255,255,0.8)_4px)] animate-[scanline_8s_linear_infinite]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.045] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.7%22/%3E%3C/svg%3E')] animate-[noise_0.25s_steps(2)_infinite]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.45)_65%,#000_100%)]" />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 35 }).map((_, index) => (
            <span
              key={index}
              className="absolute w-1 h-1 rounded-full bg-purple-300/50 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-[particleFloat_8s_linear_infinite]"
              style={{
                left: `${(index * 29) % 100}%`,
                top: `${(index * 47) % 100}%`,
                animationDelay: `${(index % 8) * -1.2}s`,
                animationDuration: `${6 + (index % 5)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Back */}
        <Link
          href="/products"
          className="group inline-flex items-center gap-3 mb-10 text-sm text-purple-300 hover:text-white transition-all duration-300 animate-[fadeDown_0.8s_ease-out]"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-400/20 bg-purple-500/5 group-hover:border-purple-400/60 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Products
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-[heroLeft_1.2s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0">
            {/* Outer Glow */}
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-400/20 blur-[70px] animate-[imageAura_5s_ease-in-out_infinite]" />

            {/* Rotating Ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-purple-400/20 animate-[spinSlow_18s_linear_infinite]" />

            <div className="absolute -inset-7 rounded-[3rem] border border-cyan-400/10 animate-[spinSlowReverse_25s_linear_infinite]" />

            {/* Image Box */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_100px_rgba(168,85,247,0.18)] group">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-500/50 via-pink-500/30 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[520px] object-cover transition-all duration-[1600ms] ease-out group-hover:scale-[1.12] group-hover:rotate-[1deg]"
                />

                {/* Image Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-400/20 mix-blend-screen" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Scan Beam */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.9)] animate-[imageScan_4s_linear_infinite]" />

                {/* Badge */}
                <div className="absolute top-6 left-6 px-5 py-2 rounded-full border border-purple-300/30 bg-black/50 backdrop-blur-xl text-purple-200 text-xs tracking-[0.3em] shadow-[0_0_25px_rgba(168,85,247,0.25)] animate-[badgePulse_3s_ease-in-out_infinite]">
                  {product.badge}
                </div>

                {/* Corner HUD */}
                <div className="absolute top-5 right-5 w-16 h-16 opacity-60">
                  <div className="absolute top-0 right-0 w-5 h-px bg-cyan-300" />
                  <div className="absolute top-0 right-0 h-5 w-px bg-cyan-300" />
                  <div className="absolute bottom-0 left-0 w-5 h-px bg-purple-300" />
                  <div className="absolute bottom-0 left-0 h-5 w-px bg-purple-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-[heroRight_1.2s_cubic-bezier(.16,1,.3,1)_0.15s_forwards] opacity-0">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs uppercase tracking-[0.35em] text-cyan-400 animate-[textGlow_3s_ease-in-out_infinite]">
                {product.category}
              </span>

              <span className="h-px w-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent animate-[lineExpand_2s_ease-out]" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-7 bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent bg-[length:300%_300%] animate-[gradientMove_5s_ease_infinite]">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-7">
              <div className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-yellow-400/20 bg-yellow-400/5 hover:bg-yellow-400/10 transition-all">
                <span className="text-yellow-400 text-xl animate-[starPulse_2s_ease-in-out_infinite]">
                  ★
                </span>
                <span className="font-bold">{product.rating}</span>
              </div>

              <span className="text-white/20">/</span>

              <span className="text-white/50">{product.reviews} reviews</span>
            </div>

            <p className="text-white/60 text-lg leading-8 max-w-xl mb-8">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-end gap-4 mb-8">
              <span className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradientMove_4s_ease_infinite]">
                {product.currency}
                {product.price}
              </span>

              <span className="text-xl text-white/25 line-through mb-2">
                {product.currency}
                {product.oldPrice}
              </span>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
              </span>

              <span className="text-green-400 text-sm">{product.stock}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative overflow-hidden px-9 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 font-bold shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:shadow-[0_0_65px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-all duration-500">
                <span className="relative z-10">Add to Cart</span>

                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-130%] skew-x-[-25deg] group-hover:translate-x-[130%] transition-transform duration-700" />

                <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/50 transition-all" />
              </button>

              <button className="group relative px-9 py-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white/80 hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500 hover:-translate-y-1">
                <span className="mr-2 group-hover:text-pink-400 transition-colors">
                  ♡
                </span>
                Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mt-32">
          <div className="flex items-center gap-5 mb-10">
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Key Features
            </h2>

            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 via-pink-500/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["01", "Premium Quality", "Built with high-quality materials."],
              ["02", "Modern Design", "Clean and futuristic aesthetics."],
              ["03", "Fast Performance", "Designed for smooth performance."],
              ["04", "Reliable", "Made for everyday long-term use."],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className="group relative p-7 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl overflow-hidden hover:-translate-y-3 hover:border-purple-400/50 hover:bg-purple-500/[0.06] hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)] transition-all duration-500 animate-[featureIn_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0"
                style={{
                  animationDelay: `${index * 130 + 300}ms`,
                }}
              >
                {/* Card Glow */}
                <div className="absolute -top-24 -right-24 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-pink-500/25 group-hover:scale-150 transition-all duration-700" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(90deg,transparent,rgba(168,85,247,.5),transparent)] bg-[length:200%_100%] animate-[borderFlow_2s_linear_infinite]" />

                <div className="relative z-10">
                  <span className="text-xs text-cyan-400/70 tracking-[0.3em]">
                    {number}
                  </span>

                  <h3 className="mt-5 mb-3 text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-white/40 group-hover:text-white/65 transition-colors">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="relative mt-32 py-20 text-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl">
          {/* CTA Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.22),transparent_55%)] animate-[ctaPulse_5s_ease-in-out_infinite]" />

          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-500/10 to-cyan-400/5 bg-[length:300%_300%] animate-[gradientMove_8s_ease_infinite]" />

          {/* Horizontal Lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-[lineGlow_2.5s_ease-in-out_infinite]" />

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[lineGlow_3s_ease-in-out_infinite_reverse]" />

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.5em] text-purple-400 mb-5 animate-[textGlow_3s_ease-in-out_infinite]">
              Explore Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-9 bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent bg-[length:300%_300%] animate-[gradientMove_5s_ease_infinite]">
              Discover More Products
            </h2>

            <Link
              href="/products"
              className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-200 hover:text-white hover:bg-purple-500/20 hover:border-purple-300/70 hover:shadow-[0_0_55px_rgba(168,85,247,0.35)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Explore Products</span>

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-120%] skew-x-[-20deg] group-hover:translate-x-[120%] transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 65px 65px;
          }
        }

        @keyframes megaOrbOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          25% {
            transform: translate3d(120px, 80px, 0) scale(1.12);
          }
          50% {
            transform: translate3d(40px, 180px, 0) scale(0.9);
          }
          75% {
            transform: translate3d(-80px, 100px, 0) scale(1.08);
          }
        }

        @keyframes megaOrbTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          30% {
            transform: translate3d(-140px, 80px, 0) scale(1.15);
          }
          65% {
            transform: translate3d(-60px, -130px, 0) scale(0.9);
          }
        }

        @keyframes megaOrbThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(120px, -100px, 0) scale(1.2);
          }
        }

        @keyframes laser {
          0% {
            transform: translate(-80%, -20%) rotate(25deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translate(80%, 100%) rotate(25deg);
            opacity: 0;
          }
        }

        @keyframes verticalLaser {
          0% {
            transform: translateY(-40%) rotate(15deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(40%) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-10%);
          }
          100% {
            transform: translateY(10%);
          }
        }

        @keyframes noise {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(2%, -2%);
          }
          50% {
            transform: translate(-2%, 2%);
          }
          75% {
            transform: translate(2%, 2%);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translate3d(0, 30px, 0) scale(0);
            opacity: 0;
          }
          15% {
            opacity: 1;
            transform: translate3d(10px, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-30px, -80px, 0) scale(1.3);
            opacity: 0.8;
          }
          100% {
            transform: translate3d(40px, -180px, 0) scale(0);
            opacity: 0;
          }
        }

        @keyframes heroLeft {
          from {
            opacity: 0;
            transform: translateX(-80px) rotateY(12deg) scale(0.92);
            filter: blur(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes heroRight {
          from {
            opacity: 0;
            transform: translateX(80px);
            filter: blur(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes imageAura {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
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

        @keyframes imageScan {
          0% {
            top: -5%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            top: 105%;
            opacity: 0;
          }
        }

        @keyframes badgePulse {
          0%,
          100% {
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.15);
          }
          50% {
            box-shadow: 0 0 35px rgba(168, 85, 247, 0.45);
          }
        }

        @keyframes textGlow {
          0%,
          100% {
            text-shadow: 0 0 0 rgba(34, 211, 238, 0);
          }
          50% {
            text-shadow: 0 0 18px rgba(34, 211, 238, 0.65);
          }
        }

        @keyframes lineExpand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 4rem;
            opacity: 1;
          }
        }

        @keyframes starPulse {
          0%,
          100% {
            transform: scale(1);
            text-shadow: 0 0 5px rgba(250, 204, 21, 0.2);
          }
          50% {
            transform: scale(1.2);
            text-shadow: 0 0 25px rgba(250, 204, 21, 0.8);
          }
        }

        @keyframes featureIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.92);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes ctaPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes lineGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scaleX(0.5);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
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

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}
