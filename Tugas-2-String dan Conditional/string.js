//Soal 1
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
var a = ' ';

console.log("Nomor 1");
console.log(word.concat(a, second, a, third, a, fourth, a, fifth, a, sixth, a, seventh));
console.log();

//Soal 2
var sentence = "I am going to be React Native Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; 
var fourthWord = sentence[11] + sentence[12]; 
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28];
var eighthWord = sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38];

console.log("Nomor 2");
console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
console.log();

//Soal 3
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17); 
var fourthWord2 = sentence2.substring(18, 20); 
var fifthWord2 = sentence2.substring(21); 

console.log("Nomor 3");
console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);
console.log();

//Soal 4

var firstWordLength = exampleFirstWord2.length;
var secondWordLength = secondWord2.length;
var thirdWordLength = thirdWord2.length;
var fourthWordLength = fourthWord2.length;
var fifthWordLength = fifthWord2.length;

console.log("Nomor 4");
console.log('First Word: ' + exampleFirstWord2 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord2 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord2 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord2 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord2 + ', with length: ' + fifthWordLength);