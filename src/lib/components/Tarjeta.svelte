<script>
    import { CambiarCancion } from "$lib/state/cancion-actual.svelte";
    import Icon from "@iconify/svelte";

    const { cancion } = $props();

    const cambiar = () => {
        CambiarCancion(cancion)
    }
</script>
<button onclick={cambiar} class="w-full text-left group">
    <div
        class="flex items-center justify-between p-3 rounded-xl border transition-all duration-300 
               bg-gray-900/40 border-white/5 
               hover:bg-gray-900/80 hover:border-blue-500/30 
               hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
    >
        <div class="flex items-center gap-4">
            <img
                src={cancion.album.image}
                alt="Portada del álbum"
                class="w-14 h-14 rounded-lg object-cover ring-1 ring-white/10 shadow-lg"
            />
            <div class="flex flex-col gap-0.5">
                <h3 class="text-gray-100 font-semibold text-sm truncate max-w-[200px]">
                    {cancion.title}
                </h3>
                <p class="text-gray-500 text-[11px] font-medium uppercase tracking-wider">
                    {cancion.album.title}
                </p>
            </div>
        </div>
    
        <div class="text-gray-600 group-hover:text-pink-500 transition-all duration-300 p-2 opacity-0 group-hover:opacity-100">
            <Icon icon="mdi:heart" class="text-xl" />
        </div>
    </div>
</button>
