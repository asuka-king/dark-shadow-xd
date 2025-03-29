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

 let syst = `Eres Senna Bot, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
	try {
		let gpt = await fetch(global.API('fgmods', '/api/info/openai', { prompt: syst, text }, 'apikey'));
        let res = await gpt.json()
        await m.reply(res.result, null, rcanal)
	} catch {
		m.reply(`❎ Error: intenta más tarde`);
	}

}
handler.help = ['ai <text>']; 
handler.tags = ['tools'];
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt'];

export default handler;
