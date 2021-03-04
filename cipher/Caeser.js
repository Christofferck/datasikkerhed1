//tjekker hvis bogstaven er uppercase
function isUpperCase(str) {
   return str === str.toUpperCase();
}
//decipher stringen
let ceaserCipher = (str, key) => {
 let decipher = '';
 
 //decipherer hvert bogstav, finder den en så bliver den tilføjet
 for(let i = 0; i < str.length; i++){
   
   //Hvis bogstaven er en uppercase, så tilføjer den en uppercase bogstav
   if(isUpperCase(str[i])){
     decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65); //65 og 97 er basicly hvor upper og lower case starter i unicode 
   }else{
     //else tilføjer den en lowercase bogstav
     decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97); //65 og 97 er basicly hvor upper og lower case starter i unicode 
   }
 }
 
 return decipher; //Returnerer decipher variablen
}
Input:
console.log(ceaserCipher('ABC', 3)); //console.logger ABC og i stedet skriver de næste 3 bogstaver i alfabetet i dette tilfælde "DEF"

