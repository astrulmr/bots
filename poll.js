// This command requires the discord.js package to create embeds
const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

  // This will contain some extra things

  // Role Verification -- This will only run if a user has a specific role (optional)
  if (!message.author.roles.find(r => r.name === "roleName")) return message.channel.send('This requires the role: roleName');

  // Permission Verification -- This will only run if a user has a specific permission (optional)
  if (!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('This requires the permission: ADMINSTRATOR');

  // First, we want to check if the user had input
  if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

  // Then, create the embed
  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setFooter('React to vote')
    .setDescription(args.join(' '))
    .setTitle(`Poll Created By ${message.author.username}`);

  // Finally, using await send the message
  let msg = await message.channel.send(embed);
  // The sent message will now be stored in the msg variable

  // React to the message
  await msg.react('✅'); // Using await here will make sure the first one runs before the second
  await msg.react('⛔');

  // Make sure you delete the original message
  message.delete({timeout: 1000});
}