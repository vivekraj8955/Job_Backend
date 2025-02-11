import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Job Portal deployed new version </h1>");
});
const port = process.env.PORT;
app.listen(8080, () => {
  console.log(`Node server running on ${port}`);
});
