/**
 * Your slackbot token is available as the global variable:

process.env.SLACKBOT_TOKEN

 * When deployed to now.sh, the URL of your application is available as the
 * global variable:

process.env.NOW_URL

 * The URL is useful for advanced use cases such as setting up an Outgoing
 * webhook:
 * https://github.com/howdyai/botkit/blob/master/readme-slack.md#outgoing-webhooks-and-slash-commands
 *
 */
var Botkit = require('botkit');
var os = require('os');
var controller = Botkit.slackbot();

var bot = controller.spawn({
  token: process.env.SLACKBOT_TOKEN
});

bot.startRTM(function(error, whichBot, payload) {
  if (error) {
    throw new Error('Could not connect to Slack');
  }
});

bot.api.channels.list({'exclude_archived' : 1}, function (err, res) {  
    console.log(res);
});

controller.hears(['hello'], ['mention'], function(whichBot, message) {
  whichBot.reply(message, 'Did you say my name?');
});

controller.hears(['.'], ['direct_mention'], function(whichBot, message) {
  whichBot.reply(message, 'How can I help?');
});

controller.on('slash_command',function(bot, message) {
    whichBot.replyPublic(message,'Everyone can see this part of the slash command');
    whichBot.replyPrivate(message,'Only the person who used the slash command can see this.');
});

controller.hears(['pizzatime'], ['mention'], function(bot,message) {
    askFlavor = function(response, convo) {
      convo.ask('What flavor of pizza do you want?', function(response, convo) {
        convo.say('Awesome.');
        askSize(response, convo);
        convo.next();
      });
    }
    askSize = function(response, convo) {
      convo.ask('What size do you want?', function(response, convo) {          
          var re = new RegExp(/(large)|(extra-large)|(medium)|(small)/);
          if(re.exec(response.text)){
            convo.say('Ok. ' + response.text);
            askWhereDeliver(response, convo);
            convo.next();
          }else{
              convo.say('Hmmm we dont have that... choose between large, extra-large, medium, small');
              askSize(response, convo);
              convo.next();
          }
      });
    }
    askWhereDeliver = function(response, convo) {
      convo.ask('So where do you want it delivered?', function(response, convo) {
        convo.say('Ok! Good bye.');
        convo.next();
      });
    }

    bot.startConversation(message, askFlavor);
});

controller.hears(['what is my name', 'who am i'], 'direct_message,direct_mention,mention', function(bot, message) {
    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Your name is ' + user.name);
        }else{
            bot.startConversation(message, function(err, convo) {
                if (!err) {
                    convo.say('I do not know your name yet!');
                }
            });
        }
    });
});

controller.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'],
    'direct_message,direct_mention,mention', function(bot, message) {

        var hostname = os.hostname();
        var uptime = formatUptime(process.uptime());

        bot.reply(message,
            ':robot_face: I am a bot named <@' + bot.identity.name +
             '>. I have been running for ' + uptime + ' on ' + hostname + '.');

    });
    
function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}


