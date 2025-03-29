/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, args, usedPrefix, command }) => {
  let prem = global.prems
    .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    .filter(v => v != conn.user.jid)
  let teks =
    `▢ *PREMIUM USERS*\n─────────────\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
  m.reply(teks, null, { mentions: conn.parseMention(teks) })
}
handler.help = ['listprem']
handler.tags = ['main']
handler.command = ['listprem', 'premlist', 'listpremium']

export default handler
