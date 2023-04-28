module.exports = (client, Discord, Pref) => {
  const ConTheme = require("colors")
  console.log(
    ConTheme.white.bold("[Process]") +
      ConTheme.green(" Application Online ") +
      ConTheme.cyan("(" + client.user.tag + ")")
  )
}
