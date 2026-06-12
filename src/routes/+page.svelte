<script>
    import Tarjeta from "$lib/components/Tarjeta.svelte";
    import Icon from "@iconify/svelte";
    import axios from "axios";
    const respuesta = axios.get("https://leonardoapi.vercel.app/api/tracks");
</script>

<section class="flex flex-col">
    {#await respuesta}
        <div class="animate-spin text-blue-600">
            <Icon
                icon="pepicons-pop:arrow-spin-circle-filled"
                class="w-16 h-16"
            />
        </div>

        <p
            class="mt-4 text-neutral-500 uppercase tracking-widest text-xs font-bold animate-pulse"
        >
            Cargando contenido...
        </p>
    {:then respuesta}
        {#each respuesta.data.tracks as track}
            <Tarjeta cancion={track} />
        {/each}
    {/await}
</section>
