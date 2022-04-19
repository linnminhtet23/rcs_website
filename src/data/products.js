const products = [
  {
    id: "1",
    name: "POS Offline Version",
    about:
      "A Point Of Sales System that allows you to accurately and quickly control the inventory and inventory of retailers.",
    featuresIncluded: [
      "Check the record of a sales letter",
      "Able to check sales record by product",
      "By day, ability to check monthly sales summary",
      "Check daily sales summary",
      "Able to check the remaining items",
      "Check the product and quantity sold",
      "Check delivery list",
      "Check inventory",
      "Able to inspect frequently purchased items",
      "Print invoices",
    ],
    servicesIncluded: [
      "Software training until you can use it skillfully",
      "Free product registration",
      "Free Lifetime service (required to visit the office)",
      "Resolve software errors within 24 hours",
      "Free delivery (Free delivery to the bus station if ordering locally)",
    ],
    featuresSoftware: [
      "Easy to use even without computer and accounting skills",
      "Drawn with a clear design",
      "Choose your favorite design color",
      "You can use it for life with just one purchase",
      "You can choose from two types of inventory",
      "Payment Cash on Delivery; Payment by Kpay or CB Pay (% is not required)",
    ],
    requiredEquipments: ["Tablet", "Receipt Printer", "Receipt Paper"],
    benefits: [
      "Using technology for your growing business is a great way to grow your workforce. Save time and money with side-by-side comparisons of carriers",
      "No more losses for zero error",
      "Easier and more systematic checking of statistics",
      "Better business impression",
      "Lifetime purchase with one purchase",
    ],
    note: "You can discuss in detail what features you want to add and what you want to fix.",
    price: 280000,
    featured: true,
    image: "/images/products/offline-pos.jpg",
  },

  {
    id: "2",
    name: "POS Customize Version",
    about:
      "POS software is a type of software that allows you to add custom functions. We will adjust your custom functions.",
    featuresIncluded: [
      "By day or monthly, sell item records",
      "By day or monthly, buy item records",
      "By day or monthly, inventory records",
      "Issuance of invoices",
      "There are other features besides the above, depending on the online and offline software.",
    ],
    servicesIncluded: [
      "Software training until you can use it skillfully",
      "Free product registration",
      "Free Lifetime service (required to visit the office)",
      "Resolve software errors within 24 hours",
      "Free delivery (Free delivery to the bus station if ordering locally)",
    ],
    featuresSoftware: [
      "Easy to use even without computer and accounting skills",
      "Drawn with a clear design",
      "Choose your favorite design color",
      "You can use it for life with just one purchase",
      "You can choose from two types of inventory",
      "Payment Cash on Delivery; Payment by Kpay or CB Pay (% is not required)",
    ],
    requiredEquipments: ["Tablet", "Receipt Printer", "Receipt Paper"],
    benefits: [
      "Using technology for your growing business is a great way to grow your workforce. Save time and money with side-by-side comparisons of carriers",
      "No more losses for zero error",
      "Easier and more systematic checking of statistics",
      "Better business impression",
      "Lifetime purchase with one purchase",
    ],
    note: "You can discuss in detail what features you want to add and what you want to fix.",
    price: 280000,
    featured: true,
    image: "/images/products/customize-pos.jpg",
  },

  {
    id: "3",
    name: "POS Inventory Management Version",
    about:
      "It is a Point Of Sales System that allows you to control the details of retail sales and inventory details accurately and quickly.",
    featuresIncluded: [
      "In addition to the features included in the POS Offline Version",
      "Notification of small inventories by notification",
      "View the inventory of branches in real time",
      "Able to record and view delivery terms",
      "You can retrieve data from the server even if your machine crashes due to online connection",
      "By day View monthly sales report",
      "By day View monthly inventory report",
      "By day View Cashier Report from monthly sales counter",
    ],
    servicesIncluded: [
      "Software training until you can use it skillfully",
      "Free product registration",
      "Free Lifetime service (required to visit the office)",
      "Resolve software errors within 24 hours",
      "Free delivery (Free delivery to the bus station if ordering locally)",
    ],
    featuresSoftware: [
      "Easy to use even without computer / accounting skills",
      "Drawn with a clear design",
      "Choose your favorite design color",
      "You can use it for life with just one purchase",
      "You can choose from two types of inventory",
      "Payment Cash on Delivery; Payment by Kpay or CB Pay (% is not required)",
    ],
    requiredEquipments: ["Tablet", "Receipt Printer", "Receipt Paper"],
    benefits: [
      "Using technology for your growing business is a great way to grow your workforce. Save time and money with side-by-side comparisons of carriers",
      "No more losses for zero error",
      "Easier and more systematic checking of statistics",
      "Data can be backed up at any time. Ability to check anywhere",
      "Better business impression",
      "Lifetime purchase with one purchase",
    ],
    note: "You can discuss in detail what features you want to add and what you want to fix.",
    price: 380000,
    featured: true,
    image: "/images/products/inventory-pos.jpg",
  },
];

export function getProducts() {
  return products; 
}

export function getProductsByPrice(less, lot) {
  return products.filter(
    (product) => product.price >= less && product.price < lot
  );
}

export function getDetailProduct(id) {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}
