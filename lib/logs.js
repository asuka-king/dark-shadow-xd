/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝗔𝗦𝗨𝗞𝗔 𝗞𝗜𝗡𝗚 -->>> 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗗𝗔𝗥𝗞 𝗕𝗢𝗧
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
created by ᴀꜱᴜᴋᴀ-ᴋɪɴɢ 🕵
contact me 94769484004 ♻️
ᴄᴏᴘʏ ᴄᴏᴅᴇʀ ᴀʟᴇʀᴛ ☐☐☐
*/


let stdouts = []
export default (maxLength = 200) => {
  let oldWrite = process.stdout.write.bind(process.stdout)
  module.exports.disable = () => {
    module.exports.isModified = false
    return (process.stdout.write = oldWrite)
  }
  process.stdout.write = (chunk, encoding, callback) => {
    stdouts.push(Buffer.from(chunk, encoding))
    oldWrite(chunk, encoding, callback)
    if (stdouts.length > maxLength) stdouts.shift()
  }
  module.exports.isModified = true
  return module.exports
}

export const isModified = false
export function logs() {
  return Buffer.concat(stdouts)
}
