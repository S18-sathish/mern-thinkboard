import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import ratelimiter from "./middleware/rateLimiter.js";
dotenv.config({ path: './src/config/.env'});

const app = express();
const PORT = process.env.PORT || 5000;

// connectDB();

//middleware

app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(ratelimiter);

// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
//     next();
// })

app.use("/api/notes", notesRoutes);


connectDB().then(()=>{
   app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
})


//mongodb+srv://sathishmernfsd_db_user:<db_password>@cluster0.bvknbtx.mongodb.net/