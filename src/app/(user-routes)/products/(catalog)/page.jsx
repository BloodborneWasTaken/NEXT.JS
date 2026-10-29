import Loading from "@/app/loading";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Products({ searchParams }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hi");
    }, 2000);
  });

  const params = (await searchParams) ?? {};

  const category = params.category || "All Products";

  const minPriceValue = Number(params.minPrice ?? 0);
  const maxPriceValue = Number(params.maxPrice ?? 400);

  const minPrice = Number.isFinite(minPriceValue)
    ? Math.max(0, minPriceValue)
    : 0;

  const maxPrice = Number.isFinite(maxPriceValue)
    ? Math.max(0, maxPriceValue)
    : 400;

  const statuses = params.status
    ? Array.isArray(params.status)
      ? params.status
      : [params.status]
    : [];

  const availability = params.availability
    ? Array.isArray(params.availability)
      ? params.availability
      : [params.availability]
    : [];

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

  /* FILTER PRODUCTS */
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All Products" || product.category === category;

    const matchesPrice =
      minPrice <= maxPrice &&
      product.price >= minPrice &&
      product.price <= maxPrice;

    const matchesStatus =
      statuses.length === 0 ||
      (product.badge !== null && statuses.includes(product.badge));

    const matchesAvailability =
      availability.length === 0 ||
      availability.some((item) => {
        if (item === "In Stock") {
          return product.stock > 10;
        }

        if (item === "Low Stock") {
          return product.stock > 0 && product.stock <= 10;
        }

        if (item === "Out of Stock") {
          return product.stock === 0;
        }

        return false;
      });

    return (
      matchesCategory && matchesPrice && matchesStatus && matchesAvailability
    );
  });

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-[12%] -top-[12%] h-[520px] w-[520px] animate-[orbFloat_10s_ease-in-out_infinite] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute -right-[12%] top-[20%] h-[500px] w-[500px] animate-[orbFloatReverse_12s_ease-in-out_infinite] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[30%] h-[520px] w-[520px] animate-[orbFloat_14s_ease-in-out_infinite] rounded-full bg-pink-600/10 blur-[150px]" />

        <div className="absolute inset-0 animate-[gridMove_18s_linear_infinite] bg-[linear-gradient(rgba(168,85,247,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.5)_1px,transparent_1px)] opacity-[0.055] [background-size:70px_70px]" />

        <div className="absolute left-0 top-0 h-px w-full animate-[laser_5s_linear_infinite] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="absolute bottom-0 left-0 h-px w-full animate-[laserReverse_7s_linear_infinite] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      {/* HEADER */}
      <div className="mb-16 animate-[fadeInDown_0.9s_cubic-bezier(.16,1,.3,1)] text-center">
        <span className="inline-block animate-[pulse_3s_ease-in-out_infinite] text-xs uppercase tracking-[0.5em] text-purple-400/80">
          Our Collection
        </span>

        <h1 className="relative mt-4 animate-[gradientMove_4s_ease_infinite,titleFloat_5s_ease-in-out_infinite] bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300 bg-[length:250%_250%] bg-clip-text text-5xl font-black text-transparent drop-shadow-[0_0_30px_rgba(217,70,239,0.5)] md:text-7xl">
          PRODUCTS
          <span className="pointer-events-none absolute inset-0 animate-[titleShine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] bg-clip-text text-transparent">
            PRODUCTS
          </span>
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-40 animate-[lineGlow_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-pink-500 to-cyan-400 shadow-[0_0_15px_2px_rgba(236,72,153,0.5)]" />

        <p className="mx-auto mt-7 max-w-xl animate-[fadeIn_1.2s_ease-out] text-sm leading-7 text-gray-500">
          Explore our collection and discover PRODUCTS designed for a modern
          digital lifestyle.
        </p>
      </div>

      {/* FILTER SUMMARY */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 backdrop-blur-xl">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-purple-300/60">
            Collection Results
          </p>

          <p className="mt-1 text-sm text-gray-300">
            <span className="font-bold text-cyan-300">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {category !== "All Products" && (
            <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-[10px] text-purple-200">
              {category}
            </span>
          )}

          {(minPrice > 0 || maxPrice < 400) && (
            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/[0.06] px-3 py-1.5 text-[10px] text-cyan-200">
              ${minPrice} – ${maxPrice}
            </span>
          )}

          {(statuses.length > 0 || availability.length > 0) && (
            <span className="rounded-full border border-pink-400/20 bg-pink-500/[0.06] px-3 py-1.5 text-[10px] text-pink-200">
              {statuses.length + availability.length} active filters
            </span>
          )}

          {(category !== "All Products" ||
            minPrice > 0 ||
            maxPrice < 400 ||
            statuses.length > 0 ||
            availability.length > 0) && (
            <Link
              href="/products"
              className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-gray-400 transition-all duration-300 hover:border-pink-400/30 hover:text-pink-300"
            >
              Clear filters ×
            </Link>
          )}
        </div>
      </div>

      {/* PRODUCTS */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          <Suspense fallback={<Loading />}>
            {filteredProducts.map((product, index) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.id}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
                className="
                  group
                  relative
                  min-h-[650px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/[0.08]
                  bg-[#07070d]/95
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  backdrop-blur-2xl
                  transition-all
                  duration-700
                  ease-[cubic-bezier(.16,1,.3,1)]
                  hover:-translate-y-3
                  hover:scale-[1.01]
                  hover:border-purple-400/30
                  hover:shadow-[0_30px_90px_rgba(168,85,247,0.22),0_0_50px_rgba(34,211,238,0.08)]
                  animate-[cardReveal_0.9s_cubic-bezier(.16,1,.3,1)_both]
                "
              >
                {/* NEON BORDER */}
                <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-[30px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-[2px] animate-[borderSpin_4s_linear_infinite] rounded-[32px] bg-[conic-gradient(from_0deg,#a855f7,#ec4899,#22d3ee,#a855f7)]" />

                  <div className="absolute inset-[2px] rounded-[28px] bg-[#07070d]" />
                </div>

                {/* AMBIENT GLOW */}
                <div className="pointer-events-none absolute inset-0 z-[2] rounded-[30px] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_15%_10%,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_90%_85%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_55%_45%,rgba(236,72,153,0.07),transparent_35%)]" />
                </div>

                {/* CORNER LIGHTS */}
                <div className="pointer-events-none absolute left-0 top-0 z-[3] h-24 w-24 rounded-tl-[30px] border-l border-t border-transparent transition-all duration-500 group-hover:border-purple-400/70 group-hover:shadow-[-8px_-8px_35px_rgba(168,85,247,0.25)]" />

                <div className="pointer-events-none absolute bottom-0 right-0 z-[3] h-24 w-24 rounded-br-[30px] border-b border-r border-transparent transition-all duration-500 group-hover:border-cyan-400/70 group-hover:shadow-[8px_8px_35px_rgba(34,211,238,0.25)]" />

                {/* FLOATING GLOWS */}
                <div className="pointer-events-none absolute -right-20 -top-20 z-[2] h-52 w-52 rounded-full bg-purple-500/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -bottom-24 -left-20 z-[2] h-48 w-48 rounded-full bg-cyan-500/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                {/* CARD CONTENT */}
                <div className="relative z-[10]">
                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden rounded-t-[30px] bg-[#030308]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover opacity-70 saturate-[0.7] transition-all duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-[1deg] group-hover:scale-[1.08] group-hover:opacity-100 group-hover:saturate-100"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070d] via-[#07070d]/10 to-transparent" />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-50 mix-blend-screen transition-opacity duration-700 group-hover:opacity-100" />

                    {/* IMAGE SHINE */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[1200ms] group-hover:translate-x-[130%]" />

                    {/* SCAN LINE */}
                    <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 group-hover:animate-[scan_1.8s_linear_infinite] group-hover:opacity-100" />

                    {/* IMAGE GRID */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] opacity-0 [background-size:30px_30px] transition-opacity duration-500 group-hover:opacity-20" />

                    {/* BADGE */}
                    {product.badge && (
                      <span className="absolute left-5 top-5 z-20 rounded-full border border-purple-400/30 bg-black/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-pink-400/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                        {product.badge}
                      </span>
                    )}

                    {/* WISHLIST */}
                    <span className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-gray-400 backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-pink-400/50 group-hover:bg-pink-500/10 group-hover:text-pink-300 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.45)]">
                      <span className="text-lg group-hover:animate-[heartBeat_1s_ease-in-out_infinite]">
                        ♡
                      </span>
                    </span>

                    {/* CATEGORY */}
                    <div className="absolute bottom-5 left-5 z-20">
                      <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-purple-200/80 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/40 group-hover:text-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* INFORMATION */}
                  <div className="relative flex min-h-[386px] flex-col p-7">
                    <h2 className="text-xl font-bold tracking-tight text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent">
                      {product.title}
                    </h2>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-500 transition-colors duration-500 group-hover:text-gray-400">
                      {product.description}
                    </p>

                    {/* RATING */}
                    <div className="mt-5 flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] group-hover:animate-[starPulse_1.5s_ease-in-out_infinite]">
                          ★
                        </span>

                        <span className="text-sm font-semibold text-gray-300">
                          {product.rating}
                        </span>
                      </div>

                      <span className="text-gray-700">•</span>

                      <span className="text-xs text-gray-600 transition-colors group-hover:text-gray-400">
                        {product.reviews} reviews
                      </span>
                    </div>

                    {/* DIVIDER */}
                    <div className="relative my-6 h-px overflow-hidden bg-white/[0.06]">
                      <div className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-700 group-hover:w-full" />
                    </div>

                    {/* PRICE */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-wider text-gray-600">
                          Price
                        </p>

                        <div className="flex items-center gap-2">
                          <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300 bg-[length:200%_200%] bg-clip-text text-2xl font-black text-transparent drop-shadow-[0_0_12px_rgba(236,72,153,0.15)] group-hover:animate-[gradientMove_2s_ease_infinite] group-hover:drop-shadow-[0_0_18px_rgba(236,72,153,0.45)]">
                            {product.currency}
                            {product.price}
                          </span>

                          {product.oldPrice && (
                            <span className="text-xs text-gray-600 line-through">
                              {product.currency}
                              {product.oldPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* ADD */}
                      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(217,70,239,0.65)]">
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                        <span className="relative z-10 text-2xl font-light">
                          +
                        </span>
                      </span>
                    </div>

                    {/* STOCK */}
                    <div className="mt-auto flex items-center justify-between pt-8">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                        Stock
                      </span>

                      <span
                        className={`text-[10px] uppercase tracking-[0.2em] ${
                          product.stock <= 10
                            ? "animate-pulse text-pink-400"
                            : "text-green-400"
                        }`}
                      >
                        {product.stock <= 10
                          ? `Only ${product.stock} left`
                          : "In stock"}
                      </span>
                    </div>

                    {/* BOTTOM NEON */}
                    <div className="absolute bottom-0 left-8 right-8 h-[2px] overflow-hidden bg-white/[0.03]">
                      <div className="h-full w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_15px_rgba(236,72,153,0.9)] transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Suspense>
        </div>
      ) : (
        /* EMPTY STATE */
        <div className="relative overflow-hidden rounded-[30px] border border-purple-500/20 bg-white/[0.025] px-6 py-20 text-center shadow-[0_0_60px_rgba(168,85,247,0.08)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/15 blur-[80px]" />

          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-purple-400/20 bg-purple-500/[0.06] text-3xl text-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.12)]">
            ⌕
          </div>

          <h2 className="relative mt-7 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 sm:text-3xl">
            No Products Found
          </h2>

          <p className="relative mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500">
            No products match your current filters. Try changing the category,
            price range, status, or availability.
          </p>

          <Link
            href="/products"
            className="group/empty relative mt-8 inline-flex overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/empty:translate-x-full" />

            <span className="relative">Clear All Filters →</span>
          </Link>
        </div>
      )}

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
            transform: translateY(70px) scale(0.92);
            filter: blur(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes borderSpin {
          from {
            transform: rotate(0deg) scale(1.2);
          }

          to {
            transform: rotate(360deg) scale(1.2);
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
            transform: translateY(270px);
            opacity: 0;
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
