const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
   if (message.channel.id === "614477179853733918"){
     if (message.content === "/toryar"){
        message.channel.send("Tiens ton serveur !")
     }
 }



});



bot.login(process.env.BOT_TOKEN)
