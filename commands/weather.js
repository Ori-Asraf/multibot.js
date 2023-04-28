module.exports = {
  name: "weather",
  description: "Returns weather information about your region.",
  async execute(client, message, args, Discord, pref, db) {
    const setupmissing = new Discord.MessageEmbed()
    setupmissing.setColor("#FF2800")
    setupmissing.setAuthor(pref.name + " | Weather Module", pref.img)
    setupmissing.setDescription(
      `You must setup the weather module. \n Use the command : \`${pref.prefix}setup weather\``
    )
    setupmissing.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
    setupmissing.setTimestamp()
    db.query(`SELECT weatherapi FROM apikeys`, function (err, result) {
      if (err) {
        return console.log(err.code)
      }
      if (result) {
        var T8AWDeaLTPoR5 = result[0].weatherapi
        db.query(`SELECT * FROM setup`, function (error, results) {
          if (error) {
            return console.log(error.code)
          }
          if (results) {
            if (results[0].weather == 0) {
              message.channel.send(setupmissing)
            } else {
              const req = require("request")
              const url = `http://api.weatherapi.com/v1/current.json?key=${T8AWDeaLTPoR5} &q=${args[0]}&aqi=no`
              req(url, (a, b, c) => {
                const weather = JSON.parse(c)
                var currectday
                var temp_emoji
                const apierror = new Discord.MessageEmbed()
                apierror.setColor("#FF2800")
                apierror.setAuthor(pref.name + " | Weather Module", pref.img)
                apierror.setDescription(`Error while initializing API key.`)
                apierror.setFooter(
                  `Copyright by Ori.#0069 | All Rights Reserved.`
                )
                apierror.setTimestamp()
                const unknownargs = new Discord.MessageEmbed()
                unknownargs.setColor("#FF2800")
                unknownargs.setAuthor(pref.name + " | Weather Module", pref.img)
                unknownargs.setDescription(
                  `No region specified or the region does not exists. \n Try type something like **Jerusalem**.`
                )
                unknownargs.setFooter(
                  `Copyright by Ori.#0069 | All Rights Reserved.`
                )
                unknownargs.setTimestamp()
                const unknowncountry = new Discord.MessageEmbed()
                unknowncountry.setColor("#FF2800")
                unknowncountry.setAuthor(
                  pref.name + " | Weather Module",
                  pref.img
                )
                unknowncountry.setDescription(`This Region don't even exists.`)
                unknowncountry.setFooter(
                  `Copyright by Ori.#0069 | All Rights Reserved.`
                )
                unknowncountry.setTimestamp()
                if (weather.error) {
                  if (weather.error.code == "2006")
                    return message.channel.send(apierror)
                  if (weather.error.code == "1006")
                    return message.channel.send(unknownargs)
                }
                if (weather.location.country == "Palestine")
                  return message.channel.send(unknowncountry)
                if (weather.current.is_day == 0) {
                  currectday = "Sunday"
                }
                if (weather.current.is_day == 1) {
                  currectday = "Monday"
                }
                if (weather.current.is_day == 2) {
                  currectday = "Tuesday"
                }
                if (weather.current.is_day == 3) {
                  currectday = "Wednesday"
                }
                if (weather.current.is_day == 4) {
                  currectday = "Thursday"
                }
                if (weather.current.is_day == 5) {
                  currectday = "Friday"
                }
                if (weather.current.is_day == 6) {
                  currectday = "Saturday"
                }
                if (weather.current.temp_c >= 30.0) {
                  temp_emoji = "☀️"
                }
                if (weather.current.temp_c <= 17.0) {
                  temp_emoji = "❄️"
                }
                if (
                  weather.current.temp_c >= 17.0 &&
                  weather.current.temp_c <= 30.0
                ) {
                  temp_emoji = "💨"
                }
                const embed = new Discord.MessageEmbed()
                embed.setColor(pref.colors)
                embed.setAuthor(pref.name + ` | Weather Module`, pref.img)
                embed.setThumbnail("https:" + weather.current.condition.icon)
                embed.setDescription(`
                            \n **\`🧭\` Location :** ${weather.location.name} 
                            **\`🗺️\` Region :** ${weather.location.region}
                            **\`🌍\` State :** ${weather.location.country}
                            \n **\`⏰\` Time :** ${weather.location.localtime} 
                            **\`📆\` Day  :** ${currectday} 
                            \n **\`☁️\` Condition :** ${weather.current.condition.text} 
                            **\`${temp_emoji}\` Temperature :** ${weather.current.temp_c} °C 
                            `)
                embed.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
                embed.setTimestamp()
                message.channel.send(embed)
              })
            }
          }
        })
      }
    })
  },
}
