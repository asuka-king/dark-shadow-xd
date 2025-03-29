/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/

import axios from 'axios'
import * as cheerio from 'cheerio'

let handler = async (m, { text }) => {
  if (!text) throw `✳️ Enter what you want to search for on Wikipedia`

  try {
    const link = await axios.get(`https://en.wikipedia.org/wiki/${text}`)
    const $ = cheerio.load(link.data)
    let wik = $('#firstHeading').text().trim()
    let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
    m.reply(`▢ *Wikipedia*

‣ Buscado : ${wik}

${resulw}`)
  } catch (e) {
    m.reply('⚠️ No results found ')
  }
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki', 'wikipedia']

export default handler
