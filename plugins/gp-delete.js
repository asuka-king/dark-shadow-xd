/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `✳️ Please reply to a message to delete it.`;

  try {
    let delet = m.message.extendedTextMessage.contextInfo.participant;
    let bang = m.message.extendedTextMessage.contextInfo.stanzaId;
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
  } catch {
    return conn.sendMessage(m.chat, { delete: m.quoted.vM.key });
  }
}

handler.help = ['delete'];
handler.tags = ['group'];
handler.command = /^del(ete)?$/i;
handler.group = false;
handler.admin = true;
handler.botAdmin = true;

export default handler;
