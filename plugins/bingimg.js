/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  if (!text) throw 'What do you want to create?'
  m.react(rwait)
  let msg = encodeURIComponent(text)
  let res = await fetch(`https://aemt.me/bingimg?text=${msg}`)
  let data = await res.json()
  console.log(data)
  let buffer = data.result
  conn.sendFile(m.chat, buffer, 'image.png', `${text}`, m)
  m.react(done)
}

handler.help = ['bingimg <query>']
handler.tags = ['AI']
handler.command = /^bingimg$/i

export default handler
