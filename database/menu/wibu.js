const wibu = (prefix, botName, ownerName) => {
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
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  ├─ ❏ ${prefix}pokemon
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}randomanime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}husbu2
  ├─ ❏ ${prefix}wait
  └─ ❏ ${prefix}nekonime`
}
exports.wibu = wibu
