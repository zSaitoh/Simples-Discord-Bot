const Discord = require('discord.js'); // Discord.js

const client = new Discord.Client(); // Client

// Adicionando o token ao seu bot. (Lembrando que, para seu bot ligar precisa do token e *NUNCA* passe esse token para ninguém!!)
client.login("token");

// Eventos:
client.on('ready', () =>{ // Quando o bot iniciar:
    console.log(`${client.user.username} iniciado!`);
});

client.on('message', message =>{ // Evento de mensagem: Quando alguém enviar uma mensagem esse evento vai ser executado
    if(message.content == 'Oi'){ // Se a mensagem enviada for "Oi"
        message.channel.send("Oi") // O bot vai enviar "Oi" '-' kkj
    }
});



// EM BREVE MAIS COISAS!
