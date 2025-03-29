/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fs from 'fs'
let handler = async (m, { conn, text }) => {
    
    m.react(done)
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendFile(m.chat, sesi, 'database.json' , '', m, null, { mimetype: 'application/json', asDocument: true })
}

handler.command = /^(getdb)$/i
handler.rowner = true

export default handler
