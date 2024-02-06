const MENU = [
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "X-React",
        price: 24.9,
        description:
          "Um hamburger tão bonito que me deu fome enquanto eu fazia esse layout para o projeto...",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "X-JavaScript",
        price: 34.9,
        description:
          "Os ingredientes desse hambúrguer mudam toda semana, então você sempre terá uma surpresa...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      {
        id: "3",
        title: "X-Cobol",
        price: 32.7,
        description:
          "Aquele hambúrguer que não podemos tirar do cardápio devido aos clientes mais antigos da hamburgueria...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      {
        id: "4",
        title: "X-Tailwind",
        price: 29.9,
        description:
          "Aquele que você não gosta de primeira, mas depois fica viciado e não consegue mais largar...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },
  // {
  //   title: "Clássicos",
  //   data: [
  //     {
  //       id: "5",
  //       title: "Classic Burger",
  //       price: 12.0,
  //       description: "Um hambúrguer clássico com carne suculenta, queijo, alface, tomate e maionese.",
  //       cover: "url_imagem_classic_burger.jpg",
  //       thumbnail: "url_miniatura_classic_burger.jpg",
  //       ingredients: ["carne de boi", "queijo cheddar", "alface", "tomate", "maionese", "pão de hambúrguer"]
  //     },
  //     {
  //       "id": "6",
  //       title: "Vegetarian Burger",
  //       price: 10.0,
  //       description: "Um hambúrguer vegetariano com base de grão-de-bico, acompanhado de queijo, alface e tomate.",
  //       cover: "url_imagem_vegetarian_burger.jpg",
  //       thumbnail: "url_miniatura_vegetarian_burger.jpg",
  //       ingredients: ["grão-de-bico", "queijo suíço", "alface", "tomate", "maionese vegana", "pão integral"]
  //     },
  //     {
  //       "id": "7",
  //       title: "BBQ Bacon Burger",
  //       price: 14.0,
  //       description: "Um hambúrguer suculento com bacon crocante, queijo defumado, alface e molho barbecue.",
  //       cover: "url_imagem_bbq_bacon_burger.jpg",
  //       thumbnail: "url_miniatura_bbq_bacon_burger.jpg",
  //       ingredients: ["carne de boi", "bacon", "queijo defumado", "alface", "molho barbecue", "pão de hambúrguer"]
  //     },
  //     {
  //       "id": "8",
  //       title: "Chicken Avocado Burger",
  //       price: 13.0,
  //       description: "Um hambúrguer de frango grelhado com abacate, alface, tomate e maionese especial.",
  //       cover: "url_imagem_chicken_avocado_burger.jpg",
  //       thumbnail: "url_miniatura_chicken_avocado_burger.jpg",
  //       ingredients: ["peito de frango", "abacate", "alface", "tomate", "maionese de ervas", "pão de hambúrguer integral"]
  //     }
  //   ]
  // },
  {
    title: "Sobremesa",
    data: [
      {
        id: "9",
        title: "Sorvete com Brownie",
        price: 18.9,
        description:
          "Uma sobremesa deliciosa para saborear. Escolha o sorvete e a calda que desejar...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Bola de sorvete a sua escolha",
          "Escolha sua calda;",
        ],
      },
      {
        id: "10",
        title: "Cupcake",
        price: 22.9,
        description:
          "Um delicioso Cupcake para adoçar. Escolha o sabor que você gosta...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "11",
        title: "Hmmm, coquinha!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
