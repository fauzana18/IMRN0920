//Soal 1

console.log("Nomor 1");
console.log();

var bil = 0;

console.log("LOOPING PERTAMA");
while(bil<20){
    bil+=2;
    console.log(String(bil), " - I love coding");
}

console.log("LOOPING KEDUA");
while(bil>0){
    console.log(String(bil), " - I will become a mobile developer");
    bil-=2;
}

console.log();

//Soal 2

console.log("Nomor 2");
console.log();

for(var i = 1; i <= 20; i++){
    if(i % 2 == 1){
        if(i % 3 == 0){
            console.log(String(i), " - I Love Coding");
        }

        else{
            console.log(String(i), " - Santai");
        }
    }

    else if(i % 2 == 0){
        console.log(String(i), " - Berkualitas");
    }
}

console.log();

//Soal 3

console.log("Nomor 3");
console.log();

for(var i = 0; i < 4; i++){
    var pagar = "";
    for(var  j = 0; j < 8; j++){
        pagar+="#";
    }
    console.log(pagar);
}

console.log();

//Soal 4

console.log("Nomor 4");
console.log();

var pagar2 = "";
for(var i = 0; i < 7; i++){
    pagar2+="#";
    console.log(pagar2);
}

console.log();

//Soal 5

console.log("Nomor 5");
console.log();

for(var i = 0; i < 8; i++){
    var papan = "";
    for(var  j = 0; j < 4; j++){
        if(i % 2 == 1){
            papan+="# ";
        }

        else{
            papan+=" #"
        }
    }
    console.log(papan);
}