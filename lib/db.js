require("dotenv").config({ path: "./lib/.env" })
const _Oec5577fP_ = process
const _6PhdNy_ = _Oec5577fP_.env
const _yTL90XY_ = _6PhdNy_.DB_TBDB
const _6eh7o9_ = ":"
const _Csx6B5f_ = _6PhdNy_.DB_PASS
const _2R5G7F_ = "colors"
const _27F_ = "discord.js"
const _2RbypM_ = "@"
const _so01fQI_ = _6PhdNy_.DB_PORT
const _6Ph2dNy_ = _6PhdNy_.DB_USER
const _fkXxB7_ = "mysql"
const _dI14MLn_ = _6PhdNy_.DB_HOST
const _2R5u7F_ = "/"
const _fkXx53B7_ = "readline"
const TJswxnmCXJYK3wJfs3XJgd5bIfC23ajlWZB = require(_fkXxB7_)
const ConTheme = require(_2R5G7F_)
const Discord = require(_27F_)
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
})
const Jb08Idx = require(_fkXx53B7_).createInterface({
  input: process.stdin,
  output: process.stdout,
})
const errprefix = ConTheme.white.bold("[MariaDB] ")
const torprefix = ConTheme.white.bold("[System] ")
const errh = ConTheme.yellow(` (${_dI14MLn_})`)
const errp = ConTheme.yellow(` (${_so01fQI_})`)
const errd = ConTheme.yellow(` (${_yTL90XY_})`)
const errup = ConTheme.yellow(` (Check Username & Password)`)
const vEikf4vDZN93dG8a = TJswxnmCXJYK3wJfs3XJgd5bIfC23ajlWZB.createConnection(
  `${_fkXxB7_}${_6eh7o9_}${_2R5u7F_}${_2R5u7F_}${_6Ph2dNy_}${_6eh7o9_}${_Csx6B5f_}${_2RbypM_}${_dI14MLn_}${_6eh7o9_}${_so01fQI_}${_2R5u7F_}${_yTL90XY_}`
)

var prefix
var name
var img
var guildid
var defcolor
var installdone = false
var mariadb = false
var Pref = {}

client.events = new Discord.Collection()
client.commands = new Discord.Collection()

vEikf4vDZN93dG8a.connect(function (err) {
  if (err) {
    if (err.code == "ENOTFOUND") {
      console.log(
        errprefix + ConTheme.red(`Host is Unknown or not Found.` + errh)
      )
    } else if (err.code == "ECONNREFUSED") {
      console.log(errprefix + ConTheme.red(`Wrong MariaDB server Port.` + errp))
    } else if (err.code == "ER_ACCESS_DENIED_ERROR") {
      console.log(
        errprefix +
          ConTheme.red(`Wrong MariaDB server Username or Password.` + errup)
      )
    } else if (err.code == "ER_DBACCESS_DENIED_ERROR") {
      console.log(
        errprefix + ConTheme.red(`Wrong MariaDB server Database Name.` + errd)
      )
    } else console.log(errprefix + ConTheme.red(err.code))
  } else {
    mariadb = true
    console.log(
      errprefix +
        ConTheme.green("Connection Established with MariaDB server Host.") +
        ConTheme.grey(` (${_dI14MLn_})`)
    )
  }
})

