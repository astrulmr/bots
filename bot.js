const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client()

client.on('ready' , () => {
    console.log("connected as " + client.user.tag)


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
            .setDescription('OS Clan Info = https://brawldb.com/clan/info/637285  \n\n =====n\n \b Astru® \b \n\n He is a great Runner And Good In Supporter And Defender  (Runner)\n\n Legends \n\n[ Hattori , Brynn , Ada ]\n\n =====n\n \b DanzoDon \b \n\n He is a Godzila Runner And Cool In Defender And Supporter (Runner)\n\n Legends \n\n[ Val , Hattori , Orion ]\n\n =====n\n \b Iknes \b \n\n He is a Legend Defender And Great In Runner And Supporter (Defender)\n\n Legends \n\n[ Lucian  ]\n\n =====n\n \b jimm25 \b \n\n He is a So Good Defender And Surly In Runner And Supporter  (Defender)\n\n Legends \n\n[ Ember , Kaya ] \n\n =====n\n \b jinleehurb \b \n\n He is unbelievable defence and Supporter (Defender)\n\n Legends \n\n[ Sir Roland , Orion ]\n\n =====n\n \b KaeptnKook \b \n\n He is The best in Defence and Smart at Runner (Defender)\n\n Legends \n\n[ Bodvar ] \n\n =====n\n \b Kenshiro \b \n\n He is a The Best on Runner And Wild in  Defender And Supporter (Supporter)\n\n Legends \n\n[ Brynn ,  Lord Vraxx ]\n\n =====n\n \b kevin1185 \b \n\n He is a So Coool on Runner And Fantastic in  Defender And Supporter (Runner)\n\n Legends \n\n[ Hattori , Yumiko ]\n\n =====n\n \b nani \b \n\n He is a Brilliant on Supporter And Indestructible in Runner And Defender (Supporter)\n\n Legends \n\n[ Sir Roland , Lord Vraxx ]\n\n =====\n\n \b Sanmaay \b \n\n She is a not merciful on Defender And Great in Runner And Defender\n\n Legends \n\n[ Thatch , Asuri ]\n\n =====n\n \b Sugarfree \b \n\n  He is a just cooler on Defender And  GREAT in Runner And Supporter  (Supporter)\n\n Legends \n\n[ Orion , Sidra ] \n\n =====n\n \b styleken \b \n\n He is a unbeaten on Defender And Intangible in Runner And Supporter (Defender)\n\n Legends \n\n[ Lord Vraxx , Ada ]\n\n =====n\n \b |OS| Tmis Kun \b \n\n He is a just so good on Supporter And so GREAT in Runner And Defender  (Supporter)\n\n Legends \n\n[ Hattori ]\n\n =====\n\n *** For Notes Must Of Os Clan Can Plays all positions')
      
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
  if(message.author.bot)
      {
if (message.embeds){
          const embedMsg = message.embeds.find(msg =>  msg.title === 'Server Roles');
           if(embedMsg)
           {
              message.react('533898655204245505')
              .then(reaction => reaction.message.react('533898655326011392'))
              .then(reaction => reaction.message.delete(20000))
              .then(msg => console.log("Deleted message"))
              .catch(err => console.error);

           }
     }
     return
  }
  if(message.content.toLowerCase() ==='?roles')
  {
      const embed = new RichEmbed();
      embed.setTitle("Server Roles");
      embed.setColor("BLUE");
      embed.setDescription("<:Snapchat:533898655326011392> - Snapchat\n" + "<:Facebook:533898655204245505> - Facebook\n" );
      message.channel.send(embed);
  }
});

client.on('messageReactionAdd',(reaction,user) => {
   if(user.bot)
      return;

   var roleName = reaction.emoji.Name;
   var role = reaction.message.guild.roles.find(role =>role.name.toLowerCase() === roleName.toLowerCase());
   var member = reaction.message.guild.members.find(member => member.id === user.id);

  if(member.role.has(role.id))
  {
      member.romoveRole(role.id).then(member => {
          console.log("Romoved" + member.user.username + " from the " + role.name + "role.");
      }).catch(err => console.error);
  } 
  else {
      member.addRole(role.id).then(member => {
          console.log("Added " + member.user.username+ " to a role.");
      }).catch(err => console.error);
  }

})
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    if (message.content === 'xD') {
      bChannel.send("Laughing Is Good for Your Health");
   }
 })
                                         client.on('message', message => {
    if (message.content === 'Salty') {
      bChannel.send("Yes, your sweet tears are my nourishment, give me more");
   }
 })
                                             client.on('message', message => {
    if (message.content === 'how is it going') {
      bChannel.send("Yeah, Im good");
   }
 })
                                                 client.on('message', message => {
    if (message.content === 'what is your favorite anime') {
      bChannel.send("Pokemon.You?");
   }
 })
                                                     client.on('message', message => {
    if (message.content === 'how to say hello in korean') {
      bChannel.send("안녕하세요 (Annyeong Haseyo)");
   }
 })
    
                                       client.on('message', message => {
    if (message.content === 'sup') {
      bChannel.send("Nothing much buddy.");
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
  if (message.content.startsWith('!power')) {
  const user = message.mentions.users.first()
  if (user) {
  const member = message.guild.member(user)
  if (member) {
  if(user.s){
  message.channel.send(s)}
  else 
message.channel.send("power not set")
 }


}}
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
