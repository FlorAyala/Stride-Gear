
const data = [

  {
    "tipo": "Zapatillas",
    "marca": "Nike",
    "modelo": "Air Jordan 1",
    "talles": ["9", "9.5", "10", "10.5", "11"],
    "color": "Negro",
    "stock": 50,
    "id": "NJ1001",
    "precio": 150,
    "descuento": 10,
    "imagen": "https://zapasgo.com/producto/air-jordan-1-negras-brillantes/554fe4e9-1.jpeg",
    "descripcion": "Las Air Jordan 1 son un icono del calzado urbano, conocidas por su estilo clásico y su comodidad. Ideales para cualquier ocasión.",
    "precio_total": 135
  },
  {
    "tipo": "Zapatillas",
    "marca": "Reebok",
    "modelo": "Classic Leather",
    "talles": ["8", "9", "10", "11"],
    "color": "Blanco",
    "stock": 30,
    "id": "RB2001",
    "precio": 80,
    "descuento": 15,
    "imagen": "https://www.dressinn.com/f/13595/135952046/reebok-classics-zapatillas-classic-leather.jpg",
    "descripcion": "Las Reebok Classic Leather son un ícono del estilo retro, con su diseño atemporal y su confort duradero. Perfectas para un look casual.",
    "precio_total": 68
  },
  {
    "tipo": "Zapatillas",
    "marca": "Adidas",
    "modelo": "Stan Smith",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Blanco",
    "stock": 20,
    "id": "AD3001",
    "precio": 90,
    "descuento": 0,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-adidas-stan-smith-ni-o-ni-a-blanca-60702846-10001efx7524001-1.jpg",
    "descripcion": "Las Adidas Stan Smith son legendarias por su diseño limpio y versátil. Son una opción elegante y moderna para cualquier ocasión.",
    "precio_total": 90
  },
  {
    "tipo": "Zapatillas",
    "marca": "Vans",
    "modelo": "Old Skool",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Negro",
    "stock": 40,
    "id": "VN4001",
    "precio": 65,
    "descuento": 20,
    "imagen": "https://www.murallasport.com/uploads/photo/image/5623/gallery_014304_6OaVuawH.JPG",
    "descripcion": "Las Vans Old Skool son un clásico del skateboarding y del estilo urbano. Su diseño resistente y suela vulcanizada las hacen ideales para el skate y la calle.",
    "precio_total": 52
  },
  {
    "tipo": "Zapatillas",
    "marca": "Converse",
    "modelo": "Chuck Taylor All Star",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Rojo",
    "stock": 25,
    "id": "CV5001",
    "precio": 55,
    "descuento": 10,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/h/chuck-taylor-all-star-core-ox-48184-200010156993001-1.jpg",
    "descripcion": "Las Converse Chuck Taylor All Star son un clásico atemporal, versátil y cómodo. Perfectas para expresar tu estilo personal en cualquier ocasión.",
    "precio_total": 49.5
  },
  {
    "tipo": "Zapatillas",
    "marca": "Puma",
    "modelo": "Suede Classic",
    "talles": ["8", "9", "10", "11"],
    "color": "Azul",
    "stock": 15,
    "id": "PM6001",
    "precio": 70,
    "descuento": 10,
    "imagen": "https://cdnd.lystit.com/photos/champssports/1e5e927a/puma-Olympian-BlueWhite-Suede-Classic.jpeg",
    "descripcion": "Las Puma Suede Classic son una leyenda del estilo urbano, con su diseño clásico y su comodidad duradera. Ideales para destacar en la calle.",
    "precio_total": 63
  },
  {
    "tipo": "Zapatillas",
    "marca": "New Balance",
    "modelo": "574",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Gris",
    "stock": 30,
    "id": "NB7001",
    "precio": 80,
    "descuento": 0,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-new-balance-574-gris-37590626-500010195301824-1.jpg",
    "descripcion": "Las New Balance 574 son reconocidas por su estilo clásico y su confort excepcional. Perfectas para un estilo casual y deportivo.",
    "precio_total": 80
  },
  {
    "tipo": "Zapatillas",
    "marca": "Under Armour",
    "modelo": "HOVR Phantom 2",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Negro",
    "stock": 20,
    "id": "UA8001",
    "precio": 150,
    "descuento": 20,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_795826-MLA71879204525_092023-O.webp ",
    "descripcion": "Las Under Armour HOVR Phantom 2 ofrecen un ajuste preciso y una amortiguación reactiva para una comodidad sin igual. Ideales para correr o entrenar.",
    "precio_total": 120
  },
  {
    "tipo": "Zapatillas",
    "marca": "ASICS",
    "modelo": "Gel-Kayano 27",
    "talles": ["8", "9", "10", "11"],
    "color": "Azul",
    "stock": 25,
    "id": "AS9001",
    "precio": 160,
    "descuento": 5,
    "imagen": "https://www.bmcsports.ie/images/asics-mens-gel-kayano-27-navy-running-shoes-p34552-103417_image.jpg",
    "descripcion": "Las ASICS Gel-Kayano 27 son conocidas por su estabilidad y amortiguación. Ideales para corredores de larga distancia.",
    "precio_total": 152
  },
  {
    "tipo": "Zapatillas",
    "marca": "Saucony",
    "modelo": "Jazz Original",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Verde",
    "stock": 35,
    "id": "SA1001",
    "precio": 70,
    "descuento": 0,
    "imagen":"https://www.botteroski.com/13513-thickbox_default/sneakers-saucony-jazz-original-donna-verde-grigio.jpg",
    "descripcion": "Las Saucony Jazz Original son una opción cómoda y versátil para el día a día. Su diseño clásico las hace adecuadas para diferentes ocasiones.",
    "precio_total": 70
  },
  {
    "tipo": "Zapatillas",
    "marca": "Brooks",
    "modelo": "Ghost 13",
    "talles": ["8", "9", "10", "11"],
    "color": "Negro",
    "stock": 15,
    "id": "BR1101",
    "precio": 130,
    "descuento": 10,
    "imagen": "https://deporteswordpress.b-cdn.net/wp-content/uploads/2020/07/zapatilla-brooks-ghost-13-deportes-evolution-4-e1594058256762.jpg",
    "descripcion": "Las Brooks Ghost 13 ofrecen una combinación de amortiguación y respuesta para un paseo suave y cómodo. Ideales para corredores neutrales.",
    "precio_total": 117
  },
  {
    "tipo": "Zapatillas",
    "marca": "Nike",
    "modelo": "React Infinity Run Flyknit",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Gris",
    "stock": 20,
    "id": "NJ1003",
    "precio": 160,
    "descuento": 15,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-nike-react-infinity-run-flyknit-2-mujer-verde-510010ct2423005-1_1_.jpg",
    "descripcion": "Las Nike React Infinity Run Flyknit ofrecen una amortiguación suave y una sujeción segura para correr con comodidad y confianza.",
    "precio_total": 136
  },
  
  {
    "tipo": "Zapatillas",
    "marca": "Adidas",
    "modelo": "Ultra Boost",
    "talles": ["8", "9", "10", "11"],
    "color": "Negro",
    "stock": 15,
    "id": "AD3002",
    "precio": 180,
    "descuento": 15,
    "imagen":  "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/tofb6ehlmikxl9ig7w0e3dwh2g26/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5",
    "descripcion": "Las Adidas Ultra Boost ofrecen un retorno de energía sin límites y una comodidad inigualable para tus carreras diarias.",
    "precio_total": 153
  },
  {
    "tipo": "Zapatillas",
    "marca": "Adidas",
    "modelo": "NMD_R1",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Azul",
    "stock": 25,
    "id": "AD3003",
    "precio": 130,
    "descuento": 10,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-adidas-nmd-r1-azul-10001egx9886001-1.jpg",
    "descripcion": "Las Adidas NMD_R1 combinan el estilo de las zapatillas de running de los 80 con la tecnología moderna. Ideales para un look casual y deportivo.",
    "precio_total": 117
  }, 
  {
    "tipo": "Zapatillas",
    "marca": "Adidas",
    "modelo": "Ultraboost 21",
    "talles": ["8", "10", "11"],
    "color": "Rosa",
    "stock": 30,
    "id": "ADU21WHPNK",
    "precio": 150,
    "descuento": 15,
    "imagen": "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/S/2/S23840_0_14.jpg",
    "descripcion": "Las Adidas Ultraboost 21 ofrecen un retorno de energía sin fin gracias a su tecnología Boost, proporcionando una sensación de ligereza en cada paso.",
    "precio_total": 135
  },
  {
    "tipo": "Zapatillas",
    "marca": "Nike",
    "modelo": "Air Max 270",
    "talles": ["8", "9", "10", "11"],
    "color": "Negro",
    "stock": 50,
    "id": "NKE270BLU",
    "precio": 120,
    "descuento": 10,
    "imagen": "https://images.stockx.com/images/Nike-Air-Max-270-Triple-Black_360_01.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1696965870",
    "descripcion": "Las zapatillas Nike Air Max 270 combinan estilo y comodidad gracias a su diseño innovador y su tecnología de amortiguación.",
    "precio_total": 108
  },
  {
    "tipo": "Zapatillas",
    "marca": "Puma",
    "modelo": "RS-X",
    "talles": ["8", "9", "10", "11"],
    "color": "Negro",
    "stock": 10,
    "id": "PM6003",
    "precio": 110,
    "descuento": 10,
    "imagen":"https://newsport.vtexassets.com/arquivos/ids/16347432-800-auto?v=638248586715030000&width=800&height=auto&aspect=true",
    "descripcion": "Las Puma RS-X combinan estilo y comodidad en un diseño retro moderno. Ideales para quienes buscan destacar en la calle con un look audaz.",
    "precio_total": 99
  },
  {
    "tipo": "Zapatillas",
    "marca": "Reebok",
    "modelo": "Nano X",
    "talles": ["8", "9", "10", "11"],
    "color": "Negro",
    "stock": 20,
    "id": "RB2002",
    "precio": 130,
    "descuento": 0,
    "imagen":"https://www.tradeinn.com/f/13758/137584837/reebok-zapatillas-nano-x.jpg",
    "descripcion": "Las Reebok Nano X son unas zapatillas versátiles diseñadas para ofrecer estabilidad y rendimiento en entrenamientos de alta intensidad.",
    "precio_total": 130
  },
  {
    "tipo": "Zapatillas",
    "marca": "Reebok",
    "modelo": "Classic Nylon",
    "talles": ["7", "8", "9", "10", "11"],
    "color": "Azul",
    "stock": 25,
    "id": "RB2003",
    "precio": 65,
    "descuento": 5,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-reebok-classic-nylon-azul-111010fv1595001-1.jpg",
    "descripcion": "Las Reebok Classic Nylon son un clásico del estilo urbano, con su diseño retro y su comodidad duradera. Ideales para combinar con cualquier look casual.",
    "precio_total": 60
  },

  {

    "tipo": "Camisetas",
    "marca": "Nike",
    "modelo": "FC Barcelona",
    "color": "Azul y Grana",
    "talla": ["S", "M", "L", "XL"],
    "stock": 100,
    "id": "ND1001",
    "precio": 80,
    "descuento": 0,
    "imagen": "https://acdn.mitiendanube.com/stores/001/312/744/products/jersey-de-futbol-del-fc-barcelona-local-2021-22-stadium-t9vlrx1-ae1cd47c7d5635f8a516292161343369-640-0.webp ",
    "descripcion": "La camiseta de fútbol del FC Barcelona, fabricada por Nike, es la misma que usan los jugadores en el campo. Con tecnología de ventilación para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Adidas",
    "modelo": "Real Madrid",
    "color": "Blanco",
    "talla": ["S", "M", "L", "XL"],
    "stock": 80,
    "id": "AD2001",
    "precio": 85,
    "descuento": 5,
    "imagen": "https://img.planetafobal.com/2013/08/real-madrid-adidas-titular-2013-2014-camiseta.jpg",
    "descripcion": "La camiseta de fútbol del Real Madrid, fabricada por Adidas, es la misma que usan los jugadores en el campo. Con tecnología de ventilación para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Puma",
    "equipo": "AC Milan",
    "color": "Negro y Rojo",
    "talla": ["S", "M", "L", "XL"],
    "stock": 70,
    "id": "PM3001",
    "precio": 75,
    "descuento": 10,
    "imagen": "https://www.futbolemotion.com/imagesarticulos/200156/grandes/camiseta-puma-ac-milan-pre-match-2023-2024-red-black-0.webp",
    "descripcion": "La camiseta de fútbol del AC Milan, fabricada por Puma, es la misma que usan los jugadores en el campo. Con tecnología de ventilación para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Nike",
    "modelo": "Paris Saint-Germain",
    "color": "Azul",
    "talla": ["S", "M", "L", "XL"],
    "stock": 90,
    "id": "ND4001",
    "precio": 90,
    "descuento": 15,
    "imagen": "https://th.bing.com/th/id/OIP.ANRR8MZmBuCLRrkNcMmHXgAAAA?rs=1&pid=ImgDetMain ",
    "descripcion": "La camiseta de fútbol del Paris Saint-Germain, fabricada por Nike, es la misma que usan los jugadores en el campo. Con tecnología de ventilación para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Canterbury",
    "modelo": "All Blacks",
    "color": "Negro",
    "talla": ["S", "M", "L", "XL"],
    "stock": 60,
    "id": "CA5001",
    "precio": 70,
    "descuento": 0,
    "imagen": "https://www.rugbyes.com/images/RWC/Nueva%20Zelandia/Camiseta_Nueva_Zelandia_All_Blacks_Rugby_2018_Gris.jpg",
    "descripcion": "La camiseta de rugby de los All Blacks, fabricada por Canterbury, es la misma que usan los jugadores en el campo. Con tecnología que absorbe la humedad para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Le Coq",
    "modelo": "Selección Argentina",
    "color": "Blanco y Celeste",
    "talla": ["XS", "S", "M", "L"],
    "stock": 45,
    "id": "MA6001",
    "precio": 60,
    "descuento": 5,
    "imagen":" https://lecoqsportif.com.ar/wp-content/uploads/2023/05/LE-COQ54257-1024x1024.jpg ",
    "descripcion": "La camiseta de vóley de la Selección Argentina, fabricada por Mikasa, ofrece comodidad y libertad de movimiento en la cancha. Con tela transpirable para mantenerte fresco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Mizuno",
    "modelo": "Selección Japonesa",
    "color": "Blanco y Rojo",
    "talla": ["XS", "S", "M", "L"],
    "stock": 40,
    "id": "MJ6002",
    "precio": 55,
    "descuento": 0,
    "imagen": "https://acdn.mitiendanube.com/stores/001/983/293/products/img_0032-1c99f0ee5102574b7417073398671717-640-0.webp",
    "descripcion": "La camiseta de vóley de la Selección Japonesa, fabricada por Mizuno, ofrece comodidad y libertad de movimiento en la cancha. Con tela transpirable para mantenerte fresco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Adidas",
    "modelo": "Boca Juniors",
    "color": "Azul y Amarillo",
    "talla": ["S", "M", "L", "XL"],
    "stock": 55,
    "id": "AB6003",
    "precio": 70,
    "descuento": 0,
    "imagen": "https://acdn.mitiendanube.com/stores/001/220/451/products/nike-jordan-xxxiii-2022-04-04t215806-2811-1098cb71fd288e298a16491210604442-640-0.png",
    "descripcion": "La camiseta de fútbol de Boca Juniors, fabricada por Adidas, es la misma que usan los jugadores en el campo. Con tecnología de ventilación para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Adidas",
    "modelo": "Colo Colo",
    "color": "Blanco y Negro",
    "talla": ["S", "M", "L", "XL"],
    "stock": 50,
    "id": "UC6004",
    "precio": 65,
    "descuento": 0,
    "imagen": "https://th.bing.com/th/id/OIP.w78AZe4a_t1ThdLdzsfk7gHaHa?rs=1&pid=ImgDetMain ",
    "descripcion": "La camiseta de fútbol de Colo Colo, fabricada por Adidas, es la misma que usan los jugadores en el campo. Con tecnología de ventilación para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Camisetas",
    "marca": "Adidas",
    "modelo": "Selección Argentina",
    "color": "Celeste y Blanco",
    "talla": ["S", "M", "L", "XL"],
    "stock": 45,
    "id": "NA6005",
    "precio": 75,
    "descuento": 10,
    "imagen": "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw036a9ee9/products/ADIB3593/ADIB3593-1.JPG",
    "descripcion": "Diseñada para los verdaderos fanáticos del fútbol y para aquellos que llevan el orgullo argentino en el corazón, esta camiseta de la selección argentina es un símbolo de pasión y tradición. Fabricada con los mejores materiales y la más alta calidad, esta camiseta ofrece comodidad y rendimiento en cada partido. Con los icónicos colores celeste y blanco, y el escudo de la AFA en el pecho, esta camiseta representa la historia y la grandeza del fútbol argentino. Ya sea en el estadio o en la calle, llevar esta camiseta es mostrar tu apoyo incondicional a la Albiceleste y a todo lo que representa el fútbol argentino.La camiseta de rugby de la Selección Argentina, fabricada por Nike, es la misma que usan los jugadores en el campo. Con tecnología que absorbe la humedad para mantenerte fresco y seco durante el juego."
  },
  {
    "tipo": "Remeras",
    "marca": "Adidas",
    "modelo": "Essentials",
    "talles": ["XS", "S", "M", "L", "XL"],
    "color": "Negro",
    "stock": 25,
    "id": "AD5001",
    "precio": 25,
    "descuento": 0,
    "descripcion": "La remera deportiva Adidas Essentials es perfecta para tu entrenamiento diario. Su tejido transpirable te mantiene fresco y seco mientras te mueves.",
    "precio_total": 25,
    "imagen": "https://acdn.mitiendanube.com/stores/088/647/products/gl3732_1_apparel_photography_front-view_white1-b352c83abdbeed1c4316509775499143-1024-1024.jpg"
  },
  {
    "tipo": "Remeras",
    "marca": "Nike",
    "modelo": "Dri-FIT",
    "talles": ["S", "M", "L", "XL"],
    "color": "Blanco",
    "stock": 30,
    "id": "NK6002",
    "precio": 35,
    "descuento": 0,
    "descripcion": "La remera deportiva Nike Dri-FIT te mantiene fresco y seco durante tus entrenamientos más intensos.",
    "precio_total": 35,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-nike-entrenamiento-dry-fit-dye-2-blanca-510020dx0965121-1.jpg "
  },
  {
    "tipo": "Remeras",
    "marca": "Under Armour",
    "modelo": "Tech",
    "talles": ["XS", "S", "M", "L", "XL"],
    "color": "Rojo",
    "stock": 20,
    "id": "UA7001",
    "precio": 30,
    "descuento": 0,
    "descripcion": "La remera deportiva Under Armour Tech ofrece un ajuste cómodo y transpirable para tus sesiones de entrenamiento.",
    "precio_total": 30,
    "imagen":"https://pacogarcia.vtexassets.com/arquivos/ids/193774-800-1067?v=638334086725930000&width=800&height=1067&aspect=true "
  },
  {
    "tipo": "Remeras",
    "marca": "Puma",
    "modelo": "Essential",
    "talles": ["S", "M", "L", "XL"],
    "color": "Azul",
    "stock": 22,
    "id": "PU8001",
    "precio": 28,
    "descuento": 5,
    "descripcion": "La remera deportiva Puma Essential es ligera y transpirable, perfecta para tus actividades deportivas diarias.",
    "precio_total": 26.6,
    "imagen": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/586985/92/fnd/ARG/fmt/png "
  },
  {
    "tipo": "Remeras",
    "marca": "Reebok",
    "modelo": "Workout",
    "talles": ["XS", "S", "M", "L", "XL"],
    "color": "Gris claro",
    "stock": 15,
    "id": "RB9001",
    "precio": 32,
    "descuento": 0,
    "descripcion": "La remera deportiva Reebok Workout ofrece comodidad y estilo para cualquier actividad física que elijas.",
    "precio_total": 32,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/1/111020gj0702001-1.jpg "
  },
  {
    "tipo": "Pantalones",
    "marca": "Nike",
    "modelo": "Tech Fleece",
    "talles": ["S", "M", "L", "XL"],
    "color": "Negro",
    "stock": 15,
    "id": "NK3001",
    "precio": 80,
    "descuento": 0,
    "descripcion": "Los pantalones deportivos Nike Tech Fleece combinan estilo moderno con comodidad excepcional.",
    "precio_total": 80,
    "imagen": "https://www.quuot.com.ar/1073-large_default/pantalon-nike-sportswear-tech-fleece.jpg "
  },
  {
    "tipo": "Pantalones",
    "marca": "Adidas",
    "modelo": "Tiro 19",
    "talles": ["XS", "S", "M", "L", "XL"],
    "color": "Azul",
    "stock": 10,
    "id": "AD4002",
    "precio": 70,
    "descuento": 10,
    "descripcion": "Los pantalones deportivos Adidas Tiro 19 ofrecen un ajuste ceñido y cómodo para entrenamientos intensos.",
    "precio_total": 63,
    "imagen": "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/ajb4sz3pq3tjxv27ouyv5x3183rm/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5 "
  },
  {
    "tipo": "Pantalones",
    "marca": "Puma",
    "modelo": "Evostripe",
    "talles": ["S", "M", "L", "XL"],
    "color": "Gris",
    "stock": 20,
    "id": "PU5001",
    "precio": 65,
    "descuento": 5,
    "descripcion": "Los pantalones deportivos Puma Evostripe ofrecen libertad de movimiento y estilo moderno para tus sesiones de entrenamiento.",
    "precio_total": 61.75,
    "imagen": "https://sporting.vtexassets.com/arquivos/ids/295047/1085814-003-1.jpg?v=637583263335730000"
  },
  {
    "tipo": "Pantalones",
    "marca": "Under Armour",
    "modelo": "Rival",
    "talles": ["S", "M", "L", "XL"],
    "color": "Negro",
    "stock": 12,
    "id": "UA6001",
    "precio": 75,
    "descuento": 0,
    "descripcion": "Los pantalones deportivos Under Armour Rival son duraderos y cómodos, ideales para cualquier actividad física.",
    "precio_total": 75,
    "imagen": "https://rossettiar.vtexassets.com/arquivos/ids/1648472/https---rossport.jpg?v=638436477316800000"
  },
  {
    "tipo": "Pantalones",
    "marca": "Reebok",
    "modelo": "Training",
    "talles": ["XS", "S", "M", "L", "XL"],
    "color": "Gris oscuro",
    "stock": 18,
    "id": "RB6001",
    "precio": 60,
    "descuento": 15,
    "descripcion": "Los pantalones deportivos Reebok Training brindan un ajuste cómodo y transpirable para tus entrenamientos diarios.",
    "precio_total": 51,
    "imagen": "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-reebok-entrenamiento-workout-gris-111020du2201001-1.jpg "
  }

]