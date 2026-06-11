<script lang="ts">

	import "./layout.css";
	import favicon from '$lib/assets/favicon.svg';
	import Icon from "@iconify/svelte"
    import BarraDeMusic from "$lib/components/Barra-de-music.svelte";

	let { children } = $props();
</script>

<svelte:head>

	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-950/70 backdrop-blur-xl">
  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    
    <div class="flex items-center gap-2">
      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
        <span class="text-lg font-bold text-white">E</span>
      </div>
      <h1 class="text-xl font-bold tracking-tight text-white">
        EB<span class="text-blue-500">SOUND</span>
      </h1>
    </div>

    <div class="flex items-center gap-1 rounded-full bg-gray-900/50 p-1 border border-white/5">
      <a href="/" class="px-4 py-1.5 text-sm font-medium text-gray-400 transition-all hover:text-white hover:bg-gray-800 rounded-full">Home</a>
      <a href="/library" class="px-4 py-1.5 text-sm font-medium text-white bg-gray-800 shadow-sm rounded-full">Library</a>
    </div>

    <div class="flex items-center gap-4">
      <button class="text-gray-400 transition-all hover:text-blue-400 hover:scale-105">
        <Icon icon="ion:notifications" class="text-lg" />
      </button>
      
      <div class="h-4 w-[1px] bg-gray-800 mx-1"></div> <button class="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5 transition-all hover:border-blue-500/50 group">
        <div class="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
          <Icon icon="mdi:user" class="text-white text-sm" />
        </div>
        <span class="text-xs font-medium text-gray-300 group-hover:text-white">Perfil</span>
      </button>
    </div>
  </div>
</nav>

{@render children()}

<BarraDeMusic />