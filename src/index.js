const { Client, GatewayIntentBits, GatewayVersion } = require('discord.js');

/* Misc */
console.clear();

/* Initialize client */
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildPresences,
    ],
});

const stonedComponents = async () => {
  await require('./util/stonedClient')(client);
}

stonedComponents();