//поделючаем пакеты
const express = require('express')
const mongoose = require('mongoose')

//обозначаем порт запуска. Если есть системная переменная порт иначе берем с 3000
const PORT =  process.env.PORT || 3000

//создаем объект нашего приложения
const app = express()

//Обращаемся к переменной app и вызываю функцию listen которая запускае приложение
app.listen(PORT, ()=>{
    console.log('Server has been started on port: ', PORT)
})