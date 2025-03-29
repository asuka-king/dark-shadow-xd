/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import pkg from 'api-qasim'
const { igStalk } = pkg;

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ ${mssg.noUsername}\n\n📌${mssg.example} : ${usedPrefix + command} techlord01`; 

    try {
        await m.react('⏳');
        let res = await igStalk(args[0]);

        let te = `
┌──「 *STALKING IG* 
▢ *🔖${mssg.name}:* ${res.name} 
▢ *🔖${mssg.username}:* ${res.username}
▢ *👥${mssg.followers}:* ${res.followers}
▢ *🫂${mssg.follows}:* ${res.following}
▢ *📌${mssg.bio}:* ${res.description}
▢ *🏝️${mssg.posts}:* ${res.posts}
▢ *🔗${mssg.link}:* https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`;
        await m.react('✅');
        await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m);
    } catch (error) {
        m.reply(`✳️ ${error}`);
    }
}

handler.help = ['igstalk'];
handler.tags = ['dl'];
handler.command = ['igstalk'];

export default handler;
