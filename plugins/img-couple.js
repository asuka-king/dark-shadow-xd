/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('fgmods', '/api/img/couple', {}, 'apikey'))
  let json = await res.json()
  await conn.sendFile(m.chat, json.result.boy, 'img.png', '✅ chico', m)
  await conn.sendFile(m.chat, json.result.girl, 'img.png', '✅ chica', m)
}
handler.help = ['couple']
handler.tags = ['img']
handler.command = ['pareja', 'par', 'couple'] 
handler.diamond = true

export default handler
