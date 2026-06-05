<script>
    import Icon from "@iconify/svelte";

    const cancion = {
        id: '1',
        title: "inevitable",
        album: {
            title: "Pies Desclazos",
            image: {
                url: "",
            },
        },
        artist: {
            name: "Shakira",
            image: {
                url: "",
            },
        },
        audio: {
            url: "",
        },
    }
</script>


<div class=" bg-gray-950 text-white p-4 flex justify-between items-center">
    <div class="flex gap-4 items-center">
        <img src="/musica.webp" alt="" class="w-24">
        <div class="" >
            <p>{cancion.title}</p>
            <p class="">{cancion.album.title}</p>
        </div>
    </div>
    <div>
        <Icon icon="mdi:heart"></Icon>
    </div>
</div>