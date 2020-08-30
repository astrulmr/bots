
      const  Discord = require('discord.js');
      const { Client, RichEmbed,Attachment } = require('discord.js');
      const client = new Discord.Client()



      client.on('ready' , () => {
          console.log("connected as " + client.user.tag)

          client.user.setActivity("Youtube")
      })
     
        
      client.login(process.env.BOT_TOKEN)
