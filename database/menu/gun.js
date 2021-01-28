const gun = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}iklan
  └─ ❏ ${prefix}bugreport
◪ *INFO BOT*
  │
  ├─ ❏ ${prefix}iklan 
  ├─ ❏ ${prefix}tnc
  └─ ❏ ${prefix}rules`
  
}
exports.gun = gun
