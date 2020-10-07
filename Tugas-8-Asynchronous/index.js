// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
var i = 0
function myCallback(waktu){
    i++
    if(i < books.length){
        readBooks(waktu, books[i], myCallback)
    }
    
    else{
        console.log("Buku sudah habis")
    }
}
readBooks(10000, books[i], myCallback)