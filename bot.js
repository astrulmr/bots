const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client()



client.on('ready' , () => {
  console.log("connected as " + client.user.tag)

  client.user.setActivity("Brawlball")
})


client.on('message', message => {


  if (message.content === '!strt' ) {
      if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to  this")


message.channel.fetchMessages()
.then(function(list){
  message.channel.bulkDelete(list);
}, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        

}})
client.on("message", async message => {
const prefix = "_";

// If the author's a bot, return
// If the message was not sent in a server, return
// If the message doesn't start with the prefix, return
if (message.author.bot) return;
if (!message.guild) return;
if (!message.content.startsWith(prefix)) return;

// Arguments and command variable
// cmd is the first word in the message, aka the command
// args is an array of words after the command
// !say hello I am a bot
// cmd == say (because the prefix is sliced off)
// args == ["hello", "I", "am", "a", "bot"]
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();

if (cmd === "ping") {
    // Send a message
    const msg = await message.channel.send(`🏓 Pinging....`);

    // Edit the message
    msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
}

if (cmd === "say") {
    // Check if you can delete the message
    if (message.deletable) message.delete();

    if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
    
    // Role color
    const roleColor = message.guild.me.highestRole.hexColor;

    // If the first argument is embed, send an embed,
    // otherwise, send a normal message
    if (args[0].toLowerCase() === "embed") {
        const embed = new RichEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor("#000000")

        message.channel.send(embed);
    } else {
        message.channel.send(args.join(" "));
    }
}
});




client.on('message', message => {
if (message.content.startsWith('!avatar')) {
if (!message.mentions.users.size) {

  let embed = new RichEmbed()
.setTitle(`${author.username}`)
.setColor('000000')
.setImage(`${message.author.displayAvatarURL}`)

message.channel.send(embed)

}

const avatarList = message.mentions.users.map(user => {
  let embed = new RichEmbed()
  .setTitle(`${user.username}`)
  .setColor('000000')
  .setImage(`${user.displayAvatarURL}`)
 
message.channel.send(embed)


})

message.channel.send(avatarList);
message.author.send(avatarList)
}




})
client.on('message', message => {
    
if (message.content === '!nub') {
message.reply(`os bot 2 working`);

var d = new Date();

message.channel.send("Date is : "+d.toLocaleDateString())

}
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////social media code////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
    if (message.content === '!socialmedia') {
        let embed = new RichEmbed()
          .setTitle('Youtube')
          .setColor('0xc4302b')
          .setThumbnail('https://isgmh.northwestern.edu/files/2018/01/Social-media-icons-YouTube-2jkbocn.png')
          .setDescription('Subscribe Like and Share !')
          .addField('Link :','https://www.youtube.com/channel/UCKjydpFBrArBs5SoJnzw-Pg',true)
          .setFooter("\n\n Our Style - Brawlball ","https://raw.githubusercontent.com/astrulmr/bots/master/best%20os%20clan%20logo.png")
        message.channel.send(embed)
    }
})

client.on("message", message => {
    if (message.content === '!socialmedia') {
        let embed = new RichEmbed()
          .setTitle('Twitter')
          .setColor('0x00acee')
          .setThumbnail('https://cdn.iconscout.com/icon/free/png-512/twitter-circle-1868970-1583134.png')
          .setDescription('Follow to get the clan and Brawlball community news')
          .addField('Link :','https://twitter.com/OurStyle16', true)
          .setFooter("\n\n Our Style - Brawlball","https://raw.githubusercontent.com/astrulmr/bots/master/best%20os%20clan%20logo.png")
        message.channel.send(embed)
    }
})

client.on("message", message => {
    if (message.content === '!socialmedia') {
        let embed = new RichEmbed()
          .setTitle('Twitch')
          .setColor('0x6441a5')
          .setThumbnail('https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitch-circle-512.png')
          .setDescription('Follow or Subscribe and watch the Brawlball tournament here')
          .addField('Link :','https://www.twitch.tv/ourstyle_brawlball', true)
        message.channel.send(embed)
    }
})

client.on("message", message => {
    if (message.content === '!socialmedia') {
        let embed = new RichEmbed()
          .setTitle('Reddit')
          .setColor('0xFF4301')
          .setThumbnail('https://www.redditinc.com/assets/images/site/reddit-logo.png')
          .setDescription('Join our Reddit community to help it grow !')
          .addField('Link :','https://www.reddit.com/user/OurStyle', true)
          .setFooter("\n\n Our Style - Brawlball","https://raw.githubusercontent.com/astrulmr/bots/master/best%20os%20clan%20logo.png")
        message.channel.send(embed)
    }
})

client.on("message", message => {
    if (message.content === '!socialmedia') {
        let embed = new RichEmbed()
          .setTitle('Discord')
          .setColor('0x7289d9')
          .setThumbnail('https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png')
          .setDescription('Join the clan discord server and find brawlball players')
          .setImage("https://i.ibb.co/Fmw9wYw/best-os-clan-logo.png")
          .addField('Link :','https://discord.gg/aMTafbd', true)
        message.channel.send(embed)
    }
})


      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////BRAWLBALL TIME CODE////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  const prefix1 = "#";


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix1)) return;

  const args1 = message.content.slice(prefix1.length).trim().split(/ +/g);
  const cmd = args1.shift().toLowerCase();

  if (cmd === "bb") {
    let bbchannel = client.channels.get("717814003627327553")

      if (args1.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));


      const roleColor = message.guild.me.highestRole.hexColor;

      
        var bbmsg = [ "Brawlball time is starting right now ! Join us room below",
        "What are you waiting for ? Join the brawlball room below right now",
      "It is time we show you who the masters are, come and challenge us in brawlball !",
      "Do you really think you don't need any training ? You're such a fool, come on !",
      "We're gonna play some pro brawlball right now, wanna join us ?",
      "Let's play brawlball ! Room bellow ;)",
      "Money is nothing if you don't have the skill to spend it right. Anyway join brawlball right now",
      "You have the right to choose : either you come and play brawlball now ; either you don't come and you get worse and worse day after day.",
      "Don't be shy, try to defeat us in brawlball, maybe we'll be kind enough to let you score once",
      "If you come and play insanely good with us, you might be our community highlights video ;)"]

      var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
      
      var bbccrndm = Math.floor(Math.random() * bbcolor.length)
      var bbclrchos = bbcolor[bbccrndm]

        var bbrandom = Math.floor(Math.random() * bbmsg.length)
      var bbchoose = bbmsg[bbrandom]
      let embed = new Discord.RichEmbed()
            .setTitle('Brawllball Time')
            .setColor(bbclrchos)
            .setThumbnail('https://i.ibb.co/4tsGqzs/bb.png')
            .setDescription(bbchoose)
            .addField("The Room ","**"+args1.join(" ")+"**",true)
            .setFooter(message.author.username,message.author.displayAvatarURL)
            
            if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
