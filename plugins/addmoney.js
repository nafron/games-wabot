let { MessageType } = require('@adiwajshing/baileys')
const cooldown = 10
let handler = async (m, { conn }) => {
    let user = global.DATABASE._data.users[m.sender]
    let _timers = (cooldown - (new Date - user.lastweekly))
    let timers = clockString(_timers)
    if (new Date - user.lastweekly > cooldown) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 99999999999999 💵money dan 3 🎁Legendary crate`, m)
        user.money += 99999999999999
        user.legendary += 300000
        user.lastweekly = new Date * 1
    } else {
        let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
    }
}
handler.help = ['addmoney']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i

handler.cooldown = cooldown

module.exports = handler