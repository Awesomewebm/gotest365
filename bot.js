const {Client, Attachment} = require("discord.js")
const disco = require("discord.js")
const bot = new Client();
const config = require("./config.json");
const wembed = require("./welcomeembed.json");
const cmdembed = require("./cmdembed.json");
const inviteembed = require("./inviteembed.json")
const embed1 = require("./embed1.json")
const embed2 = require("./embed2.json")
const embed3 = require("./embed3.json")
const modembed = require("./moderation.json")
const rulesembed = require("./rules1.json")
const http = require("http");
const express = require('express');
var bodyParser = require('body-parser');
const https = require('https');
const app = express();
const fetchJson = require('fetch-json');
const myCenter = require("mycenter_darkbright_node")("mcv5_group_bot:418c88eb-a7ea-40a6-86b3-c4357940077104c620a5-3a00-4290-81df-a2b2c0d14e1fc4bf2b92-5bae-40f3-9c3e-869aa0140474b2d66876-5685-4d75-b76c-4d818d04a8271b58aabb-b907-4d1d-aaa4-4b1f5efc5395", mc =>{

//mc.shout("test")
    //mc.exile(userId)
    //mc.rank(userId, rankId)
    //mc.ranktoid_bg(userId, rankId)
    //mc.getjoinrequests()
    //mc.acceptjoinrequest(userId)
    //mc.declinejoinrequest(userId)
});
const token = ' ';
const prefix = '?';

var version = '1.0.0'

bot.on('ready', () =>{
    console.log('Studio Bot is online. Yeet!')
    bot.user.setActivity('our games be a symbol of awesomeness 😎', {type: 'WATCHING'}).catch(console.error);
})