else
          bbchannel.send(embed);
          bbchannel.send("@here")

      
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////BIRTHDAY CODE/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on('message', message => {
  if (message.content === '!birthday') {
    const embed = new RichEmbed()
      .setTitle('Here are all Our Style players birthday date')
      .setColor(0xFFFFFF)
      .setDescription('Do not forget to wish a happy birthday to everyone of us !')
      .setThumbnail('https://i.pinimg.com/originals/8b/de/81/8bde81e36644c034efbbd3c57a474847.png')
      .addField('Astru®','January 21', false)
      .addField('\n Spirix','April 7', false)
      .addField('\n Styleken','April 24', false)
      .addField('\n DanzoDon','June 1', false)
      .addField('\n KaeptnKook','June 20', false)
      .addField('\n Glaedr','June 23', false)
      .addField('\n CTNS','August 3', false)
      .addField('\n otmanezza','August 12', false)
      .addField('\n Kenshiro','August 14 ', false)
      .addField('\n jimm25','September 30', false)
      .addField('\n jinleehurb','October 23', false)
      .addField('\n Kevin1185','November 2', false)
      .addField('\n LordCroissant','November 12', false)
      .addField('\n Junusbiaz','December 3', false)
      .setFooter('There will be a command soon that will send a reminder at the right days','https://i.pinimg.com/originals/8b/de/81/8bde81e36644c034efbbd3c57a474847.png')


    message.channel.send(embed)
  }
})



