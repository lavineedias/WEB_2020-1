var mongoose = require('mongoose')
//para não ter cola, irei por minha assinatura
//LDB..

mongoose.set('useFindAndModify', false)

var mongoDB = 'mongodb://127.0.0.1:27017/crud-disciplinas'

mongoose.connect(mongoDB, { useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log('Mongoose Connected to ' + mongoDB);
});
db.on('disconnected', () => {
    console.log('Mongoose Disconnected to ' + mongoDB);
});
db.on('error', (err) => {
    console.log('Mongoose Error: ' + err);
});
