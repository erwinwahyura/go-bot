const { askAI } = require("./ai");

const bot = async () => {
    const token = process.env.TOKEN;
    const {Client, GatewayIntentBits} = require("discord.js");
    
    const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
    
    client.on("ready", () =>{
        console.log("The AI bot is online"); //message when bot is online
    });
    
    client.on("messageCreate", async (message) => {
        if (message.content !== "" && message.content.substring(0,22) === "<@1009478937405034517>") {
            const prompt = message.content.substring(23); 
            const answer = await askAI(prompt);
            await message.channel.sendTyping()
            await message.channel.send(answer); 
        }
    });
    client.login(token);
}

module.exports = {
    bot
}