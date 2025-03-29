/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, command, args, usedPrefix }) => {
  let user = global.db.data.users[m.sender]

  if (user.chicken > 0) return m.reply('You already have this')
  if (user.credit < 500)
    return m.reply(`🟥 *You don't have sufficient amount of gold in your wallet to buy a chicken*`)

  user.credit -= 1000
  user.chicken += 1
  m.reply(
    `🎉 You have successfully bought a chicken to fight! Use the command ${usedPrefix}cock-fight <amount>`
  )
}

handler.help = ['buych']
handler.tags = ['economy']
handler.command = ['buy-chicken', 'buych']

handler.group = true

export default handler
