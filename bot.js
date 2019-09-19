const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');

const client = require('.')('603956394219274240');

client.on('join', (secret) => {
  console.log('we should join with', secret);
});

client.on('spectate', (secret) => {
  console.log('we should spectate with', secret);
});

client.on('joinRequest', (user) => {
  if (user.discriminator === '1337') {
    client.reply(user, 'YES');
  } else {
    client.reply(user, 'IGNORE');
  }
});

client.on('connected', () => {
  console.log('connected!');

  client.updatePresence({
    state: 'slithering',
    details: '🐍',
    startTimestamp: new Date(),
    largeImageKey: 'snek_large',
    smallImageKey: 'snek_small',
    partyId: 'snek_party',
    partySize: 1,
    partyMax: 1,
    matchSecret: 'slithers',
    joinSecret: 'boop',
    spectateSecret: 'sniff',
  });
});

client.login(process.env.BOT_TOKEN)
