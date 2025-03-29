/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ tag the user'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Enter the amount of *Gold* you want to add'
  if (isNaN(txt)) throw '🔢 only numbers'
  let dmt = parseInt(txt)
  let diamond = dmt

  if (diamond < 1) throw '✳️ Mínimum  *1*'
  let users = global.db.data.users
  users[who].credit += dmt

  await m.reply(`≡ *Gold ADDED*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
  conn.fakeReply(m.chat, `▢ Did you receive \n\n *+${dmt}* Gold`, who, m.text)
}

handler.help = ['addgold <@user>']
handler.tags = ['economy']
handler.command = ['addgold']
handler.rowner = true

export default handler
