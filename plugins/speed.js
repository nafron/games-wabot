let { performance } = require('perf_hooks')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, DevMode }) => {
    try {
        let old = performance.now()
        await m.reply('_𝐅𝐑𝐎𝐍 𝐁𝐎𝐓 Testing speed..._')
        let neww = performance.now()
        m.reply ⚡𝑲𝑬𝑪𝑬𝑷𝑨𝑻𝑨𝑵 𝑩𝑶𝑻 (neww - old + 'ms')
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Speed.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
