//Soal 1

console.log("Nomor 1");
console.log();

function teriak(){
    return "Halo Sanbers!";
}
console.log(teriak());

console.log();

//Soal 2

console.log("Nomor 2");
console.log();

function kalikan(num1, num2){
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);

console.log(hasilKali);

console.log();

//Soal 3

console.log("Nomor 3");
console.log();

function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya " + String(age) + " tahun, alamat saya di " + address + " dan saya punya hobby yaitu " + hobby + "!";
}

var name = "Fauzan";
var age = 23;
var address = "Pondok Gede, Bekasi";
var hobby = "Tidur";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);