/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let ro = 3000
let handler = async (m, { conn, usedPrefix, command }) => {
  let time = global.db.data.users[m.sender].lastrob + 7200000
  if (new Date() - global.db.data.users[m.sender].lastrob < 7200000)
    throw `⏱️¡Hey! wait *${msToTime(time - new Date())}* to steal again`
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  else who = m.chat
  if (!who) throw `✳️ Tag someone to steal`
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
  let users = global.db.data.users[who]
  let rob = Math.floor(Math.random() * ro)
  if (users.exp < rob)
    return m.reply(
      `🔖 @${who.split`@`[0]} has less than *${ro} xp*\nDon't steal from a rotten":`,
      null,
      { mentions: [who] }
    )
  global.db.data.users[m.sender].exp += rob
  global.db.data.users[who].exp -= rob

  m.reply(
    `
  ‣ Robbed *${rob} XP* a @${who.split`@`[0]}
  `,
    null,
    { mentions: [who] }
  )
  global.db.data.users[m.sender].lastrob = new Date() * 1
}

handler.help = ['rob']
handler.tags = ['economy']
handler.command = ['robar', 'rob']

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return hours + ' Hours(s) ' + minutes + ' Minute(s)'
}
