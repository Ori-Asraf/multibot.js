module.exports = (client, Discord, Pref, db) => {
  const fs = require("fs")
  const ConTheme = require("colors")
  console.log(
    ConTheme.white.bold("[System] ") +
      ConTheme.gray.bold(`command_handler.js`) +
      ConTheme.green(" successfully Loaded")
  )
  const cmdfiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"))
  for (const file of cmdfiles) {
    const cmd = require(`../commands/${file}`)
    setTimeout(function () {
      console.log(
        ConTheme.white.bold("[System] ") +
          ConTheme.gray.bold(`${file} (cmd)`) +
          ConTheme.green(" successfully Loaded")
      )
    }, 10)
    if (cmd.name) {
      client.commands.set(cmd.name, cmd)
    } else {
      continue
    }
  }
}
