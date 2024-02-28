// const { Telegraf, Markup } = require('telegraf')
// require('dotenv').config()

// const webAppUrl = 'https://ikeasharks.github.io/TRexRunner/'
// const bot = new Telegraf(process.env.BOT_TOKEN) //сюда помещается токен, который дал botFather


// bot.command('help', (ctx) => {
//   ctx.reply('Кнопка', {
//     reply_markup: {
//       inline_keyboard: [[{
//           text:'Форма', 
//           web_app: {
//             url: webAppUrl}
//         }
//       ]
//     ]},
//   })
// })


// const getInvoice = (id) => {
//   const invoice = {
//     chat_id: id, // Уникальный идентификатор целевого чата или имя пользователя целевого канала
//     provider_token: process.env.PAY_TOKEN, // токен выданный через бот @SberbankPaymentBot 
//     start_parameter: 'get_access', //Уникальный параметр глубинных ссылок. Если оставить поле пустым, переадресованные копии отправленного сообщения будут иметь кнопку «Оплатить», позволяющую нескольким пользователям производить оплату непосредственно из пересылаемого сообщения, используя один и тот же счет. Если не пусто, перенаправленные копии отправленного сообщения будут иметь кнопку URL с глубокой ссылкой на бота (вместо кнопки оплаты) со значением, используемым в качестве начального параметра.
//     title: 'InvoiceTitle', // Название продукта, 1-32 символа
//     description: 'InvoiceDescription', // Описание продукта, 1-255 знаков
//     currency: 'RUB', // Трехбуквенный код валюты ISO 4217
//     prices: [{ label: 'Invoice Title', amount: 100 * 100 }], // Разбивка цен, сериализованный список компонентов в формате JSON 100 копеек * 100 = 100 рублей
//     photo_url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/JavaScriptBot/Unlock.png', // URL фотографии товара для счета-фактуры. Это может быть фотография товара или рекламное изображение услуги. Людям больше нравится, когда они видят, за что платят.
//     photo_width: 500, // Ширина фото
//     photo_height: 281, // Длина фото
//     payload: { // Полезные данные счета-фактуры, определенные ботом, 1–128 байт. Это не будет отображаться пользователю, используйте его для своих внутренних процессов.
//       unique_id: `${id}_${Number(new Date())}`,
//       provider_token: process.env.PAY_TOKEN 
//     }
//   }

//   return invoice
// }


// bot.use(Telegraf.log())

// bot.hears('pay', (ctx) => { // это обработчик конкретного текста, данном случае это - "pay"
//   return ctx.replyWithInvoice(getInvoice(ctx.from.id)) //  метод replyWithInvoice для выставления счета  
// })
// bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true)) // ответ на предварительный запрос по оплате

// bot.on('successful_payment', async (ctx, next) => { // ответ в случае положительной оплаты
//   await ctx.reply('SuccessfulPayment')
// })
// bot.launch()

const imgSrcs = ['https://img.freepik.com/free-photo/cute-domestic-kitten-sits-at-window-staring-outside-generative-ai_188544-12519.jpg?w=2000&t=st=1709120394~exp=1709120994~hmac=d1d99685c79c6596659347f1a26e2eea960be3becefd951005b0dfb26f6fca25', 'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-at-window-staring-outside-generative-ai_188544-12519.jpg?w=2000&t=st=1709120394~exp=1709120994~hmac=d1d99685c79c6596659347f1a26e2eea960be3becefd951005b0dfb26f6fca25', 'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-at-window-staring-outside-generative-ai_188544-12519.jpg?w=2000&t=st=1709120394~exp=1709120994~hmac=d1d99685c79c6596659347f1a26e2eea960be3becefd951005b0dfb26f6fca25','https://img.freepik.com/free-photo/cute-domestic-kitten-sits-at-window-staring-outside-generative-ai_188544-12519.jpg?w=2000&t=st=1709120394~exp=1709120994~hmac=d1d99685c79c6596659347f1a26e2eea960be3becefd951005b0dfb26f6fca25', 'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-at-window-staring-outside-generative-ai_188544-12519.jpg?w=2000&t=st=1709120394~exp=1709120994~hmac=d1d99685c79c6596659347f1a26e2eea960be3becefd951005b0dfb26f6fca25', 'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-at-window-staring-outside-generative-ai_188544-12519.jpg?w=2000&t=st=1709120394~exp=1709120994~hmac=d1d99685c79c6596659347f1a26e2eea960be3becefd951005b0dfb26f6fca25']
const div_card = document.querySelector('.container')

for(let i = 0; i < imgSrcs.length; i++){

  div_card.innerHTML += `<div class="card"><a href=""><img src="${imgSrcs[0]}" class="card-img-top" alt="..."></a></div>`

}

