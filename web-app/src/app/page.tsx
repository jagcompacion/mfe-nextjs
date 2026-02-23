"use client";

import { useEffect, useState } from "react";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export default function WebHome() {
  const [cookieData, setCookieData] = useState<{
    fromApp: string | null;
    message: string | null;
    timestamp: string | null;
  } | null>(null);

  useEffect(() => {
    const fromApp = getCookie("fromApp");
    const message = getCookie("message");
    const timestamp = getCookie("timestamp");

    if (fromApp) {
      setCookieData({ fromApp, message, timestamp });
    }
  }, []);

  const handleSendData = () => {
    const params = new URLSearchParams({
      from: "webapp",
      message: "Hello from Web App",
      timestamp: Date.now().toString(),
    });
    window.location.href = `/?${params.toString()}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">Web App</h1>
          <p className="text-lg text-white/80 max-w-md text-center">
            This is the web-app running on port 3001, accessible via /webapp
            route through multi-zone.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              Base Path: /webapp
            </span>
          </div>
        </div>

        {cookieData && (
          <div className="rounded-2xl bg-green-500/20 border border-green-500/30 p-6 max-w-md">
            <h2 className="text-lg font-semibold text-green-400 mb-3">
              Received from {cookieData.fromApp}:
            </h2>
            <div className="space-y-2 text-white/80">
              {cookieData.message && (
                <p>
                  <span className="text-white/50">Message:</span>{" "}
                  {cookieData.message}
                </p>
              )}
              {cookieData.timestamp && (
                <p>
                  <span className="text-white/50">Timestamp:</span>{" "}
                  {new Date(parseInt(cookieData.timestamp)).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        )}

        <button
          onClick={handleSendData}
          className="rounded-full bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white font-medium transition-colors"
        >
          Send Data to Device App &rarr;
        </button>
        <a
          href="/"
          className="text-white/70 hover:text-white transition-colors"
        >
          &larr; Back to Device App
        </a>
      </main>
    </div>
  );
}
