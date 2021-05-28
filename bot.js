const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("Startup Successful");
});
 
//Basic Messages
client.on("message", (message) => {
  if (message.content.startsWith("hi")) {
    message.channel.send("Good day and I wish good health upon you");
  }
  if (message.content.startsWith("Are you seeing this")) {
     message.channel.send("I wish I didn't");
    
  	
 
});
 
client.login("Removed");
