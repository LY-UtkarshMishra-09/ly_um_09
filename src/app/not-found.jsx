import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <div className="space-y-4 max-w-md">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
          404 // Page Not Found
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white font-mono">
          Route Undefined
        </h1>
        <p className="text-sm text-zinc-400">
          The requested path does not exist or has been relocated.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors"
          >
            Return to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

