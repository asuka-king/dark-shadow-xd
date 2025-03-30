import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
var vn = 'https://cdn.jsdelivr.net/gh/asuka-king/dark-shadow-xd@main/assets/audio/dark.mp3'
let groupmenu = `
  ╭────『 *ɢʀᴏᴜᴘ* 』───⦁࿐
  ✧ .animequote
  ✧ .Setdesc <text>
  ✧ .setname <text>
  ✧ .add
  ✧ .delete
  ✧ .infogp
  ✧ .invite <9476xxx>
  ✧ .link
  ✧ .poll <question|option|option>
  ✧ .profile
  ✧ .promote
  ✧ .resetlink
  ✧ .setbye <text>
  ✧ .group *open/close*
  ✧ .setwelcome <text>
  ✧ .simulate <event> @user
  ✧ .admin
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let ownermenu = `
  ╭────『 *ᴏᴡɴᴇʀ* 』───⦁࿐
  ✧ .addprem <@tag>
  ✧ .addowner @user
  ✧ .allow <@tag>
  ✧ .ban @user
  ✧ .banchat
  ✧ .cleartmp
  ✧ .delexpired
  ✧ .delprem @user
  ✧ .removeowner @user
  ✧ .setppbotfull
  ✧ .getfile <name file>
  ✧ .reset <54xxx>
  ✧ .restart
  ✧ .unban @user
  ✧ .unbanchat
  ✧ .update
  ✧ .listban
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let funmenu = `
  ╭────『 *ꜰᴜɴ* 』───⦁࿐
  ✧ .bot
  ✧ .character @tag
  ✧ .gay @user
  ✧ .pickupline
  ✧ .question
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let reactmenu = `
  ╭────『 *ʀᴇᴀᴄᴛ* 』───⦁࿐
  ✧ .bully @tag
  ✧ .cuddle @tag
  ✧ .cry @tag
  ✧ .hug @tag
  ✧ .awoo @tag
  ✧ .kiss @tag
  ✧ .lick @tag
  ✧ .pat @tag
  ✧ .smug @tag
  ✧ .bonk @tag
  ✧ .yeet @tag
  ✧ .blush @tag
  ✧ .smile @tag
  ✧ .wave @tag
  ✧ .highfive @tag
  ✧ .handhold @tag
  ✧ .nom @tag
  ✧ .bite @tag
  ✧ .glomp @tag
  ✧ .slap @tag
  ✧ .kill @tag
  ✧ .happy @tag
  ✧ .wink @tag
  ✧ .poke @tag
  ✧ .dance @tag
  ✧ .cringe @tag
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let dlmenu = `
  ╭────『 *ᴅᴏᴡɴʟᴏᴀᴅ* 』───⦁࿐
  ✧ .facebook <url>
  ✧ .gdrive 🅟
  ✧ .igstalk
  ✧ .instagram
  ✧ .modapk
  ✧ .play <query>
  ✧ .play2 <text>
  ✧ .playvid <text>
  ✧ .spotify
  ✧ .twitter <url>
  ✧ .ytmp3 <url>
  ✧ .ytsearch
  ✧ .ytmp4 <yt-link>
  ✧ .wallpaper <query>
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`
let logomenu = `
  ╭────『 *ᴍᴀᴋᴇʀ* 』───⦁࿐
  ✧ .blur
  ✧ .tocartoon
  ✧ .gfx1 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx2 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx3 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx4 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx5 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx6 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx7 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx8 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx9 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx10 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx11 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .gfx12 (ʟᴏɢᴏ ᴅᴇꜱɪɢɴ)
  ✧ .tweet <comment>
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let stickermenu = `
  ╭────『 *ꜱᴛɪᴄᴋᴇʀ* 』───⦁࿐
  ✧ .emojimix <emoji+emoji>
  ✧ .getsticker
  ✧ .stickerwithmeme (reply media)
  ✧ .smaker
  ✧ .toimg <sticker>
  ✧ .trigger <@user>
  ✧ .ttp
  ✧ .ttp2
  ✧ .ttp3
  ✧ .ttp4
  ✧ .ttp5
  ✧ .attp
  ✧ .attp2
  ✧ .attp3
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`
  
let newsmenu = `
  ╭────『 *ɴᴇᴡꜱ* 』───⦁࿐
  ✧ .news
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`
  
let animemenu = `
  ╭────『 *ᴀɴɪᴍᴇ* 』───⦁࿐
  ✧ .anime
  ✧ .manhwa
  ✧ .waifu
  ✧ .neko
  ✧ .zerotwo
  ✧ .loli
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let toolsmenu = `
  ╭────『 *ᴛᴏᴏʟꜱ* 』───⦁࿐
  ✧ .weather *<place>*
  ✧ .google
  ✧ .imdb
  ✧ .lyrics
  ✧ .translate <lang> <text>
  ✧ .wikipedia
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let Aimenu = `
  ╭────『 *ᴀɪ* 』───⦁࿐
  ✧ .chatgpt
  ✧ .ai
  ✧ .ai2
  ✧ .aisearch
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

