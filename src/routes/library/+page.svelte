<main class="min-h-screen bg-gray-950 text-white">
  <section class="p-8 max-w-7xl mx-auto">
    <header class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold tracking-tight text-white">Tu Librería</h2>
      <div class="flex gap-2">
        <button class="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm font-medium">Todos</button>
        <button class="px-4 py-1.5 bg-gray-900 text-gray-400 hover:text-white rounded-full text-sm transition-colors border border-white/5 hover:border-gray-700">Artistas</button>
        <button class="px-4 py-1.5 bg-gray-900 text-gray-400 hover:text-white rounded-full text-sm transition-colors border border-white/5 hover:border-gray-700">Álbumes</button>
      </div>
    </header>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      <div class="group bg-gray-900/40 p-4 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:bg-gray-900/80 cursor-pointer shadow-lg">
        <div class="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden shadow-inner">
          <img src="/michael.jpg" alt="Thriller" class="w-full h-full object-cover" />
        </div>
        <h3 class="text-white font-semibold truncate">Thriller</h3>
        <p class="text-gray-500 text-sm">Michael Jackson</p>
      </div>

      <div class="group bg-gray-900/40 p-4 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:bg-gray-900/80 cursor-pointer shadow-lg">
        <div class="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden shadow-inner">
          <img src="/lana.png" alt="Ultraviolence" class="w-full h-full object-cover" />
        </div>
        <h3 class="text-white font-semibold truncate">Ultraviolence</h3>
        <p class="text-gray-500 text-sm">Lana Del Rey</p>
      </div>

      <div class="group bg-gray-900/40 p-4 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:bg-gray-900/80 cursor-pointer shadow-lg">
        <div class="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden shadow-inner">
          <img src="/lana3.webp" alt="Born to Die" class="w-full h-full object-cover" />
        </div>
        <h3 class="text-white font-semibold truncate">Born to Die</h3>
        <p class="text-gray-500 text-sm">Lana Del Rey</p>
      </div>

      <div class="group bg-gray-900/40 p-4 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:bg-gray-900/80 cursor-pointer shadow-lg">
        <div class="aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden shadow-inner">
          <img src="/lana.jpg" alt="Everybody Knows This Is Nowhere" class="w-full h-full object-cover" />
        </div>
        <h3 class="text-white font-semibold truncate">Everybody Knows This Is Nowhere</h3>
        <p class="text-gray-500 text-sm">Neil Young</p>
      </div>

    </div>
  </section>
</main>