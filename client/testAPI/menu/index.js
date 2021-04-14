const pizzaToppings = [
  {
    type: "cheeses",
    toppings: ["mozzarella", "parmesan", "chedder"],
  },
  {
    type: "meats",
    toppings: ["pepperoni", "sausage", "bacon"],
  },
  {
    type: "veggies",
    toppings: ["onion", "mushroom", "green pepper", "black olive"],
  },
  {
    type: "spices",
    toppings: ["salt", "pepper", "italian seasoning", "basil", "chives"],
  },
];

const sideToppings = [
  {
    type: "cheeses",
    toppings: ["mozzarella", "parmesan", "chedder"],
  },
  {
    type: "meats",
    toppings: ["chili", "bacon"],
  },
  {
    type: "condiments",
    toppings: [
      "mustard",
      "ketchup",
      "mayonaise",
      "garlic sauce",
      "marinara sauce",
    ],
  },
  {
    type: "spices",
    toppings: ["salt", "pepper", "italian seasoning", "basil", "chives"],
  },
];

const drinkToppings = [
  {
    type: "accents",
    toppings: ["ice", "lemon", "lime", "sugar", "honey", "mint"],
  },
];

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum odio libero nihil sit fugiat expedita veritatis voluptates ullam ipsam. Animi qui ducimus necessitatibus quod alias. Atque aliquid ducimus harum!`;
const img = {
  src: "https://picsum.photos/600/400/?image=21",
  alt: "img 21",
};

export let menu = [
  {
    category: "pizzas",
    categoryToppings: pizzaToppings,
    items: [
      {
        name: "the ultimate",
        img,
        description,
        toppings: [
          "mozzarella",
          "parmesan",
          "chedder",
          "pepperoni",
          "sausage",
          "bacon",
          "onion",
          "mushroom",
          "green pepper",
          "black olive",
          "italian seasoning",
          "basil",
        ],
        details: [
          { size: "small", price: "9.99", toppingPrice: null },
          { size: "medium", price: "14.99", toppingPrice: null },
          { size: "large", price: "24.99", toppingPrice: null },
        ],
      },
      {
        name: "cheese lover",
        img,
        description,
        toppings: ["parmesan", "mozzarella", "chedder"],
        details: [
          { size: "small", price: "7.99", toppingPrice: null },
          { size: "medium", price: "12.99", toppingPrice: null },
          { size: "large", price: "19.99", toppingPrice: null },
        ],
      },
      {
        name: "custom pizza",
        img,
        description,
        toppings: [],
        details: [
          { size: "small", price: "5.99", toppingPrice: ".99" },
          { size: "medium", price: "9.99", toppingPrice: "1.29" },
          { size: "large", price: "15.99", toppingPrice: "1.49" },
        ],
      },
    ],
  },
  {
    category: "sides",
    categoryToppings: sideToppings,
    items: [
      {
        name: "fries",
        img,
        description,
        toppings: ["ketchup", "salt", "pepper"],
        details: [
          { size: "small", price: "1.99", toppingPrice: ".99" },
          { size: "medium", price: "2.99", toppingPrice: ".99" },
          { size: "large", price: "4.99", toppingPrice: ".99" },
        ],
      },
      {
        name: "bread sticks",
        img,
        description,
        toppings: ["parmesan", "marinara sauce"],
        details: [
          { size: "small", price: "1.99", toppingPrice: ".99" },
          { size: "medium", price: "2.99", toppingPrice: ".99" },
          { size: "large", price: "4.99", toppingPrice: ".99" },
        ],
      },
    ],
  },
  {
    category: "drinks",
    categoryToppings: drinkToppings,
    items: [
      {
        name: "fountian drink",
        img,
        description,
        toppings: ["ice"],
        details: [
          { size: "small", price: ".99", toppingPrice: null },
          { size: "medium", price: "1.99", toppingPrice: null },
          { size: "large", price: "2.99", toppingPrice: null },
        ],
      },
      {
        name: "iced tea",
        img,
        description,
        toppings: ["ice", "lemon", "sugar"],
        details: [
          { size: "small", price: "1.99", toppingPrice: null },
          { size: "medium", price: "2.99", toppingPrice: null },
          { size: "large", price: "3.99", toppingPrice: null },
        ],
      },
    ],
  },
];
