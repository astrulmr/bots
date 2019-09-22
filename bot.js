const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client()

client.on('ready' , () => {
    console.log("connected as " + client.user.tag)


    client.user.setActivity("Brawlball")
 
client.on('message', message => {
  if (!message.guild) return
  if (message.content.startsWith('!addrole')) {
  const user = message.mentions.users.first()
  if (user) {
  const member = message.guild.member(user)
  if ( member) {
    message.member.mentions.addRole('536618838863773707')

    message.channel.send("role added")
  }}}
  })
    
    
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
            .setTitle('Brawlball Clan That You Cant Beat')
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
///////////=============---------------------------------==========////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    

client.on('message', message => {
      if (message.content === '! <@505751422449614878>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------KENSHIRO------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Brynn.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@482162074097549333>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------ASTRU------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Artemis.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@499591499122737153>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------STYLEKEN------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@320264452874305536>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------DANZODON------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Val.png')
      .setColor('#ffffff')
        message.channel.send(embed)
        
      }
    })
    client.on('message', message => {
      if (message.content === '! <@286208201186213888>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------KEVIN1185------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Yumiko.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@614045629773119489>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------SWEETMIGUEL------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Rayman.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@286209333488910336>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------JIMM25------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Ember.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@423131212945817620>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------JUNUSBIAZ------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Mordex.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    
    client.on('message', message => {
      if (message.content === '! <@504543749293080597>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------JINLEEHURB------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@240226379596038146>') {
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
      if (message.content === '! <@365968871326351360>') {
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
      if (message.content === '! <@555853237689909344>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------PANOSBOA------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')
      .setColor('#ffffff')
        message.channel.send(embed)

      }
    })
 client.on('message', message => {
      if (message.content === '! <@184230639086731264>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------THOMASERENA------------')
      .setImage('https://vignette.wikia.nocookie.net/brawlhalla-game/images/e/e5/DarkMatterVraxx.png/revision/latest/scale-to-width-down/294?cb=20180215181636')
      .setColor('#275BF0')
        message.channel.send(embed)
        
      }
    })
    client.on('message', message => {
      if (message.content === '! <@347563513297895452>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------BLUEDRAGON------------')
      .setImage('https://pbs.twimg.com/media/Cyiq9mnWQAAU533.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@314532481519058944>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------LORDCROISSANT------------')
      .setImage('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/3/31/Harbinger_Orion.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })
    client.on('message', message => {
      if (message.content === '! <@363346337132969996>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------THE_INSANE_COW------------')
      .setImage('https://i.redd.it/liunxjf6gqax.jpg')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })




    ///////////=============---------------------------------==========////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  .setThumbnail('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png')

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
///////////=============---------------------------------==========////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




                              client.on('message', message => {
  if (message.content === "!p <@184230639086731264>" ) {
 
      const embed = new RichEmbed()
      .setTitle("Name")
      .setColor(0x0000ff)
      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/d/dc/SkinIcon_LordVraxx_DarkMatter.png?version=626182a02aac284418cc9a103942a784")
      .setDescription("ThomaSerena")
      .addField('Position','Supporter',true)
      .addField('Clan','NBS',true)

      message.channel.send(embed)
  }
  })
  client.on('message', message => {
    if (message.content === "!p <@482162074097549333>" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/e/e9/SkinIcon_Artemis_Iron.png/600px-SkinIcon_Artemis_Iron.png?version=da9d1b6636935730e3a512a8ace891a0")
        .setDescription("Astru")
        .addField('Position','Runner',true)
        .addField('Clan','our style',true)

        message.channel.send(embed)
    }
    })
    client.on('message', message => {
      if (message.content === "!p <@320264452874305536>" ) {
          const embed = new RichEmbed()
          .setTitle("Name")
          .setColor(0x0000ff)
          .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/4/47/SkinIcon_Val_Kunoichi.png/600px-SkinIcon_Val_Kunoichi.png?version=43c51465bb65b2cfbe02db40cd52697b")
          .setDescription("DanzoDon")
          .addField('Position','Runner',true)
          .addField('Clan','our style',true)

          message.channel.send(embed)
      }
      })
      client.on('message', message => {
        if (message.content === "!p <@286208201186213888>" ) {
            const embed = new RichEmbed()
            .setTitle("Name")
            .setColor(0x0000ff)
            .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/b/bf/SkinIcon_Yumiko_Tokyo.png/600px-SkinIcon_Yumiko_Tokyo.png?version=8392753f93e5267ec317090ca7462401")
            .setDescription("Kevin1185")
            .addField('Position','Runner',true)
            .addField('Clan','our style',true)

            message.channel.send(embed)
        }
        })
        client.on('message', message => {
          if (message.content === "!p <@286209333488910336>" ) {
              const embed = new RichEmbed()
              .setTitle("Name")
              .setColor(0x0000ff)
              .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/a/ad/SkinIcon_Ember_SantasHelper.png/600px-SkinIcon_Ember_SantasHelper.png?version=1c9cac26b75e97df79448500a7cda9ac")
              .setDescription("Jimm25")
              .addField('Position','Runner',true)
              .addField('Clan','our style',true)

              message.channel.send(embed)
          }
          })
          client.on('message', message => {
            if (message.content === "!p <@614045629773119489>" ) {
                const embed = new RichEmbed()
                .setTitle("Name")
                .setColor(0x0000ff)
                .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/9/96/SkinIcon_Rayman_Raymesis.png/600px-SkinIcon_Rayman_Raymesis.png?version=79354ce2895f8ecddae5539d8f8bcf72")
                .setDescription("SweetMiguel")
                .addField('Position','Runner',true)
                .addField('Clan','our style',true)

                message.channel.send(embed)
            }
            })
            client.on('message', message => {
              if (message.content === "!p <@499591499122737153>" ) {
                  const embed = new RichEmbed()
                  .setTitle("Name")
                  .setColor(0x0000ff)
                  .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/5/57/SkinIcon_Scarlet_Captain.png/600px-SkinIcon_Scarlet_Captain.png?version=5646cd825a8bddebcb22641781cddbd7")
                  .setDescription("Styleken")
                  .addField('Position','Defender',true)
                  .addField('Clan','our style',true)

                  message.channel.send(embed)
              }
              })
              client.on('message', message => {
                if (message.content === "!p <@240226379596038146>" ) {
                    const embed = new RichEmbed()
                    .setTitle("Name")
                    .setColor(0x0000ff)
                    .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/0e/SkinIcon_Bodvar_CyberViking.png/600px-SkinIcon_Bodvar_CyberViking.png?version=14e957b2301ba3454ea4b28435d4deef")
                    .setDescription("Kaeptnkook")
                    .addField('Position','Defender',true)
                    .addField('Clan','our style',true)

                    message.channel.send(embed)
                }
                })
                client.on('message', message => {
                  if (message.content === "!p <@423131212945817620>" ) {
                      const embed = new RichEmbed()
                      .setTitle("Name")
                      .setColor(0x0000ff)
                      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/2/2c/SkinIcon_Mordex_Fenrir.png/600px-SkinIcon_Mordex_Fenrir.png?version=6b9f00361feb8542abab1f531b544911")
                      .setDescription("Junusbiaz")
                      .addField('Position','Defender',true)
                      .addField('Clan','our style',true)

                      message.channel.send(embed)
                  }
                  })
                  client.on('message', message => {
                    if (message.content === "!p <@504543749293080597>" ) {
                        const embed = new RichEmbed()
                        .setTitle("Name")
                        .setColor(0x0000ff)
                        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/e/eb/SkinIcon_Scarlet_Grease.png/600px-SkinIcon_Scarlet_Grease.png?version=d4550dfafa4972f753b8f9831ca20e43")
                        .setDescription("Jinleehurb")
                        .addField('Position','Defender',true)
                        .addField('Clan','our style',true)

                        message.channel.send(embed)
                    }
                    })
                    client.on('message', message => {
                      if (message.content === "!p <@555853237689909344>" ) {
                          const embed = new RichEmbed()
                          .setTitle("Name")
                          .setColor(0x0000ff)
                          .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/68/SkinIcon_Hattori_Cat.png/600px-SkinIcon_Hattori_Cat.png?version=3b6ea2b0f3219bf65955076dbddd0c37")
                          .setDescription("PanosBOA")
                          .addField('Position','Supporter',true)
                          .addField('Clan','our style',true)

                          message.channel.send(embed)
                      }
                      })
                      client.on('message', message => {
                        if (message.content === "!p <@505751422449614878>" ) {
                            const embed = new RichEmbed()
                            .setTitle("Name")
                            .setColor(0x0000ff)
                            .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/7/7e/SkinIcon_Brynn_Huntress.png/600px-SkinIcon_Brynn_Huntress.png?version=28f7f6ef5cca88c9563b99a3efc6df07")
                            .setDescription("Kenshiro")
                            .addField('Position','Supporter',true)
                            .addField('Clan','our style',true)

                            message.channel.send(embed)
                        }
                        })
                        client.on('message', message => {
                          if (message.content === "!p <@365968871326351360>" ) {
                              const embed = new RichEmbed()
                              .setTitle("Name")
                              .setColor(0x0000ff)
                              .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/00/SkinIcon_Hattori_Shadow.png/600px-SkinIcon_Hattori_Shadow.png?version=191746d50260876e5e469cdfdce1bcb5")
                              .setDescription("|OS| Tmis Kun")
                              .addField('Position','Supporter',true)
                              .addField('Clan','our style',true)
                              message.channel.send(embed)
                          }
                          })
                      
                          client.on('message', message => {
                            if (message.content === "!p <@347563513297895452>" ) {
                                const embed = new RichEmbed()
                                .setTitle("Name")
                                .setColor(0x0000ff)
                                .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/d/dc/SkinIcon_LordVraxx_DarkMatter.png/600px-SkinIcon_LordVraxx_DarkMatter.png?version=626182a02aac284418cc9a103942a784")
                                .setDescription("BlueDragon")
                                .addField('Position','Defender',true)
                                .addField('Clan','TVS',true)
                                message.channel.send(embed)
                            }
                            })
                            client.on('message', message => {
                              if (message.content === "!p <@314532481519058944>" ) {
                                  const embed = new RichEmbed()
                                  .setTitle("Name")
                                  .setColor(0x0000ff)
                                  .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/67/SkinIcon_Orion_DeathAngel.png/600px-SkinIcon_Orion_DeathAngel.png?version=0c51a5e96f38bc216a6bc7a24ad99c28")
                                  .setDescription("LordCroissant")
                                  .addField('Position','Supporter',true)
                                  .addField('Clan','Clansanity',true)
                                  message.channel.send(embed)
                              }
                              })
                              client.on('message', message => {
                                if (message.content === "!p <@363346337132969996>" ) {
                                    const embed = new RichEmbed()
                                    .setTitle("Name")
                                    .setColor(0x0000ff)
                                    .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/4/44/SkinIcon_Koji_Ronin.png/600px-SkinIcon_Koji_Ronin.png?version=506a902bd2dfc67fd7cdc40e4fe21465")
                                    .setDescription("THE_INSANE_COW")
                                    .addField('Position','Runner',true)
                                    .addField('Clan','Pyrateers',true)
                                    message.channel.send(embed)
                                }
                                })

///////////=============---------------------------------==========////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////=========================================================================================



client.on('message', message => {
  if (message.content === "!ap" ) {
      const embed = new RichEmbed()
      .setTitle("Name")
      .setColor(0x0000ff)
      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/e/e9/SkinIcon_Artemis_Iron.png/600px-SkinIcon_Artemis_Iron.png?version=da9d1b6636935730e3a512a8ace891a0")
      .setDescription("Astru")
      .addField('Position','Runner',true)
      .addField('Clan','our style',true)
      message.channel.send(embed)
  }
  })
  client.on('message', message => {
    if (message.content === "!ap" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/d/dc/SkinIcon_LordVraxx_DarkMatter.png/600px-SkinIcon_LordVraxx_DarkMatter.png?version=626182a02aac284418cc9a103942a784")
        .setDescription("BlueDragon")
        .addField('Position','Defender',true)
        .addField('Clan','TVS',true)
        message.channel.send(embed)
    }
    })
  client.on('message', message => {
    if (message.content === "!ap" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/4/47/SkinIcon_Val_Kunoichi.png/600px-SkinIcon_Val_Kunoichi.png?version=43c51465bb65b2cfbe02db40cd52697b")
        .setDescription("DanzoDon")
        .addField('Position','Runner',true)
        .addField('Clan','our style',true)
        message.channel.send(embed)
    }
    })

  client.on('message', message => {
    if (message.content === "!ap" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/a/ad/SkinIcon_Ember_SantasHelper.png/600px-SkinIcon_Ember_SantasHelper.png?version=1c9cac26b75e97df79448500a7cda9ac")
        .setDescription("Jimm25")
        .addField('Position','Runner',true)
        .addField('Clan','our style',true)
        message.channel.send(embed)
    }
    })
    client.on('message', message => {
      if (message.content === "!ap" ) {
          const embed = new RichEmbed()
          .setTitle("Name")
          .setColor(0x0000ff)
          .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/e/eb/SkinIcon_Scarlet_Grease.png/600px-SkinIcon_Scarlet_Grease.png?version=d4550dfafa4972f753b8f9831ca20e43")
          .setDescription("Jinleehurb")
          .addField('Position','Defender',true)
          .addField('Clan','our style',true)
          message.channel.send(embed)
      }
      })
    
        client.on('message', message => {
          if (message.content === "!ap" ) {
              const embed = new RichEmbed()
              .setTitle("Name")
              .setColor(0x0000ff)
              .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/2/2c/SkinIcon_Mordex_Fenrir.png/600px-SkinIcon_Mordex_Fenrir.png?version=6b9f00361feb8542abab1f531b544911")
              .setDescription("Junusbiaz")
              .addField('Position','Defender',true)
              .addField('Clan','our style',true)
              message.channel.send(embed)
          }
          })
          client.on('message', message => {
            if (message.content === "!ap" ) {
                const embed = new RichEmbed()
                .setTitle("Name")
                .setColor(0x0000ff)
                .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/0e/SkinIcon_Bodvar_CyberViking.png/600px-SkinIcon_Bodvar_CyberViking.png?version=14e957b2301ba3454ea4b28435d4deef")
                .setDescription("Kaeptnkook")
                .addField('Position','Defender',true)
                .addField('Clan','our style',true)
                message.channel.send(embed)
            }
            })
            client.on('message', message => {
              if (message.content === "!ap" ) {
                  const embed = new RichEmbed()
                  .setTitle("Name")
                  .setColor(0x0000ff)
                  .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/7/7e/SkinIcon_Brynn_Huntress.png/600px-SkinIcon_Brynn_Huntress.png?version=28f7f6ef5cca88c9563b99a3efc6df07")
                  .setDescription("Kenshiro")
                  .addField('Position','Supporter',true)
                  .addField('Clan','our style',true)
                  message.channel.send(embed)
              }
              })
              client.on('message', message => {
                if (message.content === "!ap" ) {
                    const embed = new RichEmbed()
                    .setTitle("Name")
                    .setColor(0x0000ff)
                    .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/b/bf/SkinIcon_Yumiko_Tokyo.png/600px-SkinIcon_Yumiko_Tokyo.png?version=8392753f93e5267ec317090ca7462401")
                    .setDescription("Kevin1185")
                    .addField('Position','Runner',true)
                    .addField('Clan','our style',true)
                    message.channel.send(embed)
                }
                })
                client.on('message', message => {
                  if (message.content === "!ap" ) {
                      const embed = new RichEmbed()
                      .setTitle("Name")
                      .setColor(0x0000ff)
                      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/67/SkinIcon_Orion_DeathAngel.png/600px-SkinIcon_Orion_DeathAngel.png?version=0c51a5e96f38bc216a6bc7a24ad99c28")
                      .setDescription("LordCroissant")
                      .addField('Position','Supporter',true)
                      .addField('Clan','Clansanity',true)
                      message.channel.send(embed)
                  }
                  })
                client.on('message', message => {
                  if (message.content === "!ap" ) {
                      const embed = new RichEmbed()
                      .setTitle("Name")
                      .setColor(0x0000ff)
                      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/68/SkinIcon_Hattori_Cat.png/600px-SkinIcon_Hattori_Cat.png?version=3b6ea2b0f3219bf65955076dbddd0c37")
                      .setDescription("PanosBOA")
                      .addField('Position','Supporter',true)
                      .addField('Clan','our style',true)
                      message.channel.send(embed)
                  }
                  })
        
            client.on('message', message => {
              if (message.content === "!ap" ) {
                  const embed = new RichEmbed()
                  .setTitle("Name")
                  .setColor(0x0000ff)
                  .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/5/57/SkinIcon_Scarlet_Captain.png/600px-SkinIcon_Scarlet_Captain.png?version=5646cd825a8bddebcb22641781cddbd7")
                  .setDescription("Styleken")
                  .addField('Position','Defender',true)
                  .addField('Clan','our style',true)
                  message.channel.send(embed)
              }
              })
              client.on('message', message => {
                if (message.content === "!ap" ) {
                    const embed = new RichEmbed()
                    .setTitle("Name")
                    .setColor(0x0000ff)
                    .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/9/96/SkinIcon_Rayman_Raymesis.png/600px-SkinIcon_Rayman_Raymesis.png?version=79354ce2895f8ecddae5539d8f8bcf72")
                    .setDescription("SweetMiguel")
                    .addField('Position','Runner',true)
                    .addField('Clan','our style',true)
                    message.channel.send(embed)
                }
                })
                        client.on('message', message => {
                          if (message.content === "!ap" ) {
                         
                              const embed = new RichEmbed()
                              .setTitle("Name")
                              .setColor(0x0000ff)
                              .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/d/dc/SkinIcon_LordVraxx_DarkMatter.png?version=626182a02aac284418cc9a103942a784")
                              .setDescription("ThomaSerena")
                              .addField('Position','Supporter',true)
                              .addField('Clan','NBS',true)
                              message.channel.send(embed)
                          }
                          })
                        client.on('message', message => {
                          if (message.content === "!ap" ) {
                              const embed = new RichEmbed()
                              .setTitle("Name")
                              .setColor(0x0000ff)
                              .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/00/SkinIcon_Hattori_Shadow.png/600px-SkinIcon_Hattori_Shadow.png?version=191746d50260876e5e469cdfdce1bcb5")
                              .setDescription("|OS| Tmis Kun")
                              .addField('Position','Supporter',true)
                              .addField('Clan','our style',true)
                              message.channel.send(embed)
                          }
                          })
                          client.on('message', message => {
                            if (message.content === "!ap" ) {
                                const embed = new RichEmbed()
                                .setTitle("Name")
                                .setColor(0x0000ff)
                                .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/4/44/SkinIcon_Koji_Ronin.png/600px-SkinIcon_Koji_Ronin.png?version=506a902bd2dfc67fd7cdc40e4fe21465")
                                .setDescription("THE_INSANE_COW")
                                .addField('Position','Runner',true)
                                .addField('Clan','Pyrateers',true)
                                message.channel.send(embed)
                            }
                            })
                      
                      ///////////=============---------------------------------==========////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Runner////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content == '!run'){          
      const embed = new RichEmbed()
      .setTitle('------------------ Runner Players ------------------')
      .setColor(0xFF0000)
      .addField('Astru',"our style",true)
      .addField('Kevin1185',"our style",true)
      .addField('Jimm25',"our style",true)
      .addField('SweetMiguel',"our style",true)
      .addField('DanzoDon',"our style",true)
      .addField('THE_INSANE_COW',"Pyrateers",true)
      .setThumbnail('http://www.logolama.com/wp-content/uploads/2017/12/running_color-positive-300x300.png')

      message.channel.send(embed)
  }
     
       
      })
      client.on('message', message => {
        if (message.content == '!sup'){          
            const embed = new RichEmbed()
            .setTitle('------------------ Supporter Players ------------------')
            .setColor(0x0000ff)
            .addField('Kenshiro',"our style",true)
            .addField('|OS| Tmis Kun',"our style",true)
            .addField('ThomaSerena',"NBS",true)
            .addField('LordCroissant'," Clansanity",true)
            .addField('PanosBOA',"our style",true)
            .setThumbnail('https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2804316/b4c24cc785da44b7bf311749acee46ab/1.gif?token-time=2145916800&token-hash=xlTzbZBw6DPP5oozmI1VAy3PbVGBkwfM-6Eq2oyV-yo%3D ')
    
            message.channel.send(embed)
        
           
        }
            })
            client.on('message', message => {
              if (message.content == '!def'){          
                  const embed = new RichEmbed()
                  .setTitle('------------------ Defender Players ------------------')
                  .setColor(0xFFFF00)
                  .addField('Styleken',"our style",true)
                  .addField('KaeptnKook',"our style",true)
                  .addField('Jinleehurb',"our style",true)
                  .addField('Junusbiaz',"our style",true)
                  .addField('BlueDragon',"TVS",true)
                  .setThumbnail('https://icon-library.net/images/defend-icon/defend-icon-27.jpg')
          
                  message.channel.send(embed)
              
                 
              }
                  })
///////////=============---------------------------------==========////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




client.on('message', message => {
  if (message.content == '!pall'){          
      const embed = new RichEmbed()
      .setTitle('------------------ Runner Players ------------------')
      .setColor(0xFF0000)
      .addField('Astru',"our style",true)
      .addField('Kevin1185',"our style",true)
      .addField('Jimm25',"our style",true)
      .addField('SweetMiguel',"our style",true)
      .addField('DanzoDon',"our style",true)
      .addField('THE_INSANE_COW',"Pyrateers",true)
      .setThumbnail('http://www.logolama.com/wp-content/uploads/2017/12/running_color-positive-300x300.png')

      message.channel.send(embed)
  }
     
       
      })
      client.on('message', message => {
        if (message.content == '!pall'){          
            const embed = new RichEmbed()
            .setTitle('------------------ Supporter Players ------------------')
            .setColor(0x0000ff)
            .addField('Kenshiro',"our style",true)
            .addField('|OS| Tmis Kun',"our style",true)
            .addField('ThomaSerena',"NBS",true)
            .addField('LordCroissant'," Clansanity",true)
            .addField('PanosBOA',"our style",true)
            .setThumbnail('https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2804316/b4c24cc785da44b7bf311749acee46ab/1.gif?token-time=2145916800&token-hash=xlTzbZBw6DPP5oozmI1VAy3PbVGBkwfM-6Eq2oyV-yo%3D ')
    
            message.channel.send(embed)
        
           
        }
            })
            client.on('message', message => {
              if (message.content == '!pall'){          
                  const embed = new RichEmbed()
                  .setTitle('------------------ Defender Players ------------------')
                  .setColor(0xFFFF00)
                  .addField('Styleken',"our style",true)
                  .addField('KaeptnKook',"our style",true)
                  .addField('Jinleehurb',"our style",true)
                  .addField('Junusbiaz',"our style",true)
                  .addField('BlueDragon',"TVS",true)
                  .setThumbnail('https://icon-library.net/images/defend-icon/defend-icon-27.jpg')
          
                  message.channel.send(embed)
              
                 
              }
                  })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content == '!codes'){          
      const embed = new RichEmbed()
      .setTitle('OS|Bot All Codes You Can Use')
      .setColor(0xffffff)
      .addField('!avatar @anyname      |',"To see avatar of someone in the server",true)
      .addField('!p @anyname               |',"To see position and clan of someone in the server",true)
      .addField('!brawlball                      |',"To see hidden tricks and move of brawlball only clan (our style) can see it",true)
      .addField('!os clan                          |',"To see info about (our style) clan",true)
      .addField('!legends                         |',"To see every one fav legend in the server",true)
      .addField('! @anyname                      |',"To see fav legend of someone in the server",true)
      .addField('!pall                                 |',"To see all runners and supporters and defender in the server",true)
      .addField('!run                                |',"To see all runners the server        \n ",false)

      .addField('!sup                               |',"To see all supporters in the server          ",false)

      .addField('!def                                |',"To see all defenders in the server",false)
      .addField('!ap                                  |',"To see which position and clan of every one in the server",true)
      .setThumbnail(client.user.avatarURL)
      .setFooter("\n\n OS|BOT Designed And Edited by OS Team",client.user.avatarURL)
      message.channel.send(embed)
  
     
  }
      })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
