const express = require('express');
const app = express()

app.get("/", (req,res) => {
  res.send("hello hell!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "dank memer test lel" } })
  
})  

client.login(process.env.token)