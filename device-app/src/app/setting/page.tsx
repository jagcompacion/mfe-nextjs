export default function SettingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Device Settings
          </h1>
          <div className="space-y-4 text-white/80">
            <div className="flex items-center justify-between gap-8 border-b border-white/20 pb-4">
              <span>Notifications</span>
              <span className="text-white">Enabled</span>
            </div>
            <div className="flex items-center justify-between gap-8 border-b border-white/20 pb-4">
              <span>Dark Mode</span>
              <span className="text-white">Auto</span>
            </div>
            <div className="flex items-center justify-between gap-8 border-b border-white/20 pb-4">
              <span>Language</span>
              <span className="text-white">English</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span>Version</span>
              <span className="text-white">1.0.0</span>
            </div>
          </div>
        </div>
        <a
          href="/device"
          className="text-white/70 hover:text-white transition-colors"
        >
          &larr; Back to Device Home
        </a>
      </main>
    </div>
  );
}
