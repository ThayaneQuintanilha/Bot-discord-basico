const Discord  = require("discord.js");
const { Client, Intents } = require('discord.js')
const dotenv = require("dotenv");

const token = 'OTUzNjgfODcDNDQ3NTk3MDU2.fjIIYw.L528487m5AgA_IlL2UDsRiHPjVU'


dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })


client.login (token);

client.on("ready", () => {
    console.log("Bot is ready!!!")
});

client.on("message", (msg) => {
    if (msg.author.bot === true);

    if (msg.content == "!Boa noite") {
        msg.reply("Boa noite CRIA.");
    }

});



