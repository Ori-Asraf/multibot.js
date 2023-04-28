module.exports = {
  name: "uptime",
  description: "Returns the correct Application Uptime.",
  async execute(client, message, args, Discord, pref) {
    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60
    const embed = new Discord.MessageEmbed()
    embed.setColor(pref.colors)
    embed.setAuthor(pref.name + ` | Uptime Module`, pref.img)
    embed.setThumbnail(pref.img)
    embed.setDescription(
      `Correct Uptime \n\`\`\`Days:${days} Hours:${hours} Minutes:${minutes} Seconds:${seconds}\`\`\``
    )
    embed.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
    embed.setTimestamp()
    //if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<@${message.author.id}> Access Denied for this command!`);
    message.channel.send(embed)
  },
}
