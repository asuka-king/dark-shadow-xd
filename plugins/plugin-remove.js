/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


//https://github.com/Fabri115/botwhaita/blob/main/plugins/OWNER_deleteplugin.js

import { tmpdir } from 'os'
import path, { join } from 'path'
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'

const handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
  const ar = Object.keys(plugins)
  const ar1 = ar.map(v => v.replace('.js', ''))

  if (!text) throw `📌 *_Example usage:_*\n*#deleteplugin main-menu*`

  if (!ar1.includes(args[0])) {
    return m.reply(
      `*🗃️ This plugin doesn't exist!*` +
        `\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.map(v => ' ' + v).join(`\n`)}`
    )
  }

  const file = join(__dirname, '../plugins/' + args[0] + '.js')
  unlinkSync(file)
  conn.reply(m.chat, `⚠️ *_The "plugins/${args[0]}.js" plugin has been deleted._*`, m)
}

handler.help = ['deleteplugin <name>']
handler.tags = ['owner']
handler.command = /^(deleteplugin|dp|remove)$/i

handler.owner = true

export default handler
