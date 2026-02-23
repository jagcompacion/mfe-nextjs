export default function WebappUnavailable() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red-500/20 p-4">
              <svg
                className="w-12 h-12 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            Web App Unavailable
          </h1>
          <p className="text-lg text-white/80 max-w-md text-center">
            The web-app is not currently running. Please start it on port 3001.
          </p>
          <div className="mt-6 bg-purple-800/50 rounded-lg p-4">
            <p className="text-sm text-white/60 font-mono">
              cd web-app && npm run dev
            </p>
          </div>
        </div>
        <a
          href="/"
          className="rounded-full bg-slate-700 hover:bg-slate-800 px-6 py-3 text-white font-medium transition-colors"
        >
          &larr; Back to Device App
        </a>
      </main>
    </div>
  );
}
