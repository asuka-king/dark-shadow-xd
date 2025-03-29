/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  } else {
    who = m.chat;
  }
  
  if (!who) throw 'Tag the person you want to make an Owner!';
  
  let name = await conn.getName(who);
  if (global.owner.some(owner => owner[0] === who.split('@')[0])) throw 'This person is already an owner!';
  
  global.owner.push([who.split('@')[0], name, true]);
  
  const caption = `Now @${who.split('@')[0]} has been made an Owner!`;
  await conn.reply(m.chat, caption, m, {
    mentions: conn.parseMention(caption),
  });
};

handler.help = ['addowner @user'];
handler.tags = ['owner'];
handler.command = /^(add|give|-)(owner|sudo)$/i;
handler.owner = true;

export default handler;