/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from 'node-fetch'

let itunesHandler = async (m, { conn, text }) => {
  if (!text) throw 'Please provide a song name'

  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }

    let json = await res.json()

    console.log('JSON response:', json)

    let songInfo = `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`

    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      await conn.sendFile(m.chat, json.thumbnail, 'thumbnail.jpg', songInfo, m)
    } else {
      m.reply(songInfo)
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}

itunesHandler.help = ['itunes']
itunesHandler.tags = ['tools']
itunesHandler.command = /^(itunes)$/i

export default itunesHandler
