// src/Layout.tsx
import React from "react";

const LOGO_IMG = "https://ext.same-assets.com/81285630/649153979.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0c0c0e] flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 h-16 bg-black/90">
        <img src={LOGO_IMG} alt="prime video" className="h-7" />
        <div className="flex items-center gap-6 text-white/80">
          <button className="flex items-center gap-1.5 hover:text-white/95 transition-colors">
            EN
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="inline ml-1"
              viewBox="0 0 20 20"
            >
              <path
                d="M5.25 7.75L10 12.25l4.75-4.5"
                stroke="#fff"
                strokeWidth="1.7"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <span className="bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              fill="none"
              strokeWidth="1.5"
              stroke="#fff"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="9" r="4" />
              <path d="M18 20a6 6 0 0 0-12 0" />
            </svg>
          </span>
        </div>
      </header>

      {/* Conteúdo da Página */}
      <main className="flex flex-1">{children}</main>

      {/* Footer */}
      <footer className="w-full bg-[#17181a] py-8 text-center mt-auto">
        <img src={LOGO_IMG} alt="prime video logo" className="mx-auto mb-4 h-7" />
        <nav className="flex justify-center gap-8 mb-2 text-[15px] text-blue-300">
          <a href="#" className="hover:underline">Terms and Privacy Notice</a>
          <a href="#" className="hover:underline">Cookie Notice</a>
          <a href="#" className="hover:underline">Send us feedback</a>
          <a href="#" className="hover:underline">Help</a>
        </nav>
        <p className="text-xs text-white/70">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
}
