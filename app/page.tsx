// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-6">
      <h1 className="text-4xl font-bold">🎵 Loja de Beats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4">
          <img src="/cover-art.png" alt="Cover Art" className="rounded-lg w-full" />
          <p className="mt-2 text-center">Cover Art</p>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4">
          <img src="/waveform.png" alt="Waveform" className="rounded-lg w-full" />
          <p className="mt-2 text-center">Waveform</p>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4">
          <img src="/profile-banner.png" alt="Profile Banner" className="rounded-lg w-full" />
          <p className="mt-2 text-center">Profile Banner</p>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4">
          <img src="/visualizer-preview.jpg" alt="Visualizer Preview" className="rounded-lg w-full" />
          <p className="mt-2 text-center">Visualizer Preview</p>
        </div>

        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg p-4 sm:col-span-2 lg:col-span-1">
          <img src="/album-background.jpg" alt="Album Background" className="rounded-lg w-full" />
          <p className="mt-2 text-center">Album Background</p>
        </div>
      </div>

      <p className="text-sm text-gray-400">powered by você mesmo 😎</p>
    </main>
  );
}
