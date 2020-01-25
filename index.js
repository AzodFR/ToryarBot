const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
     if (message.content === "/toryar"){
        message.delete()
        message.channel.send("Tiens ton serveur ! <@351333156403675137>")
        console.log('Toryar ' message.author.username);
     }
    else if (message.content === "/coco"){
        message.delete()
        message.channel.send("Tiens ton tps ! <@192635336462041089>")
        console.log('Coco ' message.author.username);
     }
    else if (message.content === "/azod"){
        message.delete()
        message.channel.send("Tiens ton bot ! <@209392112914006016>")
        console.log('Azod ' message.author.username);
     }
 



});



bot.login(process.env.BOT_TOKEN)
