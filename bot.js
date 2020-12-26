const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client();



client.on('ready' , () => {
  console.log("connected as " + client.user.tag)

  client.user.setActivity("Brawlball")
})
client.on('message', message => {
  if (message.content === '!dguide') {
      const embed = new RichEmbed()

          .setTitle('Our Style Brawlball Clan ')
          .setColor(0xf60af8)
          .setThumbnail(client.user.avatarURL)
          .setDescription('Here we are friends who where gathered by the love of brawlball. There are no leaders, just players')
          .addField('Teams', 'Runner - Supporter - Defender \n Substitute', false)
          .setFooter('We are Our style and we will make brawlball great again', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7KXpsrfkAhUl5uAKHf1DCLMQjRx6BAgBEAQ&url=https%3A%2F%2Fwallpaperstock.net%2Fs-logo-design-wallpapers_w35374.html&psig=AOvVaw3rIPgPX0g2OY5GqmOi0ph1&ust=1567694238587809%27')
    message.channel.send(embed)
  }
})
client.on('message', message => {
  if (message.content === '!help') {
      const embed = new RichEmbed()

          .setTitle('Brawlball Community Bot Commands')
          .setColor(0xf60af8)
          .setThumbnail(client.user.avatarURL)
          .setDescription('Here is the codes you can use in this bot')
          .addField('!rguide', 'Showing Runner Guide for brawlball', false)
          .addField('!sguide', 'Showing supporter Guide for brawlball', false)
          .addField('!dguide', 'Showing Defender Guide for brawlball', false)
          .setFooter('BCS', client.user.avatarURL )
    message.channel.send(embed)
  }
})

client.on("guildMemberAdd", member => {
  const channel2 = member.guild.channels.cache.get("691026608777330808")
  channel2.send(`${member} ** Welcome to Brawlball Community server **`)
})

    

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get("691026608777330808")
    if (!channel) return 
      number = 10
  
  var images = ["https://i.ibb.co/XjVV1ty/bcs-welcome-image.png"];
  var image = Math.floor(Math.random() * images.length);
  


      var bbmsg = [ `A very warm welcome to you! It is lovely to have you among us!/n${member}`,
      `We are delighted to have you among us \n${member}`,
      `Welcome to the team! ${member} :wink: `,
      `Well well well look who is here Guys \n${member}`,
      `Welcome aboard new buddy! ${member}`,
      `On behalf of all of us, Welcome onboard!/n${member}`]

    var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
    
    var bbccrndm = Math.floor(Math.random() * bbcolor.length)
    var bbclrchos = bbcolor[bbccrndm]

      var bbrandom = Math.floor(Math.random() * bbmsg.length)
    var bbchoose = bbmsg[bbrandom]
    let embed = new Discord.MessageEmbed()
          .setTitle(member.user.username+" - "+"**has joined BCS**")
          .setColor(bbclrchos)
          .setThumbnail(member.user.avatarURL())
          .setDescription(bbchoose)
          .setImage(String([images[image]]))
          
        channel.send(embed);        
        })
  
 
client.login(process.env.BOT_TOKEN)
