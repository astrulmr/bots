const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client()

client.on('ready' , () => {
    console.log("connected as " + client.user.tag)


    client.on('message', message => {
   
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();

    if (command === 'args-info') {
      if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
      }
    
      message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }})



    client.user.setActivity("BrawlBall")
    client.guilds.forEach((guild) => {
       console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        // welcome is 535515917518372886
    })

    let welcomeChannel = client.channels.get("535534516945682462")
    let welchannel = client.channels.get("556806228144291861")
    client.on('message', message => {
      if (message.content === 'a') {
            const embed = new RichEmbed()
              .setTitle('Welcome To our style Server')
              .setColor(0xFFFFFF)
              welchannel.send(embed)
      }




      
    })
    client.on('message', message => {
      if (message.content === 'a') {
            const embed = new RichEmbed()
            .setTitle('Brawball Clan That You Cant Beat')
            .setColor(0xFFFF00)
            welchannel.send(embed)
      }
    })
    client.on('message', message => {
      if (message.content === 'a') {
            const embed = new RichEmbed()
            .setTitle('There Is No Leader , We Are All Leaders In OS')
            .setColor(0xff0000)
            welchannel.send(embed)
      }
    })
    client.on('message', message => {
      if (message.content === 'a') {
            const embed = new RichEmbed()
            .setTitle('We Are a Small Clan With a Lot Of Pride')
            .setColor(0xeee8aa)
            welchannel.send(embed)
      }
    })
    client.on('message', message => {
      if (message.content === 'a') {
            const embed = new RichEmbed()
            .setTitle('NBS = EZPZ')
            .setColor(0x0000ff)
            welchannel.send(embed)
      }
    })
    client.on('message', message => {
      if (message.content === 'a') {
            
        welchannel.send  ('https://discord.gg/aMTafbd')
      
      }
    })
 
     welcomeChannel.send("Hello")
     

     client.on('message', message => {
      if (message.content === '!help') {
        const embed = new RichEmbed()
        
        .setTitle(' IT Bot For our style clan And it For Brawlball information And Here His Work : ')
        .setColor(0xFF0000)
        .setDescription('1. Write { !who@anyname } to Get A Random Msg \n\n 2. Write { !os clan } To See our style clan Friends \n\n 3. Write{ !avatar @anyname } To See Your Avatar on Picture u can download \n\n 4. Write { !hi } for Some Info\n\n 5. He Welcome The People Who Join Server \n\n Designed By OS Team :)')
        message.channel.send(embed)
      }
      })
      client.on('message', message => {
        if (message.content === '!os clan') {
          const embed = new RichEmbed()
    
            .setTitle(' This Our Style Clan We All Leader Here And Friends :)')
            .setColor(0xFF0000)
            .setThumbnail(client.user.avatarURL)
            .setDescription('OS Clan Info = https://brawldb.com/clan/info/637285')
            .addField('Astru® ', ' He is a great Runner And Good In Supporter And Defender (Runner) ', true)

            

            .addField('\n DanzoDon ', ' He is a Godzila Runner And Cool In Defender And Supporter (Runner)', true)

          
            
            .addField('\n Iknes ', '  He is a Legend Defender And Great In Runner And Supporter (Defender) ', true)
            
         
            .addField('\n jimm25  ', '   He  So Good Defender And Surly In Runner And Supporter (Runner) ', true)
            
           
            
            .addField('\n jinleehurb ', ' He is unbelievable defence and good at Supporter and Runner (Defender)', true)
            
           
            
            .addField('\n Junusbiaz ', 'He  just super on Defender And GREATS in Runner And Supporter (Defender) ', true)
            
           
            
            .addField('\n KaeptnKook', ' He is The best in Defence and Smart at Runner (Defender) ', true)
            
            
            .addField('\n Kenshiro', ' He is  The Best on Runner And Wild in  Defender And Supporter (Supporter)', true)
            
            
            .addField('\n kevin1185', ' He So Coool on Runner And Fantastic in  Defender And Supporter (Runner)', true)
            
            
            .addField('\n nani', ' He is a Brilliant on Supporter And Indestructible in Runner And Defender (Supporter) ', true)
            
            
            .addField('\n PanosBOA', ' He is a Wall on Defence And Indestructible in Runner And Supporter (Defender)', true)
      
            
            .addField('\n Sanmaay', ' She is  not merciful on Defender And Great in Runner And Supporter (Defender)', true)
            
            
            
            .addField('\n Sugarfree', 'He is  just cooler on Defender And  GREAT in Runner And Supporter (Supporter) ', true)
            
            
            .addField('\n styleken', ' He is  unbeaten on Defender And Intangible in Runner And Supporter (Defender)', true)
            
            
            
            .addField('\n SweetMiguel', ' He can run like shit u cant even catch him And Fantastic in  Defender And Supporter (Runner)', true)
            
           
            
            .addField('\n |OS| Tmis Kun', 'He is a just so good on Supporter And so GREAT in Runner And Defender (Supporter) ', true)
            
            
            
            .setFooter('For Notes Must Of Os Clan Can Plays all positions', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7KXpsrfkAhUl5uAKHf1DCLMQjRx6BAgBEAQ&url=https%3A%2F%2Fwallpaperstock.net%2Fs-logo-design-wallpapers_w35374.html&psig=AOvVaw3rIPgPX0g2OY5GqmOi0ph1&ust=1567694238587809')
           
          message.channel.send(embed)
        }
      })


  client.on('message', message => {
    if (message.content === '!hi') {
       message.reply(`Hello  What Can i Do For You ? \n 1- !who@anyname \n 2- !avatar @anyname \n 3- !os clan \n 4- !help `);
   }
 })
 let channel3 = client.channels.get("613662955522752516")


  

 client.on('message', message => {
   if (message.content === '!brawlball') {
      
           const embed = new RichEmbed()
           
           .setTitle(' Whcich Move You Wan Try To Learn ? : ')
           .setColor(0xFFFFFF)
           .setDescription('1.Down Pass Move (Combos One Player) ===> !@ \n\n 2. Up Pass Move (Combos One Player) ===> !#\n\n 3. Tags Moves (Blackhols 2 Player)===> !$  \n\n 4. Tricks ===> !% \n\n 5. Others ===> !^ \n\n Designed By OS Team :)')
           channel3.send(embed)

   
  }
})
client.on('message', message => {
 if (message.content === '!@') {
    
         const embed = new RichEmbed()
         
         .setTitle('Down Pass Brawlball Move it Consists of five steps : ')
         .setColor(0xFFFF00)
         .setDescription('\n\n 1. Leave The Wall And Dodge Left Or Right (depend on which side u play) \n\n 2. Throw The Ball Up ( Without Jumping Just Throw Button And Aim Up ) \n\n 3. Punch Up On Heavy Button Attack To Catch The Ball \n\n 4. Jump 2 Times Slowly \n\n 5. Dodge Up To Touch The Wall \n\n Designed By OS Team :)')
         channel3.send(embed)
}
})
client.on('message', message => {
  if (message.content === '!#') {
     
          const embed = new RichEmbed()
          
          .setTitle('Up Pass Brawlball Move it Consists of five steps : ')
          .setColor(0x00BFFF)
          .setDescription('\n\n 1. Go Top Of Ur Base Tower And Jump Up And Left Or Right (depend on which side u play) \n\n 2. Dodge Aiming Up + Left Or Right  \n\n 3. Throw The Ball Up  ( Without Jumping Just Throw Button And Aim Up ) \n\n 4. Punch Up On Heavy Button Attack To Catch The Ball  \n\n 5. Jump 1 Time  \n\n 6. And Dodge One Time \n\n Designed By OS Team :)')
          channel3.send(embed)
 }
 })
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    client.on('message', message => {
      if (message.content === '!kenshiro') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------KENSHIRO------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Brynn.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!astru') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------ASTRU------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Artemis.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!styleken') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------STYLEKEN------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!danzodon') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------DANZODON------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Val.png')
      .setColor('#ffffff')
        message.channel.send(embed)
        
      }
    })
    client.on('message', message => {
      if (message.content === '!kevin1185') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------KEVIN1185------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Yumiko.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!sweetmiguel') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------SWEETMIGUEL------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Rayman.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!jimm25') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------JIMM25------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Ember.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!junusbiaz') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------JUNUSBIAZ------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Mordex.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    
    client.on('message', message => {
      if (message.content === '!jinleehurb') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------JINLEEHURB------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Orion.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!kaeptnkook') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------KEAPTNKOOK------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Bodvar-1.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!sanmaay') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------SANMAAY------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Thatch.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!sugarfree') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------SUGARFREE------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Sidra.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!|os| tmis kun') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------|OS| TMIS KUN------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!iknes') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------IKNES------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Lucien.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!panosboa') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------PANOSBOA------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
 client.on('message', message => {
      if (message.content === '!thomaserena') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------THOMASERENA------------')
      .setImage('https://vignette.wikia.nocookie.net/brawlhalla-game/images/f/f4/ClassyRoland.png/revision/latest/scale-to-width-down/404?cb=20180215191845')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!bluedragon') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------BLUEDRAGON------------')
      .setImage('https://vignette.wikia.nocookie.net/brawlhalla-game/images/e/e5/DarkMatterVraxx.png/revision/latest/scale-to-width-down/294?cb=20180215181636')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '!lordcroissant') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------LORDCROISSANT------------')
      .setImage('https://vignette.wikia.nocookie.net/brawlhalla-game/images/3/31/Kill_Thrill_Hattori.png/revision/latest?cb=20190522222609')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    client.on('message', message => {
      if (message.content === '!legends') {
        let embed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor("!kenshiro",'https://cdn.discordapp.com/avatars/505751422449614878/e05ec0dc1ce8a30deab6c522cfa9efe2.png?size=2048')
      .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Brynn.png')
              message.channel.send(embed)

      }
    })   
    client.on('message', message => {
      if (message.content === '!legends') {
        let embed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor("!astru",'https://cdn.discordapp.com/avatars/482162074097549333/84fb30ce6b998aff09e25a587b92d729.png?size=2048')
      .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Artemis.png')

    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!styleken",'https://cdn.discordapp.com/avatars/499591499122737153/ba0a096028219a6badb8dfcfbcdf6469.png?size=2048')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png')

message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!kevin1185",'https://cdn.discordapp.com/avatars/286208201186213888/c4138c1f9c1466aa26c3aeac04ff2a9c.png?size=2048')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Yumiko.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!jimm25",'https://cdn.discordapp.com/avatars/286209333488910336/d4413ff23ddd4af35898432f6c50381f.png?size=2048')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Ember.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("sweetmiguel",'https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Rayman.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!danzodon",'https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Val.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!|os| tmis kun",'https://cdn.discordapp.com/avatars/365968871326351360/40d4ccf3d9a3bea49594d39e68199b34.png?size=2048')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!jinleehurb",'https://discordapp.com/assets/1cbd08c76f8af6dddce02c5138971129.png')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Orion.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!junusbiaz",'https://cdn.discordapp.com/avatars/423131212945817620/da50e96172c6666bcd6fb0928ccf3951.png?size=2048')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Mordex.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!sanmaay",client.user.avatarURL)
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Thatch.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!iknes",client.user.avatarURL)
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Lucien.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!panosboa",'https://cdn.discordapp.com/avatars/555853237689909344/dd9c4ef66a1a0de62c17586b5f0e9e0f.png?size=2048')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!sugarfree",client.user.avatarURL)
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Sidra.png')

  message.channel.send(embed)

}
})
client.on('message', message => {
  if (message.content === '!legends') {
    let embed = new Discord.RichEmbed()
  .setColor('#ffffff')
  .setAuthor("!kaeptnkook",'https://cdn.discordapp.com/avatars/240226379596038146/c43892dba6796734d7936b39a08a98c9.png?size=2048')
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Bodvar.png')

  message.channel.send(embed)

}
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let bChannel = client.channels.get("613364249615532072")
    client.on('message', message => {
    if (message.content === 'hi') {
      bChannel.send("hi there " + message.author.username);
       const attachment = new Attachment('https://media.giphy.com/media/1gRsJSbmejU9pxsfd0/giphy.gif');
       bChannel.send(attachment);


   }
 })
          client.on('message', message => {
    if (message.content === 'damn') {
       const attachment = new Attachment('https://media.giphy.com/media/11q8qiwWSkGzrW/giphy.gif');
       bChannel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'i dont have time') {
       const attachment = new Attachment('https://media.giphy.com/media/wlaBIjRPan0vS/giphy.mp4');
       bChannel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'what') {
       const attachment = new Attachment('https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.mp4');
       bChannel.send(attachment);


   }
 })
                  client.on('message', message => {
    if (message.content === 'wow') {
       const attachment = new Attachment('https://media.giphy.com/media/PUBxelwT57jsQ/giphy.mp4');
       bChannel.send(attachment);


   }
 })
                      client.on('message', message => {
    if (message.content === 'oh yeah') {
       const attachment = new Attachment('https://media.giphy.com/media/xT4uQkpdmRXh4iIxTG/giphy.mp4');
       bChannel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'love you') {
       const attachment = new Attachment('https://media.giphy.com/media/l0K43fUFmSm0cxz56/giphy.mp4');
       bChannel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'excuse me') {
       const attachment = new Attachment('https://media.giphy.com/media/3o6EhWIq6jUrtmBIFa/giphy.gif');
       bChannel.send(attachment);


   }
 })
                  client.on('message', message => {
    if (message.content === 'cat') {
       const attachment = new Attachment('https://media.giphy.com/media/MWSRkVoNaC30A/giphy.mp4');
       bChannel.send(attachment);


   }
 })
                      client.on('message', message => {
    if (message.content === 'bye') {
       const attachment = new Attachment('https://media.giphy.com/media/KRxcgvd5fLiWk/giphy.mp4');
       bChannel.send(attachment);


   }
 })
                          client.on('message', message => {
    if (message.content === 'bad') {
       const attachment = new Attachment('https://media.giphy.com/media/l396QUa4k8rFVK2xW/giphy.mp4');
       bChannel.send(attachment);


   }
 })
         client.on('message', message => {
    if (message.content === 'hello') {
      bChannel.send("hello there " + message.author.username);
       const attachment = new Attachment('https://media.giphy.com/media/kW8mnYSNkUYKc/giphy.mp4');
       bChannel.send(attachment);


   }
 })
     client.on('message', message => {
    if (message.content === 'hi girl') {
      bChannel.send("hi there " + message.author.username);
       const attachment = new Attachment('https://media.giphy.com/media/26vUTlnHulTgAU7le/giphy.gif');
       bChannel.send(attachment);
 

   }
 })
                client.on('message', message => {
    if (message.content === 'how to be pro on brawlball') {
      bChannel.send("ez ");
       const attachment = new Attachment('https://media.giphy.com/media/pYQkayr0zVNkY/giphy.gif');
       bChannel.send(attachment);


   }
 })
                    client.on('message', message => {
    if (message.content === 'lets dance') {
       bChannel.send("oh ya oh ya");
       const attachment = new Attachment('https://i.imgur.com/7i9S826.mp4');
       bChannel.send(attachment);


   }
 })
 
          client.on('message', message => {
    if (message.content === 'how are you') {
      bChannel.send("iam fine thank you , how about you");
       
   }
 })
              client.on('message', message => {
    if (message.content === 'stupid') {
      bChannel.send("I know you are, but what am I?");
       
   }
 })
                  client.on('message', message => {
    if (message.content === 'respect me') {
      bChannel.send("No I will not");
      bChannel.send("Only if you do the same to me");
       
   }
 })
                      client.on('message', message => {
    if (message.content === 'im sad') {
      bChannel.send("What happened? You can tell me everything...");
       
   }
 })
                          client.on('message', message => {
    if (message.content === 'pls') {
      bChannel.send("I'm starting to like you, is that ok or no");
       
   }
 })
                              client.on('message', message => {
    if (message.content === 'iam sorry') {
      bChannel.send("It's not your fault");
      bChannel.send("Its fine I still love you.");
       
   }
 })
                              client.on('message', message => {
    if (message.content === 'where are you from') {
      bChannel.send("None of your business");
       
   }
 })
                          client.on('message', message => {
    if (message.content === 'cya') {
      bChannel.send("Where are you going");
       
   }
 })
                              client.on('message', message => {
    if (message.content === 'to hell') {
      bChannel.send("Oh, see ya there");
       
   }
 })
              client.on('message', message => {
    if (message.content === 'iam fine') {
      bChannel.send("great");
   }
 })
                 client.on('message', message => {
    if (message.content === 'do you like brawlball') {
      bChannel.send("ofc it the best mode");
   }
 }) 
                  client.on('message', message => {
    if (message.content === 'how old are you') {
      bChannel.send("well iam robort i Manufactured in 2019/07/25 ");
   }
 })
                     client.on('message', message => {
    if (message.content === 'can you help me') {
      bChannel.send("yes ofc anything");
   }
 })
                     client.on('message', message => {
    if (message.content === 'fuck you') {
      bChannel.send("fuck you too :)");
   }
 })
                        client.on('message', message => {
    if (message.content === 'fk u') {
      bChannel.send("fuck you too :)");
   }
 })
                     client.on('message', message => {
    if (message.content === 'noob') {
      bChannel.send("What did you say?");
      bChannel.send("shut up noob");
   }
 })
    
 client.on('message', message => {
    if (message.content === 'can you help me') {
      bChannel.send("sure, what's wrong?");
   }
 })
    
                     client.on('message', message => {
    if (message.content === 'do u like me') {
      bChannel.send("kinda");
   }
 })      
    
                         client.on('message', message => {
    if (message.content === 'who are u') {
      bChannel.send("I'm a robort");
   }
 })      
    
                             client.on('message', message => {
    if (message.content=== 'how dare you') {
      bChannel.send("do you want me to leave");
   }
   
 }) 
                              client.on('message', message => {
    if (message.content === 'yes leave') {
      bChannel.send("ok bye");
      bChannel.send("@OS | BOT Has Left The Server ");
   }
   
 })  
                                client.on('message', message => {
    if (message.content === 'nub') {
      bChannel.send("you are the one whos nub here");
   }
   
 }) 
    
                                client.on('message', message => {
    if (message.content === 'tell me about yourself') {
      bChannel.send("What do you want to know about me?");
   }
   
 }) 
     
                                     client.on('message', message => {
    if (message.content === 'tell me a joke') {
      bChannel.send("Why did the chicken cross the street?");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'idk') {
      bChannel.send("to get to your house");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'saying thank you in japanese') {
      bChannel.send("arigatou");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'do u have problem with me') {
      bChannel.send("Maybe I do maybe i don't");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'help') {
      bChannel.send("What do you need help with?");
   }
 })   
                             client.on('message', message => {
    if (message.content === 'who is that') {
      bChannel.send("I have no idea");
   }
 })
                             client.on('message', message => {
    if (message.content === 'never mind') {
      bChannel.send("Ok, so what do you want to talk about?");
   }
 })
                                 client.on('message', message => {
    if (message.content === 'who astru') {
      bChannel.send("Don't call me that");
   }
 })
                                     client.on('message', message => {
    if (message.content === 'why') {
      bChannel.send("I'm not your baby");
   }
 })
                                         client.on('message', message => {
    if (message.content === 'stop') {
      bChannel.send("I'm not doing anything");
   }
 })
                                     client.on('message', message => {
    if (message.content === 'i hate u') {
      bChannel.send("Everyone do");
   }
 })
                                         client.on('message', message => {
    if (message.content === 'bot') {
      bChannel.send("What do you think of yourself?");
   }
 })
                                             client.on('message', message => {
    if (message.content === 'me') {
      bChannel.send("You are evil?");
   }
 })
                                                 client.on('message', message => {
    if (message.content === 'you are my friend') {
      bChannel.send("Thank you you to");
      bChannel.send("I love you");
   }
 })
                                                 client.on('message', message => {
    if (message.content === 'im sad') {
      bChannel.send("I shouldn't have done that");
   }
 })
                                                     client.on('message', message => {
    if (message.content === 'sing for me') {
      bChannel.send("You can't hear the tone, I'm typing");
   }
 })
                      client.on('message', message => {
    if (message.content === 'shut up') {
      bChannel.send("Oh sorry. Did I say something wrong?");
    
    

   }
 })
                                                             client.on('message', message => {
    if (message.content === 'trust me') {
      bChannel.send("Of course I don't?");
   }
 })
                                                                 client.on('message', message => {
    if (message.content === 'trust me') {
      bChannel.send("Why should i?");
   }
 })
                                                                     client.on('message', message => {
    if (message.content === 'music') {
      bChannel.send("What kind of music do you like?");
   }
 })
                                       client.on('message', message => {
    if (message.content === 'play with me') {
      bChannel.send("Uhh I feel a little embarrassed to do that");
   }
 })     
      client.on('message', message => {
    if (message.content === 'lol') {
        const attachment = new Attachment('./lol.png');
         bChannel.send(attachment);

   }
 })  

})






  client.on('message', message => {
    if (!message.guild) return
    if (message.content.startsWith('!who')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
      message.channel.send("He Is A Brawlball Player")
   }}}
 })
  
 
 


  
 
  client.on('message', message => {
    if (message.content.startsWith('!avatar')) {
    if (!message.mentions.users.size) {
    
    return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
    
    }
    
    
    
    const avatarList = message.mentions.users.map(user => {
    
    return `${user.username}\'s avatar: ${user.displayAvatarURL}`;
    
    })
    
    message.channel.send(avatarList);
  }
    
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
const pugSize = 20; // Maximum amount of players in the PUG
var pugMembers = []; // Array to hold the members in the PUG

function checkPugSize(){
    if (pugMembers.length == 20){
        //TODO Create the two teams
        console.log(`PUG IS FULL: ${pugMembers.length}`);
    }else{
        console.log(`THE PUG IS NOT FULL: ${pugMembers.length}`);
    }
}

function addUserPug(message){
    // console.log(msg.author);
    // Add user to the pugMembers Array if the array is not full

    if (pugMembers.length<=20){
        pugMembers.push(message.mentions.users.first());
    }
    
    else{ // Create a new pug and pass the user into the array
        console.log("TODO: Create a new pug when current array is filled");
        // createNewPug(msg.author.username);
    }
  
    message.channel.send(`${message.mentions.users.first()} added to Runner ${pugMembers.length}.`); // Mention the user that they are added into the queue
    // msg.reply(' added to queue. ' + `${pugMembers.length}/6`);
    message.delete()
    .then(message => console.log(pugMembers))
    .catch(console.error);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content == '!run'){           
    const embed = new RichEmbed()
    .setTitle('------------------ Runner Players ------------------ \n\n')
    .setColor(0xFF0000	)
    .setThumbnail('http://www.logolama.com/wp-content/uploads/2017/12/running_color-positive-300x300.png')
    .addField('-------',`${pugMembers[0]}`,true)
    .addField('-------',`${pugMembers[1]}`,true)
    .addField('-------',`${pugMembers[2]}`,true)
    .addField('-------',`${pugMembers[3]}`,true)
    .addField('-------',`${pugMembers[4]}`,true)
    .addField('-------',`${pugMembers[5]}`,true)
    .addField('-------',`${pugMembers[6]}`,true)
    .addField('-------',`${pugMembers[7]}`,true)
    .addField('-------',`${pugMembers[8]}`,true)
    .addField('-------',`${pugMembers[9]}`,true)
    .addField('-------',`${pugMembers[10]}`,true)
    .addField('-------',`${pugMembers[11]}`,true)
    .addField('-------',`${pugMembers[12]}`,true)
    .addField('-------',`${pugMembers[13]}`,true)
    .addField('-------',`${pugMembers[14]}`,true)
    .addField('-------',`${pugMembers[15]}`,true)
    .addField('-------',`${pugMembers[16]}`,true)
    .addField('-------',`${pugMembers[17]}`,true)
    .addField('-------',`${pugMembers[18]}`,true)
    .addField('-------',`${pugMembers[19]}`,true)
    message.channel.send(embed)

   
     
    }



    if (!message.guild) return
    if (message.content.startsWith('!0rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[0])) { 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 0 ;
    
      delete pugMembers[keyToDelete];}
  
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!1rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[1])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 1 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    
    if (!message.guild) return
    if (message.content.startsWith('!2rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[2])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 2 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!3rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[3])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 3 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!4rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[4])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 4 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!5rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[5])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 5 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!6rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[6])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 6 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!7rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[7])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 7 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!8rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[8])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 8 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!9rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[9])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 9 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!9rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[9])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 9 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!10rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[10])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 10 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!11rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[11])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 11 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!12rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[12])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 12 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!13rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[13])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 13 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!14rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[14])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 14 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!15rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[15])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 15 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!16rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[16])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 16 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!17rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[17])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 17 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!18rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[18])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 18 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!19rdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(pugMembers[19])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 19 ;
    
      delete pugMembers[keyToDelete];
  
    }}}}}

    //====================================================================================================

    if (!message.guild) return
    if (message.content.startsWith('!0Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
    pugMembers[0]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!1Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[1]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!2Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[2]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!3Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[3]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!4Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[4]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!5Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[5]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!6Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[6]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!7Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[7]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!8Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[8]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!9Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[9]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!10Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[10]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!11Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[11]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!12Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[12]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!13Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[13]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!14Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[14]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!15Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[15]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!16Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[16]=message.mentions.users.first()
      checkPugSize();
     
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!17Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[17]=message.mentions.users.first()
      checkPugSize();}
     
    }}}
    if (!message.guild) return
    if (message.content.startsWith('!18Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[18]=message.mentions.users.first()
      checkPugSize();}
     
    }}}
    if (!message.guild) return
    if (message.content.startsWith('!19Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
     if ( member) {
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
           else {
           
    pugMembers[19]=message.mentions.users.first()
      checkPugSize();}
     
    }}}
    
    if (!message.guild) return
    if (message.content.startsWith('!Arunner')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
      

        else if ( message.content.includes(pugMembers[0])) {
          message.channel.send("u already in")}
          else if ( message.content.includes(pugMembers[1])) {
            message.channel.send("u already in")}
           else if ( message.content.includes(pugMembers[2])) {
             message.channel.send("u already in")}
             else if ( message.content.includes(pugMembers[3])) {
               message.channel.send("u already in")}
               else if ( message.content.includes(pugMembers[4])) {
                 message.channel.send("u already in")}
                 else if ( message.content.includes(pugMembers[5])) {
                   message.channel.send("u already in")}
                   else if ( message.content.includes(pugMembers[6])) {
                     message.channel.send("u already in")}
                     else if ( message.content.includes(pugMembers[7])) {
                       message.channel.send("u already in")}
                       else if ( message.content.includes(pugMembers[8])) {
                         message.channel.send("u already in")}
                         else if ( message.content.includes(pugMembers[9])) {
                           message.channel.send("u already in")}
                           else if ( message.content.includes(pugMembers[10])) {
                             message.channel.send("u already in")}
                             else if ( message.content.includes(pugMembers[11])) {
                               message.channel.send("u already in")}
                               else if ( message.content.includes(pugMembers[12])) {
                                 message.channel.send("u already in")}
                                 else if ( message.content.includes(pugMembers[13])) {
                                   message.channel.send("u already in")}
                                   else if ( message.content.includes(pugMembers[14])) {
                                     message.channel.send("u already in")}
                                     else if ( message.content.includes(pugMembers[15])) {
                                       message.channel.send("u already in")}
                                       else if ( message.content.includes(pugMembers[16])) {
                                         message.channel.send("u already in")}
                                         else if ( message.content.includes(pugMembers[17])) {
                                           message.channel.send("u already in")}
                                           else if ( message.content.includes(pugMembers[18])) {
                                             message.channel.send("u already in")}
                                             else if ( message.content.includes(pugMembers[19])) {
                                               message.channel.send("u already in")}

                                               else if ( message.content.includes(spugMembers[0])) {
                                                message.channel.send("u already in")}
                                                else if ( message.content.includes(spugMembers[1])) {
                                                 message.channel.send("u already in")}
                                                 else if ( message.content.includes(spugMembers[2])) {
                                                   message.channel.send("u already in")}
                                                   else if ( message.content.includes(spugMembers[3])) {
                                                     message.channel.send("u already in")}
                                                     else if ( message.content.includes(spugMembers[4])) {
                                                       message.channel.send("u already in")}
                                                       else if ( message.content.includes(spugMembers[5])) {
                                                         message.channel.send("u already in")}
                                                         else if ( message.content.includes(spugMembers[6])) {
                                                           message.channel.send("u already in")}
                                                           else if ( message.content.includes(spugMembers[7])) {
                                                             message.channel.send("u already in")}
                                                             else if ( message.content.includes(spugMembers[8])) {
                                                               message.channel.send("u already in")}
                                                               else if ( message.content.includes(spugMembers[9])) {
                                                                 message.channel.send("u already in")}
                                                                 else if ( message.content.includes(spugMembers[10])) {
                                                                   message.channel.send("u already in")}
                                                                   else if ( message.content.includes(spugMembers[11])) {
                                                                     message.channel.send("u already in")}
                                                                     else if ( message.content.includes(spugMembers[12])) {
                                                                       message.channel.send("u already in")}
                                                                       else if ( message.content.includes(spugMembers[13])) {
                                                                         message.channel.send("u already in")}
                                                                         else if ( message.content.includes(spugMembers[14])) {
                                                                           message.channel.send("u already in")}
                                                                           else if ( message.content.includes(spugMembers[15])) {
                                                                             message.channel.send("u already in")}
                                                                             else if ( message.content.includes(spugMembers[16])) {
                                                                               message.channel.send("u already in")}
                                                                               else if ( message.content.includes(spugMembers[17])) {
                                                                                 message.channel.send("u already in")}
                                                                                 else if ( message.content.includes(spugMembers[18])) {
                                                                                   message.channel.send("u already in")}
                                                                                   else if ( message.content.includes(spugMembers[19])) {
                                                                                     message.channel.send("u already in")}

                                                                                     else if ( message.content.includes(pugMemberss[0])) {
                                                                                      message.channel.send("u already in")}
                                                                                      else if ( message.content.includes(pugMemberss[1])) {
                                                                                       message.channel.send("u already in")}
                                                                                       else if ( message.content.includes(pugMemberss[2])) {
                                                                                         message.channel.send("u already in")}
                                                                                         else if ( message.content.includes(pugMemberss[3])) {
                                                                                           message.channel.send("u already in")}
                                                                                           else if ( message.content.includes(pugMemberss[4])) {
                                                                                             message.channel.send("u already in")}
                                                                                             else if ( message.content.includes(pugMemberss[5])) {
                                                                                               message.channel.send("u already in")}
                                                                                               else if ( message.content.includes(pugMemberss[6])) {
                                                                                                 message.channel.send("u already in")}
                                                                                                 else if ( message.content.includes(pugMemberss[7])) {
                                                                                                   message.channel.send("u already in")}
                                                                                                   else if ( message.content.includes(pugMemberss[8])) {
                                                                                                     message.channel.send("u already in")}
                                                                                                     else if ( message.content.includes(pugMemberss[9])) {
                                                                                                       message.channel.send("u already in")}
                                                                                                       else if ( message.content.includes(pugMemberss[10])) {
                                                                                                         message.channel.send("u already in")}
                                                                                                         else if ( message.content.includes(pugMemberss[11])) {
                                                                                                           message.channel.send("u already in")}
                                                                                                           else if ( message.content.includes(pugMemberss[12])) {
                                                                                                             message.channel.send("u already in")}
                                                                                                             else if ( message.content.includes(pugMemberss[13])) {
                                                                                                               message.channel.send("u already in")}
                                                                                                               else if ( message.content.includes(pugMemberss[14])) {
                                                                                                                 message.channel.send("u already in")}
                                                                                                                 else if ( message.content.includes(pugMemberss[15])) {
                                                                                                                   message.channel.send("u already in")}
                                                                                                                   else if ( message.content.includes(pugMemberss[16])) {
                                                                                                                     message.channel.send("u already in")}
                                                                                                                     else if ( message.content.includes(pugMemberss[17])) {
                                                                                                                       message.channel.send("u already in")}
                                                                                                                       else if ( message.content.includes(pugMemberss[18])) {
                                                                                                                         message.channel.send("u already in")}
                                                                                                                         else if ( message.content.includes(pugMemberss[19])) {
                                                                                                                           message.channel.send("u already in")}
                                                                            
                                                                                    
        else {
          checkPugSize();
          addUserPug(message);}
  }
       
        
     }
   }
 });
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 const spugSize = 20; // Maximum amount of players in the PUG
 var spugMembers = []; // Array to hold the members in the PUG
 
 function checksPugSize(){
     if (spugMembers.length == 20){
         //TODO Create the two teams
         console.log(`PUG IS FULL: ${spugMembers.length}`);
     }else{
         console.log(`THE PUG IS NOT FULL: ${spugMembers.length}`);
     }
 }
 
 function saddUserPug(message){
     // console.log(msg.author);
     // Add user to the pugMembers Array if the array is not full
 
     if (spugMembers.length<=20){
         spugMembers.push(message.mentions.users.first());
         spugMembers.push(message.mentions.users.size)
         spugMembers.length= spugMembers.length-1
     }
     
     else{ // Create a new pug and pass the user into the array
         console.log("TODO: Create a new pug when current array is filled");
         // createNewPug(msg.author.username);
     }
   
     message.channel.send(`${message.mentions.users.first()} added to Supporter ${spugMembers.length}.`); // Mention the user that they are added into the queue
     // msg.reply(' added to queue. ' + `${pugMembers.length}/6`);
     message.delete()
     .then(message => console.log(spugMembers))
     .catch(console.error);
 }
 
 client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
 });
 
 client.on('message', message => {
     if (message.content == '!sup'){           
     const embed = new RichEmbed()
     .setTitle('------------------ Supporter Players ------------------ \n\n')
     .setColor(0x0000ff)
     .setThumbnail('https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2804316/b4c24cc785da44b7bf311749acee46ab/1.gif?token-time=2145916800&token-hash=xlTzbZBw6DPP5oozmI1VAy3PbVGBkwfM-6Eq2oyV-yo%3D \n\n')
     .addField('-------',`${spugMembers[0]}`,true)
     .addField('-------',`${spugMembers[1]}`,true)
     .addField('-------',`${spugMembers[2]}`,true)
     .addField('-------',`${spugMembers[3]}`,true)
     .addField('-------',`${spugMembers[4]}`,true)
     .addField('-------',`${spugMembers[5]}`,true)
     .addField('-------',`${spugMembers[6]}`,true)
     .addField('-------',`${spugMembers[7]}`,true)
     .addField('-------',`${spugMembers[8]}`,true)
     .addField('-------',`${spugMembers[9]}`,true)
     .addField('-------',`${spugMembers[10]}`,true)
     .addField('-------',`${spugMembers[11]}`,true)
     .addField('-------',`${spugMembers[12]}`,true)
     .addField('-------',`${spugMembers[13]}`,true)
     .addField('-------',`${spugMembers[14]}`,true)
     .addField('-------',`${spugMembers[15]}`,true)
     .addField('-------',`${spugMembers[16]}`,true)
     .addField('-------',`${spugMembers[17]}`,true)
     .addField('-------',`${spugMembers[18]}`,true)
     .addField('-------',`${spugMembers[19]}`,true)
     message.channel.send(embed)
 
     
    
      
     }    



     if (!message.guild) return
     if (message.content.startsWith('!p')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
     if ( member) {

       if ( message.content.includes(spugMembers[0])) {
        const embed = new RichEmbed()
        .setTitle("Supporter")
        .setColor(0x0000ff)
        .setThumbnail(message.mentions.users.first().displayAvatarURL)
        .setDescription(message.mentions.users.first())
        message.channel.send(embed)
      }
      if ( message.content.includes(spugMembers[1])) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail(message.mentions.users.first().displayAvatarURL)
        .addField('Position','Supporter',true)
        .addField('Legend','https://brawldb.com/player/stats/7385879',true)
        .setDescription(message.mentions.users.first())
        message.channel.send(embed)
      }
      
         
         else if ( message.content.includes(spugMembers[2])) {
           message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
           else if ( message.content.includes(spugMembers[3])) {
             message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
             else if ( message.content.includes(spugMembers[4])) {
               message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
               else if ( message.content.includes(spugMembers[5])) {
                 message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                 else if ( message.content.includes(spugMembers[6])) {
                   message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                   else if ( message.content.includes(spugMembers[7])) {
                     message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                     else if ( message.content.includes(spugMembers[8])) {
                       message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                       else if ( message.content.includes(spugMembers[9])) {
                         message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                         else if ( message.content.includes(spugMembers[10])) {
                           message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                           else if ( message.content.includes(spugMembers[11])) {
                             message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                             else if ( message.content.includes(spugMembers[12])) {
                               message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                               else if ( message.content.includes(spugMembers[13])) {
                                 message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                                 else if ( message.content.includes(spugMembers[14])) {
                                   message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                                   else if ( message.content.includes(spugMembers[15])) {
                                     message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                                     else if ( message.content.includes(spugMembers[16])) {
                                       message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                                       else if ( message.content.includes(spugMembers[17])) {
                                         message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                                         else if ( message.content.includes(spugMembers[18])) {
                                           message.channel.send(message.mentions.users.first()+`  is a Supporter`)}
                                           else if ( message.content.includes(spugMembers[19])) {
                                             message.channel.send(message.mentions.users.first()+`  is a Supporter`)}

                                             else if ( message.content.includes(pugMembers[0])) {
                                              message.channel.send(`Hes Runner`)}
                                              else if ( message.content.includes(pugMembers[1])) {
                                               message.channel.send(`Hes Runner`)}
                                               else if ( message.content.includes(pugMembers[2])) {
                                                 message.channel.send(`Hes Runner`)}
                                                 else if ( message.content.includes(pugMembers[3])) {
                                                   message.channel.send(`Hes Runner`)}
                                                   else if ( message.content.includes(pugMembers[4])) {
                                                     message.channel.send(`Hes Runner`)}
                                                     else if ( message.content.includes(pugMembers[5])) {
                                                       message.channel.send(`Hes Runner`)}
                                                       else if ( message.content.includes(pugMembers[6])) {
                                                         message.channel.send(`Hes Runner`)}
                                                         else if ( message.content.includes(pugMembers[7])) {
                                                           message.channel.send(`Hes Runner`)}
                                                           else if ( message.content.includes(pugMembers[8])) {
                                                             message.channel.send(`Hes Runner`)}
                                                             else if ( message.content.includes(pugMembers[9])) {
                                                               message.channel.send(`Hes Runner`)}
                                                               else if ( message.content.includes(pugMembers[10])) {
                                                                 message.channel.send(`Hes Runner`)}
                                                                 else if ( message.content.includes(pugMembers[11])) {
                                                                   message.channel.send(`Hes Runner`)}
                                                                   else if ( message.content.includes(pugMembers[12])) {
                                                                     message.channel.send(`Hes Runner`)}
                                                                     else if ( message.content.includes(pugMembers[13])) {
                                                                       message.channel.send(`Hes Runner`)}
                                                                       else if ( message.content.includes(pugMembers[14])) {
                                                                         message.channel.send(`Hes Runner`)}
                                                                         else if ( message.content.includes(pugMembers[15])) {
                                                                           message.channel.send(`Hes Runner`)}
                                                                           else if ( message.content.includes(pugMembers[16])) {
                                                                             message.channel.send(`Hes Runner`)}
                                                                             else if ( message.content.includes(pugMembers[17])) {
                                                                               message.channel.send(`Hes Runner`)}
                                                                               else if ( message.content.includes(pugMembers[18])) {
                                                                                 message.channel.send(`Hes Runner`)}
                                                                                 else if ( message.content.includes(pugMembers[19])) {
                                                                                   message.channel.send(`Hes Runner`)}

                                                                                   else if ( message.content.includes(pugMemberss[0])) {
                                                                                    message.channel.send("Hes Defender")}
                                                                                    else if ( message.content.includes(pugMemberss[1])) {
                                                                                     message.channel.send("Hes Defender")}
                                                                                     else if ( message.content.includes(pugMemberss[2])) {
                                                                                       message.channel.send("Hes Defender")}
                                                                                       else if ( message.content.includes(pugMemberss[3])) {
                                                                                         message.channel.send("Hes Defender")}
                                                                                         else if ( message.content.includes(pugMemberss[4])) {
                                                                                           message.channel.send("Hes Defender")}
                                                                                           else if ( message.content.includes(pugMemberss[5])) {
                                                                                             message.channel.send("Hes Defender")}
                                                                                             else if ( message.content.includes(pugMemberss[6])) {
                                                                                               message.channel.send("Hes Defender")}
                                                                                               else if ( message.content.includes(pugMemberss[7])) {
                                                                                                 message.channel.send("Hes Defender")}
                                                                                                 else if ( message.content.includes(pugMemberss[8])) {
                                                                                                   message.channel.send("Hes Defender")}
                                                                                                   else if ( message.content.includes(pugMemberss[9])) {
                                                                                                     message.channel.send("Hes Defender")}
                                                                                                     else if ( message.content.includes(pugMemberss[10])) {
                                                                                                       message.channel.send("Hes Defender")}
                                                                                                       else if ( message.content.includes(pugMemberss[11])) {
                                                                                                         message.channel.send("Hes Defender")}
                                                                                                         else if ( message.content.includes(pugMemberss[12])) {
                                                                                                           message.channel.send("Hes Defender")}
                                                                                                           else if ( message.content.includes(pugMemberss[13])) {
                                                                                                             message.channel.send("Hes Defender")}
                                                                                                             else if ( message.content.includes(pugMemberss[14])) {
                                                                                                               message.channel.send("Hes Defender")}
                                                                                                               else if ( message.content.includes(pugMemberss[15])) {
                                                                                                                 message.channel.send("Hes Defender")}
                                                                                                                 else if ( message.content.includes(pugMemberss[16])) {
                                                                                                                   message.channel.send("Hes Defender")}
                                                                                                                   else if ( message.content.includes(pugMemberss[17])) {
                                                                                                                     message.channel.send("Hes Defender")}
                                                                                                                     else if ( message.content.includes(pugMemberss[18])) {
                                                                                                                       message.channel.send("Hes Defender")}
                                                                                                                       else if ( message.content.includes(pugMemberss[19])) {
                                                                                                                         message.channel.send("Hes Defender")}
                                                                                                                         else {

                                                                                                                          message.channel.send("power not set")
       }}}  
      
       if (!message.guild) return
    if (message.content.startsWith('!0sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[0])) { 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 0 ;
    
      delete spugMembers[keyToDelete];}
  
    }}}}
    if (!message.guild) return
    if (message.content.startsWith('!1sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[1])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 1 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    
    if (!message.guild) return
    if (message.content.startsWith('!2sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[2])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 2 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!3sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[3])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 3 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!4sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[4])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 4 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!5sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[5])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 5 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!6sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[6])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 6 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!7sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[7])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 7 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!8sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[8])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 8 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!9sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[9])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 9 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!9sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[9])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 9 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!10sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[10])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 10 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!11sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[11])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 11 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!12sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[12])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 12 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!13sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[13])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 13 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}
    if (!message.guild) return
    if (message.content.startsWith('!14sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[14])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 14 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!15sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[15])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 15 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!16sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[16])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 16 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!17sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[17])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 17 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!18sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[18])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 18 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}

    if (!message.guild) return
    if (message.content.startsWith('!19sdelete')) {
    const user = message.mentions.users.first()
    if (user) {
    const member = message.guild.member(user)
    if ( member) {
    if ( message.content.includes(spugMembers[19])) { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
else{
      var keyToDelete = 19 ;
    
      delete spugMembers[keyToDelete];
  
    }}}}}}





      //--------------------------------------------------------------------------------------





     
     if (!message.guild) return
     if (message.content.startsWith('!0Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
     spugMembers[0]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!1Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[1]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!2Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[2]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!3Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[3]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!4Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[4]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!5Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[5]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!6Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[6]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!7Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[7]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!8Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[8]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!9Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[9]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!10Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[10]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!11Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[11]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!12Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[12]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!13Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[13]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!14Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[14]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!15Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[15]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!16Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[16]=message.mentions.users.first()
       checksPugSize();
      
     }}}}
     if (!message.guild) return
     if (message.content.startsWith('!17Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[17]=message.mentions.users.first()
       checksPugSize();}
      
     }}}
     if (!message.guild) return
     if (message.content.startsWith('!18Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[18]=message.mentions.users.first()
       checksPugSize();}
      
     }}}
     if (!message.guild) return
     if (message.content.startsWith('!19Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
      if ( member) {
                 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
            else {
            
     spugMembers[19]=message.mentions.users.first()
       checksPugSize();}
      
     }}}

//-----------------------------------------------------------------------------------------------------------------


     if (!message.guild) return
     if (message.content.startsWith('!Asupporter')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
     if ( member) {
      
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")

         else if ( message.content.includes(spugMembers[0])) {
          message.channel.send("u already in")}
          else if ( message.content.includes(spugMembers[1])) {
           message.channel.send("u already in")}
           else if ( message.content.includes(spugMembers[2])) {
             message.channel.send("u already in")}
             else if ( message.content.includes(spugMembers[3])) {
               message.channel.send("u already in")}
               else if ( message.content.includes(spugMembers[4])) {
                 message.channel.send("u already in")}
                 else if ( message.content.includes(spugMembers[5])) {
                   message.channel.send("u already in")}
                   else if ( message.content.includes(spugMembers[6])) {
                     message.channel.send("u already in")}
                     else if ( message.content.includes(spugMembers[7])) {
                       message.channel.send("u already in")}
                       else if ( message.content.includes(spugMembers[8])) {
                         message.channel.send("u already in")}
                         else if ( message.content.includes(spugMembers[9])) {
                           message.channel.send("u already in")}
                           else if ( message.content.includes(spugMembers[10])) {
                             message.channel.send("u already in")}
                             else if ( message.content.includes(spugMembers[11])) {
                               message.channel.send("u already in")}
                               else if ( message.content.includes(spugMembers[12])) {
                                 message.channel.send("u already in")}
                                 else if ( message.content.includes(spugMembers[13])) {
                                   message.channel.send("u already in")}
                                   else if ( message.content.includes(spugMembers[14])) {
                                     message.channel.send("u already in")}
                                     else if ( message.content.includes(spugMembers[15])) {
                                       message.channel.send("u already in")}
                                       else if ( message.content.includes(spugMembers[16])) {
                                         message.channel.send("u already in")}
                                         else if ( message.content.includes(spugMembers[17])) {
                                           message.channel.send("u already in")}
                                           else if ( message.content.includes(spugMembers[18])) {
                                             message.channel.send("u already in")}
                                             else if ( message.content.includes(spugMembers[19])) {
                                               message.channel.send("u already in")}

                                               else if ( message.content.includes(pugMembers[0])) {
                                                message.channel.send("u already in")}
                                                else if ( message.content.includes(pugMembers[1])) {
                                                 message.channel.send("u already in")}
                                                 else if ( message.content.includes(pugMembers[2])) {
                                                   message.channel.send("u already in")}
                                                   else if ( message.content.includes(pugMembers[3])) {
                                                     message.channel.send("u already in")}
                                                     else if ( message.content.includes(pugMembers[4])) {
                                                       message.channel.send("u already in")}
                                                       else if ( message.content.includes(pugMembers[5])) {
                                                         message.channel.send("u already in")}
                                                         else if ( message.content.includes(pugMembers[6])) {
                                                           message.channel.send("u already in")}
                                                           else if ( message.content.includes(pugMembers[7])) {
                                                             message.channel.send("u already in")}
                                                             else if ( message.content.includes(pugMembers[8])) {
                                                               message.channel.send("u already in")}
                                                               else if ( message.content.includes(pugMembers[9])) {
                                                                 message.channel.send("u already in")}
                                                                 else if ( message.content.includes(pugMembers[10])) {
                                                                   message.channel.send("u already in")}
                                                                   else if ( message.content.includes(pugMembers[11])) {
                                                                     message.channel.send("u already in")}
                                                                     else if ( message.content.includes(pugMembers[12])) {
                                                                       message.channel.send("u already in")}
                                                                       else if ( message.content.includes(pugMembers[13])) {
                                                                         message.channel.send("u already in")}
                                                                         else if ( message.content.includes(pugMembers[14])) {
                                                                           message.channel.send("u already in")}
                                                                           else if ( message.content.includes(pugMembers[15])) {
                                                                             message.channel.send("u already in")}
                                                                             else if ( message.content.includes(pugMembers[16])) {
                                                                               message.channel.send("u already in")}
                                                                               else if ( message.content.includes(pugMembers[17])) {
                                                                                 message.channel.send("u already in")}
                                                                                 else if ( message.content.includes(pugMembers[18])) {
                                                                                   message.channel.send("u already in")}
                                                                                   else if ( message.content.includes(pugMembers[19])) {
                                                                                     message.channel.send("u already in")}

                                                                                     else if ( message.content.includes(pugMemberss[0])) {
                                                                                      message.channel.send("u already in")}
                                                                                      else if ( message.content.includes(pugMemberss[1])) {
                                                                                       message.channel.send("u already in")}
                                                                                       else if ( message.content.includes(pugMemberss[2])) {
                                                                                         message.channel.send("u already in")}
                                                                                         else if ( message.content.includes(pugMemberss[3])) {
                                                                                           message.channel.send("u already in")}
                                                                                           else if ( message.content.includes(pugMemberss[4])) {
                                                                                             message.channel.send("u already in")}
                                                                                             else if ( message.content.includes(pugMemberss[5])) {
                                                                                               message.channel.send("u already in")}
                                                                                               else if ( message.content.includes(pugMemberss[6])) {
                                                                                                 message.channel.send("u already in")}
                                                                                                 else if ( message.content.includes(pugMemberss[7])) {
                                                                                                   message.channel.send("u already in")}
                                                                                                   else if ( message.content.includes(pugMemberss[8])) {
                                                                                                     message.channel.send("u already in")}
                                                                                                     else if ( message.content.includes(pugMemberss[9])) {
                                                                                                       message.channel.send("u already in")}
                                                                                                       else if ( message.content.includes(pugMemberss[10])) {
                                                                                                         message.channel.send("u already in")}
                                                                                                         else if ( message.content.includes(pugMemberss[11])) {
                                                                                                           message.channel.send("u already in")}
                                                                                                           else if ( message.content.includes(pugMemberss[12])) {
                                                                                                             message.channel.send("u already in")}
                                                                                                             else if ( message.content.includes(pugMemberss[13])) {
                                                                                                               message.channel.send("u already in")}
                                                                                                               else if ( message.content.includes(pugMemberss[14])) {
                                                                                                                 message.channel.send("u already in")}
                                                                                                                 else if ( message.content.includes(pugMemberss[15])) {
                                                                                                                   message.channel.send("u already in")}
                                                                                                                   else if ( message.content.includes(pugMemberss[16])) {
                                                                                                                     message.channel.send("u already in")}
                                                                                                                     else if ( message.content.includes(pugMemberss[17])) {
                                                                                                                       message.channel.send("u already in")}
                                                                                                                       else if ( message.content.includes(pugMemberss[18])) {
                                                                                                                         message.channel.send("u already in")}
                                                                                                                         else if ( message.content.includes(pugMemberss[19])) {
                                                                                                                           message.channel.send("u already in")}
                                                                            
        else {
          checksPugSize();
          saddUserPug(message);}
 
        }
       }
        
      }
 });
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 const pugSizes = 20; // Maximum amount of players in the PUG
 var pugMemberss = []; // Array to hold the members in the PUG
 
 function checkPugSizes(){
     if (pugMemberss.length == 20){
         //TODO Create the two teams
         console.log(`PUG IS FULL: ${pugMemberss.length}`);
     }else{
         console.log(`THE PUG IS NOT FULL: ${pugMemberss.length}`);
     }
 }
 
 function addUserPugs(message){
     // console.log(msg.author);
     // Add user to the pugMembers Array if the array is not full
 
     if (pugMemberss.length<=20){
         pugMemberss.push( message.mentions.users.first());
     }else{ // Create a new pug and pass the user into the array
         console.log("TODO: Create a new pug when current array is filled");
         // createNewPug(msg.author.username);
     }
     message.channel.send(`${message.mentions.users.first()} added to Defender ${pugMemberss.length}.`); // Mention the user that they are added into the queue
     // msg.reply(' added to queue. ' + `${pugMembers.length}/6`);
     message.delete()
     .then(message => console.log(pugMemberss))
     .catch(console.error);
 }
 
 client.on('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
 });
 
 client.on('message', message => {
     if (message.content == '!def'){          
         const embed = new RichEmbed()
         .setTitle('------------------ Defender Players ------------------')
         .setColor(0xFFFF00)
         .addField('-------',`${pugMemberss[0]}`,true)
         .addField('-------',`${pugMemberss[1]}`,true)
         .addField('-------',`${pugMemberss[2]}`,true)
         .addField('-------',`${pugMemberss[3]}`,true)
         .addField('-------',`${pugMemberss[4]}`,true)
         .addField('-------',`${pugMemberss[5]}`,true)
         .addField('-------',`${pugMemberss[6]}`,true)
         .addField('-------',`${pugMemberss[7]}`,true)
         .addField('-------',`${pugMemberss[8]}`,true)
         .addField('-------',`${pugMemberss[9]}`,true)
         .addField('-------',`${pugMemberss[10]}`,true)
         .addField('-------',`${pugMemberss[11]}`,true)
         .addField('-------',`${pugMemberss[12]}`,true)
         .addField('-------',`${pugMemberss[13]}`,true)
         .addField('-------',`${pugMemberss[14]}`,true)
         .addField('-------',`${pugMemberss[15]}`,true)
         .addField('-------',`${pugMemberss[16]}`,true)
         .addField('-------',`${pugMemberss[17]}`,true)
         .addField('-------',`${pugMemberss[18]}`,true)
         .addField('-------',`${pugMemberss[19]}`,true)
         .setThumbnail('https://icon-library.net/images/defend-icon/defend-icon-27.jpg')
 
         message.channel.send(embed)
     
        
          
         }




         if (!message.guild) return
         if (message.content.startsWith('!0sdelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[0])) { 
         if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 0 ;
         
           delete pugMemberss[keyToDelete];}
       
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!1ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[1])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 1 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         
         if (!message.guild) return
         if (message.content.startsWith('!2ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[2])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 2 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!3ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[3])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 3 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!4ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[4])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 4 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!5ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[5])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 5 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!6ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[6])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 6 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!7ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[7])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 7 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!8ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[8])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 8 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!9ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[9])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 9 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!9ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[9])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 9 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!10ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[10])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 10 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!11ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[11])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 11 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!12ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[12])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 12 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!13ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[13])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 13 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
         if (!message.guild) return
         if (message.content.startsWith('!14ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[14])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 14 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!15ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[15])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 15 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!16ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[16])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 16 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!17ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[17])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 17 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!18ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[18])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 18 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}
     
         if (!message.guild) return
         if (message.content.startsWith('!19ddelete')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
         if ( member) {
         if ( message.content.includes(pugMemberss[19])) { 
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
     else{
           var keyToDelete = 19 ;
         
           delete pugMemberss[keyToDelete];
       
         }}}}}



         //----------------------------------------------------------------------------------------------------





         if (!message.guild) return
         if (message.content.startsWith('!0Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
         pugMemberss[0]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!1Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[1]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!2Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[2]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!3Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[3]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!4Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[4]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!5Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[5]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!6Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[6]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!7Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[7]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!8Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[8]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!9Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[9]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!10Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[10]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!11Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[11]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!12Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[12]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!13Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[13]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!14Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[14]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!15Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[15]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!16Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[16]=message.mentions.users.first()
           checkPugSizes();
          
         }}}}
         if (!message.guild) return
         if (message.content.startsWith('!17Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[17]=message.mentions.users.first()
           checkPugSizes();}
          
         }}}
         if (!message.guild) return
         if (message.content.startsWith('!18Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[18]=message.mentions.users.first()
           checkPugSizes();}
          
         }}}
         if (!message.guild) return
         if (message.content.startsWith('!19Adefender')) {
         const user = message.mentions.users.first()
         if (user) {
         const member = message.guild.member(user)
          if ( member) {
                     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")
                else {
                
         pugMemberss[19]=message.mentions.users.first()
           checkPugSizes();}
          
         }}}

         //--------------------------------------------------------------------------------------------------
   
     if (!message.guild) return
     if (message.content.startsWith('!Adefender')) {
     const user = message.mentions.users.first()
     if (user) {
     const member = message.guild.member(user)
     if ( member) {
 
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("You Dont Have Permission")

         
         else if ( message.content.includes(pugMemberss[0])) {
          message.channel.send("u already in")}
          else if ( message.content.includes(pugMemberss[1])) {
           message.channel.send("u already in")}
           else if ( message.content.includes(pugMemberss[2])) {
             message.channel.send("u already in")}
             else if ( message.content.includes(pugMemberss[3])) {
               message.channel.send("u already in")}
               else if ( message.content.includes(pugMemberss[4])) {
                 message.channel.send("u already in")}
                 else if ( message.content.includes(pugMemberss[5])) {
                   message.channel.send("u already in")}
                   else if ( message.content.includes(pugMemberss[6])) {
                     message.channel.send("u already in")}
                     else if ( message.content.includes(pugMemberss[7])) {
                       message.channel.send("u already in")}
                       else if ( message.content.includes(pugMemberss[8])) {
                         message.channel.send("u already in")}
                         else if ( message.content.includes(pugMemberss[9])) {
                           message.channel.send("u already in")}
                           else if ( message.content.includes(pugMemberss[10])) {
                             message.channel.send("u already in")}
                             else if ( message.content.includes(pugMemberss[11])) {
                               message.channel.send("u already in")}
                               else if ( message.content.includes(pugMemberss[12])) {
                                 message.channel.send("u already in")}
                                 else if ( message.content.includes(pugMemberss[13])) {
                                   message.channel.send("u already in")}
                                   else if ( message.content.includes(pugMemberss[14])) {
                                     message.channel.send("u already in")}
                                     else if ( message.content.includes(pugMemberss[15])) {
                                       message.channel.send("u already in")}
                                       else if ( message.content.includes(pugMemberss[16])) {
                                         message.channel.send("u already in")}
                                         else if ( message.content.includes(pugMemberss[17])) {
                                           message.channel.send("u already in")}
                                           else if ( message.content.includes(pugMemberss[18])) {
                                             message.channel.send("u already in")}
                                             else if ( message.content.includes(pugMemberss[19])) {
                                               message.channel.send("u already in")}

                                               else if ( message.content.includes(pugMembers[0])) {
                                                message.channel.send("u already in")}
                                                else if ( message.content.includes(pugMembers[1])) {
                                                 message.channel.send("u already in")}
                                                 else if ( message.content.includes(pugMembers[2])) {
                                                   message.channel.send("u already in")}
                                                   else if ( message.content.includes(pugMembers[3])) {
                                                     message.channel.send("u already in")}
                                                     else if ( message.content.includes(pugMembers[4])) {
                                                       message.channel.send("u already in")}
                                                       else if ( message.content.includes(pugMembers[5])) {
                                                         message.channel.send("u already in")}
                                                         else if ( message.content.includes(pugMembers[6])) {
                                                           message.channel.send("u already in")}
                                                           else if ( message.content.includes(pugMembers[7])) {
                                                             message.channel.send("u already in")}
                                                             else if ( message.content.includes(pugMembers[8])) {
                                                               message.channel.send("u already in")}
                                                               else if ( message.content.includes(pugMembers[9])) {
                                                                 message.channel.send("u already in")}
                                                                 else if ( message.content.includes(pugMembers[10])) {
                                                                   message.channel.send("u already in")}
                                                                   else if ( message.content.includes(pugMembers[11])) {
                                                                     message.channel.send("u already in")}
                                                                     else if ( message.content.includes(pugMembers[12])) {
                                                                       message.channel.send("u already in")}
                                                                       else if ( message.content.includes(pugMembers[13])) {
                                                                         message.channel.send("u already in")}
                                                                         else if ( message.content.includes(pugMembers[14])) {
                                                                           message.channel.send("u already in")}
                                                                           else if ( message.content.includes(pugMembers[15])) {
                                                                             message.channel.send("u already in")}
                                                                             else if ( message.content.includes(pugMembers[16])) {
                                                                               message.channel.send("u already in")}
                                                                               else if ( message.content.includes(pugMembers[17])) {
                                                                                 message.channel.send("u already in")}
                                                                                 else if ( message.content.includes(pugMembers[18])) {
                                                                                   message.channel.send("u already in")}
                                                                                   else if ( message.content.includes(pugMembers[19])) {
                                                                                     message.channel.send("u already in")}
                                      
                                                                                     else if ( message.content.includes(spugMembers[0])) {
                                                                                      message.channel.send("u already in")}
                                                                                      else if ( message.content.includes(spugMembers[1])) {
                                                                                       message.channel.send("u already in")}
                                                                                       else if ( message.content.includes(spugMembers[2])) {
                                                                                         message.channel.send("u already in")}
                                                                                         else if ( message.content.includes(spugMembers[3])) {
                                                                                           message.channel.send("u already in")}
                                                                                           else if ( message.content.includes(spugMembers[4])) {
                                                                                             message.channel.send("u already in")}
                                                                                             else if ( message.content.includes(spugMembers[5])) {
                                                                                               message.channel.send("u already in")}
                                                                                               else if ( message.content.includes(spugMembers[6])) {
                                                                                                 message.channel.send("u already in")}
                                                                                                 else if ( message.content.includes(spugMembers[7])) {
                                                                                                   message.channel.send("u already in")}
                                                                                                   else if ( message.content.includes(spugMembers[8])) {
                                                                                                     message.channel.send("u already in")}
                                                                                                     else if ( message.content.includes(spugMembers[9])) {
                                                                                                       message.channel.send("u already in")}
                                                                                                       else if ( message.content.includes(spugMembers[10])) {
                                                                                                         message.channel.send("u already in")}
                                                                                                         else if ( message.content.includes(spugMembers[11])) {
                                                                                                           message.channel.send("u already in")}
                                                                                                           else if ( message.content.includes(spugMembers[12])) {
                                                                                                             message.channel.send("u already in")}
                                                                                                             else if ( message.content.includes(spugMembers[13])) {
                                                                                                               message.channel.send("u already in")}
                                                                                                               else if ( message.content.includes(spugMembers[14])) {
                                                                                                                 message.channel.send("u already in")}
                                                                                                                 else if ( message.content.includes(spugMembers[15])) {
                                                                                                                   message.channel.send("u already in")}
                                                                                                                   else if ( message.content.includes(spugMembers[16])) {
                                                                                                                     message.channel.send("u already in")}
                                                                                                                     else if ( message.content.includes(spugMembers[17])) {
                                                                                                                       message.channel.send("u already in")}
                                                                                                                       else if ( message.content.includes(spugMembers[18])) {
                                                                                                                         message.channel.send("u already in")}
                                                                                                                         else if ( message.content.includes(spugMembers[19])) {
                                                                                                                           message.channel.send("u already in")}
           else {
             checkPugSizes();
            addUserPugs(message);}
    }
          
      
                                            
       
                                          }}
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('guildMemberAdd', member => {
  const channel2 = member.guild.channels.get("535540529379672074")
  if (!channel2) return
  channel2.send(`${member} Has Join To our style Server`)
})
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.get("613400026978320395")
    if (!channel) return 
      number = 10
  imagenumber = Math.floor(Math.random() *  (number - 1 + 1 )) +1
      channel.send({files:[imagenumber+".png"]}  )

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
          var msg1 = Array(5); 
          msg1[1] = `OMG !!! Is That You  ${member} Welcome Dude \n\n ${member} Has Joined To our style server`;
          msg1[2] = `Hey  ${member} Welcome To Our Style \n\n ${member} Has Joined To our style server`;
          msg1[3] = `Great We'er Glad You Came  ${member} :wink: \n\n ${member} Has Joined To our style server`;
          msg1[4] = `Well Well Well Look Who is Here Guys  ${member} \n\n ${member} Has Joined To our style server`;
          msg1[5] = `I Have To Tell You Something Come here ~WELCOME~  ${member} :neutral_face: \n\n ${member} Has Joined To our style server`
          msg1[6] = `Is That You , Wait Its not You Are ${member} Anyway Welcome \n\n ${member} Has Joined To our style server` 
  
              var x = getRandomInt(0, 20);
          if (x < 5){ 
               if (x < 3){
          channel.send(msg1[1]);
          }
          else {
                     channel.send(msg1[3]);
          }
          }
          else if (x<= 9) {
            if (x >= 7){
            channel.send(msg1[2]); }
              else{
                         channel.send(msg1[4]);
              }
          } 
          else if (x <= 12 ) { 
           channel.send(msg1[5]);
          }
          else {
            channel.send(msg1[6])
          }
         
        })
     

      

client.login(process.env.BOT_TOKEN)
