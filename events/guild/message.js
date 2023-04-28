module.exports = function (client, Discord, Pref, db, message) {
  const Prefix = Pref.prefix
  if (!message.guild.id === Pref.guild) return
  if (!message.content.startsWith(Prefix) || message.author.bot) return
  const args = message.content.slice(Prefix.length).split(/ +/)
  const cmd = args.shift().toLowerCase()
  const command = client.commands.get(cmd)
  if (command) command.execute(client, message, args, Discord, Pref, db)
}
