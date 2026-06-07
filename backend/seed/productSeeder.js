import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"
import dns from "dns"
import { fileURLToPath } from "url"
import Product from "../models/Product.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, "../.env") })

dns.setServers(["8.8.8.8", "8.8.4.4"])

const products = [
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 45,
    oldPrice: 60,
    stock: 25,
    isFeatured: true,
    description:
      "A stylish smart watch with fitness tracking, heart rate monitoring, and long battery life.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    name: "Wireless Headphones",
    category: "Accessories",
    price: 35,
    oldPrice: 50,
    stock: 18,
    isFeatured: true,
    description:
      "Comfortable wireless headphones with clear sound quality and strong battery backup.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    name: "Men Casual Jacket",
    category: "Fashion",
    price: 80,
    oldPrice: 110,
    stock: 12,
    isFeatured: false,
    description:
      "A modern casual jacket designed for comfort, daily wear, and winter fashion looks.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
  },
  {
    name: "Modern Chair",
    category: "Home",
    price: 120,
    oldPrice: 150,
    stock: 10,
    isFeatured: false,
    description:
      "A comfortable modern chair with a clean design for home, office, or study rooms.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800",
  },
  {
    name: "Running Shoes",
    category: "Sports",
    price: 65,
    oldPrice: 90,
    stock: 30,
    isFeatured: true,
    description:
      "Lightweight running shoes with strong grip, soft cushioning, and breathable material.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    name: "Travel Backpack",
    category: "Bags",
    price: 40,
    oldPrice: 55,
    stock: 20,
    isFeatured: false,
    description:
      "A durable travel backpack with multiple pockets, strong zippers, and enough space.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
]

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    await Product.deleteMany()
    await Product.insertMany(products)

    console.log("Sample products imported successfully")
    process.exit()
  } catch (error) {
    console.error(`Seeder Error: ${error.message}`)
    process.exit(1)
  }
}

importData()