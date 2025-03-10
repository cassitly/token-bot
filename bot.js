const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { setupCommands } = require('./commands/setup');
const { signupCommands } = require('./commands/signup');
const { requestCommands } = require('./commands/request');
const { withdrawCommands } = require('./commands/withdraw');

const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages
  ]
});

let config = {
  signupChannel: null,
  requestLogChannel: null,
  payoutLogChannel: null,
  tokenReserve: 0,
  items: {},
};

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Handle the various commands
  if (message.content.startsWith('/setup')) {
    setupCommands(message, config);
  } else if (message.content.startsWith('/signup')) {
    signupCommands(message, config);
  } else if (message.content.startsWith('/request-item')) {
    requestCommands(message, config);
  } else if (message.content.startsWith('/withdraw')) {
    withdrawCommands(message, config);
  }
});

client.login(token);
