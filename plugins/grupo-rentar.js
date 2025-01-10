const xpperyenes = 500;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^rentar/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperyenes) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);

  if (global.db.data.users[m.sender].yenes >= xpperyenes * count) {
    global.db.data.users[m.sender].yenes -= xpperyenes * count;
    global.db.data.users[m.sender].tokens += count;;

    let userRents = global.db.data.userRents || {};
    
    if (!userRents[m.sender]) {
      userRents[m.sender] = {
        tokens: 0,
        groups: []
      };
    }

    userRents[m.sender].tokens += count;

    global.db.data.userRents = userRents;

    conn.reply(m.chat, `
┌─『 𝐑𝐞𝐧𝐭𝐚𝐫 𝐚 𝐘𝐮𝐤𝐢 𝐒𝐮𝐨𝐮 』*
│╭──────────────┄
││ *Compra Nominal* : + ${count} Token
││ *Gastado* : -${xpperyenes * count} Yenes 💴
││ *Tokens Disponibles* : ${userRents[m.sender].tokens}
│╰──────────────┄
└──────────────`, m, rcanal);
  } else {
    conn.reply(m.chat, `😔 Lo siento, no tienes suficiente *Yenes 💴* para comprar *${count}* Token`, m, rcanal);
  }
};
handler.help = ['rentar'];
handler.tags = ['grupo'];
handler.register = true;
handler.command = ['rentar'];

handler.disabled = false;

export default handler;