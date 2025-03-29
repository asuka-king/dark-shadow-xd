/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


const xppercredit = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^(wt|withdraw)/i, '')
  count = count
    ? /all/i.test(count)
      ? Math.floor(global.db.data.users[m.sender].bank / xppercredit)
      : parseInt(count)
    : args[0]
      ? parseInt(args[0])
      : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].bank >= xppercredit * count) {
    global.db.data.users[m.sender].bank -= xppercredit * count
    global.db.data.users[m.sender].credit += count
    conn.reply(m.chat, `Transferred 🪙 ${count} gold in your wallet`, m)
  } else
    conn.reply(
      m.chat,
      `🟥 *You don't have sufficient amount of gold in your bank to make this transaction*`,
      m
    )
}
handler.help = ['withdraw']
handler.tags = ['economy']
handler.command = ['withdraw', 'with', 'withdrawall', 'withall', 'wt', 'wtall']

handler.disabled = false

export default handler
