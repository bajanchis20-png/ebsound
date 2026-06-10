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


<div class="group flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer border border-transparent hover:border-gray-700">
    <div class="flex items-center gap-4">
        <img 
            src="/musica.webp" 
            alt="Portada del álbum" 
            class="w-14 h-14 rounded-md shadow-lg object-cover"
        />
        <div class="flex flex-col">
            <h3 class="text-white font-medium text-sm truncate max-w-[200px]">
                {cancion.title}
            </h3>
            <p class="text-gray-400 text-xs hover:text-white transition-colors">
                {cancion.album.title}
            </p>
        </div>
    </div>

    <button class="text-gray-400 hover:text-pink-500 transition-all duration-300 p-2 hover:scale-110">
        <Icon icon="mdi:heart" class="text-xl" />
    </button>
</div>
