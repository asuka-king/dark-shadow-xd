/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
  const stickerList = Object.entries(global.db.data.sticker)
    .map(
      ([key, value], index) =>
        `${index + 1}. ${value.locked ? `(blocked) ${key}` : key} : ${value.text}`
    )
    .join('\n');

  conn.reply(
    m.chat,
    `
*COMMAND LIST*

▢ *Info:* If it's in *bold*, it is blocked

──────────────────
${stickerList}
`.trim(),
    null,
    {
      mentions: Object.values(global.db.data.sticker)
        .map(x => x.mentionedJid)
        .flat(), // Use flat() to flatten the array
    }
  );
}

handler.help = ['listcmd'];
handler.tags = ['cmd'];
handler.command = ['listcmd'];

export default handler;
