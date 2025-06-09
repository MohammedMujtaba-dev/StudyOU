import express from "express";
import ConnectDB from "./database/db.js";
import authrouter from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";
let app = express();

dotenv.config();
let PORT = 3000;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authrouter);

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align:center">Home page</h1><h4 style="text-align:center"><i>go to</i></h4><h2 style="text-align:center">http://localhost:${PORT}</h2><br> <h2 style="text-align:center">This site for DataBase</h2>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on - http://localhost:${PORT} `);
  ConnectDB();
});
