/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


export async function all(m) {
  if (!m.isGroup) return
  let chats = global.db.data.chats[m.chat]
  if (!chats.expired) return !0
  if (+new Date() > chats.expired) {
    await this.reply(
      m.chat,
      `🔴 bye bye *${this.user.name}* will leave the group \n\nyour rent ended`
    )
    await this.groupLeave(m.chat)
    chats.expired = null
  }
}
