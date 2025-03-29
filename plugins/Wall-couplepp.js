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
  let data = await (
    await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')
  ).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await (await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '♂️', m)
  let ciwi = await (await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '♀️', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['img']
handler.command = ['couplepp', 'ppcouple']

export default handler
