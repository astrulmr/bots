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
            .setDescription('OS Clan Info = https://brawldb.com/clan/info/637285  \n\n \b Astru® \b \n\n He is a great Runner And Good In Supporter And Defender  (Runner)\n\n Legends \n\n[ Hattori , Brynn , Ada ]\n\n ------------------------------------------------------------------------------\n\n \b DanzoDon \b \n\n He is a Godzila Runner And Cool In Defender And Supporter (Runner)\n\n Legends \n\n[ Val , Hattori , Orion ]\n\------------------------------------------------------------------------------\\n\n \b Iknes \b \n\n He is a Legend Defender And Great In Runner And Supporter (Defender)\n\n Legends \n\n[ Lucian  ]\n\------------------------------------------------------------------------------\\n\n \b jimm25 \b \n\n He is a So Good Defender And Surly In Runner And Supporter  (Defender)\n\n Legends \n\n[ Ember , Kaya ] \n\------------------------------------------------------------------------------\\n\n \b jinleehurb \b \n\n He is unbelievable defence and Supporter (Defender)\n\n Legends \n\n[ Sir Roland , Orion ]\n\------------------------------------------------------------------------------\\n\n \b KaeptnKook \b \n\n He is The best in Defence and Smart at Runner (Defender)\n\n Legends \n\n[ Bodvar ] \n\------------------------------------------------------------------------------\\n\n \b Kenshiro \b \n\n He is a The Best on Runner And Wild in  Defender And Supporter (Supporter)\n\n Legends \n\n[ Brynn ,  Lord Vraxx ]\n\------------------------------------------------------------------------------\\n\n \b kevin1185 \b \n\n He is a So Coool on Runner And Fantastic in  Defender And Supporter (Runner)\n\n Legends \n\n[ Hattori , Yumiko ]\n\------------------------------------------------------------------------------\\n\n \b nani \b \n\n He is a Brilliant on Supporter And Indestructible in Runner And Defender (Supporter)\n\n Legends \n\n[ Sir Roland , Lord Vraxx ]\n\------------------------------------------------------------------------------\\n\n \b Sanmaay \b \n\n She is a not merciful on Defender And Great in Runner And Defender\n\n Legends \n\n[ Thatch , Asuri ]\n\------------------------------------------------------------------------------\\n\n \b Sugarfree \b \n\n  He is a just cooler on Defender And  GREAT in Runner And Supporter  (Supporter)\n\n Legends \n\n[ Orion , Sidra ] \n\------------------------------------------------------------------------------\\n\n \b styleken \b \n\n He is a unbeaten on Defender And Intangible in Runner And Supporter (Defender)\n\n Legends \n\n[ Lord Vraxx , Ada , Hattori ]\n\------------------------------------------------------------------------------\\n\n \b |OS| Tmis Kun \b \n\n He is a just so good on Supporter And so GREAT in Runner And Defender  (Supporter)\n\n Legends \n\n[ Hattori ]\n\------------------------------------------------------------------------------\\n\n *** For Notes Must Of Os Clan Can Plays all positions')
      
          message.channel.send(embed)
        }
      })


  client.on('message', message => {
    if (message.content === '!hi') {
       message.reply(`Hello  What Can i Do For You ? \n 1- !who@anyname \n 2- !avatar @anyname \n 3- !os clan \n 4- !help `);
   }
 })
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      client.on('message', message => {
    if (message.content === 'hi') {
       message.channel.send("hi there " + message.author.username);
       const attachment = new Attachment('https://media.giphy.com/media/1gRsJSbmejU9pxsfd0/giphy.gif');
       message.channel.send(attachment);


   }
 })
          client.on('message', message => {
    if (message.content === 'damn') {
       const attachment = new Attachment('https://media.giphy.com/media/11q8qiwWSkGzrW/giphy.gif');
       message.channel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'i dont have time') {
       const attachment = new Attachment('https://media.giphy.com/media/wlaBIjRPan0vS/giphy.mp4');
       message.channel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'what') {
       const attachment = new Attachment('https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.mp4');
       message.channel.send(attachment);


   }
 })
                  client.on('message', message => {
    if (message.content === 'wow') {
       const attachment = new Attachment('https://media.giphy.com/media/PUBxelwT57jsQ/giphy.mp4');
       message.channel.send(attachment);


   }
 })
                      client.on('message', message => {
    if (message.content === 'oh yeah') {
       const attachment = new Attachment('https://media.giphy.com/media/xT4uQkpdmRXh4iIxTG/giphy.mp4');
       message.channel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'love you') {
       const attachment = new Attachment('https://media.giphy.com/media/l0K43fUFmSm0cxz56/giphy.mp4');
       message.channel.send(attachment);


   }
 })
              client.on('message', message => {
    if (message.content === 'excuse me') {
       const attachment = new Attachment('https://media.giphy.com/media/3o6EhWIq6jUrtmBIFa/giphy.gif');
       message.channel.send(attachment);


   }
 })
                  client.on('message', message => {
    if (message.content === 'cat') {
       const attachment = new Attachment('https://media.giphy.com/media/MWSRkVoNaC30A/giphy.mp4');
       message.channel.send(attachment);


   }
 })
                      client.on('message', message => {
    if (message.content === 'bye') {
       const attachment = new Attachment('https://media.giphy.com/media/KRxcgvd5fLiWk/giphy.mp4');
       message.channel.send(attachment);


   }
 })
                          client.on('message', message => {
    if (message.content === 'bad') {
       const attachment = new Attachment('https://media.giphy.com/media/l396QUa4k8rFVK2xW/giphy.mp4');
       message.channel.send(attachment);


   }
 })
         client.on('message', message => {
    if (message.content === 'hello') {
       message.channel.send("hello there " + message.author.username);
       const attachment = new Attachment('https://media.giphy.com/media/kW8mnYSNkUYKc/giphy.mp4');
       message.channel.send(attachment);


   }
 })
     client.on('message', message => {
    if (message.content === 'hi girl') {
       message.channel.send("hi there " + message.author.username);
       const attachment = new Attachment('https://media.giphy.com/media/26vUTlnHulTgAU7le/giphy.gif');
       message.channel.send(attachment);
 

   }
 })
                client.on('message', message => {
    if (message.content === 'how to be pro on brawlball') {
       message.channel.send("ez ");
       const attachment = new Attachment('https://media.giphy.com/media/pYQkayr0zVNkY/giphy.gif');
       message.channel.send(attachment);


   }
 })
                    client.on('message', message => {
    if (message.content === 'lets dance') {
       message.channel.send("oh ya oh ya");
       const attachment = new Attachment('https://i.imgur.com/7i9S826.mp4');
       message.channel.send(attachment);


   }
 })
 
          client.on('message', message => {
    if (message.content === 'how are you') {
       message.channel.send("iam fine thank you , how about you");
       
   }
 })
              client.on('message', message => {
    if (message.content === 'stupid') {
       message.channel.send("I know you are, but what am I?");
       
   }
 })
                  client.on('message', message => {
    if (message.content === 'respect me') {
       message.channel.send("No I will not");
        message.channel.send("Only if you do the same to me");
       
   }
 })
                      client.on('message', message => {
    if (message.content === 'im sad') {
       message.channel.send("What happened? You can tell me everything...");
       
   }
 })
                          client.on('message', message => {
    if (message.content === 'pls') {
       message.channel.send("I'm starting to like you, is that ok or no");
       
   }
 })
                              client.on('message', message => {
    if (message.content === 'iam sorry') {
       message.channel.send("It's not your fault");
        message.channel.send("Its fine I still love you.");
       
   }
 })
                              client.on('message', message => {
    if (message.content === 'where are you from') {
       message.channel.send("None of your business");
       
   }
 })
                          client.on('message', message => {
    if (message.content === 'cya') {
       message.channel.send("Where are you going");
       
   }
 })
                              client.on('message', message => {
    if (message.content === 'to hell') {
       message.channel.send("Oh, see ya there");
       
   }
 })
              client.on('message', message => {
    if (message.content === 'iam fine') {
       message.channel.send("great");
   }
 })
                 client.on('message', message => {
    if (message.content === 'do you like brawlball') {
       message.channel.send("ofc it the best mode");
   }
 }) 
                  client.on('message', message => {
    if (message.content === 'how old are you') {
       message.channel.send("well iam robort i Manufactured in 2019/07/25 ");
   }
 })
                     client.on('message', message => {
    if (message.content === 'can you help me') {
       message.channel.send("yes ofc anything");
   }
 })
                     client.on('message', message => {
    if (message.content === 'fuck you') {
       message.channel.send("fuck you too :)");
   }
 })
                        client.on('message', message => {
    if (message.content === 'fk u') {
       message.channel.send("fuck you too :)");
   }
 })
                     client.on('message', message => {
    if (message.content === 'noob') {
       message.channel.send("What did you say?");
       message.channel.send("shut up noob");
   }
 })
    
 client.on('message', message => {
    if (message.content === 'can you help me') {
       message.channel.send("sure, what's wrong?");
   }
 })
    
                     client.on('message', message => {
    if (message.content === 'do u like me') {
       message.channel.send("kinda");
   }
 })      
    
                         client.on('message', message => {
    if (message.content === 'who are u') {
       message.channel.send("I'm a robort");
   }
 })      
    
                             client.on('message', message => {
    if (message.content=== 'how dare you') {
       message.channel.send("do you want me to leave");
   }
   
 }) 
                              client.on('message', message => {
    if (message.content === 'yes leave') {
       message.channel.send("ok bye");
       message.channel.send("@OS | BOT Has Left The Server ");
   }
   
 })  
                                client.on('message', message => {
    if (message.content === 'nub') {
       message.channel.send("you are the one whos nub here");
   }
   
 }) 
    
                                client.on('message', message => {
    if (message.content === 'tell me about yourself') {
       message.channel.send("What do you want to know about me?");
   }
   
 }) 
     
                                     client.on('message', message => {
    if (message.content === 'tell me a joke') {
       message.channel.send("Why did the chicken cross the street?");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'idk') {
       message.channel.send("to get to your house");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'saying thank you in japanese') {
       message.channel.send("arigatou");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'do u have problem with me') {
       message.channel.send("Maybe I do maybe i don't");
   }
 })   
                                     client.on('message', message => {
    if (message.content === 'help') {
       message.channel.send("What do you need help with?");
   }
 })   
                             client.on('message', message => {
    if (message.content === 'who is that') {
       message.channel.send("I have no idea");
   }
 })
                             client.on('message', message => {
    if (message.content === 'never mind') {
       message.channel.send("Ok, so what do you want to talk about?");
   }
 })
                                 client.on('message', message => {
    if (message.content === 'who astru') {
       message.channel.send("Don't call me that");
   }
 })
                                     client.on('message', message => {
    if (message.content === 'why') {
       message.channel.send("I'm not your baby");
   }
 })
                                         client.on('message', message => {
    if (message.content === 'stop') {
       message.channel.send("I'm not doing anything");
   }
 })
                                     client.on('message', message => {
    if (message.content === 'i hate you') {
       message.channel.send("Everyone do");
   }
 })
                                         client.on('message', message => {
    if (message.content === 'bot') {
       message.channel.send("What do you think of yourself?");
   }
 })
                                             client.on('message', message => {
    if (message.content === 'me') {
       message.channel.send("You are evil?");
   }
 })
                                                 client.on('message', message => {
    if (message.content === 'you are my friend') {
       message.channel.send("Thank you you to");
       message.channel.send("I love you");
   }
 })
                                                 client.on('message', message => {
    if (message.content === 'im sad') {
       message.channel.send("I shouldn't have done that");
   }
 })
                                                     client.on('message', message => {
    if (message.content === 'sing for me') {
       message.channel.send("You can't hear the tone, I'm typing");
   }
 })
                      client.on('message', message => {
    if (message.content === 'shut up') {
       message.channel.send("Oh sorry. Did I say something wrong?");
    
    

   }
 })
                                                             client.on('message', message => {
    if (message.content === 'trust me') {
       message.channel.send("Of course I don't?");
   }
 })
                                                                 client.on('message', message => {
    if (message.content === 'trust me') {
       message.channel.send("Why should i?");
   }
 })
                                                                     client.on('message', message => {
    if (message.content === 'music') {
       message.channel.send("What kind of music do you like?");
   }
 })
                                       client.on('message', message => {
    if (message.content === 'play with me') {
       message.channel.send("Uhh I feel a little embarrassed to do that");
   }
 })     
      client.on('message', message => {
    if (message.content === 'lol') {
        const attachment = new Attachment('./lol.png');
       message.channel.send(attachment);

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
client.on('message', message => {
    if (message.content === 'brawlball') {
       
            const embed = new RichEmbed()
            
            .setTitle(' IT Bot For our style clan And it For Brawlball information And Here His Work : ')
            .setColor(0xFF0000)
            .setDescription('1.Down Pass Move \n\n 2. Tags Moves \n\n 3. Up Move \n\n 4. Tricks \n\n 5. Others\n\n Designed By OS Team :)')
            message.channel.send(embed)
          
        if (message.channel.send === '1'){
            message.channel.send("working on it");}
           
        
        

   }
 })


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.get("556806228144291861")
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
          msg1[1] = `OMG !!! Is That You  ${member} Welcome Dude`;
          msg1[2] = `Hey  ${member} Welcome To Our Style`;
          msg1[3] = `Great We'er Glad You Came  ${member} :wink:`;
          msg1[4] = `Well Well Well Look Who is Here Guys  ${member}`;
          msg1[5] = `I Have To Tell You Something Come here ~WELCOME~  ${member} :neutral_face:`
          msg1[6] = `Is That You , Wait Its not You Are ${member} Anyway Welcome` 
  
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
