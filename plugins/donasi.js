let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [081252733108]
│ • Gopay [081252733108]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281252733108
│Tapi tidak punya uang? Follow @nafronanjayy Agar bot tetap Jalan ✓
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
