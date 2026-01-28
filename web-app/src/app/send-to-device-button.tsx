"use client";

export function SendToDeviceButton() {
  const handleSendData = () => {
    // Set cookies with data
    document.cookie = `fromApp=webapp; path=/`;
    document.cookie = `message=Hello from Web App; path=/`;
    document.cookie = `timestamp=${Date.now()}; path=/`;

    // Redirect to device app
    window.location.href = "/device";
  };

  return (
    <button
      onClick={handleSendData}
      className="rounded-full bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white font-medium transition-colors"
    >
      Send Data to Device App &rarr;
    </button>
  );
}
