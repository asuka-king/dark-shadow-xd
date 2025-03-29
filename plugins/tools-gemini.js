/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from 'node-fetch';
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ ${mssg.notext}`;
m.react('💬')

    try {
		let gpt = await fetch(global.API('fgmods', '/api/info/gemini', { text }, 'apikey'));
        let res = await gpt.json()
        await m.reply(res.result)
	} catch {
		m.reply(`❎ Error: intenta más tarde`);
	}

}
handler.help = ['gemini <text>']; 
handler.tags = ['tools'];
handler.command = ['gemini'];

export default handler;
