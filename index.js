
const {Telegraf} = require('telegraf')
const bot = new Telegraf
('2083818662:AAHdLAxfoLiVib8IWaIRKHUR7d2S__1rQhw');

bot.hears('Hi', ctx => ctx.reply('Привет,Юж! Тебя любит мышь'))

bot.hears('оир', ctx => {
const num = Math.floor(Math.random() * 2)
ctx.reply(num == 0 ? 'Орел' : 'Решка')})

bot.hears('pass', ctx =>{
    let pass = ''
    const symbs = 
    '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    for (let i = 0; i < 6; i++)
    pass += symbs[Math.floor(Math.random() * symbs.length)]
    ctx.reply(pass)
})

bot.launch();