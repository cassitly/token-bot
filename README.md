# Token Usage
To allow airline owners, of Aeronautica. To pay their members, in easy, accessible tokens. Which can be, later withdrawed into their ingame money.
Basic Usage: Create a fork of the repository, and create a codespace. And run these commands:
``npm install discord.js dotenv``, to  install dependencies.
Then run ``node bot.js`` to start the bot.

Or you can download the repository, install Nodejs, and do the same steps to install and start the bot.

# Features
- Admin commands for setting up token payouts, item requests, and configuring the bot.
- Member interactions for token withdrawals, sign-ups, and item requests.
- Logging and notifications to track member actions, including sign-ups, withdrawals, and item requests.
- A flexible, configurable system that allows the owner to set things up easily.

## Key Features:
**Admin Commands**:

/setup: Configures the sign-up log, request log, and payout log channels.
/set-token-reserve: Sets the token reserve based on the owner’s current balance.
/add-item: Adds an item to the request list with price.
/remove-item: Removes an item from the request list.
/set-item-price: Changes the price of an existing item.<br><br>
**Member Commands**:

/signup: Allows members to sign up for the token system by providing their Roblox username and proof of membership.
/request-item: Allows members to request items with tokens.
/withdraw: Allows members to withdraw tokens, sending a notification to the owner.<br><br>
**Logs & Notifications**:

All member actions (sign-up, withdrawals, requests) are logged in configurable channels.
Notifications to the owner when a member requests to withdraw tokens.
Detailed info about the withdrawal request: Roblox username, Discord username, requested amount, timestamp, airport trade location, and priority.
