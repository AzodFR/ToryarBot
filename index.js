const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setStatus('Tenez BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    const log = message.guild.members.find(member => member.id === '640975902250893329');
    
     if (message.content === "/toryar"){
        message.delete()
        message.channel.send("Tiens ton serveur ! <@351333156403675137>")
        log.createDM().send('Toryar: '+ message.author.username+' '+message.createdAt);
     }
    else if (message.content === "/coco"){
        message.delete()
        message.channel.send("Tiens ton tps ! <@192635336462041089>")
        log.createDM().send('Coco: '+ message.author.username+' '+message.createdAt);
     }
    else if (message.content === "/azod"){
        message.delete()
        message.channel.send("Tiens ton bot ! <@209392112914006016>")
        log.createDM().send('Azod: '+ message.author.username+' '+message.createdAt);
     }
   else if (message.content === "/p2"){
        message.delete()
        message.channel.send("Tiens tes perms ! <@349283894836592641>")
        log.createDM().send('P2M2A: '+ message.author.username+' '+message.createdAt);
     }
   else if (message.content === "/alex"){
        message.delete()
        message.channel.send("Tiens ton grade Fondateur ! <@196589708820742144>")
        log.createDM().send('Alex: '+ message.author.username+' '+message.createdAt);
     }
   else if (message.content === "/couz"){
        message.delete()
        message.channel.send("Tiens ton KEEEEEEEK ! <@315583387698069506>")
        log.createDM().send('Couz: '+ message.author.username+' '+message.createdAt);
     }
   else if (message.content === "/croix"){
        message.delete()
        message.channel.send("Tiens ton KEEEEEEEK ! <@314485747627458562>")
        log.createDM().send('Croix: '+ message.author.username+' '+message.createdAt);
     }
    else if (message.content === "/lima"){
        message.delete()
        message.channel.send("Tiens tes stagiaires ! <@374188696758517763>")
        log.createDM().send('Lima: '+ message.author.username+' '+message.createdAt);
     }
    else if (message.content === "/haru"){
        message.delete()
        message.channel.send("Tiens ton zoulou ! <@322327762813714434>")
        log.createDM().send('Haru: '+ message.author.username+' '+message.createdAt);
     }


});



bot.login(process.env.BOT_TOKEN)
