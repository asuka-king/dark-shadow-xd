
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/bqs70b.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://files.catbox.moe/c45s9o.jpg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://files.catbox.moe/c45s9o.jpg', sourceUrl: 'https://whatsapp.com/channel/0029Vb9cu0FIiRoxxrIMee3J' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://files.catbox.moe/yx3cwi.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'INSTAGRAM', body: 'Keep bot alive', thumbnailUrl: 'https://files.catbox.moe/yx3cwi.jpg', sourceUrl: 'https://instagram.com/asuka-king' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://files.catbox.moe/yx3cwi.jpg', mediaType: 'VIDEO', description: 'SUBSCRIBE : YT CHANNEL', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://files.catbox.moe/yx3cwi.jpg', sourceUrl: 'https://youtube.com/@asuka-king' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://files.catbox.moe/c45s9o.jpg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'FOLLOW CHANNEL', body: '© ✦ᴀꜱᴜᴋᴀ ᴋɪɴɢ✦', thumbnailUrl: 'https://files.catbox.moe/c45s9o.jpg', sourceUrl: 'https://whatsapp.com/channel/0029Vb9cu0FIiRoxxrIMee3J }}}
    
} 
export default handler
