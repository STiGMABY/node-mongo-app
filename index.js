//поделючаем пакеты
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

//обозначаем порт запуска. Если есть системная переменная порт иначе берем с 3000
const PORT = process.env.PORT || 3000

//создаем объект нашего приложения
const app = express()

//настроиваем HTML движок express-handlebars. Create позволяет настроить конфигурации для будущго шаблонизатора
const hbs = exphbs.create({
    defaultLayout: 'main', //название дефолтного лэйаута
    extname: 'nbs'  //меняем названия расширений файлов express-handlebars на .hbs
})

//регистрируем ключ engine в переменной hbs.
//engine - движок для рендеринга страниц в express, даем ему назание hbs
//первый парамерт название hbs, второй переадем значение
app.engine('hbs', hbs.engine)  //тем самым зарегистрировали движое engine по ключу hbs
//теперь можем его использовать
app.set('view engine', 'hbs') //указываем зарегистрированый ключ 'view engine' и значение 'hbs'
//регистрируем папку где будет хваниться все виды нашего сайта
app.set('views', 'views')

async function start() {
    try {
        //подключаемся с помощью express к MongoDB
        await mongoose.connect('mongodb+srv://Admin:Admin@cluster0.0lwcj.mongodb.net/Cluster0?retryWrites=true&w=majority',
            {
                //mongodb+srv://Admin:Admin@cluster0.0lwcj.mongodb.net/Cluster0?retryWrites=true&w=majority
                //передаем объект конфигурации, два ключа. Для того, что бы не было warning в консоли
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )
        //Обращаемся к переменной app и вызываю функцию listen которая запускае приложение
        app.listen(PORT, () => {
            console.log('Server has been started on port: ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()