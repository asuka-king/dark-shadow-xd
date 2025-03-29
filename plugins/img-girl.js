/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async(m, { conn, usedPrefix, command }) => {
	
	let girl = await conn.getFile(global.API('fgmods', '/api/img/girl', { }, 'apikey'))
	let img = girl.data
  await conn.sendFile(m.chat, img, 'img.jpg', `✅ ${mssg.result} 🤭`, m)   
}
handler.help = ['girl']
handler.tags = ['img']
handler.command = ['girl', 'woman']
handler.diamond = false

export default handler
