/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, usedPrefix }) => {
  let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
  let users = Object.entries(global.db.data.users).filter(user => user[1].banned)

  m.reply(
    `
≡ *USERS BANNED*

▢ Total : *${users.length}* 

${
  users
    ? '\n' +
      users
        .map(([jid], i) =>
          `
${i + 1}. ${conn.getName(jid) == undefined ? 'UNKNOWN' : conn.getName(jid)}
▢ ${jid}
`.trim()
        )
        .join('\n')
    : ''
}
`.trim()
  )
}
handler.help = ['listban']
handler.tags = ['owner']
handler.command = ['banlist', 'listban']

export default handler
