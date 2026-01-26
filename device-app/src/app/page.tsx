export default function DeviceHome() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Device App
          </h1>
          <p className="text-lg text-white/80 max-w-md text-center">
            This is the device-app running on port 3001, accessible via /device route through multi-zone.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              Base Path: /device
            </span>
          </div>
        </div>
        <a
          href="/"
          className="text-white/70 hover:text-white transition-colors"
        >
          &larr; Back to Web App
        </a>
      </main>
    </div>
  );
}
