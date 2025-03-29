/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let te = `✳️ Select the language you want to use\n≡ *Available languages:*\n- si (Sinhala)\n- es (Spanish)\n- en (English)\n\nExample: *${usedPrefix + command}* en\nHelp us translate the bot into your language\nhttps://GitHub.com/asukaking`.trim();
  
  if (!text) throw te;

  let user = global.db.data.users[m.sender];

  if (args[0] === "si") {
    user.language = args[0];
    m.reply("✅ *තෝරාගැනීම සිංහල*\n \n දැන් බොට් ඔබේ පණිවිඩයට සිංහලයෙන් පිළිතුරු දෙනු ඇත");
  } else if (args[0] === "en") {
    user.language = args[0];
    m.reply("✅ *Selected English*\n\nNow the bot will reply to your message in English");
  } else if (args[0] === "es") {
    user.language = args[0];
    m.reply("✅ *Español Seleccionado*\n\nAhora el bot responderá a su mensaje en Español");
  } else {
    m.reply(te);
  }
}

handler.help = ['language <es-en..>'];
handler.tags = ['main'];
handler.command = ['language', 'lenguaje', 'lang', 'idioma'];

export default handler;