let botmenu = `
  ╭────『 *ʙᴏᴛ* 』───⦁࿐
  ✧ .ping
  ✧ .runtime
  ✧ .script
  ✧ .server
  ✧ .blocklist
  ✧ .alive
  ✧ .info
  ✧ .owner
  ✧ .totalfeature
  ✧ .cristianoronaldo
  ✧ .pinterest
  ✧ .menu2
  ✧ .groups
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`
  
let pluginmenu = `
  ╭────『 *ᴘʟᴜɢɪɴ* 』───⦁࿐
  ✧ .plugins
  ✧ .install <Gist URL>
  ╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐`

const handler = async (m, { conn, command, text, args, usedPrefix }) => {
  let glb = global.db.data.users
  let usrs = glb[m.sender]
  let tag = `@${m.sender.split('@')[0]}`
  let mode = global.opts['self'] ? 'Private' : 'Public'

  let { age, exp, limit, level, role, registered, credit } = glb[m.sender]
  let { min, xp, max } = xpRange(level, global.multiplier)
  let name = await conn.getName(m.sender)
  let premium = glb[m.sender].premiumTime
  let prems = `${premium > 0 ? 'Premium' : 'Free'}`
  let platform = os.platform()

  let ucpn = `${ucapan()}`

  let _uptime = process.uptime() * 1000
  let _muptime
  if (process.send) {
    process.send('uptime')
    _muptime =
      (await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      })) * 1000
  }
  let muptime = clockString(_muptime)
  let uptime = clockString(_uptime)

  let totalfeatures = Object.values(global.plugins).filter(v => v.help && v.tags).length
  let totalreg = Object.keys(glb).length

  conn.gurumenu = conn.gurumenu ? conn.gurumenu : {}

  global.fcontact = {
    key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  const infoText = `
 ||  ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-xᴅ ||
> ${botname}  」\n
- Hii ${name}
    
- *${ucpn}* 
   
───『 *U S E R*』───➤
⛥ *Name:* ${name}
⛥ *Gold:* ${credit}
⛥ *Role:* ${role}
⛥ *Level:* ${level}
⛥ *Xp:* ${exp}
╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐
     
───『 *I N F O*』───➤
⛥ *Bot Name:* ${botname}
⛥ *Mode:* ${mode}
⛥ *Platform:* ${platform}
⛥ *Type:* NodeJs
⛥ *Baileys:* Multi Device
⛥ *Prefix:* [ *${usedPrefix}* ]
⛥ *Uptime:* ${muptime}
⛥ *Database:*  ${totalreg}
╰──────────⳹

> © ✦ᴀꜱᴜᴋᴀ ᴋɪɴɢ✦\n\n
${readMore}

───『 *I N F O  C M D*』───➤
⛤*${totalfeatures}* Commands
╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐
     

───『 *INFO*』───➤
⛥*Reply with the number*
⛦ to get respected Menu*
╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐
╭───────☠
│ *1.* Bot Menu
│ *2.* Owner Menu
│ *3.* Group Menu
│ *4.* Fun Menu
│ *5.* Reaction Menu
│ *6.* Downloader Menu
│ *7.* Game Menu
│ *8.* Logo Menu
│ *9.* Sticker Menu
│ *10.* Audio Menu
│ *11.* News Menu
│ *12.* Economy Menu
│ *13.* Anime Menu
│ *14.* NSFW Menu
│ *15.* Tools Menu
│ *16.* AI Menu
│ *17.* Religion Menu
│ *18.* Plugin Menu
╰─ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ──⦁࿐
 `
  const { result, key, timeout } = await conn.sendMessage(
    m.chat,
    { video: { url: menuvid }, caption: infoText.trim(),
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363178281296360@newsletter',
        newsletterName: 'Click Here or u Gay',
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: 'ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ-xᴅ',
        body: 'ᴍᴇɴᴜ',
        thumbnailUrl: 'https://files.catbox.moe/vgswie.jpg',
        sourceUrl: 'https://asuka-king.onrender.com',
        mediaType: 1,
        renderLargerThumbnail: false,
      },
    },
    
    gifPlayback: true, gifAttribution: 0 },
    { quoted: fcontact }
  )

  // Save the menu options to gurumenu
  conn.gurumenu[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, {
        delete: key,
      })
      delete conn.gurumenu[m.sender]
    }, 150 * 1000),
  }
}

