let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'

  const avatar = await conn
    .profilePictureUrl(m.sender, 'image')
    .catch(_ => 'https://files.catbox.moe/aov1f2.jpg')
  const displayName = conn.getName(m.sender)
  const username = m.sender.split('@')[0]
  const replies = '69' // Replace with the desired value
  const retweets = '69' // Replace with the desired value
  const theme = 'dark' // Replace with the desired value

  const url = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayName)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`

  conn.sendFile(m.chat, url, 'tweet.png', '*THANKS FOR TWEETING*', m)
}

handler.help = ['tweet <comment>']
handler.tags = ['maker']
handler.command = /^(tweet)$/i

export default handler
