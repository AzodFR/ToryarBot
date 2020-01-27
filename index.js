const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setStatus('Tenez BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    if(message.guild != null){
        var log = message.guild.members.find(member => member.id === '640975902250893329');
        var date = new Date(message.createdTimestamp+3600e3);
        var jour = date.getDate();
        var mois = date.getMonth()+1;

        var annee = date.getFullYear();
        var heure = date.toTimeString().replace('GMT+0000 (Coordinated Universal Time)', '');
        var msg = ' '+' le '+jour+'/'+mois+'/'+annee+' à '+heure;
        if (message.content === "/toryar"){
            message.delete()
            message.channel.send("Tiens ton serveur ! <@351333156403675137>")
            log.send('Toryar: '+ message.author.username+msg);
        }
        else if (message.content === "/coco"){
            message.delete()
            message.channel.send("Tiens ton tps ! <@192635336462041089>")
            log.send('Coco: '+ message.author.username+msg);
     }
        else if (message.content === "/azod"){
            message.delete()
            message.channel.send("Tiens tes conventions ! <@209392112914006016>")
            log.send('Azod: '+ message.author.username+msg);
        }
    else if (message.content === "/p2"){
            message.delete()
            message.channel.send("Tiens tes perms ! <@349283894836592641>")
            log.send('P2M2A: '+ message.author.username+msg);
        }
    else if (message.content === "/alex"){
            message.delete()
            message.channel.send("Tiens ton grade Fondateur ! <@196589708820742144>")
            log.send('Alex: '+ message.author.username+msg);
        }
    else if (message.content === "/couz"){
            message.delete()
            message.channel.send("Tiens ton KEEEEEEEK ! <@315583387698069506>")
            log.send('Couz: '+ message.author.username+msg);
        }
    else if (message.content === "/croix"){
            message.delete()
            message.channel.send("Tiens ton KEEEEEEEK ! <@314485747627458562>")
            log.send('Croix: '+ message.author.username+msg);
        }
    else if (message.content === "/lima"){
            message.delete()
            message.channel.send("Tiens tes stagiaires ! <@374188696758517763>")
            log.send('Lima: '+ message.author.username+msg);
        }
    else if (message.content === "/haru"){
            message.delete()
            message.channel.send("Tiens ton zoulou ! <@322327762813714434>")
            log.send('Haru: '+ message.author.username+msg);
        }
    else if (message.content === "/nyla"){
            message.delete()
            message.channel.send("Tiens tes traductions ! <@671281925792464897>")
            log.send('Nyla: '+ message.author.username+msg);
        }
    }


});



bot.login(process.env.BOT_TOKEN)
