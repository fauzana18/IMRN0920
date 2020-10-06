//Soal 1

console.log("Nomor 1");
console.log();

const golden = () => {
    console.log("this is golden!!")
}
   
golden();

console.log();

//Soal 2

console.log("Nomor 2");
console.log();

const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(firstName + " " + lastName)
        return 
      }
    }
}
   
newFunction("William", "Imoh").fullName() 

console.log();

//Soal 3

console.log("Nomor 3");
console.log();

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation} = newObject;

console.log(firstName, lastName, destination, occupation)

console.log();

//Soal 4

console.log("Nomor 4");
console.log();

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];

console.log(combined)

console.log();

//Soal 5

console.log("Nomor 5");
console.log();

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
console.log(before);