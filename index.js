const { Client, Intents } = require('discord.js');

const { MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

client.once('ready', () => {
    console.log('Bot is online');
});

const Embed = new MessageEmbed().setColor('BLURPLE')

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let hero = 1;
    let tank = 1;
    let dps = 1;
    let heal = 1;
    
    function randomHero(max, min){
        hero = Math.floor(Math.random() * (max - min) ) + min;
        if (hero == 0){
            Embed.setTitle('Dva')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 1){
            Embed.setTitle('Orisa')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/orisa/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 2){
            Embed.setTitle('Reinhardt')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 3){
            Embed.setTitle('Roadhog')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 4){
            Embed.setTitle('Sigma')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/sigma/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 5){
            Embed.setTitle('Winston')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/winston/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 6){
            Embed.setTitle('Wrecking Ball')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/wrecking-ball/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 7){
            Embed.setTitle('Zarya')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 8){
            Embed.setTitle('Ashe')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 9){
            Embed.setTitle('Bastion')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 10){
            Embed.setTitle('Cassidy')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/cassidy/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 11){
            Embed.setTitle('Doomfist')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 12){
            Embed.setTitle('Echo')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/echo/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 13){
            Embed.setTitle('Genji')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 14){
            Embed.setTitle('Hanzo')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 15){
            Embed.setTitle('Junkrat')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 16){
            Embed.setTitle('Mei')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 17){
            Embed.setTitle('Pharah')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 18){
            Embed.setTitle('Reaper')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 19){
            Embed.setTitle('Soldier: 76')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 20){
            Embed.setTitle('Sombra')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 21){
            Embed.setTitle('Symmetra')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 22){
            Embed.setTitle('Torbjörn')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 23){
            Embed.setTitle('Tracer')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 24){
            Embed.setTitle('Widowmaker')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 25){
            Embed.setTitle('Ana')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 26){
            Embed.setTitle('Baptiste')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/baptiste/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 27){
            Embed.setTitle('Brigitte')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 28){
            Embed.setTitle('Lúcio')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 29){
            Embed.setTitle('Mercy')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 30){
            Embed.setTitle('Moira')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/moira/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        if (hero == 31){
            Embed.setTitle('Zenyatta')
            Embed.setThumbnail('https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/icon-portrait.png')
            hero = { embeds: [Embed] }
        }
        return hero
    }


   
    if(command === 'hero'){
        randomHero(0, 32)
        message.channel.send(hero)
    } else if(command === 'tank') {
        randomHero(0, 8)
        message.channel.send(hero)
    } else if(command === 'dps') {
        randomHero(8, 25)
        message.channel.send(hero)
    } else if(command === 'heal') {
        randomHero(25, 32)
        message.channel.send(hero)
    }
})
client.login('OTUwMDg4MDM2MDY5MzA2NDA4.YiT0bw.eTeEuVacel1ZgXOYUtBlhlTb0nw');