"use client";

export function SendToWebappButton() {
  const handleSendData = () => {
    // Set cookies with data
    document.cookie = `fromApp=device; path=/`;
    document.cookie = `message=Hello from Device App; path=/`;
    document.cookie = `timestamp=${Date.now()}; path=/`;

    // Redirect to web app
    window.location.href = "/webapp";
  };

  return (
    <button
      onClick={handleSendData}
      className="rounded-full bg-slate-700 hover:bg-slate-800 px-6 py-3 text-white font-medium transition-colors"
    >
      Send Data to Web App &rarr;
    </button>
  );
}
