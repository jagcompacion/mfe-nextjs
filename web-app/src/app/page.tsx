export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Web App
          </h1>
          <p className="text-lg text-white/80 max-w-md text-center">
            This is the main web-app running on port 3000. It uses Next.js multi-zone to access device-app.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              Port: 3000
            </span>
          </div>
        </div>
        <a
          href="/device"
          className="rounded-full bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white font-medium transition-colors"
        >
          Go to Device App &rarr;
        </a>
      </main>
    </div>
  );
}
