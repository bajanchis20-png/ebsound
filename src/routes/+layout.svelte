<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<div>
		<img src="" alt="">
	</div>
	<div>
		<a href="/">Home</a>
		<a href="/library">Library</a>
		<a href="/visualizer">Visualizer</a>
		<a href="/buddies">Buddies</a>
	</div>
	<div>
		<button><img src="" alt=""></button>
		<button><img src="" alt=""></button>
		<button><img src="" alt=""></button>
	</div>
</nav>

{@render children()}

