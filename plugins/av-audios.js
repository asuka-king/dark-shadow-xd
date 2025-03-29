/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'fino señores': './src/mp3/fino.mp3',
  'buenos días': 'https://k.top4top.io/m_2826iqdri1.mp3',
  'buenas tardes': 'https://b.top4top.io/m_2826v2zg51.mp3',
  'buenas noches': 'https://i.top4top.io/m_2826o8rfj1.mp3',
  'sad': 'https://h.top4top.io/m_2826mcim21.mp3',
  '@5491168352204|@59172945992': 'https://l.top4top.io/m_2492i4mdu1.mp3'
}
