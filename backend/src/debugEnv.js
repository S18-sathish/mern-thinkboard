// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import fs from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // 1. Print current working directory
// console.log("process.cwd():", process.cwd());

// // 2. Check if .env exists at ../.env from server.js
// const envPath = path.join(__dirname, "../.env");
// console.log("Looking for .env at:", envPath);
// console.log("File exists:", fs.existsSync(envPath));

// // 3. Load .env
// dotenv.config({ path: envPath });

// // 4. Print loaded value
// console.log("MONGO_URI:", process.env.MONGO_URI);
