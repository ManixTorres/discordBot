import discord
import os
import time
import asyncio
import random

client = discord.Client()

iffy_words = ["iffy words"]
responses = ["Not today", "oh no", "repent"]
bad_words = ["bad" "cry"]
bad_words_response = ["please behave"]


# Startup Information
@client.event
async def on_ready():
    await client.change_presence(activity = discord.Game('Zenonia 2'))
    
    print('Connected to bot: {}'.format(client.user.name))
    print('Bot ID: {}'.format(client.user.id))
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):

    if message.content == "hello mia":
        await message.send("Good Evening")

    if message.content == "well met": 
        await message.send("ah, well met good sir")
          
    if message.content == "hi mia":
        embed = discord.Embed(title="LET IT STOP", description="Some useful commands")
        embed.add_field(name ="Need some help?", value="help mia")
        embed.add_field(name ="I have no useful commands", value="repent, for the kingdom of God is near")
        await message.send(content=None, embed=embed)
    
    if message.content == bad_words:
        print("a bad word was said")
        await message.send(random.choice(bad_words_response))
        await message.channel.delete()
    
    if message.content == iffy_words:
        await message.send(random.choice(responses))    
                
