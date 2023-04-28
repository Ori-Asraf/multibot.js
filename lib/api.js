module.exports = (client, Discord, Pref, db) => {
  const ConTheme = require("colors")
  const errprefix = ConTheme.white.bold("[MariaDB] ")
  const torprefix = ConTheme.white.bold("[System] ")
  console.log(
    ConTheme.white.bold("[System] ") +
      ConTheme.gray.bold(`api.js`) +
      ConTheme.green(" successfully Loaded")
  )
  db.query(`SELECT * FROM apikeys`, function (error, results) {
    if (error && error.code === "ER_NO_SUCH_TABLE") {
      db.query(`CREATE TABLE apikeys(weatherapi varchar(255));`, function () {})
      db.query("Insert into apikeys (weatherapi)VALUES(null)", (err) => {
        if (err) {
          console.error(err.message)
          db.query(`DROP TABLE apikeys;`, function () {})
        }
        setTimeout(function () {
          console.log(
            errprefix +
              ConTheme.green("Successfully Created Table") +
              ConTheme.white(" apikeys \n") +
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
    }
  })
}
