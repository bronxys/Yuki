let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    // await conn.sendMessage(m.chat, { react: { text: '🌷', key: m.key } })
 await m.react('🌷')
let str = `*📍 GRUPOS OFICIALES*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙🌹̶̩ܻᝒ̷̸꯭͙𝐘𝐮𝐤𝐢_𝐒𝐮𝐨𝐮-𝐁𝐨𝐭𓆩֟֯፝⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔ ̶̷̸͟͞_*
  ┃🪷❏ ${gp4}

   *_ ͟͞〾⃝̵͡♡⃝𝓨𝓾𝓴𝓲 𝓢𝓾𝓸𝓾 𝓑𝓸𝓽 𝓞𝓯𝓲𝓬𝓲𝓪𝓵ᚐ҉ᚐ_*
┃🌸❏ https://chat.whatsapp.com/E78uEs2qJIE0apCLB7rSQZ
   
   *_❦𝒴𝓊𝓀𝒾 𝒮𝓊𝑜𝓊 𝐵𝑜𝓉  𝒩𝐹𝒮𝒲☙_*
┃🥀❏ https://chat.whatsapp.com/BELmEmNjNlv36w7ElRrOKa

   *_✿:･ﾟ✧ 𝒴𝒰𝒦𝐼 𝒮𝒰𝒪𝒰 𝐵𝒪𝒯 ✧ﾟ･:✿_*
┃🍒❏ https://chat.whatsapp.com/BuLovToIxdiLeycG2d3xJN

   *_♡⃝𝒞𝐻𝒜𝒩𝒩𝐸𝐿 𝒴𝒰𝒦𝐼 𝒮𝒰𝒪𝒰ᚐ҉ᚐ_*
┃🌹❏ https://whatsapp.com/channel/0029VapSIvR5EjxsD1B7hU3T
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜ৎ୭࠱࠭ ͟͞\n` + wm, media, [
['MENU 🌹', '#menu']], null, [
['⏤͟͞ू⃪ ፝͜⁞𝐘𝐮𝐤𝐢_𝐒𝐮𝐨𝐮-𝐁𝐨𝐭✰⃔࿐', `${md}`]], fkontak)}
                      
handler.command = ['grupos','links','gruposofc','gruposoficiales']
handler.register = true
//handler.exp = 33

export default handler