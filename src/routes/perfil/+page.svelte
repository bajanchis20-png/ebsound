
<section class="min-h-screen flex items-center justify-center bg-[#050505] p-6">
    <div class="w-full max-w-md relative group">
        <div class="absolute -inset-0.5 bg-gradient-to-tr from-blue-600 via-blue-900 to-black rounded-3xl opacity-20 blur-lg transition duration-700"></div>
        
        <div class="relative bg-[#0a0a0c] border border-white/10 p-10 rounded-3xl shadow-2xl">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                    ¡HOLA! <br/> BIENVENIDO A <span class="text-blue-600">EBSOUND</span>
                </h2>
                <p class="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em]">Accede a tu cuenta</p>
            </div>

            <form class="space-y-6" on:submit|preventDefault>
                <div class="space-y-2">
                    <label class="text-[10px] uppercase font-bold text-neutral-400 tracking-widest pl-1">Usuario / ID</label>
                    <input 
                        type="text" 
                        placeholder="Ingresa tu ID"
                        class="w-full bg-[#141419] border border-white/5 rounded-xl p-4 text-white placeholder-neutral-600 focus:border-blue-600/50 outline-none transition-all"
                    />
                </div>

                <div class="space-y-2">
                    <label class="text-[10px] uppercase font-bold text-neutral-400 tracking-widest pl-1">Contraseña</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        class="w-full bg-[#141419] border border-white/5 rounded-xl p-4 text-white placeholder-neutral-600 focus:border-blue-600/50 outline-none transition-all"
                    />
                </div>

                <div class="text-right">
                    <a href="#" class="text-[10px] text-neutral-500 hover:text-blue-400 uppercase tracking-widest transition-colors font-bold">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <button class="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(30,64,175,0.4)] rounded-xl">
                    Iniciar Sesión
                </button>
            </form>

            <div class="mt-8 pt-6 border-t border-white/5 text-center">
                <p class="text-[10px] text-neutral-600 uppercase tracking-widest">
                    ¿No tienes una cuenta? 
                    <a href="#" class="text-blue-600 hover:text-white transition-colors font-bold ml-1">Regístrate</a>
                </p>
            </div>
        </div>
        
        <div class="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-600/50"></div>
        <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-400/50"></div>
    </div>
</section>