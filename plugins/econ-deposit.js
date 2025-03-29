/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


const xpperbank = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^(dep|deposit)$/i, '')
  count = count
    ? /depall/i.test(count)
      ? Math.floor(global.db.data.users[m.sender].credit / xpperbank)
      : parseInt(count)
    : args[0]
      ? parseInt(args[0])
      : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].credit >= xpperbank * count) {
    global.db.data.users[m.sender].credit -= xpperbank * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `You have transferred 🪙 ${count} gold to your bank`, m)
  } else
    conn.reply(
      m.chat,
      `🟥 *You don't have sufficient amount of gold in your wallet to make this transaction*`,
      m
    )
}
handler.help = ['deposit']
handler.tags = ['economy']
handler.command = ['deposit', 'dep', 'depall']

handler.disabled = false

export default handler
