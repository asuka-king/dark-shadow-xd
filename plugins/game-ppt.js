/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let poin = 300
  let reseqv = `✳️ Select rock/paper/scissors\n\nExample : *${usedPrefix + command}* paper\n`
  if (!text) throw reseqv
  var astro = Math.random()

  if (astro < 0.34) {
    astro = 'rock'
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'scissors'
  } else {
    astro = 'paper'
  }

  if (text == astro) {
    global.db.data.users[m.sender].exp += 100
    m.reply(`▢ *A tie*\n\n‣ You : ${text}\n‣ Dark Shadow : ${astro}\n\n🎁 Points (±)100 XP`)
  } else if (text == 'rock') {
    if (astro == 'scissors') {
      global.db.data.users[m.sender].exp += 300
      m.reply(`▢ *Won* 🎊\n\n‣ You : ${text}\n‣ GURU : ${astro}\n\n🎁 Points *+${poin} XP*`)
    } else {
      global.db.data.users[m.sender].exp -= 300
      m.reply(`▢ *lost*\n\n‣ You : ${text}\n‣ DARK : ${astro}\n\n Points *-${poin} XP*`)
    }
  } else if (text == 'scissors') {
    if (astro == 'paper') {
      global.db.data.users[m.sender].exp += 300
      m.reply(`▢ *won* 🎊\n\n‣ You : ${text}\n‣ DARK : ${astro}\n\n🎁 Points *+${poin} XP*`)
    } else {
      global.db.data.users[m.sender].exp -= 300
      m.reply(`▢ *lost*\n\n‣ You : ${text}\n‣ DARK : ${astro}\n\nPoints *-${poin} XP*`)
    }
  } else if (text == 'paper') {
    if (astro == 'rock') {
      global.db.data.users[m.sender].exp += 300
      m.reply(`▢ *won* 🎊\n\n‣ You : ${text}\n‣ DARK : ${astro}\n\n🎁 Points *+${poin} XP*`)
    } else {
      global.db.data.users[m.sender].exp -= 300
      m.reply(`▢ *You lost*\n\n‣ You : ${text}\n‣ DARK : ${astro}\n\nPoints *-${poin} XP*`)
    }
  } else {
    throw reseqv
  }
}
handler.help = ['ppt <rock/paper/scissors>']
handler.tags = ['game']
handler.command = ['ppt']
handler.register = false

export default handler
