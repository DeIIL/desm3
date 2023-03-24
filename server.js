import express from "express";

import winston from "winston";

import postRoutes from "./routes/post.routes.js";
import ownerRoutes from "./routes/owner.routes.js";
import animalRoutes from "./routes/animal.routes.js";
import serviceRoutes from "./routes/service.routes.js";

const app = express();

const { combine, timestamp, label, printf } = winston.format;
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "pet-api.log" }),
  ],
  format: combine(label({ label: "pet-api" }), timestamp(), logFormat),
});

app.use(express.json());
app.use("/owner", ownerRoutes);
app.use("/animal", animalRoutes);
app.use("/service", serviceRoutes);
app.use("/post", postRoutes);
app.use((request, response, next) => {
  logger.error(`${request.method} on ${request.baseURL} - ${error.message}`);
  response.status(400).send({ error: error.message });
});

app.listen(3334, () => {
  console.log("API Started");
});
