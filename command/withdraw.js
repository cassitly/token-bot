// commands/withdraw.js
module.exports.withdrawCommands = async (message, config) => {
    const args = message.content.split(' ').slice(1);
    const amount = parseInt(args[0]);
    if (isNaN(amount) || amount <= 0) return message.reply('Please provide a valid amount of tokens.');
  
    if (config.tokenReserve < amount) {
      return message.reply('Insufficient tokens available for withdrawal.');
    }
  
    const owner = message.guild.members.cache.get('<OWNER_ID>');
    const withdrawalDetails = {
      robloxUsername: message.author.username,
      discordUsername: message.author.username,
      amount,
      timestamp: new Date(),
      airportLocation: args[1] || 'Unknown',
      priority: args[2] || 'Normal',
    };
  
    owner.send(`Withdrawal request from ${withdrawalDetails.discordUsername} (Roblox: ${withdrawalDetails.robloxUsername}): ${withdrawalDetails.amount} tokens requested at ${withdrawalDetails.timestamp}. Airport: ${withdrawalDetails.airportLocation}, Priority: ${withdrawalDetails.priority}`);
  
    config.tokenReserve -= amount;
    message.reply(`Your withdrawal request has been sent. You have ${config.tokenReserve} tokens remaining.`);
  };
  