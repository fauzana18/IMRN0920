//Soal 1

console.log("Nomor 1");
console.log();

function range(startNum = null, finishNum = null){
    var num = [];

    if(startNum == null || finishNum == null){
        return -1;
    }

    else{
        if(startNum < finishNum){
            for(var i = startNum; i <= finishNum; i++){
                num.push(i);
            }
        }

        else{
            for(var i = startNum; i >= finishNum; i--){
                num.push(i);
            }
        }

        return num;
    }
}

console.log(range(1, 10))
console.log(range(1))
console.log(range(11, 18))
console.log(range(54, 50))
console.log(range())

console.log();

//Soal 2

console.log("Nomor 2");
console.log();

function rangeWithStep(startNum = null, finishNum = null, step = 1){
    var num2 = [];

    if(startNum == null || finishNum == null){
        return -1;
    }

    else{
        if(startNum < finishNum){
            for(var i = startNum; i <= finishNum; i+=step){
                num2.push(i);
            }
        }

        else{
            for(var i = startNum; i >= finishNum; i-=step){
                num2.push(i);
            }
        }

        return num2;
    }
}

console.log(rangeWithStep(1, 10, 2)) 
console.log(rangeWithStep(11, 23, 3))
console.log(rangeWithStep(5, 2, 1))
console.log(rangeWithStep(29, 2, 4))
console.log(rangeWithStep(4))
console.log(rangeWithStep(5, 12))

console.log();

//Soal 3

console.log("Nomor 3");
console.log();

function sum(startNum = null, finishNum = null, step = 1){
    var temp = rangeWithStep(startNum, finishNum, step);
    var hasil = 0;

    if(temp != -1){
        for(var i = 0; i < temp.length; i++){
            hasil += temp[i];
        }

        return hasil;
    }

    else if(startNum != null){
        return startNum;
    }

    else{
        return 0;
    }
}

console.log(sum(1,10))
console.log(sum(5, 50, 2))
console.log(sum(15,10))
console.log(sum(20, 10, 2))
console.log(sum(1))
console.log(sum())

console.log();

//Soal 4

console.log("Nomor 4");
console.log();

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data){
    for( var i = 0; i < data.length; i++){
        console.log("Nomor ID: ", data[i][0]);
        console.log("Nama Lengkap: ", data[i][1]);
        console.log("TTL: ", data[i][2], " ", data[i][3]);
        console.log("Hobi: ", data[i][4]);
        console.log();
    }
}

dataHandling(input);

console.log();

//Soal 5

console.log("Nomor 5");
console.log();

function balikKata(kata){
    var balik = [];
    var karakter = kata.length - 1;
    var jadi = "";
    for(var i = 0; i < kata.length; i++){
        balik[i] = kata[karakter];
        karakter--;
        jadi+=balik[i];
    }

    return jadi;
}

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I

console.log();

//Soal 6

console.log("Nomor 6");
console.log();

var input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data){
    var ttl;
    var bulan;
    var namaBulan;

    data.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    data.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(data);
    ttl = data[3].split("/");
    bulan = Number(ttl[1]);
    switch(bulan){
        case 1: { namaBulan = "Januari"; break;}
        case 2: { namaBulan = "Februari"; break;}
        case 3: { namaBulan = "Maret"; break;}
        case 4: { namaBulan = "April"; break;}
        case 5: { namaBulan = "Mei"; break;}
        case 6: { namaBulan = "Juni"; break;}
        case 7: { namaBulan = "Juli"; break;}
        case 8: { namaBulan = "Agustus"; break;}
        case 9: { namaBulan = "September"; break;}
        case 10: { namaBulan = "Oktober"; break;}
        case 11: { namaBulan = "November"; break;}
        case 12: { namaBulan = "Desember"; break;}
    }

    console.log(namaBulan);
    var urut = ttl.slice();
    
    for(var i = 0; i < urut.length; i++){
        urut[i] = Number(urut[i]);
    }

    urut.sort(function (a, b) { return b - a});

    for(var i = 0; i < urut.length; i++){
        urut[i] = String(urut[i]);
    }
    console.log(urut);

    var ttl2 = ttl.join("-");
    console.log(ttl2);

    var nama = data[1].split("");
    nama = nama.slice(0,14);
    nama = nama.join("");
    console.log(nama);
}

dataHandling2(input2);