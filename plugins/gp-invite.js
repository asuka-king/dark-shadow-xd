/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text)
    throw `✳️ Enter the number you want to send a group invite to\n\n📌 Example :\n*${usedPrefix + command}*9476xxxxx`
  if (text.includes('+')) throw `Enter number without *+*`
  if (isNaN(text)) throw ' 📌 Enter only numbers without your country code with no spaces'
  let group = m.chat
  let link = 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(group))

  await conn.reply(
    text + '@s.whatsapp.net',
    `≡ *INVITATION TO GROUP*\n\nA user invited you to join this group \n\n${link}`,
    m,
    { mentions: [m.sender] }
  )
  m.reply(`✅ An invite link was sent to the user`)
}
handler.help = ['invite <263xxx>']
handler.tags = ['group']
handler.command = ['invite', 'invitar']
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
