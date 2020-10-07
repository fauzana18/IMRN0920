var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
var i = 0
function startRead(){
    readBooksPromise(10000, books[i])
    .then(function a (waktu){
        i++
        if(i < books.length){
            readBooksPromise(waktu, books[i]).then(a)
        }
    })
    .catch(function (waktu){
    })
}

startRead();