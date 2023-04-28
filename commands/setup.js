module.exports = {
  name: "setup",
  description: "Setup the API for weather command.",
  async execute(client, message, args, Discord, pref, db) {
    db.query(`SELECT weatherapi FROM apikeys`, function (error, results) {
      if (args[0] == "weather") {
        if (!args[1]) {
          const errorsetup = new Discord.MessageEmbed()
          errorsetup.setColor("ff0000")
          errorsetup.setAuthor(pref.name + " | Weather Setup", pref.img)
          errorsetup.setDescription(
            `**You must have a API key in command args.** \n\n[Get an API Key by Clicking Here](https://www.weatherapi.com/)\n\n Command Usage : \`${pref.prefix}weather-setup (API key)\``
          )
          errorsetup.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
          errorsetup.setTimestamp()
          message.channel.send(errorsetup)
        } else {
          const setup = new Discord.MessageEmbed()
          setup.setColor(pref.colors)
          setup.setAuthor(pref.name + " | Weather Setup", pref.img)
          setup.setDescription(
            `**Weather Setup has been Completed!** \n in case of API key Change you can redo the command.`
          )
          setup.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
          setup.setTimestamp()
          db.query("UPDATE apikeys SET weatherapi='" + args[1] + "'", (err) => {
            if (err) {
              console.error(err.message)
            } else {
              db.query("UPDATE setup SET weather=1", (err) => {
                if (err) {
                  console.error(err.message)
                } else {
                  message.delete()
                  message.channel.send(setup).then((msg) => {
                    msg.delete({ timeout: 5000 })
                  })
                }
              })
            }
          })
        }
      } else {
        const unknownargs = new Discord.MessageEmbed()
        unknownargs.setColor("#FF2800")
        unknownargs.setAuthor(pref.name + " | Setup Module", pref.img)
        unknownargs.setDescription(
          `Error while choosing Setup type. \n Try type a valid Setup type in args.`
        )
        unknownargs.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
        unknownargs.setTimestamp()
        message.channel.send(unknownargs)
      }
    })
  },
}