handler.before = async (m, { conn }) => {
  conn.gurumenu = conn.gurumenu ? conn.gurumenu : {}
  if (m.isBaileys || !(m.sender in conn.gurumenu)) return
  const { result, key, timeout } = conn.gurumenu[m.sender]
  if (!m.quoted || m.quoted.id !== key.id || !m.text) return
  const choice = m.text.trim()

  if (choice === '1') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg'}, caption: botmenu },
      { quoted: fcontact }
    )
  } else if (choice === '2') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: ownermenu },
      { quoted: fcontact }
    )
  } else if (choice === '3') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: groupmenu },
      { quoted: fcontact }
    )
  } else if (choice === '4') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: funmenu },
      { quoted: fcontact }
    )
  } else if (choice === '5') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: reactmenu },
      { quoted: fcontact }
    )
  } else if (choice === '6') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: dlmenu },
      { quoted: fcontact }
    )
  } else if (choice === '7') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: groupmenu },
      { quoted: fcontact }
    )
  } else if (choice === '8') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: logomenu },
      { quoted: fcontact }
    )
  } else if (choice === '9') {
    await conn.sendMessage(
      m.chat,
      {
        image: { url: 'https://files.catbox.moe/vgswie.jpg' },
        caption: stickermenu,
      },
      { quoted: fcontact }
    )
  } else if (choice === '10') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: audiomenu },
      { quoted: fcontact }
    )
  } else if (choice === '11') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: newsmenu },
      { quoted: fcontact }
    )
  } else if (choice === '12') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: economy },
      { quoted: fcontact }
    )
  } else if (choice === '13') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: animemenu },
      { quoted: fcontact }
    )
  } else if (choice === '14') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpgcontact }
    )
  } else if (choice === '15') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: toolsmenu },
      { quoted: fcontact }
    )
  } else if (choice === '16') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: Aimenu },
      { quoted: fcontact }
    )
  } else if (choice === '17') {
    await conn.sendMessage(
      m.chat,
      {
        image: { url: 'https://files.catbox.moe/vgswie.jpg' },
        caption: religionmenu,
      },
      { quoted: fcontact }
    )
  } else if (choice === '18') {
    await conn.sendMessage(
      m.chat,
      { image: { url: 'https://files.catbox.moe/vgswie.jpg' }, caption: pluginmenu },
      { quoted: fcontact }
    )
  } else {
    m.reply('Invalid choice. Please reply with a valid number.')
  }
}

handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^(menu)$/i
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}

function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [
    ye,
    ' *Years 🗓️*\n',
    mo,
    ' *Month 🌙*\n',
    d,
    ' *Days ☀️*\n',
    h,
    ' *Hours 🕐*\n',
    m,
    ' *Minute ⏰*\n',
    s,
    ' *Second ⏱️*',
  ]
    .map(v => v.toString().padStart(2, 0))
    .join('')
}

function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  let res = 'Good morning ☀️'
  if (time >= 4) {
    res = 'Good Morning 🌄'
  }
  if (time >= 10) {
    res = 'Good Afternoon ☀️'
  }
  if (time >= 15) {
    res = 'Good Afternoon 🌇'
  }
  if (time >= 18) {
    res = 'Good Night 🌙'
  }
  return res
}
