let CancionActual = $state()


export const obtenercancion = () => {return CancionActual}


export const CambiarCancion = (cancion) => {CancionActual=cancion}