const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

client.once('ready', () => {
    console.log('Bot is online');
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let hero = 1;
    let tank = 1;
    let dps = 1;
    let heal = 1;
    
    function randomHero(){
        hero = Math.floor(Math.random() * 31);
        if (hero == 0){
            hero = 'D.va'
        }
        if (hero == 1){
            hero = 'Orisa'
        }
        if (hero == 2){
            hero = 'Reinhardt'
        }
        if (hero == 3){
            hero = 'Roadhog'
        }
        if (hero == 4){
            hero = 'Sigma'
        }
        if (hero == 5){
            hero = 'Winston'
        }
        if (hero == 6){
            hero = 'Wrecking ball'
        }
        if (hero == 7){
            hero = 'Zarya'
        }
        if (hero == 8){
            hero = 'Ashe'
        }
        if (hero == 9){
            hero = 'Bastion'
        }
        if (hero == 10){
            hero = 'Cassidy'
        }
        if (hero == 11){
            hero = 'Doomfist'
        }
        if (hero == 12){
            hero = 'Echo'
        }
        if (hero == 13){
            hero = 'Genji'
        }
        if (hero == 14){
            hero = 'Hanzo'
        }
        if (hero == 15){
            hero = 'Junkrat'
        }
        if (hero == 16){
            hero = 'Mei'
        }
        if (hero == 17){
            hero = 'Pharah'
        }
        if (hero == 18){
            hero = 'Reaper'
        }
        if (hero == 19){
            hero = 'Soldier: 76'
        }
        if (hero == 20){
            hero = 'Sombra'
        }
        if (hero == 21){
            hero = 'Symmetra'
        }
        if (hero == 22){
            hero = 'Torbjörn'
        }
        if (hero == 23){
            hero = 'Tracer'
        }
        if (hero == 24){
            hero = 'Widowmaker'
        }
        if (hero == 25){
            hero = 'Ana'
        }
        if (hero == 26){
            hero = 'Baptiste'
        }
        if (hero == 27){
            hero = 'Brigitte'
        }
        if (hero == 28){
            hero = 'Lúcio'
        }
        if (hero == 29){
            hero = 'Mercy'
        }
        if (hero == 30){
            hero = 'Moira'
        }
        if (hero == 31){
            hero = 'Zenyatta'
        }
        return hero
    }

    randomHero()

    function randomTank(){
        tank = Math.floor(Math.random() * 8);
        if (tank == 0){
            tank = 'D.va';
        }
        if (tank == 1){
            tank = 'Orisa';
        }
        if (tank == 2){
            tank = 'Reinhardt';
        }
        if (tank == 3){
            tank = 'Roadhog';
        }
        if (tank == 4){
            tank = 'Sigma';
        }
        if (tank == 5){
            tank = 'Winston';
        }
        if (tank == 6){
            tank = 'Wrecking ball';
        }
        if (tank == 7){
            tank = 'Zarya';
        }
        return tank
    }
    randomTank()

    function randomDps(){
        dps = Math.floor(Math.random()  * (25 - 8) ) + 8;;
        if (dps == 8){
            dps = 'Ashe'
        }
        if (dps == 9){
            dps = 'Bastion'
        }
        if (dps == 10){
            dps = 'Cassidy'
        }
        if (dps == 11){
            dps = 'Doomfist'
        }
        if (dps == 12){
            dps = 'Echo'
        }
        if (dps == 13){
            dps = 'Genji'
        }
        if (dps == 14){
            dps = 'Hanzo'
        }
        if (dps == 15){
            dps = 'Junkrat'
        }
        if (dps == 16){
            dps = 'Mei'
        }
        if (dps == 17){
            dps = 'Pharah'
        }
        if (dps == 18){
            dps = 'Reaper'
        }
        if (dps == 19){
            dps = 'Soldier: 76'
        }
        if (dps == 20){
            dps = 'Sombra'
        }
        if (dps == 21){
            dps = 'Symmetra'
        }
        if (dps == 22){
            dps = 'Torbjörn'
        }
        if (dps == 23){
            dps = 'Tracer'
        }
        if (dps == 24){
            dps = 'Widowmaker'
        }
        return tank
    }
    randomDps()

    function randomHeal(){
        heal = Math.floor(Math.random() * (32 - 25) ) + 25;;
        if (heal == 25){
            heal = 'Ana'
        }
        if (heal == 26){
            heal = 'Baptiste'
        }
        if (heal == 27){
            heal = 'Brigitte'
        }
        if (heal == 28){
            heal = 'Lúcio'
        }
        if (heal == 29){
            heal = 'Mercy'
        }
        if (heal == 30){
            heal = 'Moira'
        }
        if (heal == 31){
            heal = 'Zenyatta'
        }
        return dps
    }
    randomHeal()

    if(command === 'hero'){
        message.channel.send(`${hero}`)
    } else if(command === 'tank') {
        message.channel.send(`${tank}`)
    } else if(command === 'dps') {
        message.channel.send(`${dps}`)
    } else if(command === 'heal') {
        message.channel.send(`${heal}`)
    }
})







client.login('OTUwMDg4MDM2MDY5MzA2NDA4.YiT0bw.eTeEuVacel1ZgXOYUtBlhlTb0nw');