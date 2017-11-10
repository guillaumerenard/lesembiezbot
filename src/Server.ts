import "dotenv/config";
import * as restify from "restify";
import * as builder from "botbuilder";
import LesEmbiezBot from "./LesEmbiezBot";

const bot = new LesEmbiezBot();

// Setup Restify Server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Listen for messages from users 
server.post('/api/messages', bot.connector.listen());