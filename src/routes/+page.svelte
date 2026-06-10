<script>
    import Tarjeta from "$lib/components/Tarjeta.svelte";
    import axios from "axios";
    const respuesta = axios.get("https://leonardoapi.vercel.app/api/tracks");
</script>

<section class="flex flex-col">
    {#await respuesta}
        respuesta es desarrollo
    {:then respuesta}
        {#each respuesta.data.tracks as track}
            <Tarjeta cancion={track} />
        {/each}
    {/await}
</section>
