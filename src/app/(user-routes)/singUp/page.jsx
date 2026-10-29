"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors) => {
    console.log(errors);
  };

  const formErrors = errors;

  const inputStyle =
    "peer w-full rounded-xl border bg-black/40 pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 hover:bg-purple-500/[0.04] focus:bg-purple-500/[0.06] focus:shadow-[0_0_28px_rgba(168,85,247,0.16)]";

  const normalBorder =
    "border-white/[0.09] hover:border-purple-400/40 focus:border-purple-400/70";

  const errorBorder =
    "border-rose-500/70 bg-rose-500/[0.04] shadow-[0_0_22px_rgba(244,63,94,0.10)] focus:border-rose-400 focus:shadow-[0_0_25px_rgba(244,63,94,0.18)]";

  const labelStyle =
    "mb-2.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 group-focus-within/field:text-purple-300";

  const errorStyle =
    "mt-2.5 flex items-start gap-2 rounded-lg border border-rose-500/20 bg-rose-500/[0.06] px-3 py-2.5 text-xs leading-5 text-rose-300 animate-[errorReveal_0.35s_ease-out_both]";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 py-16 text-white sm:px-8">
      {/* Background */}
      <div className="absolute inset-0 animate-[backgroundShift_15s_ease-in-out_infinite] bg-gradient-to-br from-pink-950/40 via-black to-purple-950/50" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 animate-[gridMove_18s_linear_infinite] opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.4) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Perspective Grid */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] animate-[gridPulse_7s_ease-in-out_infinite] opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(236,72,153,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)",
          backgroundSize: "75px 75px",
          transform: "perspective(500px) rotateX(60deg) scale(1.8)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute -right-24 top-[12%] h-[400px] w-[400px] animate-[floatGlow_10s_ease-in-out_infinite] rounded-full bg-pink-500/[0.16] blur-[140px] sm:h-[500px] sm:w-[500px]" />

      <div className="absolute -left-24 bottom-[8%] h-[400px] w-[400px] animate-[floatGlowReverse_12s_ease-in-out_infinite] rounded-full bg-purple-600/[0.20] blur-[140px] sm:h-[500px] sm:w-[500px]" />

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-[orbPulse_8s_ease-in-out_infinite] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      {/* Floating Rings */}
      <div className="absolute left-[5%] top-[9%] h-40 w-40 animate-[orbit_22s_linear_infinite] rounded-full border border-pink-400/15 sm:h-56 sm:w-56">
        <div className="absolute -right-2 top-1/2 h-3 w-3 rounded-full bg-pink-300 shadow-[0_0_20px_#f9a8d4]" />
      </div>

      <div className="absolute bottom-[7%] right-[4%] h-52 w-52 animate-[orbitReverse_28s_linear_infinite] rounded-full border border-purple-400/15 sm:h-72 sm:w-72">
        <div className="absolute -left-1 top-1/4 h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_16px_#c084fc]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute right-[12%] top-[17%] h-1.5 w-1.5 animate-[particleOne_7s_ease-in-out_infinite] rounded-full bg-pink-300 shadow-[0_0_15px_rgba(244,114,182,1)]" />

      <div className="absolute left-[15%] top-[32%] h-1 w-1 animate-[particleTwo_8s_ease-in-out_infinite] rounded-full bg-purple-300 shadow-[0_0_18px_rgba(216,180,254,1)]" />

      <div className="absolute bottom-[20%] right-[18%] h-1.5 w-1.5 animate-[particleThree_6s_ease-in-out_infinite] rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,1)]" />

      <div className="absolute bottom-[32%] left-[10%] h-1 w-1 animate-[particleFour_9s_ease-in-out_infinite] rounded-full bg-fuchsia-300 shadow-[0_0_15px_rgba(232,121,249,1)]" />

      {/* Scan Lines */}
      <div className="absolute left-0 top-0 h-px w-full animate-[scan_7s_linear_infinite] bg-gradient-to-r from-transparent via-purple-400/80 to-transparent shadow-[0_0_25px_5px_rgba(168,85,247,0.25)]" />

      <div className="absolute left-0 top-[35%] h-px w-full animate-[laser_10s_linear_infinite] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />

      {/* CRT Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.8)_100%)]" />

      {/* Main */}
      <div className="relative z-10 w-full max-w-[470px]">
        {/* Logo */}
        <div className="mb-7 flex justify-center animate-[fadeDown_1s_cubic-bezier(.16,1,.3,1)_both]">
          <div className="group relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-purple-400/30 bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-cyan-400/10 shadow-[0_0_45px_rgba(236,72,153,0.18)] backdrop-blur-xl transition-all duration-700 hover:-rotate-6 hover:scale-110 hover:border-pink-400/60 hover:shadow-[0_0_75px_rgba(168,85,247,0.4)]">
            <div className="absolute inset-1 rounded-[18px] border border-purple-400/20 animate-[iconRing_4s_ease-in-out_infinite]" />

            <div className="absolute -inset-2 rounded-3xl border border-pink-400/15 animate-[ringPulse_3s_ease-out_infinite]" />

            <div className="absolute -inset-4 rounded-[30px] border border-purple-400/10 animate-[ringPulse_4s_ease-out_infinite_1s]" />

            <span className="relative animate-[iconFloat_3s_ease-in-out_infinite] bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
              MM
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center animate-[fadeUp_1s_cubic-bezier(.16,1,.3,1)_0.15s_both]">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-pink-300/70 sm:text-xs">
            Start your journey
          </p>

          <h1 className="relative inline-block bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-[length:250%_250%] bg-clip-text text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(217,70,239,0.35)] animate-[gradientMove_5s_ease_infinite,titleFloat_5s_ease-in-out_infinite] sm:text-5xl">
            SIGN UP
            <span className="pointer-events-none absolute inset-0 animate-[titleShine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] bg-clip-text text-transparent">
              SIGN UP
            </span>
          </h1>

          {/* Heading Line */}
          <div className="mt-5 flex justify-center">
            <div className="relative h-[2px] w-28 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_18px_2px_rgba(168,85,247,0.55)] animate-[lineGlow_3s_ease-in-out_infinite]">
              <div className="absolute inset-y-0 left-0 w-1/3 animate-[lineScan_2s_ease-in-out_infinite] bg-white/90 blur-[1px]" />
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Create your account and join the experience.
          </p>
        </div>

        {/* Form Card */}
        <div className="group/card relative mt-9 overflow-hidden rounded-3xl border border-purple-500/20 bg-white/[0.035] p-6 opacity-0 shadow-[0_0_55px_rgba(168,85,247,0.10)] backdrop-blur-2xl animate-[cardReveal_1s_cubic-bezier(.16,1,.3,1)_0.3s_forwards] transition-all duration-700 hover:border-pink-500/30 hover:shadow-[0_0_80px_rgba(236,72,153,0.14)] sm:p-8">
          {/* Card Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/[0.07] via-transparent to-purple-500/[0.08]" />

          {/* Animated Border */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-[borderFlow_5s_linear_infinite] bg-gradient-to-r from-transparent via-pink-400/80 to-transparent bg-[length:200%_100%]" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

          {/* Card Orb */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 animate-[floatGlow_9s_ease-in-out_infinite] rounded-full bg-purple-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -right-24 h-52 w-52 animate-[floatGlowReverse_10s_ease-in-out_infinite] rounded-full bg-pink-500/[0.08] blur-3xl" />

          {/* Form */}
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit, onError)}
            className="relative flex flex-col gap-5"
          >
            {/* Full Name */}
            <div className="group/field opacity-0 animate-[formField_0.7s_cubic-bezier(.16,1,.3,1)_0.45s_forwards]">
              <label className={labelStyle}>
                <span>Full name</span>
                <span className="text-purple-400/60">01</span>
              </label>

              <div className="relative">
                <div
                  className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 blur-md transition-opacity duration-500 group-focus-within/field:opacity-100 ${
                    errors.userName ? "bg-rose-500/15" : "bg-purple-500/15"
                  }`}
                />

                <span
                  className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-colors ${
                    errors.userName
                      ? "text-rose-400"
                      : "text-purple-400/60 group-focus-within/field:text-purple-300"
                  }`}
                >
                  ◉
                </span>

                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.userName)}
                  className={`${inputStyle} relative z-[1] ${
                    errors.userName ? errorBorder : normalBorder
                  }`}
                  {...register("userName", {
                    required: "Full name is required.",
                    minLength: {
                      value: 3,
                      message: "Name must contain at least 3 characters.",
                    },
                    maxLength: {
                      value: 60,
                      message: "Name cannot exceed 60 characters.",
                    },
                  })}
                />

                <div
                  className={`pointer-events-none absolute bottom-0 left-1/2 z-[2] h-px w-0 -translate-x-1/2 transition-all duration-500 peer-focus:left-0 peer-focus:w-full ${
                    errors.userName
                      ? "bg-rose-400"
                      : "bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"
                  }`}
                />
              </div>

              {errors.userName && (
                <p role="alert" className={errorStyle}>
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{errors.userName.message}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div className="group/field opacity-0 animate-[formField_0.7s_cubic-bezier(.16,1,.3,1)_0.58s_forwards]">
              <label className={labelStyle}>
                <span>Email address</span>
                <span className="text-purple-400/60">02</span>
              </label>

              <div className="relative">
                <div
                  className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 blur-md transition-opacity duration-500 group-focus-within/field:opacity-100 ${
                    errors.email ? "bg-rose-500/15" : "bg-pink-500/10"
                  }`}
                />

                <span
                  className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 text-lg transition-colors ${
                    errors.email
                      ? "text-rose-400"
                      : "text-pink-400/60 group-focus-within/field:text-pink-300"
                  }`}
                >
                  @
                </span>

                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className={`${inputStyle} relative z-[1] ${
                    errors.email ? errorBorder : normalBorder
                  }`}
                  {...register("email", {
                    required: "Email address is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />

                <div className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-px w-0 -translate-x-1/2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 transition-all duration-500 peer-focus:left-0 peer-focus:w-full" />
              </div>

              {errors.email && (
                <p role="alert" className={errorStyle}>
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="group/field opacity-0 animate-[formField_0.7s_cubic-bezier(.16,1,.3,1)_0.71s_forwards]">
              <label className={labelStyle}>
                <span>Phone number</span>
                <span className="text-purple-400/60">03</span>
              </label>

              <div className="relative">
                <div
                  className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 blur-md transition-opacity duration-500 group-focus-within/field:opacity-100 ${
                    errors.phone ? "bg-rose-500/15" : "bg-cyan-500/10"
                  }`}
                />

                <span
                  className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 text-lg transition-colors ${
                    errors.phone
                      ? "text-rose-400"
                      : "text-cyan-400/70 group-focus-within/field:text-cyan-300"
                  }`}
                >
                  ☎
                </span>

                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="+98 912 345 6789"
                  aria-invalid={Boolean(errors.phone)}
                  className={`${inputStyle} relative z-[1] ${
                    errors.phone ? errorBorder : normalBorder
                  }`}
                  {...register("phone", {
                    required: "Phone number is required.",
                    pattern: {
                      value: /^\+?[\d\s().-]{7,20}$/,
                      message: "Enter a valid phone number.",
                    },
                    validate: (value) =>
                      value.replace(/\D/g, "").length >= 7 ||
                      "Phone number must contain at least 7 digits.",
                  })}
                />

                <div className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-500 peer-focus:left-0 peer-focus:w-full" />
              </div>

              {errors.phone && (
                <p role="alert" className={errorStyle}>
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>

            {/* Password */}
            <div className="group/field opacity-0 animate-[formField_0.7s_cubic-bezier(.16,1,.3,1)_0.84s_forwards]">
              <label className={labelStyle}>
                <span>Password</span>
                <span className="text-purple-400/60">04</span>
              </label>

              <div className="relative">
                <div
                  className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 blur-md transition-opacity duration-500 group-focus-within/field:opacity-100 ${
                    errors.password ? "bg-rose-500/15" : "bg-purple-500/15"
                  }`}
                />

                <span
                  className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-colors ${
                    errors.password
                      ? "text-rose-400"
                      : "text-purple-400/60 group-focus-within/field:text-purple-300"
                  }`}
                >
                  ◆
                </span>

                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                  aria-invalid={Boolean(errors.password)}
                  className={`${inputStyle} relative z-[1] ${
                    errors.password ? errorBorder : normalBorder
                  }`}
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Password must contain at least 8 characters.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                      message:
                        "Password must include at least one letter and one number.",
                    },
                  })}
                />

                <div className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-px w-0 -translate-x-1/2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 transition-all duration-500 peer-focus:left-0 peer-focus:w-full" />
              </div>

              {errors.password && (
                <p role="alert" className={errorStyle}>
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{errors.password.message}</span>
                </p>
              )}

              <p className="mt-2 text-[10px] leading-5 text-gray-600">
                Use at least 8 characters, including a letter and a number.
              </p>
            </div>

            {/* Confirm Password */}
            <div className="group/field opacity-0 animate-[formField_0.7s_cubic-bezier(.16,1,.3,1)_0.97s_forwards]">
              <label className={labelStyle}>
                <span>Confirm password</span>
                <span className="text-purple-400/60">05</span>
              </label>

              <div className="relative">
                <div
                  className={`pointer-events-none absolute -inset-px rounded-xl opacity-0 blur-md transition-opacity duration-500 group-focus-within/field:opacity-100 ${
                    errors.confirmPassword ? "bg-rose-500/15" : "bg-pink-500/10"
                  }`}
                />

                <span
                  className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-colors ${
                    errors.confirmPassword
                      ? "text-rose-400"
                      : "text-pink-400/60 group-focus-within/field:text-pink-300"
                  }`}
                >
                  ◈
                </span>

                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter your password again"
                  aria-invalid={Boolean(errors.confirmPassword)}
                  className={`${inputStyle} relative z-[1] ${
                    errors.confirmPassword ? errorBorder : normalBorder
                  }`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password.",
                    validate: (value) =>
                      value === passwordValue || "Passwords do not match.",
                  })}
                />

                <div className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-px w-0 -translate-x-1/2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 transition-all duration-500 peer-focus:left-0 peer-focus:w-full" />
              </div>

              {errors.confirmPassword && (
                <p role="alert" className={errorStyle}>
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{errors.confirmPassword.message}</span>
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="opacity-0 animate-[formField_0.7s_cubic-bezier(.16,1,.3,1)_1.1s_forwards]">
              <label className="group/terms flex cursor-pointer items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-purple-500/15 hover:bg-purple-500/[0.04]">
                <span className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    aria-invalid={Boolean(errors.acceptTerms)}
                    className="peer h-4 w-4 cursor-pointer accent-purple-500"
                    {...register("acceptTerms", {
                      required: "You must accept the terms to continue.",
                    })}
                  />

                  <span className="pointer-events-none absolute -inset-1 rounded-md border border-purple-400/0 transition-all peer-checked:border-purple-400/40 peer-checked:shadow-[0_0_15px_rgba(168,85,247,0.25)]" />
                </span>

                <span
                  className={`text-xs leading-5 transition-colors ${
                    errors.acceptTerms
                      ? "text-rose-300"
                      : "text-gray-500 group-hover/terms:text-gray-300"
                  }`}
                >
                  I agree to the{" "}
                  <span className="text-purple-300 underline decoration-purple-400/30 underline-offset-4">
                    terms and conditions
                  </span>
                  .
                </span>
              </label>

              {errors.acceptTerms && (
                <p role="alert" className={errorStyle}>
                  <span className="mt-0.5 shrink-0">⚠</span>
                  <span>{errors.acceptTerms.message}</span>
                </p>
              )}
            </div>

            {/* Submit Input */}
            <div className="relative mt-2 overflow-hidden rounded-xl opacity-0 animate-[buttonReveal_0.8s_cubic-bezier(.16,1,.3,1)_1.2s_forwards]">
              <div className="pointer-events-none absolute inset-0 animate-[buttonGradient_4s_ease_infinite] bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-[length:200%_100%]" />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[buttonShine_3.5s_ease-in-out_infinite]" />

              <input
                type="submit"
                value="Create Account  →"
                className="relative z-10 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent px-5 py-4 text-center text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-white/25 hover:shadow-[0_0_45px_rgba(217,70,239,0.5)] active:scale-[0.98]"
              />
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-7 flex items-center gap-4 opacity-0 animate-[fadeUp_0.7s_ease-out_1.3s_forwards]">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/5" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
              Already a member?
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/5" />
          </div>

          {/* Sign In */}
          <p className="text-center text-xs text-gray-500 opacity-0 animate-[fadeUp_0.7s_ease-out_1.4s_forwards]">
            Already have an account?{" "}
            <Link
              href="/singIn"
              className="font-semibold text-pink-400 transition-all duration-300 hover:text-pink-300 hover:underline hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
            >
              Sign in →
            </Link>
          </p>
        </div>

        {/* Bottom Status */}
        <div className="mt-7 flex items-center justify-center gap-2 opacity-0 animate-[fadeUp_0.8s_ease-out_1.5s_forwards]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative h-1.5 w-1.5 animate-[dotPulse_2s_ease-in-out_infinite] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
            Secure registration
          </span>
        </div>

        {/* Footer Decoration */}
        <div className="mt-5 flex justify-center gap-1.5 opacity-0 animate-[fadeUp_0.8s_ease-out_1.6s_forwards]">
          <span className="h-1 w-8 rounded-full bg-pink-500/30" />
          <span className="h-1 w-3 rounded-full bg-purple-500/40" />
          <span className="h-1 w-1 rounded-full bg-cyan-400/60" />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes backgroundShift {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 55px 55px;
          }
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.025;
          }
          50% {
            opacity: 0.075;
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

        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes cardReveal {
          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.94) rotateX(8deg);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes formField {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(7px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes errorReveal {
          0% {
            opacity: 0;
            transform: translateY(-5px) scale(0.98);
            filter: blur(4px);
          }
          70% {
            transform: translateY(1px) scale(1.005);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        @keyframes buttonShine {
          0%,
          40% {
            transform: translateX(-110%);
          }
          75%,
          100% {
            transform: translateX(110%);
          }
        }

        @keyframes titleFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
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
            transform: scaleX(1.15);
          }
        }

        @keyframes lineScan {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(350%);
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.4);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-8deg);
          }
        }

        @keyframes iconRing {
          0%,
          100% {
            transform: scale(0.92) rotate(0deg);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.08) rotate(12deg);
            opacity: 0.8;
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(25px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(25px) rotate(-360deg);
          }
        }

        @keyframes orbitReverse {
          from {
            transform: rotate(360deg) translateX(35px) rotate(-360deg);
          }
          to {
            transform: rotate(0deg) translateX(35px) rotate(0deg);
          }
        }

        @keyframes particleOne {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(-80px, 60px);
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
            transform: translate(70px, -80px);
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
            transform: translate(-65px, -75px);
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
            transform: translate(80px, -55px);
            opacity: 1;
          }
        }

        @keyframes ringPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes borderFlow {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: -200% 50%;
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
