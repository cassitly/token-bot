// commands/signup.js
module.exports.signupCommands = async (message, config) => {
    const args = message.content.split(' ').slice(1);
    const robloxUsername = args[0];
    const proof = message.attachments.first();
  
    if (!robloxUsername || !proof) return message.reply('Please provide your Roblox username and proof of membership.');
  
    const logChannel = message.guild.channels.cache.get(config.signupChannel);
    if (logChannel) {
      logChannel.send(`New signup: Roblox Username: ${robloxUsername}, Discord Username: ${message.author.username}, Proof: ${proof.url}`);
    }
  
    message.reply('You have successfully signed up!');
  };
  