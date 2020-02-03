const Discord = require('discord.js')
const bot = new Discord.Client()
const noar = new Discord.Collection();
'use strict';
async function doSomethingAsync() {
  var result = await doSomethingElse()
}
bot.on('ready', function(){
    bot.user.setStatus('Tenez BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    msg = message.content
    if(message.guild != null){
        const log = bot.users.get('640975902250893329');
        var date = new Date(message.createdTimestamp+3600e3);
        var jour = date.getDate();
        var mois = date.getMonth()+1;

        var annee = date.getFullYear();
        var heure = date.toTimeString().replace('GMT+0000 (Coordinated Universal Time)', '');
        var msg = ' '+' le '+jour+'/'+mois+'/'+annee+' à '+heure+' sur le channel: '+message.channel.name;
        if (message.content === "/toryar"){
            if(noar.has('351333156403675137')){
                var tag = "Toryar"
            }
            else{
                var tag = "<@351333156403675137>"
            }
            message.delete()
            message.channel.send("Tiens ton serveur ! "+tag)
            log.send('Toryar: '+ message.author.username+msg);
        }
        else if (message.content === "/coco"){
            if(noar.has('192635336462041089')){
                var tag = "Coco"
            }
            else{
                var tag = "<@192635336462041089>"
            }
            message.delete()
            message.channel.send("Tiens ton tps ! "+tag)
            log.send('Coco: '+ message.author.username+msg);
     }
        else if (message.content === "/azod"){
            if(noar.has('209392112914006016')){
                var tag = "Azod"
            }
            else{
                var tag = "<@209392112914006016>"
            }
            message.delete()
            message.channel.send("Tiens tes conventions ! "+tag)
            log.send('Azod: '+ message.author.username+msg);
        }
    else if (message.content === "/p2"){
            if(noar.has('349283894836592641')){
                var tag = "Pierre-Marie"
            }
            else{
                var tag = "<@349283894836592641>"
            }
            message.delete()
            message.channel.send("Tiens tes perms ! "+tag)
            log.send('P2M2A: '+ message.author.username+msg);
        }
    else if (message.content === "/alex"){
        if(noar.has('196589708820742144')){
                var tag = "AlexSex"
            }
            else{
                var tag = "<@196589708820742144>"
            }
            message.delete()
            message.channel.send("Tiens ton grade Fondateur ! "+tag)
            log.send('Alex: '+ message.author.username+msg);
        }
    else if (message.content === "/couz"){
        if(noar.has('315583387698069506')){
                var tag = "Couz"
            }
            else{
                var tag = "<@315583387698069506>"
            }
            message.delete()
            message.channel.send("Tiens ton KEEEEEEEK ! "+tag)
            log.send('Couz: '+ message.author.username+msg);
        }
    else if (message.content === "/croix"){
            if(noar.has('314485747627458562')){
                var tag = "Croix"
            }
            else{
                var tag = "<@314485747627458562>"
            }
            message.delete()
            message.channel.send("Tiens ton KEEEEEEEK ! "+tag)
            log.send('Croix: '+ message.author.username+msg);
        }
    else if (message.content === "/lima"){
          if(noar.has('374188696758517763')){
                var tag = "Limastouille"
            }
            else{
                var tag = "<@374188696758517763>"
            }
            message.delete()
            message.channel.send("Tiens tes stagiaires ! "+tag)
            log.send('Lima: '+ message.author.username+msg);
        }
    else if (message.content === "/haru"){
            if(noar.has('322327762813714434')){
                var tag = "Haru"
            }
            else{
                var tag = "<@322327762813714434>"
            }
            message.delete()
            message.channel.send("Tiens ton zoulou ! "+tag)
            log.send('Haru: '+ message.author.username+msg);
        }
    else if (message.content === "/nyla"){
            if(noar.has('179580558345633792')){
                var tag = "Nyla"
            }
            else{
                var tag = "<@179580558345633792>"
            }
            message.delete()
            message.channel.send("Tiens tes traductions ! "+tag)
            log.send('Nyla: '+ message.author.username+msg);
        }
    else if (message.content === "/clem"){
            if(noar.has('240890972366569472')){
                var tag = "Clem"
            }
            else{
                var tag = "<@240890972366569472>"
            }
            message.delete()
            message.channel.send("Tiens tes mobs ! "+tag)
            log.send('Clem: '+ message.author.username+msg);
        }
    

    else if (message.content === "/notif")
            if(!(noar.has(message.member.id))){
              noar.set(message.member.id);
              message.delete()
              message.channel.send("Vous ne serez plus notifié par l'association <@" + message.member.id+">")
         }
            else{
                noar.delete(message.member.id);
                message.delete()
                message.channel.send("Vous êtes de nouveau notifiable <@" + message.member.id+">")
            }
    }



});
bot.on('message', function(message){
    msg = message.content
  if(msg.startsWith("/clear")){
      const args = message.content.split(' ').slice(1);
      const amount = args.join(' ');
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Vous n'avez pas l'autorisation de faire ça...").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(amount) || parseInt(amount) <= 0) {
            return message.reply("Met un nombre > 0 et pas de lettres").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Il me manque des permissions !").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(amount) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(amount);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(` \`${deleted.size}\`messages supprimés.`))
            .catch(err => message.reply(`Oops... ${err}`));
    }
)}

bot.login(process.env.BOT_TOKEN)
