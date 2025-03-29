/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import yts from 'yt-search';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `✳️ Example: *${usedPrefix + command}* Lil Peep hate my life`;
    m.react('📀');
    
    let result = await yts(text);
    let ytres = result.videos;
    
    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '🎶 MP3',
                    title: "",
                    description: `▢ ⌚ *Duration:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Title:* ${v.title}\n▢ 📆 *Uploaded:* ${v.ago}\n`, 
                    id: `${usedPrefix}yta ${v.url}`
                },
                {
                    header: "🎥 MP4",
                    title: "" ,
                    description: `▢ ⌚ *Duration:* ${v.timestamp}\n▢ 👀 *Views:* ${v.views}\n▢ 📌 *Title:* ${v.title}\n▢ 📆 *Uploaded:* ${v.ago}\n`, 
                    id: `${usedPrefix}ytv ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '  ≡ *ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-xᴅ MUSIC*🔎', `\n 📀 Results for:\n *${text}*`, `Click Here`, ytres[0].image, listSections, m);
};

handler.help = ['play2'];
handler.tags = ['dl'];
handler.command = ['play2', 'playvid2', 'playlist', 'playlista']; 
handler.disabled = false;

export default handler;
