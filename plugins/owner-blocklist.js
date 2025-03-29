/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn }) => {
  await conn
    .fetchBlocklist()
    .then(async data => {
      let txt = `*≡ Blocked list*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
      for (let i of data) {
        txt += `▢ @${i.split('@')[0]}\n`
      }
      txt += '└───────────'
      return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
    })
    .catch(err => {
      console.log(err)
      throw 'There are no blocked numbers'
    })
}
handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock']
handler.rowner = true
export default handler
