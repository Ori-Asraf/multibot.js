module.exports = {
  name: "panel",
  description: "on progress",
  async execute(client, message, args, Discord, pref) {
    require("dotenv")
    const api = process.env.PANEL_API
    const url = process.env.PANEL_URL
    const fetch = require("node-fetch")
    const credentials = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + api,
      },
    }
    const permerr = new Discord.MessageEmbed()
    permerr.setColor("#FF2800")
    permerr.setAuthor(pref.name + " | Access Error", pref.img)
    permerr.setDescription(`${message.author}, Access denied for the Command.`)
    permerr.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
    permerr.setTimestamp()
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(permerr)
    if (args[0] == "list") {
      fetch(url + "/api/application/servers/1", credentials)
        .then((res) => res.json())
        .then((json) => {
          console.log(json.attributes)
          /*json.data.forEach(server => {
                        var owner = JSON.stringify(server.attributes.user)
                        console.log(owner)
                        owner.forEach(owner => {
                            fetch(url+"/api/application/users/"+owner,credentials)
                            .then(res => res.json())
                            .then(json => console.log(json.attributes.email))
                        })
                    });*/
        })
    } else if (args[0] == "search") {
      if (args[1]) {
        fetch(url + "/api/application/users/" + args[1], credentials)
          .then((res) => res.json())
          .then((json) => console.log(json.attributes.email))
      }
    } else {
      const unknownargs = new Discord.MessageEmbed()
      unknownargs.setColor("#FF2800")
      unknownargs.setAuthor(pref.name + " | Panel Module", pref.img)
      unknownargs.setDescription(
        `Error while selecting Command args. \n Try type a valid Command args. \n Possible Args : \`list\``
      )
      unknownargs.setFooter(`Copyright by Ori.#0069 | All Rights Reserved.`)
      unknownargs.setTimestamp()
      message.channel.send(unknownargs)
    }
  },
}
