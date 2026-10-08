import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "Products | Mohammad Mahdi Jerban",
  },
};

export default function ProductsLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020006] text-white selection:bg-fuchsia-500/30">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Main Ambient Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.13),transparent_27%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.14),transparent_35%)]" />

        {/* Purple Glow */}
        <div className="absolute -left-48 top-10 h-[550px] w-[550px] rounded-full bg-purple-700/20 blur-[170px] [animation:orbOne_12s_ease-in-out_infinite]" />

        {/* Cyan Glow */}
        <div className="absolute -right-48 top-[28%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[170px] [animation:orbTwo_14s_ease-in-out_infinite]" />

        {/* Pink Glow */}
        <div className="absolute bottom-[-300px] left-[35%] h-[650px] w-[650px] rounded-full bg-fuchsia-600/10 blur-[180px] [animation:orbThree_16s_ease-in-out_infinite]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.14) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 82%)",
          }}
        />

        {/* Perspective Grid */}
        <div className="absolute bottom-[-15%] left-[-10%] h-[55%] w-[120%] [transform:perspective(600px)_rotateX(62deg)] opacity-[0.1]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(168,85,247,0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* Scan Line */}
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)] [animation:scan_9s_linear_infinite]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%22.5%22/%3E%3C/svg%3E')]" />
      </div>

      {/* ================= FLOATING PARTICLES ================= */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <span className="absolute left-[7%] top-[18%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_18px_5px_rgba(34,211,238,0.5)] [animation:particleOne_6s_ease-in-out_infinite]" />

        <span className="absolute left-[18%] top-[68%] h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_18px_5px_rgba(168,85,247,0.5)] [animation:particleTwo_8s_ease-in-out_infinite]" />

        <span className="absolute left-[52%] top-[25%] h-1 w-1 rounded-full bg-pink-400 shadow-[0_0_18px_5px_rgba(236,72,153,0.5)] [animation:particleThree_7s_ease-in-out_infinite]" />

        <span className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_5px_rgba(34,211,238,0.5)] [animation:particleOne_9s_ease-in-out_infinite]" />

        <span className="absolute right-[7%] top-[72%] h-1 w-1 rounded-full bg-fuchsia-400 shadow-[0_0_18px_5px_rgba(217,70,239,0.5)] [animation:particleTwo_7s_ease-in-out_infinite]" />
      </div>

      {/* ================= SIDEBAR ================= */}
      <aside className="fixed left-6 top-20 z-30 hidden h-[calc(100vh-48px)] w-[290px] lg:block">
        <div className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#05030b]/65 p-5 shadow-[0_0_80px_rgba(168,85,247,0.1)] backdrop-blur-2xl">
          {/* Sidebar Ambient Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

          {/* Top Cyber Lines */}
          <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />

          {/* ================= SIDEBAR HEADER ================= */}
          <div className="relative mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-purple-400/60">
                Product Interface
              </p>

              <h2 className="mt-1 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                Filters
              </h2>
            </div>

            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_#e879f9]" />
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            </div>
          </div>

          {/* ================= BACK BUTTON ================= */}
          <Link
            href="/products"
            className="group/back relative mb-6 flex items-center gap-3 overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.04] to-purple-500/[0.03] px-4 py-3.5 transition-all duration-500 hover:border-cyan-300/40 hover:bg-cyan-400/[0.08] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-lg text-cyan-300 transition-all duration-500 group-hover/back:-translate-x-1 group-hover/back:border-cyan-300/40 group-hover/back:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              ←
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-cyan-400/40">
                Navigate
              </p>

              <p className="mt-0.5 text-sm font-medium text-white/80">
                Back to Products
              </p>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_12px_#22d3ee] transition-all duration-500 group-hover/back:w-full" />
          </Link>

          {/* ================= FILTER CONTENT ================= */}
          <div className="relative flex-1 space-y-7 overflow-y-auto pr-1 [scrollbar-color:rgba(168,85,247,.25)_transparent] [scrollbar-width:thin]">
            {/* CATEGORY */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                    Category
                  </span>
                </div>

                <span className="font-mono text-[8px] text-purple-400/40">
                  01
                </span>
              </div>

              <div className="space-y-1.5">
                {["All Products", "Technology", "Design", "Development"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`group/item flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300 ${
                        index === 0
                          ? "border-purple-400/25 bg-purple-500/[0.07]"
                          : "border-white/[0.04] bg-white/[0.015] hover:border-purple-400/20 hover:bg-purple-500/[0.04]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          index === 0
                            ? "bg-purple-400 shadow-[0_0_10px_#a855f7]"
                            : "bg-white/15 group-hover/item:bg-purple-300"
                        }`}
                      />

                      <span
                        className={`text-xs transition-colors ${
                          index === 0
                            ? "text-purple-200"
                            : "text-white/45 group-hover/item:text-white/75"
                        }`}
                      >
                        {item}
                      </span>

                      {index === 0 && (
                        <span className="ml-auto font-mono text-[7px] tracking-widest text-purple-400/50">
                          ACTIVE
                        </span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* PRICE */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                    Price Range
                  </span>
                </div>

                <span className="font-mono text-[8px] text-cyan-400/40">
                  02
                </span>
              </div>

              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.018] p-4">
                <div className="mb-4 flex items-center justify-between font-mono text-[9px] text-white/30">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>

                <div className="relative h-1 rounded-full bg-white/[0.08]">
                  <div className="absolute left-[8%] right-[18%] h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

                  <span className="absolute left-[8%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-purple-300/70 bg-[#08040f] shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-transform hover:scale-125" />

                  <span className="absolute right-[18%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-cyan-300/70 bg-[#08040f] shadow-[0_0_12px_rgba(34,211,238,0.7)] transition-transform hover:scale-125" />
                </div>
              </div>
            </section>

            {/* STATUS */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                    Status
                  </span>
                </div>

                <span className="font-mono text-[8px] text-pink-400/40">
                  03
                </span>
              </div>

              <div className="space-y-1.5">
                {["Featured", "Popular", "New Arrivals"].map((item, index) => (
                  <div
                    key={item}
                    className="group/item flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.015] px-3 py-2.5 transition-all duration-300 hover:border-pink-400/20 hover:bg-pink-500/[0.04]"
                  >
                    <div className="flex h-4 w-4 items-center justify-center rounded border border-white/15 transition-all duration-300 group-hover/item:border-pink-400/50">
                      <div
                        className={`h-1.5 w-1.5 rounded-sm transition-all duration-300 ${
                          index === 0
                            ? "bg-pink-400 shadow-[0_0_8px_#ec4899]"
                            : "bg-transparent group-hover/item:bg-pink-400/50"
                        }`}
                      />
                    </div>

                    <span className="text-xs text-white/45 transition-colors group-hover/item:text-white/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* TAGS */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#d946ef]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                    Tags
                  </span>
                </div>

                <span className="font-mono text-[8px] text-fuchsia-400/40">
                  04
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Premium", "Popular", "Modern", "Limited"].map((tag) => (
                  <div
                    key={tag}
                    className="cursor-pointer rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[9px] text-white/35 transition-all duration-300 hover:border-fuchsia-400/30 hover:bg-fuchsia-500/[0.06] hover:text-fuchsia-200 hover:shadow-[0_0_18px_rgba(217,70,239,0.08)]"
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </section>

            {/* CLEAR FILTERS UI */}
            <div className="group/clear relative cursor-pointer overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.018] px-4 py-3 text-center transition-all duration-500 hover:border-fuchsia-400/30 hover:bg-fuchsia-500/[0.04]">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/35 transition-colors group-hover/clear:text-fuchsia-200">
                Clear All Filters
              </span>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 shadow-[0_0_12px_#d946ef] transition-all duration-500 group-hover/clear:w-full" />
            </div>
          </div>

          {/* ================= SIDEBAR FOOTER ================= */}
          <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <div>
              <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/20">
                Filter Interface
              </p>

              <p className="mt-1 font-mono text-[8px] text-cyan-400/30">
                SYSTEM READY
              </p>
            </div>

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            </span>
          </div>
        </div>
      </aside>

      {/* ================= CONTENT ================= */}
      <main className="relative z-10 min-h-screen lg:pl-[340px]">
        {children}
      </main>

      {/* ================= NEON FRAME ================= */}
      <div className="pointer-events-none fixed left-1/2 top-0 z-40 h-px w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/80 to-transparent shadow-[0_0_25px_4px_rgba(217,70,239,0.3)]" />

      <div className="pointer-events-none fixed bottom-0 left-1/2 z-40 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_25px_4px_rgba(34,211,238,0.25)]" />

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes orbOne {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(90px, 60px) scale(1.15);
          }
        }

        @keyframes orbTwo {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-80px, -70px) scale(1.12);
          }
        }

        @keyframes orbThree {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(70px, -60px) scale(1.1);
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-10vh);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        @keyframes particleOne {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }

          50% {
            transform: translate(35px, -45px);
            opacity: 1;
          }
        }

        @keyframes particleTwo {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(-30px, -55px);
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
            transform: translate(25px, 40px);
            opacity: 1;
          }
        }

        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.2);
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.4);
        }
      `}</style>
    </div>
  );
}
