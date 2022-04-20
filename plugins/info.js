let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('Tunggu Sebentar Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
┏━━━━━『𝐅𝐑𝐎𝐍 𝐁𝐎𝐓』━━━━━
┃ *Versi:* 3 🎮
┃
┃➜⚙️ APA YANG BARU?
┣ Fronbot Season 01 Telah Hadir !!
┣ Pembaruan Sistem
┃
┣『HAY SAYA 𝐅𝐑𝐎𝐍 𝐁𝐎𝐓 』
┃> Di Jalankan Oleh Bang Nafron
┃➜ ❗Harap Mematuhi Peraturan 𝐅𝐑𝐎𝐍 𝐁𝐎𝐓
┃Tidak Patuh? Blokir / Blacklist
┣❀ ⚠️SYARAT & KETENTUAN 
┃『𝐅𝐑𝐎𝐍 𝐁𝐎𝐓』
┃
┃➜ *ADMIN DAPAT MELIHAT AKTIVITAS*
┃   *PENGGUNA FRON BOT*
┃➜ *FRON BOT DAPAT MENYIMPAN FOTO*
┃   *KAMU DI DATABASE*
┃   *TERMASUK NOMOR DAN LAIN²*
┃➜ *MEMATUHI PERATURAN GROUP*
┃   *KIRIM VIRTEX ATAU SEJENISNYA*
┃   *DAN SPAM AUTO BLOKIR*
┃ 
┃ 
┣❀©2022 𝗡𝗮𝗳𝗿𝗼𝗻
┣ Follow Tiktok @nafronanjayy
┗━━━━━『𝐅𝐑𝐎𝐍 𝐁𝐎𝐓』 ┅
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
