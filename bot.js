const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client()

client.on('ready' , () => {
    console.log("connected as " + client.user.tag)


    client.user.setActivity("Brawlball")
 

client.on('message', message => {
  if (message.content ==="`<@482162074097549333>`") {
    let embed = new Discord.RichEmbed()
    .setTitle('------------ASTRU------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Artemis.png')
  .setColor('#275BF0')
    message.channel.send(embed)

  }
})


})


client.login(process.env.BOT_TOKEN)
