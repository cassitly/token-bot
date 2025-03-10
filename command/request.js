// commands/request.js
module.exports.requestCommands = async (message, config) => {
    const args = message.content.split(' ').slice(1);
    const item = args[0];
    const itemCost = config.items[item];
  
    if (!item || !itemCost) return message.reply('Please specify a valid item.');
    if (config.tokenReserve < itemCost) return message.reply('Insufficient tokens to request this item.');
  
    const logChannel = message.guild.channels.cache.get(config.requestLogChannel);
    if (logChannel) {
      logChannel.send(`Item request: ${message.author.username} requests ${item} for ${itemCost} tokens.`);
    }
  
    config.tokenReserve -= itemCost;
    message.reply(`Your request for ${item} has been submitted.`);
  };
  