/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.news) throw json

    let techNews = `•───── ୨❀୧ ─────•
    ❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Active
    ㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: Mr Asuka
    ☞ 𝑵𝑬𝑾𝑺: ${json.news}
      •───── ୨❀୧ ─────•
    `

    conn.sendFile(m.chat, json.thumbnail, 'thumbnail.jpg', techNews, m)

    m.react(done)
  } catch (e) {
    m.react(error)
  }
}
handler.help = ['technews']
handler.tags = ['news']
handler.command = ['technews']

export default handler
