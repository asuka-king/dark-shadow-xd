/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*Respond / reply to an image*'
  let img = await q.download?.()
  let url = await uploadImage(img)
  let docname = text ? text : m.pushName || 'GlobalBot'
  conn.sendFile(
    m.chat,
    `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkeysapi}&img=${url}`,
    docname + '.pdf',
    '',
    m,
    false,
    { asDocument: true }
  )
}
handler.command = /^topdf$/i
export default handler
