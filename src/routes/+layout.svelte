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

<nav class="flex justify-between items-center px-8 py-4 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
    <div>
        <h1 class="text-white font-black text-2xl tracking-tighter">
            EB<span class="text-blue-500">SOUND</span>
        </h1>
    </div>

    <div class="flex gap-8 text-gray-400 font-medium">
        <a href="/" class="hover:text-white transition-colors duration-200">Home</a>
        <a href="/library" class="hover:text-white transition-colors duration-200">Library</a>
    
    </div>

    <div class="flex items-center gap-5 text-gray-400">
        <button class="hover:text-white transition-all hover:scale-110">
            <Icon icon="ion:notifications" class="text-xl" />
        </button>
        <button class="hover:text-white transition-all hover:scale-110">
            <Icon icon="icon-park-outline:config" class="text-xl" />
        </button>
        <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 hover:border-blue-500 cursor-pointer transition-all">
            <Icon icon="mdi:user" class="text-white" />
        </div>
    </div>
</nav>


{@render children()}

<BarraDeMusic />