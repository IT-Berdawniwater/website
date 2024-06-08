

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { createRequire } from "module";
import errorHandler from './app_server/middleware/error-handler.js'
const require = createRequire(import.meta.url);
const { createServer } = require("http");
const app = express();
dotenv.config();

import adminRoute from "./app_server/routes/admin.js";
import productsRoute from "./app_server/routes/products.js";
import newseventsRoute from "./app_server/routes/newsEvents.js";
import certfoodRoute from "./app_server/routes/certificatesFoodSafety.js";
import complaintsRoute from "./app_server/routes/complaints.js";
import settingsRoute from "./app_server/routes/settings.js";

const httpServer = createServer(app);

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan("tiny"));
app.use(errorHandler);

//Mongoose connection created
const PORT = process.env.PORT || 3000;
let server

mongoose.connect(process.env.CONNECTION_URL_NEW_DEV, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server = httpServer.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

app.get("/", async (req, res) => {
  res.send("We are on Home");
});
var corsOptions = {
  //origin: "http://localhost:4200",
  //origin: "https://berdawniwater.com",
  origin: "*",
};

app.use(cors(corsOptions));

app.use("/admin", adminRoute);
app.use("/products", productsRoute);
app.use("/newsevents", newseventsRoute);
app.use("/certfood", certfoodRoute);
app.use("/complaints", complaintsRoute);
app.use("/settings", settingsRoute);
