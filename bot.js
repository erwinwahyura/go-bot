require('dotenv').config()
const { askAI } = require("./ai.js");

const token = process.env.TOKEN; //Token that you saved in step 5 of this tutorial
const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
});

client.on("messageCreate", async (message) => {
    if (message.content !== "" && message.content.substring(0,22) === "<@1009478937405034517>") {
        const prompt = message.content.substring(23); //remove the exclamation mark from the message
        const answer = await askAI(prompt); //prompt GPT-3
        await message.channel.sendTyping()
        await message.channel.send(answer); //reply to Discord with answer from GPT-3 
    }
});
client.login(token);
