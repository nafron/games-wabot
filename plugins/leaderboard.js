let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedExp.length)
    let text = `
*SEASON 01 BERLANGSUNG SELAMA 20 - 21 APRIL RESET JAM 23:59*
HADIAH : 🏅 BANNER CLUBS FRONBOT S1
Yang Terpilih Juara 1 - 3
_Pemenang akan di Post Instragram @nafronam Setiap Season_
📊 *Level Leaderboard Top ${len}* 📊
Kamu: *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*

${sortedlevel.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.level + ' LEVEL*').join`\n`}

💰 *Money Leaderboard Top ${len}* 💰
Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*

${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.money + ' MONEY*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...userslevel.slice(0, len), ...usersmoney.slice(0, len)]
    }
  })
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

