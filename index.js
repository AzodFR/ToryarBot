const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
     if (message.content === "/toryar"){
        message.channel.send("Tiens ton serveur ! <@351333156403675137>")
     }
 



});



bot.login(process.env.BOT_TOKEN)
