import { mutation } from "./_generated/server";

export const seedData = mutation({
  args: {},
  handler: async (ctx) => {
    // Seed products
    const products = [
      {
        name: "Premium Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 2499,
        category: "electronics",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
        stock: 50,
        rating: 4.5,
        reviews: 128,
      },
      {
        name: "Smart Watch",
        description: "Fitness tracking smartwatch with heart rate monitor",
        price: 5999,
        category: "electronics",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
        stock: 30,
        rating: 4.3,
        reviews: 89,
      },
      {
        name: "Wireless Earbuds",
        description: "True wireless earbuds with charging case",
        price: 1799,
        category: "electronics",
        imageUrl: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300",
        stock: 75,
        rating: 4.2,
        reviews: 156,
      },
      {
        name: "Running Shoes",
        description: "Comfortable running shoes for daily workouts",
        price: 3499,
        category: "fashion",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
        stock: 40,
        rating: 4.6,
        reviews: 203,
      },
      {
        name: "Phone Case",
        description: "Protective case for smartphones",
        price: 399,
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1601593346740-925612772716?w=300",
        stock: 100,
        rating: 4.1,
        reviews: 67,
      },
      {
        name: "Laptop Backpack",
        description: "Durable backpack for laptops up to 15 inches",
        price: 1299,
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
        stock: 25,
        rating: 4.4,
        reviews: 94,
      },
    ];

    for (const product of products) {
      await ctx.db.insert("products", product);
    }

    // Seed services
    const services = [
      {
        name: "Food Delivery",
        icon: "fas fa-utensils",
        description: "Order from thousands of restaurants near you. Get your favorite meals delivered right to your doorstep in minutes.",
        category: "food",
        isActive: true,
      },
      {
        name: "Medical Help",
        icon: "fas fa-first-aid",
        description: "Get medicines delivered, book doctor appointments, or find nearby pharmacies. Emergency medical assistance available 24/7.",
        category: "health",
        isActive: true,
      },
      {
        name: "Emergency Services",
        icon: "fas fa-ambulance",
        description: "Immediate assistance for emergencies. Connect to police, fire department, ambulance with live location tracking.",
        category: "emergency",
        isActive: true,
      },
      {
        name: "Online Shopping",
        icon: "fas fa-shopping-cart",
        description: "Shop from millions of products across categories. Electronics, fashion, home appliances and more with easy returns.",
        category: "shopping",
        isActive: true,
      },
      {
        name: "Cab Booking",
        icon: "fas fa-taxi",
        description: "Book rides across the city. Choose from auto, bike, sedan or SUV. Available 24/7 with safety features.",
        category: "transport",
        isActive: true,
      },
      {
        name: "Grocery Delivery",
        icon: "fas fa-shopping-basket",
        description: "Fresh fruits, vegetables, dairy and pantry essentials delivered to your home in 30 minutes or less.",
        category: "grocery",
        isActive: true,
      },
      {
        name: "Travel Booking",
        icon: "fas fa-train",
        description: "Book flights, trains, buses and hotels at best prices. All your travel needs in one place.",
        category: "travel",
        isActive: true,
      },
      {
        name: "Payments",
        icon: "fas fa-money-bill-wave",
        description: "Pay bills, recharge mobiles, send money to friends, and make secure online payments.",
        category: "finance",
        isActive: true,
      },
    ];

    for (const service of services) {
      await ctx.db.insert("services", service);
    }

    return "Data seeded successfully!";
  },
});
