import React from "react";

const products = {
  Combos: [
    { name: "Black Label + 6 Monster", price: "$2150", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Gold Label + Jager + 8 Monster", price: "$4050", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Red Label + Jager + Chandon + Fernet", price: "$2890", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Gold Label + 6 Monster", price: "$3190", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Chandon + 6 Monster", price: "$1520", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "2 Absolut 1L", price: "$1850", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Red Label + Jager + 12 RedBull", price: "$2490", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Absolut 1L + 6 Monster", price: "$1450", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Red Label + Jager + 6 Monster", price: "$2000", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Jager + Fernet + 6 Monster", price: "$1850", img: "PEGAR_LINK_PNG_AQUI" },

    { name: "Black + Jager + 8 Monster", price: "$3050", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Red Label + Jager + 9 Monster", price: "$2350", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Red Label + Jager + 6 Monster", price: "$2000", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Jack Daniels (Miel/Manzana/N7) + 6 Monster", price: "$1950", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "2 Red Label + Jager + 12 Monster", price: "$3350", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Black Label + Absolut 1L + 8 Monster", price: "$3300", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Jager + 6 Monster", price: "$1250", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Red Label + 6 Monster", price: "$1340", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "2 Jager + 6 Monster", price: "$1900", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "2 Red Label + 6 Monster", price: "$2050", img: "PEGAR_LINK_PNG_AQUI" }
  ],
   Whisky: [
    { name: "Blue Label 750ml", price: "$10.500", img: "https://thechamber.my/files/product_img/973/Johnnie-Walker-Blue-Label.png" },
    { name: "Green Label 750ml", price: "$3.500", img: "https://www.wineandbeyond.ca/cdn/shop/files/1002369_1.png?v=1745942779" },
    { name: "Gold Label 750ml", price: "$2.700", img: "https://licoresinmemorial.com/wp-content/uploads/2023/04/335641-800-auto.png" },
    { name: "Double Black 1L", price: "$2.100", img: "https://clink.ph/cdn/shop/products/WEB-johnnie-walker-double-black.png?v=1750646497" },
    { name: "Black Label 1L", price: "$1.650", img: "https://tadadelivery.com.uy/cdn/shop/files/whisky-johnnie-walker-black-label-750-ml-Photoroom.png?v=1748011504" },
    { name: "Red Label 1L", price: "$800", img: "https://cdn.awsli.com.br/800x800/2649/2649600/produto/234522026/jw-red-label---750ml--2xw11xihix.png" },
    { name: "Buchanans Deluxe", price: "$1.900", img: "https://cdn.awsli.com.br/2500x2500/2649/2649600/produto/234522045/buchanan-s-deluxe-aged-12-years---1-0l-x-12---sc-h4p3cmcyws.png" },
    { name: "Chivas Regal 12 años 1L", price: "$1.650", img: "https://www.boozeit.com.au/cdn/shop/products/382072-1.png?v=1680681204" },
    { name: "Jack Daniels N7 1L", price: "$1.350", img: "https://desaonline.vtexassets.com/arquivos/ids/160621/jack-n7-1L_Mesa-de-trabajo-1.png?v=638291751625830000" },
    { name: "Jack Daniels Apple 1L", price: "$1.350", img: "https://cheers.com.np/uploads/products/76307263224386160728669066808496613407061.png" },
    { name: "Jack Daniels Honey 1L", price: "$1.350", img: "https://alcomarket.md/public/products/thumbs/978b40e376cd1463440945d63d686a2f.png" },
    { name: "The Famous Grouse 1L", price: "$1.100", img: "https://cavatzortzatos.gr/wp-content/uploads/2024/05/The-Famous-Grouse-1L.png" },
    { name: "Jameson 1L", price: "$950", img: "https://tadadelivery.com.uy/cdn/shop/files/jameson-botella-Photoroom.png?v=1748007089" }
  ],
  Vodka: [
    { name: "Absolut 1L", price: "$990", img: "https://cdn11.bigcommerce.com/s-x3kq5bcr0e/images/stencil/608x608/products/11399/6975/Absolut_Vodka_1L-1__11832.1739697446.png?c=1" },
    { name: "Absolut Peach 1L", price: "$990", img: "https://assets.liquidcommerce.co/catalog/images/3693.png" },
    { name: "Absolut Raspberry 1L", price: "$990", img: "https://vinosylicores.com/cdn/shop/files/Absolut-Raspberri-750ml-Front-Standard-Transparent-Background-LR.png?v=1751664461&width=1214" },
    { name: "Absolut Mango 1L", price: "$990", img: "https://winevins.com/cdn/shop/files/Absolut_Mango_808655a1-7718-40e5-a171-2a8a8527225d_1024x1024.png?v=1743366942" },
    { name: "Smirnoff 750ml", price: "$500", img: "https://www.pngplay.com/wp-content/uploads/15/Smirnoff-Vodka-PNG-Free-File-Download.png" },
    { name: "SKY Vodka", price: "$570", img: "https://canillalibre.uy/wp-content/uploads/2021/04/3282CE91-AC1D-46EF-B50C-7ECF98F84A0B.png" }
  ],
  Licores_y_Ron: [
    { name: "Jagermeister 750ml", price: "$690", img: "https://tadadelivery.com.uy/cdn/shop/files/jager-Photoroom.png?v=1748005695" },
    { name: "Aperol 750ml", price: "$650", img: "https://distribuidoramym2.uy/wp-content/uploads/2025/02/Diseno-sin-titulo-31.png" },
    { name: "Tequila Jose Cuervo Gold 750ml", price: "$890", img: "https://clink.ph/cdn/shop/products/WEB-jose-cuervo-especial-gold.png?v=1750646196" },
    { name: "Ron Bacardi Carta de Oro 750ml", price: "$640", img: "https://tadadelivery.com.uy/cdn/shop/files/CEPAS_BOTELLAS-04_819f559b-f963-42c0-9e7e-58cd46f6004f-Photoroom.png?v=1748009824&width=530" },
    { name: "Ron Capitan Morgan 750ml", price: "$650", img: "https://distribuidoramym2.uy/wp-content/uploads/2025/02/Diseno-sin-titulo-66.png" },
    { name: "Ron Carabelas 1L", price: "$390", img: "https://distribuidoramym2.uy/wp-content/uploads/2025/02/blanco-20.png" }
  ],
  Gin: [
    { name: "Bombay 750ml", price: "$800", img: "https://cachi.uy/wp-content/uploads/Gin_Bombay_Sapphire_1.png" },
    { name: "Tanqueray 750ml", price: "$790", img: "https://tadadelivery.com.uy/cdn/shop/files/Gintanqueray-Photoroom.png?v=1748010321&width=1000" },
    { name: "Beefeater Naranja 750ml", price: "$780", img: "https://ik.imagekit.io/cvygf2xse/beefeatergin/wp-content/uploads/2022/10/Beefeater-Blood-Orange-Gin-front-view-aspect-ratio-189-599-7.png?tr=q-80,w-340" },
    { name: "Beefeater Frutilla 750ml", price: "$780", img: "https://www.beefeatergin.com/wp-content/uploads/2023/01/Beefeater-Pink-Strawberry-Gin-aspect-ratio-320-540.png" },
    { name: "Gordons 750ml", price: "$590", img: "https://distribuidoramym2.uy/wp-content/uploads/2025/02/blanco-18.png" }
  ],
  Fernet: [
    { name: "Fernet Branca 750ml", price: "$590", img: "https://tadadelivery.com.uy/cdn/shop/files/SKU_Branca_975.png?v=1715958472" }
    { name: "Fernet 1882 750ml", price: "$430", img: "https://distribuidoramym2.uy/wp-content/uploads/2025/02/Diseno-sin-titulo-52.png" } 
  ],
  Vinos_y_Espumantes: [
    { name: "Vino Santa Teresa 1L", price: "$133", img: "https://distribuidoramym2.uy/wp-content/uploads/2025/02/red-blend-7.png" },
    { name: "Chandon", price: "$930", img: "https://vinotecamasis.com.ar/wp-content/uploads/2025/04/Espumante-Chandon-Extra-Brut.png" }
  ]
};

export default function JDrinksCatalog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950 text-white">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
          JDRINKS - Catálogo 2026
        </h1>
      </header>

      <div className="px-6 space-y-16">
        {Object.entries(products).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-orange-500 inline-block pb-2">
              {category.replace(/_/g, " ")}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
              {items.map((product, index) => (
                <div
                  key={index}
                  className="bg-black/60 rounded-2xl shadow-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-orange-500 flex flex-col items-center"
                >
                  <div className="w-full h-48 bg-black/40 rounded-xl flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
                  <p className="text-2xl text-yellow-400 font-extrabold mt-2">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="text-center py-10 mt-16 border-t border-orange-500">
        <p className="text-xl font-semibold">Pedidos y consultas: 094 508 989</p>
      </footer>
    </div>
  );
}
