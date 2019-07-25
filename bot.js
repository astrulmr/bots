const  Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
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
            .setDescription('OS Clan Info = https://brawldb.com/clan/info/637285  \n\n \b Astru® \b \n\n He is a great Runner And Good In Supporter And Defender  (Runner) \n\n \b DanzoDon \b \n\n He is a Godzila Runner And Cool In Defender And Supporter (Runner) \n\n \b Iknes \b \n\n He is a Legend Defender And Great In Runner And Supporter (Defender) \n\n \b jimm25 \b \n\n He is a So Good Defender And Surly In Runner And Supporter  (Defender)  \n\n \b jinleehurb \b \n\n He is unbelievable defence and Supporter (Defender) \n\n \b KaeptnKook \b \n\n He is The best in Defence and Smart at Runner (Defender) \n\n \b Kenshiro \b \n\n He is a The Best on Runner And Wild in  Defender And Supporter (Supporter) \n\n \b kevin1185 \b \n\n He is a So Coool on Runner And Fantastic in  Defender And Supporter (Runner) \n\n \b nani \b \n\n He is a Brilliant on Supporter And Indestructible in Runner And Defender (Supporter) \n\n \b Sanmaay \b \n\n She is a not merciful on Defender And Great in Runner And Defender \n\n \b Sugarfree \b \n\n  He is a just cooler on Defender And  GREAT in Runner And Supporter  (Supporter) \n\n \b styleken \b \n\n He is a unbeaten on Defender And Intangible in Runner And Supporter (Defender) \n\n \b |OS| Tmis Kun \b \n\n He is a just so good on Supporter And so GREAT in Runner And Defender  (Supporter) \n\n *** For Notes Must Of Os Clan Can Plays all positions')
      
          message.channel.send(embed)
        }
      })


  client.on('message', message => {
    if (message.content === '!hii') {
       message.reply(`Hello  What Can i Do For You ? \n 1- !who@anyname \n 2- !avatar @anyname \n 3- !os clan \n 4- !help `);
   }
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
