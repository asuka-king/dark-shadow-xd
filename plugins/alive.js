let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/asuka-king/dark-shadow-xd@main/assets/audio/alive.mp3'
  let url = 'https://github.com/asuka-king/dark-shadow-xd'
  let murl = 'https://youtu.be/@asuka-king-sl'
  let img = 'https://files.catbox.moe/vgswie.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'ᴀꜱᴜᴋᴀ-ᴋɪɴɢ',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'ɪ ᴀᴍ ᴀʟɪᴠᴇ',
        body: 'ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-xᴅ',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029Vb9cu0FIiRoxxrIMee3J',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
