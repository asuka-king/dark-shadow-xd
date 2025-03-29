/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


//import db from '../lib/database.js'

export async function all(m) {
  if (!m.chat.endsWith('.net') || m.fromMe || m.key.remoteJid.endsWith('status@broadcast')) return
  if (global.db.data.chats[m.chat].isBanned) return
  if (global.db.data.users[m.sender].banned) return
  if (m.isBaileys) return
  let msgs = global.db.data.msgs
  if (!(m.text in msgs)) return
  let _m = this.serializeM(
    JSON.parse(JSON.stringify(msgs[m.text]), (_, v) => {
      if (
        v !== null &&
        typeof v === 'object' &&
        'type' in v &&
        v.type === 'Buffer' &&
        'data' in v &&
        Array.isArray(v.data)
      ) {
        return Buffer.from(v.data)
      }
      return v
    })
  )
  await _m.copyNForward(m.chat, true)
}