bot.on('message', message=>{

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "avatar") {
    var user = message.mentions.users.first();
    if (user)
    message.channel.send(`**${user.username}**'s Avatar is: ${user.avatarURL}`)
        else
         message.channel.send('```?avatar [@user] | Permissions: None```')
    } else
        
    if(command === "ping") {
      message.channel.send("pong!");
    } else
      if(command === "exile") {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: Insufficent Permissions. `Ban Members` is required to execute this command')
        let [id] = args
        if(!id) return message.channel.send('You must specify a user ID to exile')
        myCenter.exile(id)
      message.channel.send("User has been Exiled");
    } else
      
      if(command === "rank") {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(':x: Insufficent Permissions. `Manage Roles` is required to execute this command')
        let [id, rank] = args
        
        //if(!id) return message.channel.send('You must specify a user ID to exile')
        myCenter.rank(id, rank)
        //myCenter.exile().catch(console.error);
      message.channel.send("User Promoted");
    } else
     if(command === "mute") {
            let reason = args.slice(1).join(" ");
         
         const user = message.mentions.users.first()
         const member = message.mentions.members.first()
      // Give a role to a member
         if (!message.member.hasPermission("MANAGE_ROLES") || !message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':x: Insufficent Permissions. `Manage Roles` or `Kick Members` is required to execute this command')
         
         if(message.mentions.members.first() === message.author) return message.channel.send(':x: You cannot mute yourself, if you do not wanna talk, then just shut up.')
         
         const role = message.guild.roles.find("name", "Muted");

         if (!role) return message.channel.send('I could find a role named **Muted** in this server')
         
         
        if (user)
         
             
        if (args[2]) {
         message.mentions.members.first().addRole(role, `${message.author.tag}: ${reason}`).then(console.log).catch(console.error);
         
         message.channel.send(`Successfully Muted **${user.tag}**`)
          } else{
         message.mentions.members.first().addRole(role, `${message.author.tag}: [unknown reason]`).then(console.log).catch(console.error);
         
         message.channel.send(`Successfully Muted **${user.tag}**`)
          } else {
         message.reply('```?mute [@user] [reason]```')
         message.channel.send('A role named **Muted** is required for this to work')
     }
    } else
    if(command === "cmds") {
        message.channel.send(cmdembed);
    } else
      
      if(command === "getuser") {
        let [userID]= args;
        if(!userID) return message.channel.send("No UserID was specified")
        const url = 'https://verify.eryn.io/api/user/' + userID;
        const params = {};
        const handleData = (data) =>
         //console.log('The NASA APoD for today is at: ' + data.robloxUsername);
        message.channel.send(`Username: **${data.robloxUsername}** ID: **${data.robloxId}**`)
          fetchJson.get(url, params).then(handleData);
        
        } else
      
      if(command === "embed1") {
        message.channel.send(embed1);
    } else
    if(command === "embed2") {
        message.channel.send(embed2);
    } else
      if(command === "embed3") {
        message.channel.send(embed3);
    } else
      if(command === "rules1") {
        message.channel.send(rulesembed);
    } else
      if(command === "modembed") {
        message.channel.send(modembed);
    } else
    if(command === "website") {
        message.channel.send('https://awesomewebm.org/o/projects/discordbots');
    } else
    if(command === "invite") {
        message.channel.send(inviteembed);
    } else
    if(command === "testing123") {
      const exampleEmbed = new disco.MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Error')
	.setDescription(':x: An error occured!')
	//.setTimestamp()
	//.setFooter('GoTest RoVer');

  message.channel.send(exampleEmbed);
    } else
    if(command === "info") {
        let query = args[0]
        if(query === 'version')
        message.channel.send('Beta 0.3')
        else if(query === 'developer')
         message.channel.send('Developed by Awesomewebm')
        else
        message.channel.send(`
**Avaliable Parameters:**
version
developer`);
    } else
    if(command === "clear") {
        let numbmsg = args[0]
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(':x: Insufficent Permissions. `Manage Messages` is required to execute this command')
        if(!numbmsg) return message.reply('```?clear [#msgs]```')
            if (numbmsg > 100) return message.reply('I can only delete 100 messages at a time')
            message.channel.bulkDelete(numbmsg);
            message.channel.send(`Successfully deleted ${numbmsg} messages`)
    } else
    if(command === "help") {
        let cmd = args[0]
        if(cmd === 'clear')
            message.channel.send('```<clear [#msgs] | Permissions: Manage Messages```')
        else if (cmd === 'kick')
             message.channel.send('```<kick [@user] [reason] | Permissions: Kick Members```')
             else if (cmd === 'ban')
             message.channel.send('```<ban [@user] [reason] | Permissions: Ban Members```')
             else if (cmd === 'warn')
             message.channel.send('```<warn [@user] [reason] | Permissions: Kick Members or Manage Messages```')
        
            else
            message.channel.send(wembed);
    } else
    if(command === "kick") {
        let user = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
            if(user){
                const member = message.guild.member(user);

                if(member) {
                    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':x: Insufficent Permissions. `Kick Members` is required to execute this command')
                    if(message.mentions.members.first().tag === message.author) return message.channel.send(':x: You cannot kick yourself, like why would you want to do that.')
                    if (reason) {
                        
                        user.kick(`${message.author.tag}: ${reason}`).then(() =>{
                            message.channel.send(`:white_check_mark: Successfully kicked user, ${message.mentions.members.first().tag}}, from the server`)
                            }).catch(err =>{
                                message.channel.send(`Unable to kick, ${message.mentions.members.first().tag}}`)
                                console.log(err)
                            })
                    }
                        else{
                            user.kick(`${message.author.tag}: [ No Reason Specified ]`).then(() =>{
                                message.channel.send(`:white_check_mark: Successfully kicked user ${message.mentions.members.first().tag} from the server`)
                                }).catch(err =>{
                                    message.channel.send(`Unable to kick, ${message.mentions.members.first().tag}`)
                                    console.log(err)
                                })

                        }
                    
                    
                }else{
                    message.reply(`${user.tag} is not in the server`)
                }
            }else{
                message.reply('```?kick [@user] [reason]```')
            };
    } else
    if(command === "ban") {
        let user = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
            if(user){
                const member = message.guild.member(user);

                if(member) {
                    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':x: Insufficent Permissions. `Ban Members` is required to execute this command')
                    if(message.mentions.members.first().tag === message.author) return message.channel.send(':x: You cannot ban yourself, like why would you want to do that.')
                    if (reason) {
                        
                        user.ban(`${message.author.tag}: ${reason}`).then(() =>{
                            message.channel.send(`:white_check_mark: Successfully banned user ${message.mentions.members.first().tag}}, from the server`)
                            }).catch(err =>{
                                message.channel.send(`Unable to ban, ${message.mentions.members.first().tag}}`)
                                console.log(err)
                            })
                    }
                        else{
                            user.ban(`${message.author.tag}: [ No Reason Specified ]`).then(() =>{
                                message.channel.send(`:white_check_mark: Successfully banned user ${message.mentions.members.first().tag} from the server`)
                                }).catch(err =>{
                                    message.channel.send(`Unable to ban, ${message.mentions.members.first().tag}`)
                                    console.log(err)
                                })

                        }
                    
                    
                }else{
                    message.reply(`${user.tag} is not in the server`)
                }
            }else{
                message.reply('```?ban [@user] [reason]```')
            };;
    } else
    if(command === "warn") {
        let wuser = message.mentions.user.first();
        let reason = args.slice(1).join(" ");

            if(wuser){
                const wmember = message.guild.member(wuser);

                if(wmember) {
                    if(!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(':x: Insufficent Permissions. `Kick Members` or `Manage Messages` is required to execute this command')
                    if (args[2]) {
                        wmember.sendMessage(`You have been warned in *${message.guild.name}* for: **${reason}**`).then(() =>{
                            message.channel.send(`:white_check_mark: ${wuser.tag} has been warned`)
                            }).catch(err =>{
                                message.channel.send(`You can make a note that he was warned, I couldn't tell him`)
                                console.log(err)
                            })
                    }
                        else{
                            wmember.sendMessage(`You have been warned in *${message.guild.name}* for: **[unknown reason]**`).then(() =>{
                                message.channel.send(`:white_check_mark: ${wuser.tag} has been warned`)
                                }).catch(err =>{
                                    message.channel.send(`Unable to warn ${wuser.username}`)
                                    console.log(err)
                                })

                        }
                    
                    
                }else{
                    message.reply(`${wuser.tag}, is not in the server`)
                }
            }else{
                message.reply('```?warn [@user] [reason]```')
            };
    } else
  
    if(command === "say") {
        let [messagee] = args
        let messa = args.slice(1).join(" ");
        message.delete()
        message.channel.send(messa)
    }
});

bot.login(process.env.BOT_TOKEN);
