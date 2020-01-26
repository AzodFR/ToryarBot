const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setStatus('Tenez BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
     if (message.content === "/toryar"){
        message.delete()
        message.channel.send("Tiens ton serveur ! <@351333156403675137>")
        console.log('Toryar: '+ message.author.username);
     }
    else if (message.content === "/coco"){
        message.delete()
        message.channel.send("Tiens ton tps ! <@192635336462041089>")
        console.log('Coco: '+ message.author.username);
     }
    else if (message.content === "/azod"){
        message.delete()
        message.channel.send("Tiens ton bot ! <@209392112914006016>")
        console.log('Azod: '+ message.author.username);
     }
   else if (message.content === "/p2"){
        message.delete()
        message.channel.send("Tiens tes perms ! <@349283894836592641>")
        console.log('P2M2A: '+ message.author.username);
     }
   else if (message.content === "/alex"){
        message.delete()
        message.channel.send("Tiens ton grade Fondateur ! <@196589708820742144>")
        console.log('Alex: '+ message.author.username);
     }
   else if (message.content === "/couz"){
        message.delete()
        message.channel.send("Tiens ton KEEEEEEEK ! <@315583387698069506>")
        console.log('Couz: '+ message.author.username);
     }
   else if (message.content === "/croix"){
        message.delete()
        message.channel.send("Tiens ton KEEEEEEEK ! <@315583387698069506>")
        console.log('Croix: '+ message.author.username);
     }
    else if (message.content === "/lima"){
        message.delete()
        message.channel.send("Tiens tes stagiaires ! <@374188696758517763>")
        console.log('Lima: '+ message.author.username);
     }
    else if (message.content === "/haru"){
        message.delete()
        message.channel.send("Tiens ton zoulou ! <@322327762813714434>")
        console.log('Haru: '+ message.author.username);
     }


});



bot.login(process.env.BOT_TOKEN)
