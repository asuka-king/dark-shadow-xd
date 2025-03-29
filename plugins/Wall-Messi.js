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
  let res = (
    await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)
  ).data
  let url = await res[Math.floor(res.length * Math.random())]
  conn.sendFile(m.chat, url, 'error.jpg', `*Messi*`, m)
}
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi']
handler.tags = ['img']
handler.command = /^(messi)$/i
export default handler
