const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Contoh donwload Ketik ${usedPrefix}${command} https://vt.tiktok.com/ZSdLBKfk7/`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `
*Berhasil Kakak! Jangan lupa Follow tiktok admin 😁 @nafronanjayy*
🧏 *Nama:* ${nickname}${description ? `🖹 *Deskripsi:* ${description}` : ''}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler