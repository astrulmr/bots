




const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client()

var xjok = 0


client.on('ready' , () => {
    console.log("connected as " + client.user.tag)
    

let sttius =[
 "www.youtube.com/watch?v=KV-8PCeqPzg&t=42s",
  "Brawlball"
]
let sttius2 =[
  "WATCHING",
   "PLAYING"
 ]


 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

    setInterval(() => {
 xjok=xjok+1
let typething = "no"
let descthing = "yes"
    

          
           if(xjok==1) {
             typething = "PLAYING"
            descthing =  "Brawlball" 
           
            client.user.setActivity(descthing , {type: typething})

          }
           if(xjok==2){
            typething = "WATCHING"
            descthing =  "OS Brawlball Channel On Youtube" 
            xjok=xjok-2
            client.user.setActivity(descthing , {type: typething})}
          
         
         
    }, 60000);
    
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////


/*client.on('message', message => {
  if (!message.guild) return
      if (message.content === '!yellow' ) {
  
    message.member.addRole('615317793159512074')

    message.channel.send("yellow color set to "+message.author.username)
  }
  })
    client.on('message', message => {
      if (!message.guild) return
      if (message.content === '!blue' ) {
      
        message.member.addRole('615317792677298192')
    
        message.channel.send("blue color set to "+message.author.username)
      }
      })
      
        client.on('message', message => {
          if (!message.guild) return
          if (message.content === '!black' ) {
          
            message.member.addRole('615317792664715306')
        
            message.channel.send("black color set to "+message.author.username)
          }
          })
          client.on('message', message => {
            if (!message.guild) return
            if (message.content === '!orange' ) {
            
              message.member.addRole('615317792756858895')
          
              message.channel.send("orange color set to "+message.author.username)
            }
            })
            
            client.on('message', message => {
                if (!message.guild) return
                if (message.content === '!pink' ) {
                
                  message.member.addRole('615317792723304488')
              
                  message.channel.send("pink color set to "+message.author.username)
                }
                })
                
                      client.on('message', message => {
                        if (message.content === '!colors') {
                              const embed = new RichEmbed()
                              .setTitle('All Color That Can Change Ur online name color')
                              .setColor(0xFFFF00)
                              .addField("BLUE","!blue",true)
                              .addField("YELLOW","!yellow",true)
                              .addField("ORANGE","!orange",true)
                              .addField("BLACK","!black",true)
                              .addField("PINK","!pink",true)

                       message.channel.send(embed)
                        }
                      })*/
                        
    
   /* client.guilds.forEach((guild) => {
       console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        // welcome is 535515917518372886
    })*/


   
 

      client.on('message', message => {
        if (message.content === '!os clan') {
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
        if (message.content === '!os clan') {
            const embed = new RichEmbed()

                .setTitle('Team : A.S.K')
                .setColor(0xc44312)
                .setDescription('The Ace team in Our Style, they won both of the tourneys they did within the clan')
                .addField('Astru®', 'He is the perfect Runner and a f*cking good Supporter and Defender', true)
                .addField('\n Kenshiro', ' He is a beast as Supporter and wild in Defence and Run', true)
                .addField('\n Styleken', 'He is the Defender you want behind you but he can also Run and Support like no one else', true)
            message.channel.send(embed)
        }
    })


    client.on('message', message => {
        if (message.content === '!os clan') {
            const embed = new RichEmbed()

                .setTitle('Team : KeJiCT')
                .setColor(0x000000)
                .setDescription('The perfect Duo was joined by a third and they will show the power of Our Style players')
                .addField('jimm25', ' He is an insane Runner and surely great in Defence and Support', true)
                .addField('\n kevin1185', ' He so cool in Run and fantastic as Defender and Supporter', true)
                .addField('\n CTNS', 'He cannot be scored on when Defending and he is great in Run and Support', true)
                .addField('\n KaeptnKook', ' He is the best in Defence and a 300IQ Runner and Supporter', true)
            message.channel.send(embed)
        }
    })


    client.on('message', message => {
        if (message.content === '!os clan') {
            const embed = new RichEmbed()

                .setTitle('Team : Danzo°s Gang')
                .setColor(0x55e473)
                .setDescription('Dan got a great team by his side, they are here to prove their force as a team')
                .addField('DanzoDon', ' He is a godzila Runner and cool in Defence and Support', true)
                .addField('\n LordCroissant', ' He never crossed in Support and witty as Runner And Defender', true)
                .addField('\n Glaedr', ' He is a brilliant Defender and indestructible in Support and Run', true)
                .addField('\n otmanezza', 'He is an unstoppable Runner and unbreakable Defender and Supporter', true)
            message.channel.send(embed)
        }
    })


    client.on('message', message => {
        if (message.content === '!os clan') {
            const embed = new RichEmbed()

                .setTitle('Our Style Players')
                .setColor(0x35127a)
                .setThumbnail('https://cdn.discordapp.com/icons/535515917518372884/1e076f469ba8e95ffe32620817a98a22.png')
                .setDescription('These guys are in Our Style for 2 reasons : they are insane brawlball players and they want to become even greater, do not be fools to underestimate us all')
                .addField('JustThomas', 'He is just super as Defender and great in Run and Support', true)
                .addField('\n jinleehurb', ' He has an unbelievable Defence and is so good in Support and Run', true)
                .addField('\n SweetMiguel', 'He Runs you cannot catch him and he is fantastic in Defence and Support', true)
                .addField('\n |OS| Tmis Kun', 'He is a just too good Supporter and so great in Run and Defence', true)
                .addField('\n Sanmaay', ' She is not merciful as Defender and great in Runner and Supporter', true)
                .setFooter('Everyone in Our Style clan is able to kick you in all positions', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7KXpsrfkAhUl5uAKHf1DCLMQjRx6BAgBEAQ&url=https%3A%2F%2Fwallpaperstock.net%2Fs-logo-design-wallpapers_w35374.html&psig=AOvVaw3rIPgPX0g2OY5GqmOi0ph1&ust=1567694238587809')

            message.channel.send(embed)
        }
    })

    

  client.on('message', message => {
    
    if (message.content === '!hi') {
       message.reply(`Yoooo What Can i Do For You ? \n 1- !who @anyname \n 2- !avatar @anyname \n 3- !os clan \n 4- !help `);

       var d = new Date();

       message.channel.send("Date is : "+d.toLocaleDateString())
       
   }
 })
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////BRAWLBALL CLAN MOVE AND TRICKS////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////



 
 let channel3 = client.channels.get("613662955522752516")
 client.on('message', message => {
   if (message.content === '!brawlball') {
      
           const embed = new RichEmbed()
           
           .setTitle(' Which do you wanna tryna learn ? : ')
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
         .setDescription('\n\n 1. Leave The Wall And Dodge Left Or Right (depend on which side you play) \n\n 2. Throw The Ball Up ( Without Jumping Just Throw Button And Aim Up ) \n\n 3. Do Recovery To Catch The Ball \n\n 4. Jump 2 Times Slowly \n\n 5. Dodge Up To Touch The Wall \n\n https://drive.google.com/file/d/1FfiNTu6czLBpXZUrtr7Vbhl_aGz-iFS1/view?usp=sharing \n\n Designed By OS Team :)')
         channel3.send(embed)
}
})
client.on('message', message => {
  if (message.content === '!#') {
     
          const embed = new RichEmbed()
          
          .setTitle('Up Pass Brawlball Move it Consists of five steps : ')
          .setColor(0x00BFFF)
          .setDescription('\n\n 1. Go Top Of Ur Base Tower And Jump Up And Left Or Right (depend on which side u play) \n\n 2. Dodge Aiming Up + Left Or Right  \n\n 3. Throw The Ball Up  ( Without Jumping Just Throw Button And Aim Up ) \n\n 4. Punch Up On Heavy Button Attack To Catch The Ball  \n\n 5. Jump 1 Time  \n\n 6. And Dodge One Time \n\n  Designed By OS Team :)')
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
    

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 



//nubstnubstnubstyhh

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

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////NERF ROLL CODE///////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
 client.on('message', message => {
    if (message.content === '!sgame' ) {

        let embed = new Discord.RichEmbed()
        .setTitle('---New Nerf Roll match started---')
        .setColor('#FF0000')
        .setThumbnail('https://i.ibb.co/cTHfBpQ/kooko.png')
        .setDescription('**Here is the rules**')
        .addField('**1.** ',' **Every player gets one nerf**',false)
        .addField("**2.** "," **If you cheat, you have to commit suicide and you'll get two new nerfs on the next game**",false)
        .addField('**3.** ',' **If you cheat when you have a team nerf, you (only) have to commit suicide and all the team members will get two new nerfs on the next game**',false)
        .addField("**4.** "," **Please play fair and try not to spam. If you've cheated, say it or we'll kick you**",false)
        .addField('**5.** ',' **Dont type other then !roll when game start on nerf_roll channel**',false)
        message.channel.send(embed)
            .then(function (message) {
              message.react("👍")
              message.react("👇")
             
            }).catch(function() {
              //Something
             });

    }})



    client.on('messageReactionAdd', (messageReaction, user) => {
    
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '705155467881742516'){
    
    if(emoji.name == '👇') {
     
      if(user.bot)  return;
     else { message.channel.fetchMessages()
    .then(function(list){
          message.channel.bulkDelete(list);
     }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")}) }

     let embed = new Discord.RichEmbed()
     .setTitle('*-*--New Nerf Roll* match *started---')
     .setColor('#FF0000')
     .setThumbnail('https://i.ibb.co/cTHfBpQ/kooko.png')
     .setDescription('**Here is the rules**')
     .addField('**1.** ',' **Every player gets one nerf**',false)
     .addField("**2.** "," **If you cheat, you have to commit suicide and you'll get two new nerfs on the next game**",false)
     .addField('**3.** ',' **If you cheat when you have a team nerf, you (only) have to commit suicide and all the team members will get two new nerfs on the next game**',false)
     .addField("**4.** "," **Please play fair and try not to spam. If you've cheated, say it or we'll kick you**",false)
     .addField('**5.** ',' **Dont type other then !roll when game start on nerf_roll channel**',false)
     .addField('**___________** ',' **To enter the nerf roll 👍 \n\n To enter new nerf roll 👇 **',false)
     message.channel.send(embed)
     .then(function (message) {
      message.react("👍")
      message.react("👇")
     })
     }
    }})

    client.on('messageReactionAdd', (messageReaction, user) => {
    
        // Deal with command
    
      const { message, emoji } = messageReaction;
      if(message.channel.id == '705155467881742516'){
      if(emoji.name == '👍') {

        var message_options = ["Can't attack",
        "Only defend (stay in your scoring area)",
        "Can't taunt",
        "Can't throw the ball",
        "Can't attack without a weapon (throws allowed)",
        "Can only hold the ball for 7 sec",
        "Can't hold the ball",
        "Stay on the opponent's goal",
        "Can't dodge/dash while holding the ball",
        "Can't jump while holding the ball",
        "Suicide when losing the ball",
        "Score 3 goals",
        "Keep jumping (spam the jump button)",
        "Can't score without down pass / down selfpass",
        "TEAM NERF - Can't score without taunting",
        "TEAM NERF - Pass the ball at least 4 times before scoring)",
        "TEAM NERF - Can't use a weapon",
        "Can only throw weapons (can't attack with it)",
        "Stand still for 3 sec every 15 sec (set timer) ",
        "TEAM NERF - KO one or more opponents before each goal",
        "TEAM NERF - Every team member needs to get KO'd by the opponent ",
        "Can't go in the opponent scoring area",
        "Can't land on the middle of the arena (Only the scoring areas)",
        "TEAM NERF -  Do an Alley-oop",
        "TEAM NERF - Go back to your scoring area when you lose the ball in the scoring area",
        "Can't take the ball twice in a row without an opponent taking it",
        "Can't take the ball twice in a row without a team member taking it",
        "Can't take the ball twice in a row without a player taking it",
        "Can only do unarmed sigs (no weapon, no light or air attack)",
        "Can only do ground pound attacks (throws allowed)",
        "TEAM NERF - Use Azoth",
        "TEAM NERF - Use Koji",
        "TEAM NERF - Use Bödvar",
        "TEAM NERF - Use Isaiah",
        "TEAM NERF - Use Queen Nai with 2 speed",
        "GAME NERF - 300% damage","GAME NERF - Team Damage On","GAME NERF -  Must use Axe legend",
        "GAME NERF - YELLOW MAN SPAM"]
       var random_index = Math.floor(Math.random() * message_options.length)
       var chosen_message = message_options[random_index]
       message.guild.fetchMember(user.id).then(member => {
        if(user.bot)  return;
      else { let embed = new Discord.RichEmbed()
       .setTitle(user.username)
       .setColor('#ffff00')
       .setDescription(chosen_message)
    
       message.channel.send(embed)}
       })
      }}});
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////CLEAR MSGS///////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    client.on('message', message => {


        if (message.content === '!strt' ) {
            if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to  this")


    message.channel.fetchMessages()
    .then(function(list){
         message.channel.bulkDelete(list);
     }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        

    }})

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////MAKE BOT SAY AFTER U///////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
    
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////SHOWS AVATAR///////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
  if (message.content === '<@505751422449614878>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------KENSHIRO------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Brynn.png')
  .setColor('#275BF0')
    message.channel.send(embed)

  }
})

client.on('message', message => {
  if (!message.guild) return
  if (message.content.startsWith('!')) {
  const user = message.mentions.users.first()
  if (user) {
  const member = message.guild.member(user)
  if ( member) {
    message.channel.send("<@"+user.id+">")
 }}}
})

client.on('message', message => {
  if (message.content === '<@482162074097549333>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------ASTRU------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Artemis.png')
  .setColor('#275BF0')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@499591499122737153>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------STYLEKEN------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png')
  .setColor('#ffffff')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@320264452874305536>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------DANZODON------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Val.png')
  .setColor('#ffffff')
    message.channel.send(embed)
    
  }
})
client.on('message', message => {
  if (message.content === '<@286208201186213888>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------KEVIN1185------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Yumiko.png')
  .setColor('#ffffff')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@614045629773119489>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------SWEETMIGUEL------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Rayman.png')
  .setColor('#ffffff')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@286209333488910336>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------JIMM25------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Ember.png')
  .setColor('#ffffff')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@423131212945817620>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------JUNUSBIAZ------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Mordex.png')
  .setColor('#ffffff')
    message.channel.send(embed)

  }
})

client.on('message', message => {
  if (message.content === '<@504543749293080597>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------JINLEEHURB------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png')
  .setColor('#ffffff')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@240226379596038146>') {
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
  if (message.content === '<@365968871326351360>') {
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
  if (message.content === '<@555853237689909344>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------PANOSBOA------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')
  .setColor('#ffffff')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@184230639086731264>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------THOMASERENA------------')
  .setImage('https://vignette.wikia.nocookie.net/brawlhalla-game/images/e/e5/DarkMatterVraxx.png/revision/latest/scale-to-width-down/294?cb=20180215181636')
  .setColor('#275BF0')
    message.channel.send(embed)
    
  }
})
client.on('message', message => {
  if (message.content === '<@347563513297895452>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------BLUEDRAGON------------')
  .setImage('https://pbs.twimg.com/media/Cyiq9mnWQAAU533.png')
  .setColor('#275BF0')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@314532481519058944>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------LORDCROISSANT------------')
  .setImage('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/3/31/Harbinger_Orion.png')
  .setColor('#275BF0')
    message.channel.send(embed)

  }
})
client.on('message', message => {
  if (message.content === '<@363346337132969996>') {
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
////////////////////////////////////////


client.on('message', message => {
  if (!message.guild) return
  if (message.content.startsWith('!p')) {
  const user = message.mentions.users.first()
  if (user) {
  const member = message.guild.member(user)
  if ( member) {
    message.channel.send("p <@"+user.id+">")
 }}}
})

                              client.on('message', message => {
  if (message.content === "p <@184230639086731264>" ) {
 
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
    if (message.content === "p <@482162074097549333>" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/3/32/SkinIcon_Artemis_Slapshot.png/900px-SkinIcon_Artemis_Slapshot.png?version=55444f12c4f0a02882f95514829e9585")
        .setDescription("Astru")
        .addField('Position','Runner',true)
        .addField('Clan','Our Style',true)

        message.channel.send(embed)
    }
    })
    client.on('message', message => {
      if (message.content === "p <@320264452874305536>" ) {
          const embed = new RichEmbed()
          .setTitle("Name")
          .setColor(0x0000ff)
          .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/4/47/SkinIcon_Val_Kunoichi.png/600px-SkinIcon_Val_Kunoichi.png?version=43c51465bb65b2cfbe02db40cd52697b")
          .setDescription("DanzoDon")
          .addField('Position','Runner',true)
          .addField('Clan','Our Style',true)

          message.channel.send(embed)
      }
      })
      client.on('message', message => {
        if (message.content === "p <@286208201186213888>" ) {
            const embed = new RichEmbed()
            .setTitle("Name")
            .setColor(0x0000ff)
            .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/b/bf/SkinIcon_Yumiko_Tokyo.png/600px-SkinIcon_Yumiko_Tokyo.png?version=8392753f93e5267ec317090ca7462401")
            .setDescription("Kevin1185")
            .addField('Position','Runner',true)
            .addField('Clan','Our Style',true)

            message.channel.send(embed)
        }
        })
        client.on('message', message => {
          if (message.content === "p <@286209333488910336>" ) {
              const embed = new RichEmbed()
              .setTitle("Name")
              .setColor(0x0000ff)
              .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/a/ad/SkinIcon_Ember_SantasHelper.png/600px-SkinIcon_Ember_SantasHelper.png?version=1c9cac26b75e97df79448500a7cda9ac")
              .setDescription("Jimm25")
              .addField('Position','Runner',true)
              .addField('Clan','Our Style',true)

              message.channel.send(embed)
          }
          })
          client.on('message', message => {
            if (message.content === "p <@614045629773119489>" ) {
                const embed = new RichEmbed()
                .setTitle("Name")
                .setColor(0x0000ff)
                .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/9/96/SkinIcon_Rayman_Raymesis.png/600px-SkinIcon_Rayman_Raymesis.png?version=79354ce2895f8ecddae5539d8f8bcf72")
                .setDescription("SweetMiguel")
                .addField('Position','Runner',true)
                .addField('Clan','Our Style',true)

                message.channel.send(embed)
            }
            })
            client.on('message', message => {
              if (message.content === "p <@499591499122737153>" ) {
                  const embed = new RichEmbed()
                  .setTitle("Name")
                  .setColor(0x0000ff)
                  .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/5/57/SkinIcon_Scarlet_Captain.png/600px-SkinIcon_Scarlet_Captain.png?version=5646cd825a8bddebcb22641781cddbd7")
                  .setDescription("Styleken")
                  .addField('Position','Defender',true)
                  .addField('Clan','Our Style',true)

                  message.channel.send(embed)
              }
              })
              client.on('message', message => {
                if (message.content === "p <@240226379596038146>" ) {
                    const embed = new RichEmbed()
                    .setTitle("Name")
                    .setColor(0x0000ff)
                    .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/0e/SkinIcon_Bodvar_CyberViking.png/600px-SkinIcon_Bodvar_CyberViking.png?version=14e957b2301ba3454ea4b28435d4deef")
                    .setDescription("Kaeptnkook")
                    .addField('Position','Defender',true)
                    .addField('Clan','Our Style',true)

                    message.channel.send(embed)
                }
                })
                client.on('message', message => {
                  if (message.content === "p <@423131212945817620>" ) {
                      const embed = new RichEmbed()
                      .setTitle("Name")
                      .setColor(0x0000ff)
                      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/2/2c/SkinIcon_Mordex_Fenrir.png/600px-SkinIcon_Mordex_Fenrir.png?version=6b9f00361feb8542abab1f531b544911")
                      .setDescription("Junusbiaz")
                      .addField('Position','Defender',true)
                      .addField('Clan','Our Style',true)

                      message.channel.send(embed)
                  }
                  })
                  client.on('message', message => {
                    if (message.content === "p <@504543749293080597>" ) {
                        const embed = new RichEmbed()
                        .setTitle("Name")
                        .setColor(0x0000ff)
                        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/e/eb/SkinIcon_Scarlet_Grease.png/600px-SkinIcon_Scarlet_Grease.png?version=d4550dfafa4972f753b8f9831ca20e43")
                        .setDescription("Jinleehurb")
                        .addField('Position','Defender',true)
                        .addField('Clan','Our Style',true)

                        message.channel.send(embed)
                    }
                    })
                    client.on('message', message => {
                      if (message.content === "p <@555853237689909344>" ) {
                          const embed = new RichEmbed()
                          .setTitle("Name")
                          .setColor(0x0000ff)
                          .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/68/SkinIcon_Hattori_Cat.png/600px-SkinIcon_Hattori_Cat.png?version=3b6ea2b0f3219bf65955076dbddd0c37")
                          .setDescription("PanosBOA")
                          .addField('Position','Supporter',true)
                          .addField('Clan','Our Style',true)

                          message.channel.send(embed)
                      }
                      })
                      client.on('message', message => {
                        if (message.content === "p <@505751422449614878>" ) {
                            const embed = new RichEmbed()
                            .setTitle("Name")
                            .setColor(0x0000ff)
                            .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/7/7e/SkinIcon_Brynn_Huntress.png/600px-SkinIcon_Brynn_Huntress.png?version=28f7f6ef5cca88c9563b99a3efc6df07")
                            .setDescription("Kenshiro")
                            .addField('Position','Supporter',true)
                            .addField('Clan','Our Style',true)

                            message.channel.send(embed)
                        }
                        })
                        client.on('message', message => {
                          if (message.content === "p <@365968871326351360>" ) {
                              const embed = new RichEmbed()
                              .setTitle("Name")
                              .setColor(0x0000ff)
                              .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/00/SkinIcon_Hattori_Shadow.png/600px-SkinIcon_Hattori_Shadow.png?version=191746d50260876e5e469cdfdce1bcb5")
                              .setDescription("|OS| Tmis Kun")
                              .addField('Position','Supporter',true)
                              .addField('Clan','Our Style',true)
                              message.channel.send(embed)
                          }
                          })
                      
                          client.on('message', message => {
                            if (message.content === "p <@347563513297895452>" ) {
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
                              if (message.content === "p <@314532481519058944>" ) {
                                  const embed = new RichEmbed()
                                  .setTitle("Name")
                                  .setColor(0x0000ff)
                                  .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/67/SkinIcon_Orion_DeathAngel.png/600px-SkinIcon_Orion_DeathAngel.png?version=0c51a5e96f38bc216a6bc7a24ad99c28")
                                  .setDescription("LordCroissant")
                                  .addField('Position','Supporter',true)
                                  .addField('Clan','Our Style',true)
                                  message.channel.send(embed)
                              }
                              })
                              client.on('message', message => {
                                if (message.content === "p <@363346337132969996>" ) {
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
      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/3/32/SkinIcon_Artemis_Slapshot.png/900px-SkinIcon_Artemis_Slapshot.png?version=55444f12c4f0a02882f95514829e9585")
      .setDescription("Astru")
      .addField('Position','Runner',true)
      .addField('Clan','Our Style',true)
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
        .addField('Clan','Our Style',true)
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
        .addField('Clan','Our Style',true)
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
          .addField('Clan','Our Style',true)
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
              .addField('Clan','Our Style',true)
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
                .addField('Clan','Our Style',true)
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
                  .addField('Clan','Our Style',true)
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
                    .addField('Clan','Our Style',true)
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
                      .addField('Clan','Our Style',true)
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
                      .addField('Clan','Our Style',true)
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
                  .addField('Clan','Our Style',true)
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
                    .addField('Clan','Our Style',true)
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
                              .addField('Clan','Our Style',true)
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
      .addField('Astru',"Our Style",true)
      .addField('Jimm25',"Our Style",true)
      .addField('SweetMiguel',"Our Style",true)
      .addField('DanzoDon',"Our Style",true)
      .addField('THE_INSANE_COW',"Pyrateers",true)
      .addField('Eichelb4rt',"Pyrateers",true)
      .addField('Shadow',"Pyrateers",true)
      .addField('otmanezza',"Our Style",true)
      .addField('Loay__xdar','ps clan',true)
      .addField('SID_GMRツ','PHB',true)
      .addField('klashmix470','ps clan',true)

//postionneverlosehaha747
      .setThumbnail('https://pngimage.net/wp-content/uploads/2018/06/run-logo-png-2.png')

      message.channel.send(embed)
  }
     
       
      })
      client.on('message', message => {
        if (message.content == '!sup'){          
            const embed = new RichEmbed()
            .setTitle('------------------ Supporter Players ------------------')
            .setColor(0x0000ff)
            .addField('Kenshiro',"Our Style",true)
            .addField('Styleken',"Our Style",true)
            .addField('|OS| Tmis Kun',"Our Style",true)
            .addField('ThomaSerena',"NBS",true)
            .addField('LordCroissant',"Our Style",true)
            .addField('PanosBOA',"Our Style",true)
            .addField('Kevin1185',"Our Style",true)
                  .addField('Erzinos','La Team Rainbow',true)

      .addField('Helper','Clansanity',true)

//uwilllosenubhahahahahahanub
            .setThumbnail('https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2804316/b4c24cc785da44b7bf311749acee46ab/1.gif?token-time=2145916800&token-hash=xlTzbZBw6DPP5oozmI1VAy3PbVGBkwfM-6Eq2oyV-yo%3D ')
    
            message.channel.send(embed)
        
           
        }
            })
            client.on('message', message => {
              if (message.content == '!def'){          
                  const embed = new RichEmbed()
                  .setTitle('------------------ Defender Players ------------------')
                  .setColor(0xFFFF00)
                  .addField('KaeptnKook',"Our Style",true)
                  .addField('Jinleehurb',"Our Style",true)
                  .addField('Junusbiaz',"Our Style",true)
                  .addField('Glaedr',"Our Style",true)
                  .addField('BlueDragon',"TVS",true)
                  .addField('senpai','Our Style',true)

      .addField('CTNS','Our Style',true)

      .addField('MineTurtle 🐢','turtle dislike life',true)

//dontjokwithmeucantwin545
                  .setThumbnail('https://www.shareicon.net/data/2016/03/22/737658_security_512x512.png')
          
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
      .addField('Astru',"Our Style",true)
      .addField('Jimm25',"Our Style",true)
      .addField('SweetMiguel',"Our Style",true)
      .addField('DanzoDon',"Our Style",true)
      .addField('THE_INSANE_COW',"Pyrateers",true)
      .addField('Eichelb4rt',"Pyrateers",true)
      .addField('Shadow',"Pyrateers",true)
      .addField('otmanezza',"Our Style",true)
      .addField('Loay__xdar','ps clan',true)
      .addField('SID_GMRツ','PHB',true)
      .addField('klashmix470','ps clan',true)
      
//postionneverlosehaha747
      .setThumbnail('https://pngimage.net/wp-content/uploads/2018/06/run-logo-png-2.png')

      message.channel.send(embed)
  }
     
       
      })
      client.on('message', message => {
        if (message.content == '!pall'){          
            const embed = new RichEmbed()
            .setTitle('------------------ Supporter Players ------------------')
            .setColor(0x0000ff)
            .addField('Kenshiro',"Our Style",true)
            .addField('Styleken',"Our Style",true)
            .addField('|OS| Tmis Kun',"Our Style",true)
            .addField('ThomaSerena',"NBS",true)
            .addField('LordCroissant'," Our Style",true)
            .addField('PanosBOA',"Our Style",true)
            .addField('Kevin1185',"Our Style",true)
            .addField('Erzinos','La Team Rainbow',true)
            .addField('Helper','Clansanity',true)

//uwilllosenubhahahahahahanub
            .setThumbnail('https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2804316/b4c24cc785da44b7bf311749acee46ab/1.gif?token-time=2145916800&token-hash=xlTzbZBw6DPP5oozmI1VAy3PbVGBkwfM-6Eq2oyV-yo%3D ')
    
            message.channel.send(embed)
        
           
        }
            })
            client.on('message', message => {
              if (message.content == '!pall'){          
                  const embed = new RichEmbed()
                  .setTitle('------------------ Defender Players ------------------')
                  .setColor(0xFFFF00)
                  .addField('KaeptnKook',"Our Style",true)
                  .addField('Jinleehurb',"Our Style",true)
                  .addField('Junusbiaz',"Our Style",true)
                  .addField('BlueDragon',"TVS",true)
                  .addField('Glaedr',"Our Style",true)
                  .addField('senpai','Our Style',true)

      .addField('CTNS','Our Style',true)

      .addField('MineTurtle 🐢','turtle dislike life',true)

//dontjokwithmeucantwin545
                  .setThumbnail('https://www.shareicon.net/data/2016/03/22/737658_security_512x512.png')
          
                  message.channel.send(embed)
              
                 
              }
                  })



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content == '!codes'){          
      const embed = new RichEmbed()
      .setTitle('OS|Bot All Codes You Can Use')
      .setColor(0xffffff)
      .addField('!avatar @anyname',"To see avatar of someone in the server",true)
      .addField('!p @anyname               ',"To see position and clan of someone in the server",true)
      .addField('!brawlball                      ',"To see hidden tricks and move of brawlball only clan (Our Style) can see it",true)
      .addField('!os clan                          ',"To see info about (Our Style) clan",true)
      .addField('!legends                         ',"To see every one fav legend in the server",true)
      .addField('! @anyname                      ',"To see fav legend of someone in the server",true)
      .addField('!pall                                 ',"To see all runners and supporters and defender in the server",true)
      .addField('!run                                ',"To see all runners the server        \n ",true)

      .addField('!sup                               ',"To see all supporters in the server          ",true)

      .addField('!def                                ',"To see all defenders in the server",true)
      .addField('!ap                                  ',"To see which position and clan of every one in the server",true)
      .addField("!colors                               ","To see all color that can change ur name color",true)

      .setThumbnail(client.user.avatarURL)
      .setFooter("\n\n OS|BOT Designed And Edited by OS Team",client.user.avatarURL)
      message.channel.send(embed)
  
     
  }
      })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  client.on('message', message => {
      if (message.content === '<@205466076622880778>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------EICHELB4RT------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Lucien.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })

                             client.on('message', message => {
  if (message.content === "p <@205466076622880778>" ) {
 
      const embed = new RichEmbed()
      .setTitle("Name")
      .setColor(0x0000ff)
      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/1/18/SkinIcon_Lucien_Stealth.png/900px-SkinIcon_Lucien_Stealth.png?version=fafe5f5a88c16a7a2132cd69779d44c0")
      .setDescription("Eichelb4rt")
      .addField('Position','Runner',true)
      .addField('Clan','Pyrateers',true)

      message.channel.send(embed)
  }
  })

  client.on('message', message => {
    if (message.content === "!ap" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/1/18/SkinIcon_Lucien_Stealth.png/900px-SkinIcon_Lucien_Stealth.png?version=fafe5f5a88c16a7a2132cd69779d44c0")
        .setDescription("Eichelb4rt")
        .addField('Position','Runner',true)
        .addField('Clan','Pyrateers',true)
        message.channel.send(embed)
    }
    })





//////////////////////////////////////////////

   client.on('message', message => {
      if (message.content === '<@484482242949939221>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------SHADOW------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Brynn.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })

                             client.on('message', message => {
  if (message.content === "p <@484482242949939221>" ) {
 
      const embed = new RichEmbed()
      .setTitle("Name")
      .setColor(0x0000ff)
      .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/9/9d/SkinIcon_Brynn_Metadev.png/150px-SkinIcon_Brynn_Metadev.png?version=26e9fb7150eb2cb3cb0c5edc7bb6c3b8")
      .setDescription("Shadow")
      .addField('Position','Runner',true)
      .addField('Clan','Pyrateers',true)

      message.channel.send(embed)
  }
  })

  client.on('message', message => {
    if (message.content === "!ap" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/9/9d/SkinIcon_Brynn_Metadev.png/150px-SkinIcon_Brynn_Metadev.png?version=26e9fb7150eb2cb3cb0c5edc7bb6c3b8")
        .setDescription("Shadow")
        .addField('Position','Runner',true)
        .addField('Clan','Pyrateers',true)
        message.channel.send(embed)
    }
    })

/////////////////////////////////////



   client.on('message', message => {
      if (message.content === '<@321188857359892480>') {
        let embed = new Discord.RichEmbed()
        .setTitle('------------Glaedr------------')
      .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')
      .setColor('#275BF0')
        message.channel.send(embed)

      }
    })

                             client.on('message', message => {
  if (message.content === "p <@321188857359892480>" ) {
 
      const embed = new RichEmbed()
      .setTitle("Name")
      .setColor(0x0000ff)
      .setThumbnail("https://lh3.googleusercontent.com/UoIzDUwX-Mz7Nn2ULldlnfh_bHgJdbsGLoSUaJsmC8vIBp6N7GgxDteYTbTsghY7Mj94ag=s95")
      .setDescription("Glaedr")
      .addField('Position','Defender',true)
      .addField('Clan','Our Style',true)

      message.channel.send(embed)
  }
  })

  client.on('message', message => {
    if (message.content === "!ap" ) {
        const embed = new RichEmbed()
        .setTitle("Name")
        .setColor(0x0000ff)
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/4/4d/SkinIcon_Hattori_CyberNin.png/900px-SkinIcon_Hattori_CyberNin.png?version=6a680ff6213264a195cbdc1a8e5f4ec0")
        .setDescription("Glaedr")
        .addField('Position','Defender',true)
        .addField('Clan','Our Style',true)
        message.channel.send(embed)
    }
    })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === '<@364069557951922176>') {
    let embed = new Discord.RichEmbed()
    .setTitle('------------OTMANEZZA------------')
  .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png')
  .setColor('#275BF0')
    message.channel.send(embed)

  }
})

                         client.on('message', message => {
if (message.content === "p <@364069557951922176>" ) {

  const embed = new RichEmbed()
  .setTitle("Name")
  .setColor(0x0000ff)
  .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/4/4d/SkinIcon_Hattori_CyberNin.png/900px-SkinIcon_Hattori_CyberNin.png?version=6a680ff6213264a195cbdc1a8e5f4ec0")
  .setDescription("otmanezza")
  .addField('Position','Runner',true)
  .addField('Clan','Our Style',true)

  message.channel.send(embed)
}
})

client.on('message', message => {
if (message.content === "!ap" ) {
    const embed = new RichEmbed()
    .setTitle("Name")
    .setColor(0x0000ff)
    .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/a/a8/SkinIcon_Hattori_Classic.png/150px-SkinIcon_Hattori_Classic.png?version=a995a6aa35135e835c144e99e509e1f8")
    .setDescription("otmanezza")
    .addField('Position','Runner',true)
    .addField('Clan','Our Style',true)
    message.channel.send(embed)
}
})



  client.on('message', message => { 
      if (message.content === '<@284987318736257025>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------ERZINOS------------')
        .setImage("https://www.brawlhalla.com/c/uploads/2018/11/Thatch.png") 
        .setColor('#275BF0') 
       message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@284987318736257025>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/2/28/SkinIcon_Thatch_Zombie.png/900px-SkinIcon_Thatch_Zombie.png?version=bc1edd09890581a56b0de04e478a1e90")
        .setDescription("Erzinos")
        .addField('Position','Supporter',true)
        .addField('Clan','La Team Rainbow',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail("https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/2/28/SkinIcon_Thatch_Zombie.png/900px-SkinIcon_Thatch_Zombie.png?version=bc1edd09890581a56b0de04e478a1e90")
        .setDescription("Erzinos")
        .addField('Position','Supporter',true)
        .addField('Clan','La Team Rainbow',true)
       message.channel.send(embed)
    }})


  client.on('message', message => { 
      if (message.content === '<@199353363576389633>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------HELPER------------')
        .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Orion.png') 
        .setColor('#275BF0') 
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@199353363576389633>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/5/54/SkinIcon_Orion_Atomic.png/900px-SkinIcon_Orion_Atomic.png?version=66660fd6fc122674636a4d29ba059464')
        .setDescription('Helper')
        .addField('Position','Supporter',true)
        .addField('Clan','Clansanity',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/5/54/SkinIcon_Orion_Atomic.png/900px-SkinIcon_Orion_Atomic.png?version=66660fd6fc122674636a4d29ba059464')
       .setDescription('Helper')
       .addField('Position','Supporter',true)
        .addField('Clan','Clansanity',true)
        message.channel.send(embed)
    }})


  client.on('message', message => { 
      if (message.content === '<@346343324069920772>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------SENPAI------------')
        .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Scarlet.png') 
        .setColor('#275BF0') 
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@346343324069920772>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/5/55/SkinIcon_Scarlet_BodyArmor.png/900px-SkinIcon_Scarlet_BodyArmor.png?version=c16443c11b6e620300edbef5c253e1c3')
        .setDescription('senpai')
        .addField('Position','Defender',true)
        .addField('Clan','Our Style',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/5/55/SkinIcon_Scarlet_BodyArmor.png/900px-SkinIcon_Scarlet_BodyArmor.png?version=c16443c11b6e620300edbef5c253e1c3')
        .setDescription('senpai')
        .addField('Position','Defender',true)
        .addField('Clan','Our Style',true)
        message.channel.send(embed)
    }})


  client.on('message', message => { 
      if (message.content === '<@322316295943225345>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------LOAY__XDAR------------')
        .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Hattori.png') 
        .setColor('#275BF0') 
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@322316295943225345>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/68/SkinIcon_Hattori_Cat.png/900px-SkinIcon_Hattori_Cat.png?version=3b6ea2b0f3219bf65955076dbddd0c37')
        .setDescription('Loay__xdar')
        .addField('Position','Runner',true)
        .addField('Clan','ps clan',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/6/68/SkinIcon_Hattori_Cat.png/900px-SkinIcon_Hattori_Cat.png?version=3b6ea2b0f3219bf65955076dbddd0c37')
        .setDescription("Loay__xdar")
        .addField('Position','Runner',true)
        .addField('Clan','ps clan',true)
        message.channel.send(embed)
    }})





  client.on('message', message => { 
      if (message.content === '<@560538993058512915>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------SID_GMRツ------------')
        .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Wu-Shang.png') 
        .setColor('#275BF0') 
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@560538993058512915>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/3/3a/SkinIcon_WuShang_Bender.png')
        .setDescription('SID_GMRツ')
        .addField('Position','Runner',true)
        .addField('Clan','PHB',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/3/3a/SkinIcon_WuShang_Bender.png')
        .setDescription('SID_GMRツ')
        .addField('Position','Runner',true)
        .addField('Clan','PHB',true)
        message.channel.send(embed)
    }})



  client.on('message', message => { 
      if (message.content === '<@324504927407833088>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------KLASHMIX470------------')
        .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Wu-Shang.png') 
        .setColor('#275BF0') 
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@324504927407833088>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/3/3a/SkinIcon_WuShang_Bender.png')
        .setDescription('klashmix470')
        .addField('Position','Runner',true)
        .addField('Clan','ps clan',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/3/3a/SkinIcon_WuShang_Bender.png')
        .setDescription('klashmix470')
        .addField('Position','Runner',true)
        .addField('Clan','ps clan',true)
        message.channel.send(embed)
    }})


  client.on('message', message => { 
      if (message.content === '<@456100864738983957>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------CTNS------------')
        .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Ulgrim.png') 
        .setColor('#275BF0') 
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@456100864738983957>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/e/ec/SkinIcon_Ulgrim_Cyber.png/900px-SkinIcon_Ulgrim_Cyber.png?version=94c3566b4f61734b2ce1576fc3747114')
        .setDescription('CTNS')
        .addField('Position','Defender',true)
        .addField('Clan','Our Style',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/e/ec/SkinIcon_Ulgrim_Cyber.png/900px-SkinIcon_Ulgrim_Cyber.png?version=94c3566b4f61734b2ce1576fc3747114')
        .setDescription('CTNS')
        .addField('Position','Defender',true)
        .addField('Clan','Our Style',true)
        message.channel.send(embed)
    }})


  client.on('message', message => { 
      if (message.content === '<@137293311215009793>') { 
       let embed = new Discord.RichEmbed()
        .setTitle('------------MINETURTLE 🐢------------')
        .setImage('https://www.brawlhalla.com/c/uploads/2018/11/Orion.png') 
        .setColor('#275BF0') 
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === 'p <@137293311215009793>' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/03/SkinIcon_Orion_Metadev.png/900px-SkinIcon_Orion_Metadev.png?version=90b528dc03e4cef67421c1299e63732b')
        .setDescription('MineTurtle 🐢')
        .addField('Position','Defender',true)
        .addField('Clan','turtle dislike life',true)
        message.channel.send(embed)
    }})
  client.on('message', message => {
      if (message.content === '!ap' ) {
       const embed = new RichEmbed()
        .setTitle('Name')
        .setColor('0x0000ff')
        .setThumbnail('https://gamepedia.cursecdn.com/brawlhalla_gamepedia/thumb/0/03/SkinIcon_Orion_Metadev.png/900px-SkinIcon_Orion_Metadev.png?version=90b528dc03e4cef67421c1299e63732b')
        .setDescription('MineTurtle 🐢')
        .addField('Position','Defender',true)
        .addField('Clan','turtle dislike life',true)
        message.channel.send(embed)
    }})

//styleandastrusonub13579
/////////////////////////////////////////////////////////////////



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

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////BRAWLBALL ROOMS SHARE ON BB TIME///////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////      BIRTHDAY CODE       /////////////////////////////////////////////////////////////////////////
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
  var text12chennelhaha = client.channels.find(channel => channel.id === '594177565825171457')

  var d = new Date();

  setInterval(() => {
    textchennelhaha.send("Date is "+d.toLocaleDateString())
  }, 7200000);

  
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
////////////////////////////////////////////        ROLES CODE         /////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



client.on('ready' , () => {


let recchannel = client.channels.get("736380370651709531")

  //positins
        let embed = new Discord.RichEmbed()
        .setTitle('These are the positions in Brawlball')
        .setColor('#FF0000')
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

            }).catch(function() {
             
             })})
             /*.then(()=> {
              let embed = new Discord.RichEmbed()
              .setTitle('These are the positions in Brawlball')
              .setColor('#FF0000')
              .setThumbnail('https://i.ibb.co/4tsGqzs/bb.png')
              .setDescription('**React with your position**')
              .addField('**Runner** ',' **🟦**',false)
              .addField("**Supporter** "," **🟨**",false)
              .addField('**Defender** ',' **🟧**',false)
              .addField('**Remove Roles (Just incase)**',' **⬛**',false)
              recchannel.send(embed)
                  .then(function (message) {
                 
                    message.react('🟦')
                 .then(()=> message.react('🟨'))
                 .then(()=> message.react('🟧'))
                 .then(()=> message.react('⬛'))
      
                  }).catch(function() {
                   
                   })})*/
                   /*
             let embed = new Discord.RichEmbed()
             .setTitle('These are the Colors')
             .setColor('#FF0000')
             .setThumbnail('https://i.ibb.co/4tsGqzs/bb.png')
             .setDescription('**React with your Color**')
             .addField('**Blue** ',' **🟦**',false)
             .addField('**Yellow** ',' **🟨**',false)
             .addField('**Orange** ',' **🟧**',false)
             .addField('**Black** ',' **⬛**',false)
             .addField('**Pink** ',' **🦑**',false)
             .addField('**Remove Roles (Just incase)**',' **🚫**',false)
             recchannel.send(embed)
                 .then(function (message) {
                
                   message.react('🟦')
                   .then(()=> message.react('🟨'))
                   .then(()=> message.react('🟧'))
                   .then(()=> message.react('⬛'))
                   .then(()=> message.react('🦑'))
                   .then(()=> message.react('🚫'))
     
                 }).catch(function() {
                  
                  })*/

    


 
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
      else { member.addRole('736222790516211723')}
       })
      }}});


      client.on('messageReactionAdd', (messageReaction, user) => {
        //Supporter
        
          const { message, emoji } = messageReaction;
          if(message.channel.id == '736380370651709531'){
          if(emoji.name == '🦈') {
    
           message.guild.fetchMember(user.id).then(member => {
            if(user.bot)  return;
          else { member.addRole('736222933827190835')}
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
              else { member.addRole('736222973140402246')}
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

                      /////////////////////////////////////////////////////////////////////////////////

                      //////////////////////////////////////    COLOR ADD REACT    ///////////////////////////////////////////
                      
                      ////////////////////////////////////////////////////////////////////////////////

                      client.on('messageReactionAdd', (messageReaction, user) => {

                        //blue
                        
                          const { message, emoji } = messageReaction;
                          if(message.channel.id == '736380370651709531'){
                          if(emoji.name == '🟦') {
                    
                           message.guild.fetchMember(user.id).then(member => {
                            if(user.bot)  return;
                          else { member.addRole('615317792677298192')}
                           })
                          }}});
                    
                    
                          client.on('messageReactionAdd', (messageReaction, user) => {
                            //yellow
                            
                              const { message, emoji } = messageReaction;
                              if(message.channel.id == '736380370651709531'){
                              if(emoji.name == '🟨') {
                        
                               message.guild.fetchMember(user.id).then(member => {
                                if(user.bot)  return;
                              else { member.addRole('615317793159512074')}
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
                                  else { member.addRole('615317792756858895')}
                                   })
                                  }}});
                    


                                  client.on('messageReactionAdd', (messageReaction, user) => {
                                    //black
                        
                                      const { message, emoji } = messageReaction;
                                      if(message.channel.id == '736380370651709531'){
                                      if(emoji.name == '⬛') {
                                
                                       message.guild.fetchMember(user.id).then(member => {
                                        if(user.bot)  return;
                                      else { member.addRole('615317792664715306')}
                                       })
                                      }}});



                                      client.on('messageReactionAdd', (messageReaction, user) => {
                                        //pink
                            
                                          const { message, emoji } = messageReaction;
                                          if(message.channel.id == '736380370651709531'){
                                          if(emoji.name == '🦑') {
                                    
                                           message.guild.fetchMember(user.id).then(member => {
                                            if(user.bot)  return;
                                          else { member.addRole('615317792723304488')}
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
