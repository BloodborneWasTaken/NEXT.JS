import Link from "next/link";
import React from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      slug: "wireless-headphones",
      title: "Wireless Headphones",
      description:
        "Discover the latest wireless headphones with powerful sound, deep bass, active noise cancellation, and long-lasting battery life.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      price: 129.99,
      oldPrice: 159.99,
      currency: "$",
      category: "Audio",
      rating: 4.8,
      reviews: 124,
      stock: 18,
      badge: "Popular",
    },

    {
      id: 2,
      slug: "mechanical-keyboard",
      title: "Mechanical Keyboard",
      description:
        "A premium mechanical keyboard designed for gamers and creators, featuring RGB lighting, responsive switches, and a durable aluminum frame.",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
      price: 89.99,
      oldPrice: 109.99,
      currency: "$",
      category: "Accessories",
      rating: 4.7,
      reviews: 89,
      stock: 32,
      badge: "New",
    },

    {
      id: 3,
      slug: "smart-watch",
      title: "Smart Watch",
      description:
        "A modern smartwatch with a beautiful AMOLED display, health tracking features, smart notifications, and water resistance.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      price: 199.99,
      oldPrice: 229.99,
      currency: "$",
      category: "Wearables",
      rating: 4.6,
      reviews: 215,
      stock: 14,
      badge: "Sale",
    },

    {
      id: 4,
      slug: "gaming-mouse",
      title: "Gaming Mouse",
      description:
        "Take your gaming experience to the next level with an ultra-light gaming mouse, high-precision sensor, and customizable RGB lighting.",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
      price: 59.99,
      oldPrice: 74.99,
      currency: "$",
      category: "Gaming",
      rating: 4.9,
      reviews: 176,
      stock: 45,
      badge: "Best Seller",
    },

    {
      id: 5,
      slug: "portable-speaker",
      title: "Portable Speaker",
      description:
        "Enjoy powerful sound wherever you go with a compact Bluetooth speaker featuring deep bass, clear audio, and all-day battery life.",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
      price: 74.99,
      oldPrice: 94.99,
      currency: "$",
      category: "Audio",
      rating: 4.5,
      reviews: 68,
      stock: 27,
      badge: "Featured",
    },

    {
      id: 6,
      slug: "4k-monitor",
      title: "4K Monitor",
      description:
        "Experience stunning visuals with a sharp 4K display, high refresh rate, HDR support, and a design built for gaming and creative work.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
      price: 349.99,
      oldPrice: 399.99,
      currency: "$",
      category: "Monitors",
      rating: 4.8,
      reviews: 97,
      stock: 9,
      badge: "Premium",
    },

    {
      id: 7,
      slug: "usb-c-hub",
      title: "USB-C Hub",
      description:
        "Expand your workspace with a compact USB-C hub featuring HDMI, USB 3.0, SD card support, and fast charging capabilities.",
      image:
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
      price: 39.99,
      oldPrice: 49.99,
      currency: "$",
      category: "Accessories",
      rating: 4.4,
      reviews: 53,
      stock: 61,
      badge: null,
    },

    {
      id: 8,
      slug: "gaming-controller",
      title: "Gaming Controller",
      description:
        "A comfortable wireless gaming controller with responsive buttons, immersive vibration feedback, and an ergonomic design.",
      image:
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80",
      price: 69.99,
      oldPrice: 84.99,
      currency: "$",
      category: "Gaming",
      rating: 4.7,
      reviews: 142,
      stock: 24,
      badge: "Popular",
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
      {/* Background Energy */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px] animate-[orbFloat_10s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] right-[-15%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px] animate-[orbFloatReverse_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-[35%] w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-[140px] animate-[orbFloat_14s_ease-in-out_infinite]" />

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(168,85,247,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.4)_1px,transparent_1px)] [background-size:70px_70px] animate-[gridMove_18s_linear_infinite]" />

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-[laser_5s_linear_infinite]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-[laserReverse_7s_linear_infinite]" />
      </div>

      {/* Header Animation */}
      <div className="text-center mb-12 animate-[fadeInDown_0.9s_cubic-bezier(.16,1,.3,1)]">
        <span
          className="inline-block text-xs uppercase tracking-[0.5em]
          text-purple-400/80
          animate-[pulse_3s_ease-in-out_infinite]"
        >
          Our Collection
        </span>

        <h1
          className="relative mt-3 text-5xl md:text-7xl font-black
          text-transparent bg-clip-text
          bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300
          bg-[length:250%_250%]
          animate-[gradientMove_4s_ease_infinite,titleFloat_5s_ease-in-out_infinite]
          drop-shadow-[0_0_30px_rgba(217,70,239,0.5)]"
        >
          PRODUCTS
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-[titleShine_3s_linear_infinite] pointer-events-none">
            PRODUCTS
          </span>
        </h1>

        <div
          className="mt-5 h-[2px] w-40 mx-auto
          bg-gradient-to-r from-transparent via-pink-500 to-cyan-400
          shadow-[0_0_15px_2px_rgba(236,72,153,0.5)]
          animate-[lineGlow_2.5s_ease-in-out_infinite]"
        />

        <p className="max-w-xl mx-auto mt-6 text-gray-500 text-sm leading-7 animate-[fadeIn_1.2s_ease-out]">
          Explore our collection and discover PRODUCTS designed for a modern
          digital lifestyle.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            href={`products/${product.slug}`}
            key={product.id}
            style={{
              animationDelay: `${index * 120}ms`,
            }}
            className="group relative overflow-hidden rounded-3xl
            border border-white/10
            bg-white/[0.035] backdrop-blur-xl
            shadow-[0_0_30px_rgba(168,85,247,0.06)]
            hover:border-purple-400/50
            hover:-translate-y-4
            hover:scale-[1.025]
            hover:rotate-[0.3deg]
            hover:shadow-[0_0_55px_rgba(168,85,247,0.25)]
            transition-all duration-500
            animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_both]"
          >
            {/* Animated Border */}
            <div
              className="absolute inset-0 rounded-3xl
              bg-gradient-to-r from-purple-500/0 via-pink-500/60 to-cyan-400/0
              bg-[length:200%_100%]
              opacity-0 group-hover:opacity-100
              blur-[1px]
              animate-[borderFlow_3s_linear_infinite]
              transition-opacity duration-500 pointer-events-none"
            />

            {/* Inner Border */}
            <div className="absolute inset-[1px] rounded-[23px] bg-[#09090f]/95 z-0 pointer-events-none" />

            {/* Glow */}
            <div
              className="absolute inset-0
              bg-gradient-to-br from-purple-500/[0.14]
              via-transparent to-cyan-500/[0.12]
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500 pointer-events-none z-[1]"
            />

            {/* Floating Glow */}
            <div
              className="absolute -top-20 -right-20 w-44 h-44
              rounded-full bg-purple-500/15 blur-3xl
              opacity-0 group-hover:opacity-100
              group-hover:animate-pulse
              transition-opacity duration-700 pointer-events-none z-[2]"
            />

            {/* Corner Light */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-transparent group-hover:border-purple-400/50 rounded-tl-3xl transition-all duration-500 z-10" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-transparent group-hover:border-cyan-400/50 rounded-br-3xl transition-all duration-500 z-10" />

            {/* Image */}
            <div className="relative z-[3] h-56 overflow-hidden bg-black/40">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover
                opacity-70
                saturate-[0.75]
                group-hover:opacity-100
                group-hover:saturate-100
                group-hover:scale-110
                group-hover:rotate-2
                transition-all duration-700"
              />

              {/* Image Overlay */}
              <div
                className="absolute inset-0
                bg-gradient-to-t from-black via-black/10 to-transparent"
              />

              {/* Color Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              {/* Scan Line */}
              <div
                className="absolute left-0 right-0 top-0 h-[2px]
                bg-gradient-to-r from-transparent via-cyan-300 to-transparent
                opacity-0 group-hover:opacity-100
                group-hover:animate-[scan_1.7s_linear_infinite]"
              />

              {/* Image Grid */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

              {/* Badge */}
              {product.badge && (
                <span
                  className="absolute top-4 left-4
                  px-3 py-1.5 rounded-full
                  text-[10px] font-bold uppercase tracking-wider
                  bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
                  bg-[length:200%_200%]
                  text-white
                  shadow-[0_0_15px_rgba(217,70,239,0.4)]
                  group-hover:scale-110
                  group-hover:shadow-[0_0_30px_rgba(217,70,239,0.75)]
                  animate-[badgeGradient_4s_ease_infinite]
                  transition-all duration-300"
                >
                  {product.badge}
                </span>
              )}

              {/* Wishlist */}
              <button
                type="button"
                className="absolute top-4 right-4
                w-10 h-10 rounded-full
                flex items-center justify-center
                bg-black/55 backdrop-blur-md
                border border-white/10
                text-gray-400
                hover:text-pink-300
                hover:border-pink-500/50
                hover:bg-pink-500/10
                hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]
                hover:scale-110
                hover:rotate-12
                active:scale-90
                transition-all duration-300"
              >
                <span className="text-lg group-hover:animate-[heartBeat_1s_ease-in-out_infinite]">
                  ♡
                </span>
              </button>

              {/* Category */}
              <div className="absolute bottom-4 left-4">
                <span
                  className="px-3 py-1 rounded-full
                  bg-black/50 backdrop-blur-md
                  border border-white/10
                  text-[10px] uppercase tracking-widest
                  text-purple-200/70
                  group-hover:text-cyan-300
                  group-hover:border-cyan-400/40
                  group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]
                  transition-all duration-300"
                >
                  {product.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-[3] p-5">
              {/* Title */}
              <h2
                className="text-lg font-bold text-white
                group-hover:text-transparent
                group-hover:bg-clip-text
                group-hover:bg-gradient-to-r
                group-hover:from-purple-300
                group-hover:via-pink-300
                group-hover:to-cyan-300
                transition-all duration-300"
              >
                {product.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-500 leading-6 line-clamp-2 group-hover:text-gray-400 transition-colors duration-300">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-0.5">
                  <span className="text-yellow-400 group-hover:animate-[starPulse_1.5s_ease-in-out_infinite]">
                    ★
                  </span>

                  <span className="text-sm font-semibold text-gray-300">
                    {product.rating}
                  </span>
                </div>

                <span className="text-gray-700">•</span>

                <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                  {product.reviews} reviews
                </span>
              </div>

              {/* Divider */}
              <div
                className="relative h-px
                bg-gradient-to-r
                from-white/10
                via-purple-500/10
                to-transparent
                my-5
                group-hover:via-pink-500/40
                transition-all duration-500"
              >
                <div className="absolute left-0 top-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all duration-700" />
              </div>

              {/* Price */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-600 mb-1 group-hover:text-gray-500 transition-colors">
                    Price
                  </p>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl font-black
                      text-transparent bg-clip-text
                      bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300
                      bg-[length:200%_200%]
                      group-hover:animate-[gradientMove_2s_ease_infinite]
                      group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]
                      transition-all duration-300"
                    >
                      {product.currency}
                      {product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-xs text-gray-600 line-through group-hover:text-gray-500 transition-colors">
                        {product.currency}
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add Button */}
                <button
                  type="button"
                  className="relative overflow-hidden w-11 h-11 rounded-xl
                  flex items-center justify-center
                  bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500
                  bg-[length:200%_200%]
                  text-white
                  shadow-[0_0_20px_rgba(217,70,239,0.2)]
                  hover:bg-[position:100%_50%]
                  hover:shadow-[0_0_40px_rgba(217,70,239,0.6)]
                  hover:scale-110
                  hover:rotate-90
                  active:scale-90
                  transition-all duration-300"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700" />
                  <span className="relative z-10 text-xl">+</span>
                </button>
              </div>

              {/* Stock */}
              <div className="flex items-center justify-between mt-5">
                <span className="text-[10px] uppercase tracking-widest text-gray-600">
                  Stock
                </span>

                <span
                  className={`text-[10px] uppercase tracking-widest ${
                    product.stock <= 10
                      ? "text-pink-400 animate-pulse"
                      : "text-green-400"
                  }`}
                >
                  {product.stock <= 10
                    ? `Only ${product.stock} left`
                    : "In stock"}
                </span>
              </div>

              {/* Hover Progress */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden bg-white/5">
                <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.7)] transition-all duration-700" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-45px) scale(0.96);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(70px) scale(0.9) rotateX(12deg);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes gradientMove {
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

        @keyframes titleFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
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
            transform: scaleX(0.75);
            box-shadow: 0 0 8px rgba(236, 72, 153, 0.2);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.15);
            box-shadow: 0 0 25px rgba(34, 211, 238, 0.6);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(230px);
            opacity: 0;
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes badgeGradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes heartBeat {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.25);
          }
          50% {
            transform: scale(0.9);
          }
          75% {
            transform: scale(1.15);
          }
        }

        @keyframes starPulse {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(250, 204, 21, 0));
          }
          50% {
            transform: scale(1.25) rotate(8deg);
            filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.8));
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

        @keyframes gridMove {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(70px, 70px, 0);
          }
        }

        @keyframes laser {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
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
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
