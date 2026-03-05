import React from "react";

const products = {
  Combos: [
    { name: "2 Black Label", price: "$3190", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "3 Jager", price: "$2000", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "3 Red Label", price: "$2200", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Red Label + 12 Monster", price: "$1900", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Double Black + 6 Monster", price: "$2600", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Green Label + 6 Monster", price: "$4050", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "2 Chivas Regal", price: "$3190", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "2 Beefeater (Frutilla/Durazno)", price: "$1500", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "2 Fernet + 2 Coca 3L", price: "$1560", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Rojo + Coca 3L", price: "$990", img: "PEGAR_LINK_PNG_AQUI" }
  ],
  Whisky: [
    { name: "Blue Label 750ml", price: "$10.500", img: "https://e7.pngegg.com/pngimages/718/1015/png-clipart-blended-whiskey-scotch-whisky-wine-distilled-beverage-wine-distilled-beverage-label-thumbnail.png" },
    { name: "Green Label 750ml", price: "$3.500", img: "https://www.wineandbeyond.ca/cdn/shop/files/1002369_1.png?v=1745942779" },
    { name: "Gold Label 750ml", price: "$2.700", img: "https://licoresinmemorial.com/wp-content/uploads/2023/04/335641-800-auto.png" },
    { name: "Double Black 1L", price: "$2.100", img: "https://clink.ph/cdn/shop/products/WEB-johnnie-walker-double-black.png?v=1750646497" },
    { name: "Black Label 1L", price: "$1.650", img: "https://tadadelivery.com.uy/cdn/shop/files/whisky-johnnie-walker-black-label-750-ml-Photoroom.png?v=1748011504" },
    { name: "Red Label 1L", price: "$800", img: "https://cdn.awsli.com.br/800x800/2649/2649600/produto/234522026/jw-red-label---750ml--2xw11xihix.png" },
    { name: "Buchanans Deluxe", price: "$1.900", img: "https://i.pinimg.com/736x/a9/ba/93/a9ba93d63276356ba5fe3d6f2a312f70.jpg" },
    { name: "Chivas Regal 12 años 1L", price: "$1.650", img: "https://www.boozeit.com.au/cdn/shop/products/382072-1.png?v=1680681204" },
    { name: "Jack Daniels N7 1L", price: "$1.350", img: "https://desaonline.vtexassets.com/arquivos/ids/160621/jack-n7-1L_Mesa-de-trabajo-1.png?v=638291751625830000" },
    { name: "Jack Daniels Apple 1L", price: "$1.350", img: "https://cheers.com.np/uploads/products/76307263224386160728669066808496613407061.png" },
    { name: "Jack Daniels Honey 1L", price: "$1.350", img: "https://alcomarket.md/public/products/thumbs/978b40e376cd1463440945d63d686a2f.png" },
    { name: "The Famous Grouse 1L", price: "$1.100", img: "https://cavatzortzatos.gr/wp-content/uploads/2024/05/The-Famous-Grouse-1L.png" },
    { name: "Jameson 1L", price: "$950", img: "https://tadadelivery.com.uy/cdn/shop/files/jameson-botella-Photoroom.png?v=1748007089" }
  ],
  Vodka: [
    { name: "Absolut 1L", price: "$990", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Absolut Peach 1L", price: "$990", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Absolut Raspberry 1L", price: "$990", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Absolut Mango 1L", price: "$990", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Smirnoff 750ml", price: "$500", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "SKY Vodka", price: "$570", img: "PEGAR_LINK_PNG_AQUI" }
  ],
  Licores_y_Ron: [
    { name: "Jagermeister 750ml", price: "$690", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Aperol 750ml", price: "$650", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Tequila Jose Cuervo Gold 750ml", price: "$890", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Ron Bacardi Carta de Oro 750ml", price: "$640", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Ron Capitan Morgan 750ml", price: "$650", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Ron Carabelas 1L", price: "$390", img: "PEGAR_LINK_PNG_AQUI" }
  ],
  Gin: [
    { name: "Bombay 750ml", price: "$800", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Tanqueray 750ml", price: "$790", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Beefeater Naranja 750ml", price: "$780", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Beefeater Frutilla 750ml", price: "$780", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Gordons 750ml", price: "$590", img: "PEGAR_LINK_PNG_AQUI" }
  ],
  Fernet: [
    { name: "Fernet Branca 750ml", price: "$590", img: "PEGAR_LINK_PNG_AQUI" }
  ],
  Vinos_y_Espumantes: [
    { name: "Vino Rosado Santa Teresa 1L", price: "$133", img: "PEGAR_LINK_PNG_AQUI" },
    { name: "Chandon", price: "$930", img: "PEGAR_LINK_PNG_AQUI" }
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
                  <div className="w-full aspect-square bg-black/40 rounded-xl flex items-center justify-center p-6">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-bold" className="mt-4 text-lg font-bold">{product.name}</h3>
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
