"use client";

import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

const Splash = () => {
  const [hide, setHide] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect mobile width once on mount
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    }
    // Shorter duration for mobile to reduce perceived lag
    const t = setTimeout(() => setHide(true), isMobile ? 1200 : 2000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={[
        "fixed inset-0 z-[100] overflow-hidden",
        "transition-all duration-700",
        hide ? "opacity-0 pointer-events-none scale-105" : "opacity-100",
      ].join(" ")}
      aria-hidden={hide}
    >
      {/* Animated blurred blobs background (desktop-only for performance) */}
      <div className="hidden sm:block absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="hidden sm:block absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl animate-pulse" />
      <div className="hidden sm:block absolute top-1/3 -right-10 h-48 w-48 rounded-full bg-warning/20 blur-2xl animate-pulse" />

      {/* Center content */}
      <div className={["relative h-full w-full grid place-items-center bg-gradient-to-br from-background/80 via-background/50 to-background/30", mounted ? "opacity-100" : "opacity-0", "transition-opacity duration-500"].join(" ")}>
        <div className={["text-center", "transition-all", mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"].join(" ")}>
          {/* Logo: no rotation on mobile for performance */}
          <div className="relative mx-auto mb-8 h-28 w-28 sm:h-32 sm:w-32 will-change-transform">
            <div className="hidden sm:block absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
            <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-primary shadow-floating flex items-center justify-center">
              <Shield className="h-14 w-14 sm:h-16 sm:w-16 text-white drop-shadow" />
            </div>
          </div>

          {/* Wordmark with staggered reveal */}
          <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl font-extrabold tracking-wider text-foreground">
            {"KAVACH".split("").map((ch, idx) => (
              <span
                key={idx}
                className="inline-block translate-y-1 sm:translate-y-2 opacity-0 animate-slide-up"
                style={{ animationDelay: `${idx * (isMobile ? 40 : 80)}ms` }}
              >
                {ch}
              </span>
            ))}
          </div>
          <div className="mt-2 text-xs sm:text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "520ms" }}>
            Digital Health Protection
          </div>

          {/* Skip button */}
          <button
            onClick={() => setHide(true)}
            className="mt-8 text-xs text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Skip
          </button>
        </div>
      </div>

      {/* Local keyframes */}
      <style jsx>{`
        .animate-spin-slow { animation: spin 6s linear infinite; }
        .animate-slide-up { animation: slideUp 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 500ms ease forwards; }
        @keyframes slideUp { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow, .animate-slide-up, .animate-fade-in { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Splash;


