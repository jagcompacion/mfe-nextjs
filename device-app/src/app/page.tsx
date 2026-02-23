import { SendToWebappButton } from "./send-to-webapp-button";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function DeviceHome({ searchParams }: Props) {
  const params = await searchParams;
  const from = params.from as string | undefined;
  const message = params.message as string | undefined;
  const timestamp = params.timestamp as string | undefined;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">Device App</h1>
          <p className="text-lg text-white/80 max-w-md text-center">
            This is the main device-app running on port 3000. It uses Next.js
            multi-zone to access web-app.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              Port: 3000
            </span>
          </div>
        </div>

        {from && (
          <div className="rounded-2xl bg-green-500/20 border border-green-500/30 p-6 max-w-md">
            <h2 className="text-lg font-semibold text-green-400 mb-3">
              Received from {from}:
            </h2>
            <div className="space-y-2 text-white/80">
              {message && (
                <p>
                  <span className="text-white/50">Message:</span> {message}
                </p>
              )}
              {timestamp && (
                <p>
                  <span className="text-white/50">Timestamp:</span>{" "}
                  {new Date(parseInt(timestamp)).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        )}

        <SendToWebappButton />
      </main>
    </div>
  );
}
