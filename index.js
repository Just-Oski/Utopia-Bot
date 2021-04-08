const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const guildMemberAdd = require('./guildMemberAdd')

client.config = require('./bot');
client.on('ready', () => {
    guildMemberAdd(client)
    console.log('Ja być gotowy')
    })

client.login(client.config.discord.token);