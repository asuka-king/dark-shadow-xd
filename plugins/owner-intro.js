/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Fetch environment variables with defaults
    const OwnerName = process.env.OWNER_NAME || '✦ᴀꜱᴜᴋᴀ ᴋɪɴɢ✦';
    const timeZone = process.env.TIME_ZONE || 'Zimbabwe';
    const profession = process.env.OWNER_STATUS || '𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁';
    const skills = process.env.OWNER_SKILLS || '𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃';
    const language = process.env.LANGUAGE || '𝙴𝙽𝙶𝙻𝙸𝚂𝙷,shona';
    const project = process.env.BOTNAME || 'ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-xᴅ';
    const hobbies = process.env.HOBBIES || '𝙲𝙾𝙳𝙸𝙽𝙶,𝙱𝙾𝚃𝚂';

    // Expanded intro card text with additional fields
    const introText = `
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│
 ◈ •│ Name    : ${OwnerName}
 ◈ •│
 ◈ •│ Place    : ${timeZone}
 ◈ •│
 ◈ •│ Gender  : 𝙼𝙰𝙻𝙴
 ◈ •│
 ◈ •│ Age      : 20_
 ◈ •│
 ◈ •│ Status   : ${profession}
 ◈ •│
 ◈ •│ Skills    : ${skills}
 ◈ •│
 ◈ •│ Lang    : ${language}
 ◈ •│
 ◈ •│ Project  : ${project}
 ◈ •│
 ◈ •│ Hobbie  : ${hobbies}
 ◈ •│
 ◈ •│ Phone   : https://wa.me/94769484004
 ◈ •│
 ◈ •│ IG ID    : asuka-king
 ◈ •│
 ◈ •│ Github   : asuka-king
 ◈ •│
 ◈ •│ Connect : https://whatsapp.com/channel/0029Vb9cu0FIiRoxxrIMee3J
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
    `;

    let pp = 'https://github.com/asuka-king.pn';

    // Try fetching the profile picture of the sender
    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://github.com/asuka-king'; // Example source URL for the card
    const OwnerImg = 'https://github.com/asuka-king.png';
    const contextInfo = {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-xᴅ', // Title of the card
        body: '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯',
        thumbnailUrl: OwnerImg, // Fixed URL syntax with quotes
        mediaUrl: pp,  // Corrected to use profile picture URL fetched
        sourceUrl: sourceUrl, // Source URL for the card
      },
    };

    // Send the message with the extended intro text and external ad reply
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^owner|intro|duction$/i;

export default handler;
