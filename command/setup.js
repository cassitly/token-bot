// commands/setup.js
module.exports.setupCommands = async (message, config) => {
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply('You must be an administrator to use this command!');
    }
  
    const args = message.content.split(' ').slice(1);
    const command = args[0];
  
    if (command === 'signup-channel') {
      const channel = message.mentions.channels.first();
      if (!channel) return message.reply('Please mention a channel.');
      config.signupChannel = channel.id;
      message.reply(`Sign-up channel set to ${channel.name}`);
    }
  
    if (command === 'request-log-channel') {
      const channel = message.mentions.channels.first();
      if (!channel) return message.reply('Please mention a channel.');
      config.requestLogChannel = channel.id;
      message.reply(`Request log channel set to ${channel.name}`);
    }
  
    if (command === 'payout-log-channel') {
      const channel = message.mentions.channels.first();
      if (!channel) return message.reply('Please mention a channel.');
      config.payoutLogChannel = channel.id;
      message.reply(`Payout log channel set to ${channel.name}`);
    }
  
    if (command === 'set-token-reserve') {
      const amount = parseInt(args[1]);
      if (isNaN(amount)) return message.reply('Please provide a valid number.');
      config.tokenReserve = amount;
      message.reply(`Token reserve set to ${amount}`);
    }
  
    if (command === 'add-item') {
      const item = args[1];
      const price = parseInt(args[2]);
      if (!item || isNaN(price)) return message.reply('Please provide valid item name and price.');
      config.items[item] = price;
      message.reply(`${item} has been added with a price of ${price} tokens.`);
    }
  
    if (command === 'remove-item') {
      const item = args[1];
      if (!config.items[item]) return message.reply('Item not found.');
      delete config.items[item];
      message.reply(`${item} has been removed.`);
    }
  
    if (command === 'set-item-price') {
      const item = args[1];
      const price = parseInt(args[2]);
      if (!config.items[item] || isNaN(price)) return message.reply('Invalid item or price.');
      config.items[item] = price;
      message.reply(`${item} price updated to ${price}`);
    }
  };
  