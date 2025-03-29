/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import cp from 'child_process';
import { promisify } from 'util';

const exec = promisify(cp.exec).bind(cp);

let handler = async (m, { conn, usedPrefix, command }) => {
  m.react(rwait);

  let o;
  try {
    o = await exec('python3 speed.py --share --secure');
  } catch (e) {
    o = e;
  } finally {
    let { stdout, stderr } = o;
    if (stdout.trim()) {
      m.reply(`*≡ SPEEDTEST.NET*\n\n${stdout}`);
    }
    if (stderr.trim()) {
      m.reply(stderr);
    }
    m.react(done);
  }
}

handler.help = ['speedtest'];
handler.tags = ['main'];
handler.command = /^(speedtest|testspeed)$/i;

export default handler;
