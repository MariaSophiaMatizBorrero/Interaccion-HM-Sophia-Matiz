const { createApp, ref, computed } = Vue;
 
createApp({
  setup() {
    const nueva = ref('');
 
    const tareas = ref([ ]);
 
    let siguienteId = 4;
 
    function agregar() {
      const texto = nueva.value.trim();
      if (!texto) return;
      tareas.value.push({ id: siguienteId++, texto, hecho: false });
      nueva.value = '';
    }
 
    function eliminar(id) {
      tareas.value = tareas.value.filter(t => t.id !== id);
    }
 
    function limpiarCompletadas() {
      tareas.value = tareas.value.filter(t => !t.hecho);
    }
 
    const pendientes  = computed(() => tareas.value.filter(t => !t.hecho).length);
    const completadas = computed(() => tareas.value.filter(t =>  t.hecho).length);
 
    return {
      nueva,
      tareas,
      agregar,
      eliminar,
      limpiarCompletadas,
      pendientes,
      completadas,
    };
  },
}).mount('#app');