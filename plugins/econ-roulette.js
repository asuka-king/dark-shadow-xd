/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let amount = parseInt(args[0])
  let color = args[1]?.toLowerCase()
  if (args.length < 2)
    throw `✳️ Command Usage: ${usedPrefix + command} <amount> <color>\n\n Example: ${usedPrefix + command} 500 red`
  let colores = ['red', 'black']
  let colour = colores[Math.floor(Math.random() * colores.length)]
  let user = global.db.data.users[m.sender]
  if (isNaN(amount) || amount < 500) throw `✳️ The minimum bet is 500 gold`
  if (!colores.includes(color)) throw '✳️ You must specify a valid color: red or black'
  if (user.credit < amount) throw '✳️ You do not have enough gold!'
  if (amount > 100000) throw `🟥 *You can't bet gold more than 100000*`
  let result = ''
  if (colour == color) {
    result = `${colour == 'red' ? 'The ball landed on 🔴' : 'The ball landed on ⚫'} \n\nYou won ${amount * 2} gold`
    user.credit += amount * 2
  } else {
    result = `${colour == 'red' ? 'The ball landed on 🔴' : 'The ball landed on ⚫'} \n\nYou lost ${amount} gold`
    user.credit -= amount
  }
  m.reply(result)
}
handler.help = ['roulette <amount> <color(red/black)>']
handler.tags = ['economy']
handler.command = ['roulette', 'rt']

handler.group = true

export default handler
