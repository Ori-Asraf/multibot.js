module.exports = (client, Discord, Pref, db) => {
  const fs = require("fs")
  const ConTheme = require("colors")
  console.log(
    ConTheme.white.bold("[System] ") +
      ConTheme.gray.bold(`event_handler.js`) +
      ConTheme.green(" successfully Loaded")
  )
  const loaddir = (dirs) => {
    const eventfiles = fs
      .readdirSync(`./events/${dirs}`)
      .filter((file) => file.endsWith(".js"))
    for (const file of eventfiles) {
      const event = require(`../events/${dirs}/${file}`)
      const eventname = file.split(".")[0]
      client.on(eventname, event.bind(null, client, Discord, Pref, db))
      setTimeout(function () {
        console.log(
          ConTheme.white.bold("[System] ") +
            ConTheme.gray.bold(`${file} (Event)`) +
            ConTheme.green(" successfully Loaded")
        )
      }, 1)
    }
  }
  ;["client", "guild"].forEach((e) => loaddir(e))
}
