/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from "node-fetch"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
text,
    args
}) => {
if (!Number(text)) return m.reply(`Enter the command along with choosen number 🥺`)
        await m.reply(wait)
        let res = await fetch('https://civitai.com/api/v1/models')
        let jso = await res.json()
        let resu = jso.items[text].modelVersions[0].images[0].meta.prompt
        await m.reply(resu)
}
handler.help = ["civitai", "civit"]
handler.tags = ["ai"]
handler.command = /^(civit|civitai)$/i
export default handler
