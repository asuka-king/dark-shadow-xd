/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
  let cristiano = (
    await axios.get(
      `https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json`
    )
  ).data
  let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
  conn.sendFile(m.chat, ronaldo, 'error.jpg', `*siuuuuuuuuuu*`, m)
}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['img']
handler.command = /^(ronaldo|cr7)$/i
export default handler
