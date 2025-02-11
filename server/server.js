import './config/instrument.js';
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";
import bodyParser from "body-parser";


const app = express();

// NOTE: Define the webhook route first so that it uses the raw body parser
app.post(
  "/webhooks",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhooks
);

// Now apply global middlewares for other routes
app.use(cors());
app.use(express.json());

// Connect to MongoDB database
await connectDB();

// Other routes
app.get("/", (req, res) => res.send("API Working!"));
app.get("/debug-sentry", (req, res) => {
  throw new Error("My first Sentry error!");
});

const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
