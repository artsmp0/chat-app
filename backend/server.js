import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import protectRoute from "./middleware/protectRoute.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8192;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", protectRoute, messageRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
