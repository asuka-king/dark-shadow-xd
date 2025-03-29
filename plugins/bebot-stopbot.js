/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
    await conn.reply(m.chat, `*Rent Has Been Successfully Stoped*`, m);
  } else {
    // If the number does not match, stop the bot.
    await conn.reply(m.chat, '*Why don’t you go directly to the terminal?*', m);
    conn.ws.close();
  }
};

handler.help = ['stop'];
handler.tags = ['bebot'];
handler.command = ['stopbebot', 'stoprent'];
handler.owner = true;

export default handler;
