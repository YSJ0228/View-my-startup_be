require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./modules/index.module");
const errorHandler = require("./middlewares/errorHandler.middleware");

const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.get("/api/ping", (req, res) => {
  res.status(200).send("pong");
});

app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {});
