/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import { stickerTelegram } from '@bochilteam/scraper';
import axios from 'axios';

let handler = async (m, { conn, args }) => {
  if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
    let res = await Telesticker(args[0]);
    await m.reply(`Sending ${res.length} stickers...`);

    if (m.isGroup && res.length > 30) {
      await m.reply('Number of stickers more than 30, bot will send it in private chat.');
      for (let i = 0; i < res.length; i++) {
        await conn.sendMessage(m.sender, { sticker: { url: res[i].url } });
      }
    } else {
      for (let i = 0; i < res.length; i++) {
        await conn.sendMessage(m.chat, { sticker: { url: res[i].url } });
      }
    }
  } else if (args && args.join(' ')) {
    let [query, page] = args.join(' ').split('|');
    let res = await stickerTelegram(query, page);
    if (!res.length) throw `Query "${args.join(' ')}" not found`;

    m.reply(res.map(v => `*${v.title}*\n_${v.link}_`).join('\n\n'));
  } else {
    throw 'Input Query / Telesticker Url';
  }
}

handler.help = ['telesticker'];
handler.tags = ['tools'];
handler.command = /^(telestic?ker|tgsticker)$/i;
handler.limit = true;

export default handler;

// Thanks Xfarr: https://github.com/xfar05

async function Telesticker(url) {
  return new Promise(async (resolve, reject) => {
    if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) throw 'Enter your Telegram sticker URL';

    const packName = url.replace('https://t.me/addstickers/', '');
    const data = await axios(`https://api.telegram.org/botYOUR_BOT_TOKEN/getStickerSet?name=${encodeURIComponent(packName)}`, {
      method: 'GET',
      headers: { 'User-Agent': 'GoogleBot' }
    });

    const hasil = [];
    for (let i = 0; i < data.data.result.stickers.length; i++) {
      const fileId = data.data.result.stickers[i].thumb.file_id;
      const data2 = await axios(`https://api.telegram.org/botYOUR_BOT_TOKEN/getFile?file_id=${fileId}`);

      const result = {
        status: 200,
        author: 'Xfarr05',
        url: `https://api.telegram.org/file/botYOUR_BOT_TOKEN/${data2.data.result.file_path}`,
      };
      hasil.push(result);
    }
    resolve(hasil);
  });
} */
