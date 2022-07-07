const Category = [
  {
    name: "fast foods",
    items: [
      {
        id: 1,
        name: "Margherita",
        price: 449,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.7d3b623ceb66e87fc7247fa81c6cfdc1.1.jpg?width=800",
      },
      {
        id: 2,
        name: "Tandoori Paneer",
        price: 529,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.954d93452557209bebe0b7f49e776ba2.1.jpg?width=522",
      },
      {
        id: 3,
        name: "Veggie Supreme",
        price: 569,
        quantity: 1,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.403f5e6cf9abb29247a97732c8aae860.1.jpg?width=800",
      },
      {
        id: 4,
        name: "Double Paneer Supreme",
        price: 569,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.9d215eb865735ce44225317997153b73.1.jpg?width=522",
      },
      {
        id: 4,
        name: "Veggie Kebab Surprise",
        veg: true,
        price: 529,
        description:
          "Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
        quantity: 1,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.6895b792bfdd274d1bb822ff8dc1a69b.1.jpg?width=522",
      },
      {
        id: 5,
        name: "Chicken Supreme",
        veg: false,
        price: 629,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.f29fa58b7f2a3ec307b6c0b44411f900.1.jpg?width=522",
      },
      {
        id: 6,
        name: "Chicken Tikka Supreme",
        price: 629,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka-supreme.d118fcb7a45549b90fc6313f8b45a9cf.1.jpg?width=522",
      },
      {
        id: 7,
        name: "Triple Chicken Feast",
        price: 629,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.21e57422a5579843b4722a067fbda8ca.1.jpg?width=522",
      },
      {
        id: 8,
        name: "Chicken Tikka",
        price: 569,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.4e3ef28838886936da1a2280543cfae8.1.jpg?width=522",
      },
      {
        id: 9,
        name: "Double Chicken Sausage",
        price: 529,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.27693ba787c68a763bb3f0e397de0019.1.jpg?width=522",
      },
      {
        id: 10,
        name: "Spiced Chicken Meatballs",
        price: 469,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.fcb515f6af388d6e30df81ca2968798c.1.jpg?width=522",
      },
      {
        id: 11,
        name: "Double Cheese",
        price: 419,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.f8ac8046d97de45670aa7d41b5cf8db6.1.jpg?width=522",
      },
      {
        id: 12,
        name: "Chicken Pepper Crunch",
        price: 559,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepper-crunch.ad90bc84672d7cd34351745f4b77fe9c.1.jpg",
      },
      {
        id: 13,
        name: "Italian Chicken Feast",
        price: 659,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/italian-chicken-feast.1ccf57b605633e47ca4c6455340a5d2e.1.jpg",
      },
      {
        id: 14,
        name: "Corn & Cheese",
        price: 19,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.4f5188ab4391cb45d4a4ed9e849f1e32.1.jpg",
      },
      {
        id: 15,
        name: "Tandoori Onion",
        price: 19,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-onion.27d62d7a89f3fd2bb2eb2b9f91d6223b.1.jpg",
      },
      {
        id: 16,
        name: "Chicken Pepperoni",
        price: 29,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-pepperoni.59a23d539b3675012fadb9e98b043216.1.jpg",
      },
      {
        id: 17,
        name: "Chicken N Corn Delight",
        price: 29,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-n-corn-delight.bc0460bc62d23a77e9db087010bcf00a.1.jpg",
      },
      {
        id: 18,
        name: "Farmers Pick",
        price: 29,
        img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/farmers-pick.fcd8cacee43fb94e173e5f04fdf2c2b5.1.jpg",
      },
    ],
  },
  {
    name: "vegetables",
    items: [
      {
        id: 1,
        name: "Fresh Cilantro",
        img: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&w=256&q=100",
        price: 25,
      },
      {
        id: 2,
        name: "Organic Green Cabbage",
        img: "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=256&q=100",
        price: 2,
      },
      {
        id: 3,
        name: "Leafy Romaine Mixed",
        image:
          "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-2.png&w=256&q=100",
        price: 3,
      },
      {
        id: 4,
        name: "Calavo Fresh Avocados ",
        image:
          "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8.png&w=256&q=100",
        price: 25,
      },
      {
        id: 5,
        name: "Organic Girl Lettuce",
        image:
          "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-4.png&w=256&q=100",
        price: 1.5,
      },
      {
        id: 6,
        name: "Organic Spring Mix",
        image:
          "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-5.png&w=256&q=100",
        price: 2.6,
      },
      {
        id: 7,
        name: "Fresh Organic Broccoil",
        image:
          "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&w=256&q=100",
        price: 5,
      },
      {
        id: 8,
        name: "Fresh Express Iceberg Garden Salad Blend",
        image:
          "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3.png&w=256&q=100",
        price: 25,
      },
      {
        id: 9,
        name: "rganic Firm Fresh White Lettuce",
        image:
          "https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&w=256&q=100",
        price: 3,
      },
      {
        id: 10,
        name: "Green Gaint Peas",
        image:
          "	https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12.png&w=256&q=100",
        price: 2,
      },
    ],
  },
  {
    name: "meals",
    items: [
      {
        id: 1,
        name: "Crock Pot Roast",
        price: 29,
        imageURL:
          "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
      },
      {
        id: 2,
        name: "Roasted Asparagus",
        price: 30,
        imageURL:
          "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
      },
      {
        id: 3,
        name: "Curried Lentils and Rice",
        price: 22,
        imageURL:
          "http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg",
      },
      {
        id: 4,
        name: "Big Night Pizza",
        price: 15,
        imageURL:
          "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg",
      },
      {
        id: 5,
        name: "Cranberry and Apple Stuffed Acorn Squash Recipe",
        price: 18,
        imageURL:
          "http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg",
      },
      {
        id: 6,
        name: "Mic's Yorkshire Puds",
        price: 10,
        imageURL:
          "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg",
      },
      {
        id: 7,
        name: "Old-Fashioned Oatmeal Cookies",
        price: 40,
        imageURL:
          "http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg",
        originalURL: "#",
      },
      {
        id: 8,
        name: "Blueberry Oatmeal Squares",
        price: 12,
        imageURL:
          "http://www.canadianliving.com/img/photos/biz/blueberry-oatmeal-squares5801359401371.jpg",
      },
      {
        id: 9,
        name: "Curried chicken salad",
        price: 23,
        imageURL:
          "http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg",
      },
    ],
  },
  {
    name: "drinks",
    items: [
      {
        id: 1,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_1.jpg",
        name: "Americano",
        price: 45,
      },
      {
        id: 2,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_2.jpg",
        name: "Angel Face",
        price: 56,
      },
      {
        id: 3,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_3.jpg",
        name: "Aviation",
        price: 35,
      },
      {
        id: 4,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_4.jpg",
        name: "Bacardi",
        price: 52,
      },
      {
        id: 5,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_16.jpg",
        name: "Banana Daiquiri",
        price: 23,
      },
      {
        id: 6,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_5.jpg",
        name: "Barracuda",
        price: 67,
      },
      {
        id: 7,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_6.jpg",
        name: "Between The Sheets",
        price: 56,
      },
      {
        id: 8,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_7.jpg",
        name: "Black Russian",
        price: 76,
      },
      {
        id: 9,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_8.jpg",
        name: "Bramble",
        price: 125,
      },
      {
        id: 10,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_9.jpg",
        name: "Bronks",
        price: 14,
      },
      {
        id: 11,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_86.jpg",
        name: "Caipirinha",
        price: 64,
      },
      {
        id: 12,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_400.jpg",
        name: "Caipiroska",
        price: 15,
      },
      {
        id: 13,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_401.jpg",
        name: "Caipiroska Strawberry",
        price: 45,
      },
      {
        id: 14,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_11.jpg",
        name: "Campari Orange",
        price: 75,
      },
      {
        id: 15,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_402.jpg",
        name: "Cape Codder",
        price: 64,
      },
      {
        id: 16,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_12.jpg",
        name: "Casino",
        price: 16,
      },
      {
        id: 17,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_13.jpg",
        name: "Cosmopolitan",
        price: 54,
      },
      {
        id: 18,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_14.jpg",
        name: "Cuba Libre",
        price: 23,
      },
      {
        id: 19,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_403.jpg",
        name: "Cuban Manhattan",
        price: 27,
      },
      {
        id: 20,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_15.jpg",
        name: "Daiquiri",
        price: 46,
      },
      {
        id: 21,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_18.jpg",
        name: "Daiquiri Hemingway",
        price: 63,
      },
      {
        id: 22,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_17.jpg",
        name: "Daiquiri Strawberry",
        price: 37,
      },
      {
        id: 23,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_19.jpg",
        name: "Dark 'N' Stormy",
        price: 85,
      },
      {
        id: 1,
        img: "http://cocktail.itsplanet.eu/img/cocktail/2017_20.jpg",
        name: "Derby",
        price: 17,
      },
    ],
  },
];
export default Category;
