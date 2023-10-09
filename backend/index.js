import express from "express";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
