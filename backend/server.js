import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import dns from "dns"
import { fileURLToPath } from "url"

import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, ".env") })

dns.setServers(["8.8.8.8", "8.8.4.4"])

const app = express()
const PORT = process.env.PORT || 5000

console.log("MONGO_URI loaded:", process.env.MONGO_URI ? "YES" : "NO")

connectDB()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Ecommerce Backend API is running")
})

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working fine",
  })
})

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})