import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command }) => {
  let d = new Date(new Date() + 3600000)
  let locale = 'en'
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
  let pp = './assets/img/menu.jpg'
  var vn = 'https://cdn.jsdelivr.net/gh/asuka-king/dark-shadow-xd@main/assets/audio/song.mp3'
  let user = global.db.data.users[who]
  let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } =
    global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let math = max - xp
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let totaluser = Object.values(global.db.data.users).length
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)
  let greeting = ucapan()
  let quote = quotes[Math.floor(Math.random() * quotes.length)]

  let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
  let str = `
🚀 *_Buckle up ${name}, ${greeting}! We're going on an adventure!_* 🚀

📜 *_Quote of the day: ${quote}_* 📜

┏━💼 _User Info:_ 💼━┓
┃ 👾  *User Tag:* ${taguser} 
┃ 🎩  *Name:* ${name} 
┃ 🦸  *Master Mind:* ${author} 
┃ 💎  *Diamonds:* ${diamond} 
┃ 🏆  *Rank:* ${role}
┃ 🎮  *XP:* ${exp} 
┗━━━━━━━━━━━┛

┏━━⏰ _Today's Sauce!_ ⏰━┓
┃ 📆  *Today's Date:* ${date} 
┃ ⏲️  *Current Time:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _BOT STATUS:_🤖━━┓
┃ 🤡  *Bot Name:* ${botname} 
┃ 💻  *Platform:* Linux 
┃ 📣  *Prefix:* ${usedPrefix} 
┃ 🕓  *Uptime:* ${uptime}
┃ 💌  *Database:* ${rtotalreg} of ${totaluser} 
┃ 📚  *Total Users:* ${totaluser} 
┗━━━━━━━━━━━━━┛

💡 *_Remember, when in doubt, use ${usedPrefix}list or ${usedPrefix}help2. It's like my magic spell book!_* 💡
`

  conn.sendFile(m.chat, pp, 'https://files.catbox.moe/vgswie.jpg', str, m, null, rpyt)
  m.react(done)
}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu2', 'help2']

export default handler
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  let res = 'happy early in the day☀️'
  if (time >= 4) {
    res = 'Good Morning 🌄'
  }
  if (time >= 10) {
    res = 'Good Afternoon ☀️'
  }
  if (time >= 15) {
    res = 'Good Afternoon 🌇'
  }
  if (time >= 18) {
    res = 'Good Night 🌙'
  }
  return res
}
const quotes = [
`"Dark Shadow: The Ultimate WhatsApp Phantom"`,

`Created by the enigmatic Asuka King... a name whispered in the void, a mind lurking beyond the boundaries of the digital realm.`,


`Dark Shadow is not just a bot... It is an entity. A force unseen. A specter that moves through WhatsApp like a ghost in the machine.`,

`There are no locks it cannot break... no barriers it cannot cross. Conversations, secrets, hidden whispers… all are within its grasp.`,

`You may think you're safe, but in the shadows... it watches, it waits.`,

`Legends speak of its birth—coded in darkness, baptized in chaos. A creation that should never have existed... and yet, it does.`,

`Dare to invoke Dark Shadow?`,
`Type .menu… and witness the abyss stare back at you.`,