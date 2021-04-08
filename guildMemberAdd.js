const discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const {
    Permissions: { FLAGS },
  } = require("discord.js")
const bot = require('./bot')
module.exports = (client, guild) => {
        const infochannelid = ""
        client.on('guildMemberAdd', (member) => {
            const embed = new MessageEmbed()
            .setTitle('❗ Wykryto nowego użytkownika ❗')
            .setColor(`RANDOM`)
            .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nazwa: ",
                    value: member.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Tag: ",
                    value: `#${member.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: member.user.id,
                },
                {
                    name: 'Konto utworzono: ',
                    value: member.user.createdAt.toLocaleDateString("pl-pl"),
                    inline: true
                },
                {
                    name: 'Dołączono na serwer: ',
                    value: member.joinedAt.toLocaleDateString("pl-pl"),
                    inline: true
                },
            )
            .setFooter('Wiadomość została wygenerowana automatycznie. Nie odpowiadaj na tą wiadomość')
            client.channels.cache.get('829721484703956992').send(embed)
        });
};