client.on('ready' , () => {
  var textchennelhaha = client.channels.find(channel => channel.id === '727390897016144012')
  var text12chennelhaha = client.channels.find(channel => channel.id === '535534516945682462')

  var d = new Date();

  setInterval(() => {
    textchennelhaha.send("Date is "+d.toLocaleDateString())
  }, 3600000);

  
client.on('message', message => {
  if (message.content === 'Date is 8/3/2020' ) {
    text12chennelhaha.send("Happy birthday <@456100864738983957>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 8/12/2020' ) {
    text12chennelhaha.send("Happy birthday <@364069557951922176>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 8/14/2020' ) {
    text12chennelhaha.send("Happy birthday <@505751422449614878>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 30/9/2020' ) {
    text12chennelhaha.send("Happy birthday <@286209333488910336>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 10/23/2020' ) {
    text12chennelhaha.send("Happy birthday <@504543749293080597>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 11/3/2020' ) {
    text12chennelhaha.send("Happy birthday <@286208201186213888>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 11/12/2020' ) {
    text12chennelhaha.send("Happy birthday <@314532481519058944>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 12/3/2020' ) {
    text12chennelhaha.send("Happy birthday <@423131212945817620>")
  }})


client.on('message', message => {
  if (message.content === 'gg the date haha1/21/2021' ) {
    text12chennelhaha.send("Happy birthday <@482162074097549333>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 4/7/2021' ) {
    text12chennelhaha.send("Happy birthday <@433037812858880000>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 4/24/2021' ) {
    text12chennelhaha.send("Happy birthday <@499591499122737153>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 6/1/2021' ) {
    text12chennelhaha.send("Happy birthday <@320264452874305536>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 6/20/2021' ) {
    text12chennelhaha.send("Happy birthday <@240226379596038146>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 6/23/2021' ) {
    text12chennelhaha.send("Happy birthday <@321188857359892480>")
  }})





  })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////ROLE POSTION CODE/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('ready' , () => {
let recchannel = client.channels.get("736380370651709531")
recchannel.send("!strt")
  //positins
  .then(()=>{
        let embed = new Discord.RichEmbed()
        .setTitle('These are the positions in Brawlball')
        .setColor('#ffff00')
        .setThumbnail('https://i.ibb.co/4tsGqzs/bb.png')
        .setDescription('**React with your position**')
        .addField('**Runner** ',' **🏃‍♂️**',false)
        .addField("**Supporter** "," **🦈**",false)
        .addField('**Defender** ',' **🛡️**',false)
        .addField('**Remove Roles (Just incase)**',' **🔴**',false)
        recchannel.send(embed)
      
      .then(function (message) {
          
        message.react('🏃‍♂️')
          .then(()=> message.react('🦈'))
          .then(()=> message.react('🛡️'))
          .then(()=> message.react('🔴'))

            })
            let embed1 = new Discord.RichEmbed()
            .setTitle('These are the Colors')
            .setColor('#808080')
            .setThumbnail('https://qph.fs.quoracdn.net/main-qimg-5f05f2c594f75f636d5c74d0ac31aaec')
            .setDescription('**React with your Color**')
            .addField('**Blue** ',' **🟦**',false)
            .addField('**Yellow** ',' **🟨**',false)
            .addField('**Orange** ',' **🟧**',false)
            .addField('**Black** ',' **⬛**',false)
            .addField('**Pink** ',' **🦑**',false)
            .addField('**Remove Roles (Just incase)**',' **🚫**',false)
            recchannel.send(embed1)
                .then(function (message) {
              
                  message.react('🟦')
                  .then(()=> message.react('🟨'))
                  .then(()=> message.react('🟧'))
                  .then(()=> message.react('⬛'))
                  .then(()=> message.react('🦑'))
                  .then(()=> message.react('🚫'))
    
                }).catch(function() {
                
                })


                let embed2 = new Discord.RichEmbed()
            .setTitle('Other games then brawlhalla')
            .setColor('#000000')
            .setThumbnail('https://logo-logos.com/wp-content/uploads/2016/11/X_Games_logo_emblem.png')
            .setDescription('** if you want to be added to a chat from one of these games, react to the emoji and you will be automatically added**')
            .addField('**Valorant** ',' **🔫**',false)
            .addField('**Minecraft** ',' **⛏️**',false)
            .addField('**GTA V** ',' **🚔**',false)
            .addField('**Remove Roles (Just incase)**',' **♻️**',false)
            recchannel.send(embed2)
                .then(function (message) {
              
                  message.react('🔫')
                  .then(()=> message.react('⛏️'))
                  .then(()=> message.react('🚔'))
                  .then(()=> message.react('♻️'))
    
                }).catch(function() {
                
                })
          
          }).catch(function() {
            
            })
            
            })
    

    



    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////  POSITION ADD REACT  /////////////////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    client.on('messageReactionAdd', (messageReaction, user) => {

    //Runner
    
      const { message, emoji } = messageReaction;
      if(message.channel.id == '736380370651709531'){
      if(emoji.name == '🏃‍♂️') {

      message.guild.fetchMember(user.id).then(member => {
        if(user.bot)  return;
      else { 
    member.addRole('731318841287770124')
    member.addRole('736222790516211723')}
      })
      }}});


      client.on('messageReactionAdd', (messageReaction, user) => {
        //Supporter
        
          const { message, emoji } = messageReaction;
          if(message.channel.id == '736380370651709531'){
          if(emoji.name == '🦈') {
    
          message.guild.fetchMember(user.id).then(member => {
            if(user.bot)  return;
          else { 
    member.addRole('731318841287770124')
    member.addRole('736222933827190835')}
          })
          }
          
        }});
      
  

          client.on('messageReactionAdd', (messageReaction, user) => {
            //Defender

              const { message, emoji } = messageReaction;
              if(message.channel.id == '736380370651709531'){
              if(emoji.name == '🛡️') {
        
              message.guild.fetchMember(user.id).then(member => {
                if(user.bot)  return;
              else { 
    member.addRole('731318841287770124')
    member.addRole('736222973140402246')}
              })
              }}});


              client.on('messageReactionAdd', (messageReaction, user) => {
                //remove role
                
                  const { message, emoji } = messageReaction;
                  if(message.channel.id == '736380370651709531'){
                  if(emoji.name == '🔴') {
            
                  message.guild.fetchMember(user.id).then(member => {
                    if(user.bot)  return;
                  else { 
                    member.removeRole("736222973140402246")
                    member.removeRole("736222933827190835")
                    member.removeRole("736222790516211723")

                  }
                  })
                  }
                  
                }});


                //////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////POSITION REMOVE REACT/////////////////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////


                client.on('messageReactionRemove', (messageReaction, user) => {

                  //remove Runner
                  
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                    if(emoji.name == '🏃‍♂️') {
              
                    message.guild.fetchMember(user.id).then(member => {
                      if(user.bot)  return;
                    else { member.removeRole('736222790516211723')}
                    })
                    }}});


                client.on('messageReactionRemove', (messageReaction, user) => {
                
                  // remove supporter
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                      if(emoji.name == '🦈') {
                    message.guild.fetchMember(user.id).then(member => {
                      if(user.bot)  return;
                    else { member.removeRole('736222933827190835')}
                    })
                    }
                    
                  }});

                  client.on('messageReactionRemove', (messageReaction, user) => {
                    //remove Defender
        
                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '736380370651709531'){
                      if(emoji.name == '🛡️') {
                
                      message.guild.fetchMember(user.id).then(member => {
                        if(user.bot)  return;
                      else { member.removeRole('736222973140402246')}
                      })
                      }}});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionAdd', (messageReaction, user) => {

  //blue
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '736380370651709531'){
    if(emoji.name == '🟦') {

    message.guild.fetchMember(user.id).then(member => {
      if(user.bot)  return;
    else { member.addRole('615317792677298192')
    member.addRole('731432571073986561')
  }
    })
    }}});


    client.on('messageReactionAdd', (messageReaction, user) => {
      //yellow
      
        const { message, emoji } = messageReaction;
        if(message.channel.id == '736380370651709531'){
        if(emoji.name == '🟨') {
  
        message.guild.fetchMember(user.id).then(member => {
          if(user.bot)  return;
        else { member.addRole('615317793159512074')
        member.addRole('731432571073986561')
      }
        })
        }
        
      }});
    


        client.on('messageReactionAdd', (messageReaction, user) => {
          //orange

            const { message, emoji } = messageReaction;
            if(message.channel.id == '736380370651709531'){
            if(emoji.name == '🟧') {
      
            message.guild.fetchMember(user.id).then(member => {
              if(user.bot)  return;
            else { member.addRole('615317792756858895')
            member.addRole('731432571073986561')
          }
            })
            }}});



            client.on('messageReactionAdd', (messageReaction, user) => {
              //black
  
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                if(emoji.name == '⬛') {
          
                message.guild.fetchMember(user.id).then(member => {
                  if(user.bot)  return;
                else { member.addRole('615317792664715306')
                member.addRole('731432571073986561')
              }
                })
                }}});



                client.on('messageReactionAdd', (messageReaction, user) => {
                  //pink
      
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                    if(emoji.name == '🦑') {
              
                    message.guild.fetchMember(user.id).then(member => {
                      if(user.bot)  return;
                    else { member.addRole('615317792723304488')
                    member.addRole('731432571073986561')
                  }
                    })
                    }}});




            client.on('messageReactionAdd', (messageReaction, user) => {
              //remove role
              
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                if(emoji.name == '🚫') {
          
                message.guild.fetchMember(user.id).then(member => {
                  if(user.bot)  return;
                else { 
                  member.removeRole("615317792677298192")
                  member.removeRole("615317793159512074")
                  member.removeRole("615317792756858895")
                  member.removeRole("615317792664715306")
                  member.removeRole("615317792723304488")

                }
                })
                }
                
              }});



              /////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////    COLOR REMOVE REACT    ///////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionRemove', (messageReaction, user) => {

  //blue
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '736380370651709531'){
    if(emoji.name == '🟦') {

    message.guild.fetchMember(user.id).then(member => {
      if(user.bot)  return;
    else { member.removeRole('615317792677298192')}
    })
    }}});


    client.on('messageReactionRemove', (messageReaction, user) => {
      //yellow
      
        const { message, emoji } = messageReaction;
        if(message.channel.id == '736380370651709531'){
        if(emoji.name == '🟨') {
  
        message.guild.fetchMember(user.id).then(member => {
          if(user.bot)  return;
        else { member.removeRole('615317793159512074')}
        })
        }
        
      }});
    


        client.on('messageReactionRemove', (messageReaction, user) => {
          //orange

            const { message, emoji } = messageReaction;
            if(message.channel.id == '736380370651709531'){
            if(emoji.name == '🟧') {
      
            message.guild.fetchMember(user.id).then(member => {
              if(user.bot)  return;
            else { member.removeRole('615317792756858895')}
            })
            }}});



            client.on('messageReactionRemove', (messageReaction, user) => {
              //black
  
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                if(emoji.name == '⬛') {
          
                message.guild.fetchMember(user.id).then(member => {
                  if(user.bot)  return;
                else { member.removeRole('615317792664715306')}
                })
                }}});



                client.on('messageReactionRemove', (messageReaction, user) => {
                  //pink
      
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                    if(emoji.name == '🦑') {
              
                    message.guild.fetchMember(user.id).then(member => {
                      if(user.bot)  return;
                    else { member.removeRole('615317792723304488')}
                    })
                    }}});

                      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                      
                      /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                      //////////////////////////////////////////////////////////////////////////////////////////////////////////

                      client.on('messageReactionAdd', (messageReaction, user) => {

                        //valorant
                        
                          const { message, emoji } = messageReaction;
                          if(message.channel.id == '736380370651709531'){
                          if(emoji.name == '🔫') {
                    
                          message.guild.fetchMember(user.id).then(member => {
                            if(user.bot)  return;
                          else {
                            member.addRole('731528561969856622')
                            member.addRole('731528037291524158')}
                          })
                          }}});
                    
                    
                          client.on('messageReactionAdd', (messageReaction, user) => {
                            //minecraft
                            
                              const { message, emoji } = messageReaction;
                              if(message.channel.id == '736380370651709531'){
                              if(emoji.name == '⛏️') {
                        
                              message.guild.fetchMember(user.id).then(member => {
                                if(user.bot)  return;
                              else { member.addRole('731528298445668442')
                              member.addRole('731528037291524158')}
                              })
                              }
                              
                            }});
                          
                      
                    
                              client.on('messageReactionAdd', (messageReaction, user) => {
                                //gta v
                    
                                  const { message, emoji } = messageReaction;
                                  if(message.channel.id == '736380370651709531'){
                                  if(emoji.name == '🚔') {
                            
                                  message.guild.fetchMember(user.id).then(member => {
                                    if(user.bot)  return;
                                  else { member.addRole('738429071222112288')
                                  member.addRole('731528037291524158')}
                                  })
                                  }}});
                    
                    
                                  client.on('messageReactionAdd', (messageReaction, user) => {
                                    //remove role
                                    
                                      const { message, emoji } = messageReaction;
                                      if(message.channel.id == '736380370651709531'){
                                      if(emoji.name == '♻️') {
                                
                                      message.guild.fetchMember(user.id).then(member => {
                                        if(user.bot)  return;
                                      else { 
                                        member.removeRole("731528561969856622")
                                        member.removeRole("731528298445668442")
                                        member.removeRole("738429071222112288")
                    
                                      }
                                      })
                                      }
                                      
                                    }});
                    
                    
                                    //////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                        ////////////////////////////////////////POSITION REMOVE REACT/////////////////////////////////////////////////////////////////
                        
                        ////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                    
                                    client.on('messageReactionRemove', (messageReaction, user) => {
                    
                                      //remove valorant
                                      
                                        const { message, emoji } = messageReaction;
                                        if(message.channel.id == '736380370651709531'){
                                        if(emoji.name == '🔫') {
                                  
                                        message.guild.fetchMember(user.id).then(member => {
                                          if(user.bot)  return;
                                        else { member.removeRole('731528561969856622')}
                                        })
                                        }}});
                    
                    
                                    client.on('messageReactionRemove', (messageReaction, user) => {
                                    
                                      // remove minecraft
                                        const { message, emoji } = messageReaction;
                                        if(message.channel.id == '736380370651709531'){
                                          if(emoji.name == '⛏️') {
                                        message.guild.fetchMember(user.id).then(member => {
                                          if(user.bot)  return;
                                        else { member.removeRole('731528298445668442')}
                                        })
                                        }
                                        
                                      }});
                    
                                      client.on('messageReactionRemove', (messageReaction, user) => {
                                        //remove gta v
                            
                                          const { message, emoji } = messageReaction;
                                          if(message.channel.id == '736380370651709531'){
                                          if(emoji.name == '🚔') {
                                    
                                          message.guild.fetchMember(user.id).then(member => {
                                            if(user.bot)  return;
                                          else { member.removeRole('738429071222112288')}
                                          })
                                          }}});
            


                    


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////WELCOME CODE/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('guildMemberAdd', member => {
  const channel2 = member.guild.channels.get("535540529379672074")
  if (!channel2) return
  channel2.send(`${member} has join to Our Style server`)
                member.addRole('603386617620856852')
})
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.get("613400026978320395")
    if (!channel) return 
      number = 10
  
  var images = ["https://raw.githubusercontent.com/astrulmr/bots/master/1.png", "https://raw.githubusercontent.com/astrulmr/bots/master/2.png", "https://raw.githubusercontent.com/astrulmr/bots/master/3.png", "https://raw.githubusercontent.com/astrulmr/bots/master/4.png", "https://raw.githubusercontent.com/astrulmr/bots/master/5.png", "https://raw.githubusercontent.com/astrulmr/bots/master/6.png", "https://raw.githubusercontent.com/astrulmr/bots/master/7.png", "https://raw.githubusercontent.com/astrulmr/bots/master/8.png", "https://raw.githubusercontent.com/astrulmr/bots/master/9.png"];
  var image = Math.floor(Math.random() * images.length);
  


      var bbmsg = [ `OMG !!! Is that you  ${member} Welcome Dude `,
      `Hey  ${member} Welcome to Our Style `,
      `Great we're glad you came  ${member} :wink: `,
      `Well well well look who is here Guys ${member}`,
      `I have to tell you something come here ~WELCOME~  ${member} :neutral_face: `,
      `Is that you, wait no. You are ${member} Anyway Welcome `]

    var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
    
    var bbccrndm = Math.floor(Math.random() * bbcolor.length)
    var bbclrchos = bbcolor[bbccrndm]

      var bbrandom = Math.floor(Math.random() * bbmsg.length)
    var bbchoose = bbmsg[bbrandom]
    let embed = new Discord.RichEmbed()
          .setTitle(member.user.username+" "+"`Has joined to Our Style server`")
          .setColor(bbclrchos)
          .setThumbnail(member.user.displayAvatarURL)
          .setDescription(bbchoose)
          .setImage(String([images[image]]))
          
        channel.send(embed);



        
  
        
        })
  
client.login(process.env.BOT_TOKEN)
