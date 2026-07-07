const products = {
  bestSeller: [
    {
      id: 1,
      name: "80 Robux",
      price: 17000,
      type: "robux"
    },
    {
      id: 2,
      name: "500 Robux",
      price: 75000,
      type: "robux"
    },
    {
      id: 3,
      name: "1.000 Robux",
      price: 149000,
      type: "robux"
    },
    {
      id: 4,
      name: "1.500 Robux",
      price: 225000,
      type: "robux"
    },
    {
      id: 5,
      name: "2.000 Robux",
      price: 298000,
      type: "robux"
    }
  ],

  reguler: [
    {
      id: 6,
      name: "160 Robux",
      price: 35000,
      type: "robux"
    },
    {
      id: 7,
      name: "240 Robux",
      price: 50000,
      type: "robux"
    },
    {
      id: 8,
      name: "320 Robux",
      price: 65000,
      type: "robux"
    },
    {
      id: 9,
      name: "1.080 Robux",
      price: 165000,
      type: "robux"
    }
  ],

  gamepass: [
    {
      id: 10,
      name: "DragSpec Pass",
      price: 13000,
      type: "gamepass"
    },
    {
      id: 11,
      name: "Advance Paint Pass",
      price: 8000,
      type: "gamepass"
    },
    {
      id: 12,
      name: "Luxury Pass",
      price: 15000,
      type: "gamepass"
    },
    {
      id: 13,
      name: "Exclusive Rims",
      price: 11000,
      type: "gamepass"
    },
    {
      id: 14,
      name: "Custom Plate Pass",
      price: 11000,
      type: "gamepass"
    },
    {
      id: 15,
      name: "Suspension Pro",
      price: 5000,
      type: "gamepass"
    },
    {
      id: 16,
      name: "Police Pass",
      price: 18000,
      type: "gamepass"
    }
  ]
};

function rupiah(number){
  return new Intl.NumberFormat("id-ID",{
    style:"currency",
    currency:"IDR",
    minimumFractionDigits:0
  }).format(number);
}
