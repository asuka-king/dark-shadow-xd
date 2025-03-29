/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, usedPrefix, text, command }) => {
  let waLin = ''
  if (text) {
    waLin = text.replace(/[^0-9]/g, '')
  } else if (m.quoted) {
    waLin = m.quoted.sender.replace(/[^0-9]/g, '')
  } else if (m.mentionedJid && m.mentionedJid[0]) {
    waLin = m.mentionedJid[0].replace(/[^0-9]/g, '')
  } else {
    throw `Please provide a number, quote a user, or mention a user`
  }
  const waLink = `https://wa.me/${waLin}`
  const message = `*WhatsApp Link:*\n${waLink}`

  conn.sendMessage(m.chat, { text: message, quoted: m, contextInfo: { mentionedJid: [m.sender] } })

  m.react('✅')
}

handler.help = ['wa']
handler.tags = ['tools']
handler.command = ['wa']

export default handler
