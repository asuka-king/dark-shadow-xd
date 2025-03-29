/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, args, usedPrefix, command, isGroup }) => {
    let jid;
    
    if (isGroup) {
        if (m.quoted) {
            
            jid = m.quoted.sender;
        } else {
            
            jid = m.chat;
        }
    } else {
        
        jid = m.chat;
    }

    m.reply(jid);
}

handler.help = ['getjid'];
handler.tags = ['tools'];
handler.command = ['getjid', 'jid', 'jd'];

export default handler;
