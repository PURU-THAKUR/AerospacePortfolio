import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.string(),
    imageUrl: v.string(),
    stock: v.number(),
    rating: v.optional(v.number()),
    reviews: v.optional(v.number()),
  }).index("by_category", ["category"]),

  cart: defineTable({
    userId: v.id("users"),
    productId: v.id("products"),
    quantity: v.number(),
  }).index("by_user", ["userId"]),

  orders: defineTable({
    userId: v.id("users"),
    items: v.array(v.object({
      productId: v.id("products"),
      productName: v.string(),
      price: v.number(),
      quantity: v.number(),
    })),
    total: v.number(),
    status: v.string(), // "processing", "shipped", "delivered", "cancelled"
    shippingAddress: v.string(),
    orderDate: v.number(),
  }).index("by_user", ["userId"]),

  services: defineTable({
    name: v.string(),
    icon: v.string(),
    description: v.string(),
    category: v.string(),
    isActive: v.boolean(),
  }),

  deliveryAgents: defineTable({
    userId: v.id("users"),
    phone: v.string(),
    totalDeliveries: v.number(),
    totalEarnings: v.number(),
    rating: v.number(),
    isActive: v.boolean(),
  }).index("by_user", ["userId"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
