import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import http from "http";
import { configureSocketIO } from "./config/socket.js";
import connectDB from "./config/db.js";
import createApolloServer from "./config/apolloServer.js";

const PORT = process.env.PORT || 5000;
const app = express();
const httpServer = http.createServer(app);
dotenv.config();

// Connect to database
connectDB();

// Configure socketIo.
configureSocketIO(httpServer);

// Create Apollo Server
const apolloServer = createApolloServer(httpServer);
await apolloServer.start();

app.use(cors(), bodyParser.json(), expressMiddleware(apolloServer));

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
