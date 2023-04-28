module.exports = {
  name: "help",
  description: "Displays all available commands.",
  async execute(client, message, args, Discord, pref) {
    if (!args[0]) {
      const noargs = new Discord.MessageEmbed()
      noargs.setColor(pref.colors)
      noargs.setThumbnail(pref.img)
      noargs.setAuthor(pref.name + " | Help Module", pref.img)
      noargs.setDescription(
        `Displays all Command Categories in the Server/Guild.`
      )
      noargs.addFields(
        {
          name: "`(📖) Information`",
          value: `Displays Information Commands by typing \n\`${pref.prefix}help information\``,
          inline: true,
        },
        {
          name: "`(🔨) Moderation`",
          value: `Displays Moderation Commands by typing \n\`${pref.prefix}help moderation\``,
          inline: true,
        },
        {
          name: "`(💡) Others`",
          value: `Displays Moderation Commands by typing \n\`${pref.prefix}help others\``,
          inline: true,
        }
      )
      noargs.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
      noargs.setTimestamp()
      message.channel.send(noargs)
    } else if (args[0] == "information") {
      const infoargs = new Discord.MessageEmbed()
      infoargs.setColor(pref.colors)
      infoargs.setThumbnail(pref.img)
      infoargs.setAuthor(pref.name + " | Help Module", pref.img)
      infoargs.setDescription(
        `Displays all Information Commands in the Server/Guild.`
      )
      infoargs.addFields(
        {
          name: `\`(👥) ${pref.prefix}info guild\``,
          value: `Displays all guild/Server Information.`,
          inline: true,
        },
        {
          name: `\`(👤) ${pref.prefix}info user\``,
          value: `Displays specific user Information.`,
          inline: true,
        },
        {
          name: `\`(🏅) ${pref.prefix}info role\``,
          value: `Displays specific role Information.`,
          inline: true,
        },
        {
          name: `\`(⛅️) ${pref.prefix}weather\``,
          value: `Returns the status of a weather. Usage: \n \`${pref.prefix}weather (loc)\``,
          inline: true,
        },
        {
          name: `\`(🔋) ${pref.prefix}uptime\``,
          value: `Returns the correct Bot Uptime.`,
          inline: true,
        },
        {
          name: `\`(📡) ${pref.prefix}ping\``,
          value: `Returns the correct Bot Ping.`,
          inline: true,
        }
      )
      infoargs.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
      infoargs.setTimestamp()
      message.channel.send(infoargs)
    } else if (args[0] == "info") {
      const infoargs = new Discord.MessageEmbed()
      infoargs.setColor(pref.colors)
      infoargs.setThumbnail(pref.img)
      infoargs.setAuthor(pref.name + " | Help Module", pref.img)
      infoargs.setDescription(
        `Displays all Information Commands in the Server/Guild.`
      )
      infoargs.addFields(
        {
          name: `\`(👥) ${pref.prefix}info guild\``,
          value: `Displays all guild/Server Information.`,
          inline: true,
        },
        {
          name: `\`(👤) ${pref.prefix}info user\``,
          value: `Displays specific user Information.`,
          inline: true,
        },
        {
          name: `\`(🏅) ${pref.prefix}info role\``,
          value: `Displays specific role Information.`,
          inline: true,
        },
        {
          name: `\`(⛅️) ${pref.prefix}weather\``,
          value: `Returns the status of a weather. Usage: \n \`${pref.prefix}weather (loc)\``,
          inline: true,
        },
        {
          name: `\`(🔋) ${pref.prefix}uptime\``,
          value: `Returns the correct Bot Uptime.`,
          inline: true,
        },
        {
          name: `\`(📡) ${pref.prefix}ping\``,
          value: `Returns the correct Bot Ping.`,
          inline: true,
        }
      )
      infoargs.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
      infoargs.setTimestamp()
      message.channel.send(infoargs)
    } else {
      const unknownargs = new Discord.MessageEmbed()
      unknownargs.setColor("#FF2800")
      unknownargs.setAuthor(pref.name + " | Help Module", pref.img)
      unknownargs.setDescription(
        `Error while choosing Commands Category to Display. \n Try type a valid Commands Category in args.`
      )
      unknownargs.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
      unknownargs.setTimestamp()
      message.channel.send(unknownargs)
    }
  },
}
