var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    copier=0
    logger.info(copier)    
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    var args = message.substring(0).split('-');
    var cmd = args[0];
    var cmd2 = message.substring(0).split(' ');
    var cmd3 = cmd.toLowerCase();
    nfind=cmd3.search("nigger");
            if (nfind>-1){
              bot.sendMessage({
              to: channelID,
              message: 'YOU SAID THE N-WORD'
        });
           }
            if (copier==1){
              bot.sendMessage({
              to: '357219373187989504',
              message: cmd
       });
       copier=0
       }
    switch(cmd) {
            // !ping
        case 'hey':
            bot.sendMessage({
                to: channelID,
                message: 'ho'
	});
        break;
            // !ping
        case 'let\'s':
            bot.sendMessage({
                to: channelID,
                message: 'go'
	});
        break;
        case 'he\'s my friend he\'s my alibi':
            bot.sendMessage({
                to: channelID,
                message: 'MY ACCESSORY TO THE CRIME'
	});
        break;
        case 'what is josh?':
            bot.sendMessage({
                to: channelID,
                message: 'a huge faggot'
	});
        break;
	case 'what channel is this?':
            bot.sendMessage({
                to: channelID,
                message: 'This is ' + channelID
	});
        break;
	case 'copy':
            copier=1
        break;
        case 'LOL':
            bot.sendMessage({
                to: channelID,
                message: ':joy: :joy: :joy: :joy: :ok_hand: :ok_hand:'
        });
        break;
        case 'Goodnight, Shitbot':
            exit()
        break;
            // Just add any case commands if you want to..
         }
    switch(cmd2[0]) {
        case 'count':
	    y=''
            for(x = 1; x < cmd2[2]; x++){
            y=y+x + ', '
        }
            y=y+x
            bot.sendMessage({
            to: channelID,
            message: y
	});
        break;
         }
     });