module.exports = (client, Discord, Pref, db) => {
  const ConTheme = require("colors")
  const errprefix = ConTheme.white.bold("[MariaDB] ")
  const torprefix = ConTheme.white.bold("[System] ")
  console.log(
    ConTheme.white.bold("[System] ") +
      ConTheme.gray.bold(`lib.js`) +
      ConTheme.green(" successfully Loaded")
  )
  db.query(`SELECT * FROM setup`, function (error, results) {
    if (error && error.code === "ER_NO_SUCH_TABLE") {
      db.query(
        `CREATE TABLE setup(weather TINYINT(1) NOT NULL DEFAULT(0));`,
        function () {}
      )
      db.query("Insert into setup (weather)VALUES(0)", (err) => {
        if (err) {
          console.error(err.message)
          db.query(`DROP TABLE setup;`, function () {})
        }
        setTimeout(function () {
          console.log(
            errprefix +
              ConTheme.green("Successfully Created Table") +
              ConTheme.white(" setup \n") +
              torprefix +
              ConTheme.red(
                `Bot will Exit in 5 sec! Restart the Process in order to Continue.`
              )
          )
        }, 1000)
        setTimeout(function () {
          process.exit(1)
        }, 5000)
      })
    } else {
      require(`../lib/api.js`)(client, Discord, Pref, db)
    }
  })
}
