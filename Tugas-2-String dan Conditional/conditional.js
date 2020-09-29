//Soal if-else

var nama = "Fauzan";
var peran = "Guard";

console.log("if-else section");
console.log();

if(nama != ""){
    if(peran == "Penyihir"){
        console.log("Selamat datang di Dunia Werewolf, ", nama);
        console.log("Halo Penyihir ", nama, ", kamu dapat melihat siapa yang menjadi werewolf!");
    }
    
    else if(peran == "Guard"){
        console.log("Selamat datang di Dunia Werewolf, ", nama);
        console.log("Halo Guard ", nama, ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
    }

    else if(peran == "Werewolf"){
        console.log("Selamat datang di Dunia Werewolf, ", nama);
        console.log("Halo Werewolf ", nama, ", kamu akan memakan mangsa setiap malam!");
    }

    else{
        console.log("Halo ", nama, ", pilih peranmu untuk memulai game!");
    }
}

else{
    console.log("Nama harus diisi!");
}

console.log();

//Soal switch-case

var hari = 18;
var bulan = 7;
var tahun = 1997;
var namaBulan;

console.log("switch-case section");
console.log();

switch(bulan){
    case 1: { namaBulan = "Januari"; break; }
    case 2: { namaBulan = "Februari"; break; }
    case 3: { namaBulan = "Maret"; break; }
    case 4: { namaBulan = "April"; break; }
    case 5: { namaBulan = "Mei"; break; }
    case 6: { namaBulan = "Juni"; break; }
    case 7: { namaBulan = "Juli"; break; }
    case 8: { namaBulan = "Agustus"; break; }
    case 9: { namaBulan = "September"; break; }
    case 10: { namaBulan = "Oktober"; break; }
    case 11: { namaBulan = "November"; break; }
    case 12: { namaBulan = "Desember"; break; }
}

console.log(String(hari), " ", namaBulan, " ", String(tahun));