vEikf4vDZN93dG8a.query(`SELECT * FROM credentials`, function (error, result) {
  console.log(
    ConTheme.white.bold("[System] ") +
      ConTheme.gray.bold(`db.js`) +
      ConTheme.green(" successfully Loaded")
  )
  if (error && error.code === "ER_NO_SUCH_TABLE") {
    console.log(
      errprefix +
        ConTheme.white("Creating ") +
        ConTheme.grey("credentials") +
        ConTheme.white(" Database Table")
    )
    setTimeout(function () {
      console.log(
        errprefix +
          ConTheme.white("[") +
          ConTheme.grey("◼️◼️◼️") +
          ConTheme.white("]")
      )
    }, 100)
    setTimeout(function () {
      console.log(
        errprefix +
          ConTheme.white("[") +
          ConTheme.grey("◻️◼️◼️") +
          ConTheme.white("]")
      )
    }, 200)
    setTimeout(function () {
      console.log(
        errprefix +
          ConTheme.white("[") +
          ConTheme.grey("◻️◻️◼️") +
          ConTheme.white("]")
      )
    }, 300)
    setTimeout(function () {
      console.log(
        errprefix +
          ConTheme.white("[") +
          ConTheme.grey("◻️◻️◻️") +
          ConTheme.white("]")
      )
    }, 400)
    setTimeout(function () {
      Jb08Idx.question(
        "Insert Discord Bot Token (Required) : ",
        function (
          oaG3nobzQDzT8AWDeaLTPoR5dmSUuL3Uq8fpLhhsppYBe8E8Agn5Z2aZWbUkyDKwtSdptNvra
        ) {
          vEikf4vDZN93dG8a.query(
            `CREATE TABLE credentials(Token varchar(255));`,
            function () {}
          )
          vEikf4vDZN93dG8a.query(
            `INSERT INTO credentials (Token)VALUES("${oaG3nobzQDzT8AWDeaLTPoR5dmSUuL3Uq8fpLhhsppYBe8E8Agn5Z2aZWbUkyDKwtSdptNvra}");`,
            function (err) {
              if (err) {
                console.error(err.message)
                vEikf4vDZN93dG8a.query(
                  `DROP TABLE credentials;`,
                  function () {}
                )
              }
            }
          )
          Jb08Idx.close(
            console.log(
              errprefix +
                ConTheme.green("Successfully Created Table") +
                ConTheme.white(" credentials ") +
                ConTheme.green("(Token Successfully Inserted)")
            )
          )
          console.log(
            torprefix +
              ConTheme.red(
                `Bot will Exit in 5 sec! Restart the Process in order to Continue.`
              )
          )
          setTimeout(function () {
            process.exit(1)
          }, 5000)
        }
      )
    }, 500)
  } else {
    vEikf4vDZN93dG8a.query(
      `SELECT * FROM preferences`,
      function (error, results) {
        if (error && error.code === "ER_NO_SUCH_TABLE") {
          var prefixp
          var namep
          var urlp
          var defclr
          var guildp
          console.log(
            errprefix +
              ConTheme.white("Creating ") +
              ConTheme.grey("preferences") +
              ConTheme.white(" Database Table")
          )
          setTimeout(function () {
            console.log(
              errprefix +
                ConTheme.white("[") +
                ConTheme.grey("◼️◼️◼️") +
                ConTheme.white("]")
            )
          }, 100)
          setTimeout(function () {
            console.log(
              errprefix +
                ConTheme.white("[") +
                ConTheme.grey("◻️◼️◼️") +
                ConTheme.white("]")
            )
          }, 200)
          setTimeout(function () {
            console.log(
              errprefix +
                ConTheme.white("[") +
                ConTheme.grey("◻️◻️◼️") +
                ConTheme.white("]")
            )
          }, 300)
          setTimeout(function () {
            console.log(
              errprefix +
                ConTheme.white("[") +
                ConTheme.grey("◻️◻️◻️") +
                ConTheme.white("]")
            )
          }, 400)
          setTimeout(function () {
            Jb08Idx.question(
              "Insert Discord Bot Prefix (Examples : ! , ? , - , etc...) : ",
              function (__PREFIX__) {
                prefixp = __PREFIX__
                Jb08Idx.question(
                  "Insert Discord Bot Name (Title of Messages, etc...) : ",
                  function (__NAME__) {
                    namep = __NAME__
                    Jb08Idx.question(
                      "Insert Discord Bot Image URL (Image Link of Messages Logo, etc...) : ",
                      function (__URL__) {
                        urlp = __URL__
                        Jb08Idx.question(
                          "Insert Discord Server/Guild ID (Server ID fot The Bot to use) : ",
                          function (__GUILD__) {
                            guildp = __GUILD__
                            Jb08Idx.question(
                              "Insert Discord Bot Main Color (Examples : #ff0000, #66ccff, etc...) : ",
                              function (__COLOR__) {
                                defclr = __COLOR__
                                setTimeout(function () {
                                  Z7RUQ =
                                    "Insert into preferences ( Prefix ,Name ,Imgurl , Guild , Color) VALUES ('" +
                                    prefixp +
                                    "', '" +
                                    namep +
                                    "', '" +
                                    urlp +
                                    "', '" +
                                    guildp +
                                    "', '" +
                                    defclr +
                                    "')"
                                  vEikf4vDZN93dG8a.query(
                                    `CREATE TABLE preferences(Prefix varchar(255),Name varchar(255),Imgurl varchar(255),Guild varchar(255),Color varchar(255));`,
                                    function () {}
                                  )
                                  vEikf4vDZN93dG8a.query(Z7RUQ, (err) => {
                                    if (err) {
                                      console.error(err.message)
                                      vEikf4vDZN93dG8a.query(
                                        `DROP TABLE preferences;`,
                                        function () {}
                                      )
                                    }
                                  })
                                  console.log(
                                    ConTheme.green(
                                      "Successfully Created Table"
                                    ) +
                                      ConTheme.white(" preferences ") +
                                      ConTheme.green(
                                        "(Pref Successfully Inserted)"
                                      )
                                  )
                                  console.log(
                                    torprefix +
                                      ConTheme.red(
                                        `Bot will Exit in 5 sec! Restart the Process in order to Continue.`
                                      )
                                  )
                                  setTimeout(function () {
                                    process.exit(1)
                                  }, 5000)
                                }, 600)
                              }
                            )
                          }
                        )
                      }
                    )
                  }
                )
              }
            )
          }, 500)
        } else {
          if (!mariadb) return
          prefix = results[0].Prefix
          name = results[0].Name
          img = results[0].Imgurl
          guildid = results[0].Guild
          defcolor = results[0].Color
          const FA3Zf6An5AW8mcjSvZsuOIkRdFroaG3nobzQDzT8AWDeaLTPoR5dmSUuL3Uq8fpL =
            result[0].Token
          client.login(
            FA3Zf6An5AW8mcjSvZsuOIkRdFroaG3nobzQDzT8AWDeaLTPoR5dmSUuL3Uq8fpL
          )
          Pref = {
            prefix: prefix,
            name: name,
            img: img,
            guild: guildid,
            colors: defcolor,
          }
          require(`../lib/lib.js`)(client, Discord, Pref, vEikf4vDZN93dG8a)
          installdone = true
        }
      }
    )
  }
})
;["event_handler", "command_handler"].forEach((handler) => {
  setTimeout(function () {
    while (installdone) {
      return require(`../handlers/${handler}`)(
        client,
        Discord,
        Pref,
        vEikf4vDZN93dG8a
      )
    }
  }, 1000)
})
