<script lang="ts">

	import "./layout.css";
	import favicon from '$lib/assets/favicon.svg';
	import Icon from "@iconify/svelte"

	let { children } = $props();
</script>

<svelte:head>

	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="flex justify-between items-center px-12 py-4 bg-gray-950 shadow-2xl shadow-blue-800">
	<div>
		<p class="text-blue-900 font-extrabold">EBSOUND</p>
	</div>
	<div class="text-white">
		<a href="/">Home</a>
		<a href="/library">Library</a>
		<a href="/visualizer">Visualizer</a>
		<a href="/buddies">Buddies</a>
	</div>
	<div class="text-white">
		<button><Icon icon="ion:notifcations"></Icon></button>
		<button><Icon icon="icon-park-outline:config"></Icon></button>
		<button><Icon icon="mdi:user"></Icon></button>
	
	</div>
</nav>


{@render children()}

