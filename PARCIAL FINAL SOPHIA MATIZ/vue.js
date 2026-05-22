
const { createApp, ref, computed } = Vue;

createApp({

  setup() {


    const carrito = ref([]);
    const mostrar_carrito = ref(false);

    const productos = ref([
      {
        id: 1,
        nombre: 'Vitamina C 1000mg',
        descripcion: 'Refuerza tu sistema inmune con antioxidantes naturales.',
        precio: 28900,
        categoria: 'Vitaminas',
        imagen: 'https://thfvnext.bing.com/th/id/OIP.obGP6qHsh4ovzed4MDbrQQHaHa?w=188&h=188&c=7&r=0&o=7&cb=thfvnextfalcon&pid=1.7&rm=3'
      },
      {
        id: 2,
        nombre: 'Ibuprofeno 400mg',
        descripcion: 'Antiinflamatorio y analgésico de acción rápida.',
        precio: 12500,
        categoria: 'Medicamentos',
        imagen: 'https://calox.com/wp-content/uploads/2022/12/Ibuprofeno-400.png'
      },
      {
        id: 3,
        nombre: 'Crema Hidratante SPF50',
        descripcion: 'Hidratación profunda con protección solar diaria.',
        precio: 45000,
        categoria: 'Cuidado personal',
        imagen: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2022/03/09/16468624841626.jpg'
      },
      {
        id: 4,
        nombre: 'Omega 3 Fish Oil',
        descripcion: 'Cuida tu corazón y función cerebral con ácidos grasos.',
        precio: 38000,
        categoria: 'Vitaminas',
        imagen: 'https://i5.walmartimages.com/seo/Spring-Valley-Omega-3-Fish-Oil-Soft-Gels-1000-mg-180-Count_72877e66-f932-436e-83b1-1a411b07c47b.f62bb527ea41021c88b62bc29f3730f2.jpeg'
      },
      {
        id: 5,
        nombre: 'Termómetro Digital',
        descripcion: 'Lectura rápida y precisa en menos de 10 segundos.',
        precio: 35000,
        categoria: 'Equipos',
        imagen: 'https://thfvnext.bing.com/th/id/OIP.uuOcezbzkaDYN8C0HxBFCgHaEi?w=311&h=190&c=7&r=0&o=7&cb=thfvnextfalcon&pid=1.7&rm=3'
      },
      {
        id: 6,
        nombre: 'Paracetamol 500mg',
        descripcion: 'Alivio del dolor y la fiebre. Suave con el estómago.',
        precio: 9800,
        categoria: 'Medicamentos',
        imagen: 'https://th.bing.com/th/id/R.0af137ff71d67291c3a22b80269315b6?rik=JHthSkHV%2bPth9g&riu=http%3a%2f%2fimages-its.chemistdirect.co.uk%2fParacetamol-Capsule-500mg-10478.jpg%3fo%3dFCLhOiBNj2TmnCV7ppjbDc6DE3oj%26V%3dTn%24L&ehk=Un67MnAKwwFwftOOff9wMRBTVsZX%2f0ByavrmPg6hgMY%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        id: 7,
        nombre: 'Dolex',
        descripcion: 'Alivio de los sintomas de la gripa.',
        precio: 15000,
        categoria: 'Medicamentos',
        imagen: 'https://thfvnext.bing.com/th/id/OIP.ReYRR1oZuZhA0BDWArDDHQHaHa?w=218&h=218&c=7&r=0&o=7&cb=thfvnextfalcon&pid=1.7&rm=3'
      },
      {
        id: 8,
        nombre: 'Dolex Forte',
        descripcion: 'Alivio de los sintomas de la gripa.',
        precio: 18000,
        categoria: 'Medicamentos',
        imagen: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3676446-1000-1000/7703363006346.jpg?v=637438148134670000'
      },
      {
        id: 9,
        nombre: 'Fisiocrem',
        descripcion: 'Alivio de dolores musculares',
        precio: 15000,
        categoria: 'Medicamentos',
        imagen: 'https://i.blogs.es/35ee37/fisiocrem/1366_2000.png'
      },
      {
        id: 10,
        nombre: 'Pulsométro',
        descripcion: 'Ayuda a ver el pulso cardiaco',
        precio: 80000,
        categoria: 'Equipos',
        imagen: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/ba72288d-1d70-46e5-bfaf-697f31416893.e53ff17c2bef9361e61d92f6e97dd4f7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
    
      },
      {
        id: 11,
        nombre: 'Jabon Cetaphil',
        descripcion: 'Jabón con Limpieza Suave para piel grasa',
        precio: 15000,
        categoria: 'Cuidado personal',
        imagen: 'https://tse1.mm.bing.net/th/id/OIP.7F7aLVWlezOCqGcJ1PxqiQHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3',     
      },
      {
        id: 12,
        nombre: 'Muletas',
        descripcion: 'Dispositivos de asistencia que ayudan a caminar y a mantener el equilibrio cuando una pierna está lesionada o débil.',
        precio: 150000,
        categoria: 'Equipos',
        imagen: 'https://tse1.mm.bing.net/th/id/OIP.BprtA98Hk8bRji14p-RYNwHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3',    
      },
      {
        id: 13,
        nombre: 'Pañales de bebe',
        descripcion: 'Prenda absorbente que permite contener los desechos de orina y heces, utilizada principalmente por bebés y personas con incontinencia.',
        precio: 7000,
        categoria: 'Cuidado personal',
        imagen: 'https://cocomamis.com/wp-content/uploads/2023/02/panales-bebe.png',     
      },
      {
        id: 14,
        nombre: 'vick vaporub',
        descripcion: 'Alivia la congestion general.',
        precio: 1500,
        categoria: 'Cuidado personal',
        imagen: 'https://i5.walmartimages.com/asr/531816ef-3bcc-4da4-a0f5-d14381cf01d5.9335b9b25ab0f2cfa47ed090ddabf225.jpeg',     
      },
    ]);


   
    const categorias = ref(['Todos', 'Vitaminas', 'Medicamentos', 'Cuidado personal', 'Equipos']);

    const categoria_activa = ref('Todos');


    const productos_filtrados = computed(() => {
      if (categoria_activa.value === 'Todos') return productos.value;
      return productos.value.filter(p => p.categoria === categoria_activa.value);
    });

    const total_items = computed(() => {
      return carrito.value.reduce((suma, item) => suma + item.cantidad, 0);
    });


    const total_precio = computed(() => {
      return carrito.value.reduce((suma, item) => suma + (item.precio * item.cantidad), 0);
    });


    function agregar_al_carrito(producto) {
      const existente = carrito.value.find(item => item.id === producto.id);

      if (existente) {
        existente.cantidad++;
      } else {
        carrito.value.push({ ...producto, cantidad: 1 });
      }

      mostrar_carrito.value = true;
    }


   
    function cambiar_cantidad(item, delta) {
      item.cantidad += delta;
      if (item.cantidad <= 0) {
        const idx = carrito.value.indexOf(item);
        carrito.value.splice(idx, 1);
      }
    }


   
    return {
      carrito,
      mostrar_carrito,
      productos,
      categorias,
      categoria_activa,
      productos_filtrados,
      total_items,
      total_precio,
      agregar_al_carrito,
      cambiar_cantidad,
    };
  }

}).mount('#app');
