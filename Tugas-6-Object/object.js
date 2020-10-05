//Soal 1

console.log("Nomor 1");
console.log();

function arrayToObject(arr) {
    for(var i = 0; i < arr.length; i++){
        var peopleObj = {};
        var now = new Date();
        var thisYear = now.getFullYear();

        peopleObj.firstName = arr[i][0];
        peopleObj.lastName = arr[i][1];
        peopleObj.gender = arr[i][2];
        if(arr[i][3] < thisYear){
            peopleObj.age = thisYear - arr[i][3];
        }
        
        else{
            peopleObj.age = "Invalid Birth Year";
        }

        console.log((i+1) + ". " + peopleObj.firstName + " "  + peopleObj.lastName + ": ");
        console.log(peopleObj);
    }
}
 
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people);
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
arrayToObject(people2);

arrayToObject([]);

console.log();

//Soal 2

console.log("Nomor 2");
console.log();

function shoppingTime(memberId, money) {
    var items = [["Sepatu Stacattu", 1500000], ["Baju Zoro", 500000], ["Baju H&N", 250000], 
    ["Sweater Uniklooh", 175000], ["Casing Handphone", 50000]];
    var belanja = [];
    var sisa = money;
    var shopObj = {
        memberId: memberId,
        money: money
    };

    if(memberId == null || memberId == ""){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }

    else if(money < 50000){
        return "Mohon maaf, uang tidak cukup";
    }

    else{
        for(var i = 0; i < items.length; i++){
            if(money >= items[i][1]){
                belanja.push(items[i][0]);
                sisa -= items[i][1];
            }
        }

        shopObj.listPurchased = belanja;
        shopObj.changeMoney = sisa;

        return shopObj;
    }
  }
   
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

console.log();

//Soal 3

console.log("Nomor 3");
console.log();

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var listPenumpang = [];
    for(var i = 0; i < arrPenumpang.length; i++){
        var harga = 0;
        var penumpangObj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2]
        };

        for(var j = rute.indexOf(penumpangObj.naikDari); j < rute.indexOf(penumpangObj.tujuan); j++){
            harga += 2000;
        }
        penumpangObj.bayar = harga;

        listPenumpang[i] = penumpangObj;
    }
    return listPenumpang;
  }
   
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));