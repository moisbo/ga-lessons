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
var controller = Botkit.slackbot();

var bot = controller.spawn({
  token: process.env.SLACKBOT_TOKEN
});

bot.startRTM(function(error, whichBot, payload) {
  if (error) {
    throw new Error('Could not connect to Slack');
  }
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
          console.log(response.text);
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