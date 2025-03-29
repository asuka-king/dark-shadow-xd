/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import { promises } from 'fs'
import { join } from 'path'
import axios from 'axios'

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/asukaking/Dark-Shadow-xd'

  try {
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/)

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)

    if (response.status === 200) {
      const repoData = response.data

      // Format the repository information with emojis
      const formattedInfo = `
 ʜᴇʟʟᴏ sʜᴀʀᴇ ᴛʜɪs ᴀᴍᴀᴢɪɴɢ ʙᴏᴛ ʀᴇᴘᴏ🤩
   
   ❄️ᴊɪɴᴡᴏᴏ ᴠ4 ʀᴇᴘᴏ❄️
      
📂 ʀᴇᴘᴏ ɴᴀᴍᴇ: ${repoData.name}
👤 ᴏᴡɴᴇʀ: ${repoData.owner.login}
⭐ sᴛᴀʀs: ${repoData.stargazers_count}
👥 ᴅᴀɪʟʏ ᴜsᴇʀs: ${repoData.forks_count}
🌐 ʀᴇᴘᴏ ᴜʀʟ: ${repoData.html_url}
📝 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${repoData.description}
      `.trim()

      // Send the formatted information as a message
      await conn.relayMessage(
        m.chat,
        {
          requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: 69000,
            requestFrom: m.sender,
            noteMessage: {
              extendedTextMessage: {
                text: formattedInfo,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                  },
                },
              },
            },
          },
        },
        {}
      )
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Unable to fetch repository information.', m)
    }
  } catch (error) {
    console.error(error)
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m)
  }
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'repo', 'script']

export default handler
