/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  } else {
    who = m.chat;
  }

  if (!who) throw `✳️ Tag or mention someone\n\n📌 Example : ${usedPrefix + command} @tag`;

  let name = conn.getName(who);
  let name2 = conn.getName(m.sender);
  m.react(rwait);

  let reaction = await fetch(`https://api.waifu.pics/sfw/${command}`);
  if (!reaction.ok) throw await reaction.text();
  
  let json = await reaction.json();
  let { url } = json;

conn.sendMessage(m.chat, { video: { url: url }, gifPlayback: true, caption: `(${name2}) ${command} ${name}`, mentions: [m.sender] }, { quoted: m })


  m.react('☺️'); 
}

handler.tags = ['reaction'];
handler.help = [
  'bully @tag',
  'cuddle @tag',
  'cry @tag',
  'hug @tag',
  'awoo @tag',
  'kiss @tag',
  'lick @tag',
  'pat @tag',
  'smug @tag',
  'bonk @tag',
  'yeet @tag',
  'blush @tag',
  'smile @tag',
  'wave @tag',
  'highfive @tag',
  'handhold @tag',
  'nom @tag',
  'bite @tag',
  'glomp @tag',
  'slap @tag',
  'kill @tag',
  'happy @tag',
  'wink @tag',
  'poke @tag',
  'dance @tag',
  'cringe @tag'
];

handler.command = /^(bully|cuddle|cry|hug|awoo|kiss|lick|pat|smug|bonk|yeet|blush|smile|wave|highfive|handhold|nom|bite|glomp|slap|kill|happy|wink|poke|dance|cringe)$/i;
handler.group = true;

export default handler;
