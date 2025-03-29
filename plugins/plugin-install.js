/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import axios from 'axios'
import fs from 'fs'
import path from 'path'

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Please provide a plugin URL`

  // Extract the Gist ID from the URL
  const gistId = text.match(/(?:\/|gist\.github\.com\/)([a-fA-F0-9]+)/)

  if (!gistId) throw `Invalid plugin URL`

  const gistName = gistId[1]
  const gistURL = `https://api.github.com/gists/${gistName}`

  try {
    const response = await axios.get(gistURL)
    const gistData = response.data

    if (!gistData || !gistData.files) {
      throw `No valid files found in the Gist`
    }

    for (const file of Object.values(gistData.files)) {
      // Use the Gist file name as the plugin name
      const pluginName = file.filename

      // Construct the path to save the plugin
      const pluginPath = path.join('plugins', `${pluginName}`)

      // Write the Gist file content to the plugin file
      await fs.promises.writeFile(pluginPath, file.content)
      m.reply(`*𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙸𝙽𝚂𝚃𝙰𝙻𝙻𝙴𝙳 𝙿𝙻𝚄𝙶𝙸𝙽 𝙸𝙽 ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-xᴅ*`)
    }
  } catch (error) {
    throw `*Error Fetching or Saving The Plugin:* ${error.message}`
  }
}

handler.help = ['install'].map(v => v + ' <Gist URL>')
handler.tags = ['plugin']
handler.command = /^install$/i

handler.owner = true

export default handler
