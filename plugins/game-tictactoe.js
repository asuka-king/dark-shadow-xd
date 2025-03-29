/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  conn.game = conn.game ? conn.game : {}
  if (
    Object.values(conn.game).find(
      room =>
        room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender)
    )
  )
    throw `✳️ You are still in the game to restart the session write : *${usedPrefix}delttt*`
  if (!text) throw `✳️ Put a number in the room`
  let room = Object.values(conn.game).find(
    room => room.state === 'WAITING' && (text ? room.name === text : true)
  )
  // m.reply('[WIP Feature]')
  if (room) {
    m.reply('✅ mate found')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
      return {
        X: '❎',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v]
    })
    let str = `
Waiting for @${room.game.currentTurn.split('@')[0]} as first player
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *Room ID* ${room.id}

▢ *Rules*
‣ Make 3 rows of symbols vertically, horizontally or diagonally to win ‣ Type *surrender* to exit the game and be declared defeated
`.trim()
    if (room.x !== room.o)
      await conn.reply(room.x, str, m, {
        mentions: conn.parseMention(str),
      })
    await conn.reply(room.o, str, m, {
      mentions: conn.parseMention(str),
    })
  } else {
    room = {
      id: 'tictactoe-' + +new Date(),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING',
    }
    if (text) room.name = text

    conn.reply(
      m.chat,
      `⏳ *expecting partner*\nType the following command to accept
▢ *${usedPrefix + command} ${text}*

🎁 Reward:  *4999 XP*`,
      m,
      {
        mentions: conn.parseMention(text),
      }
    )

    conn.game[room.id] = room
  }
}

handler.help = ['tictactoe <tag number>']
handler.tags = ['game']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']

export default handler
