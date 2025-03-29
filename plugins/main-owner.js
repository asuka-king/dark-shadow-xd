/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn }) => {
  if (!conn) {
    console.error('Connection object is undefined');
    return; // or handle the error as appropriate
  }

  const ownerNumber = process.env.OWNERS || global.owner[0] ? global.owner[0][0] : '94769484004'; // Fallback
  const OwnerName = process.env.OWNER_NAME || 'Asuka King';
  let vcard = `BEGIN:VCARD
VERSION:1.0
N:;${ownerNumber};;;
FN:${OwnerName}
ORG:asukaking
TITLE:${OwnerName}
item1.TEL;waid=${ownerNumber}:${ownerNumber}
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Owner of the Bot
X-WA-BIZ-NAME:${OwnerName}
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: OwnerName,
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner'];

export default handler;
