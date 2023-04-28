module.exports = {
  name: "ping",
  description: "Returns the correct Application Latency.",
  async execute(client, message, args, Discord, pref) {
    const embed = new Discord.MessageEmbed()
    embed.setColor(pref.colors)
    embed.setAuthor(pref.name + ` | Ping Module`, pref.img)
    embed.setThumbnail(pref.img)
    embed.setDescription(
      `Correct Latency \n\`\`\`${Math.round(client.ws.ping)}ms\`\`\``
    )
    embed.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
    embed.setTimestamp()
    //if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<@${message.author.id}> Access Denied for this command!`);
    message.channel.send(embed)
  },
}
