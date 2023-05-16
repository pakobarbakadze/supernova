import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import http from "http";
import connectDB from "./config/db.js";
import { typeDefs, resolvers } from "./graphql/userQl.js";

const PORT = process.env.PORT || 5000;
const app = express();
const httpServer = http.createServer(app);
dotenv.config();
connectDB();

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
