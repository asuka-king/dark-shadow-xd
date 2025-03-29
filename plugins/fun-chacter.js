/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
  if (!text) throw 'Mention whose you want to check character'
  const mentionedUser =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : args[2]
        ? args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net'
        : ''
  const userChar = [
    'Sigma',
    'Generous',
    'Grumpy',
    'Overconfident',
    'Obedient',
    'Good',
    'Simp',
    'Kind',
    'Patient',
    'Pervert',
    'Cool',
    'Helpful',
    'Brilliant',
    'Sexy',
    'Hot',
    'Gorgeous',
    'Cute',
  ]
  const userCharacterSeletion = userChar[Math.floor(Math.random() * userChar.length)]

  let message = `Character of @${mentionedUser.split('@')[0]}  is *${userCharacterSeletion}* 🔥⚡`

  conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
}
handler.help = ['character @tag']
handler.tags = ['fun']
handler.command = /^(character)/i

export default handler
