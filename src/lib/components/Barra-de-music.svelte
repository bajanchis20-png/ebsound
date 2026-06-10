<script>
import {obtenercancion} from '$lib/state/cancion-actual.svelte'
    let cancionActual = $derived(obtenercancion())
</script>
<div>
    <audio src={cancionActual?.audio} controls autoplay></audio>
</div> 