
function swaping() {
    let a = 10;
    let b = 20;

    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a);
    console.log(b);
}

function stringReverse() {
    let name = "Ashish yadav";
    for (let i = name.length - 1; i >= 0; i--) {
        let rev: string = name.charAt(i);
        console.log(rev);

    }
}

function CharacterReverse() {
    let name = "Ashish kumar yadav"
    let sp: string[] = name.split(" ");

    for (let i = sp.length - 1; i >= 0; i--) {
        let rev: string = sp[i];
        console.log(rev);

    }
}


function nameSpli() {

    let name = "Ashish kumar yadav";
    let sp: string[] = name.split(" ");

    for (let i = 0; i < sp.length; i++) {
        let rev = "";
        for (let j = sp[i].length - 1; j >= 0; j--) {
            rev += sp[i][j];

        }
        console.log(rev);

    }

}


// nameSpli();


function rev() {
    let name = "ashish kumar yadav";
    let sp = name.split(" ");
    let result = [];
    for (let word of sp) {
        let rev = " ";

        for (let i = word.length - 1; i >= 0; i--) {
            rev = rev + word[i];

        }
        result.push(rev);

    }
    console.log(result.join(" "))
}
// rev();
// nameSpli() ;

function CountVowels() {
    let name = "Ashish kumar yadav";
    let count = 0;

    for (let ch of name.toLowerCase()) {
        if ("aeiou".includes(ch)) {
            count++;
        }

    }

}

function vowelsCount() {
    let name = "ashish yadav";
    let vowel = 0;
    let consonent = 0;
    let char = " ";
    for (let i = 0; i <= name.length - 1; i++) {
        char = name.charAt(i);

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            vowel++
        } else {
            consonent++
        }
    }
    console.log(vowel);
    console.log(consonent);
}
// vowelsCount();


function vowels() {
    let name = "ashish yadav";
    let vowel = 0;
    for (let i = 0; i < name.length; i++) {
        if ("aeiou".includes(name[i])) vowel++;
        console.log(vowel);
    }
}

// vowels();

function Polindrom() {
    let number = 123214;
    let collect = number;
    let store = 0;
    let remainder;
    while (number > 0) {
        remainder = number % 10;
        store = store * 10 + remainder;
        number = number / 10;
    }
    console.log(store);
    if (collect == store) {
        console.log("This is polindrom number");
    } else {
        console.log("This is not polindrom number");
    }
}


function numberRevers() {
    let number = 123456789;
    let store = 0;
    let remainder;
    while (number > 0) {
        remainder = number % 10;
        store = store * 10 + remainder;
        number = (number - remainder) / 10;
    }
    console.log(store);
}
function findSingleNumberArray() {

    let a = [1, 2, 3, 4, 3, 2, 1];
    let result = 0;
    for (let i = 0; i < a.length; i++) {//This code uses the XOR (^) operator to find the element that appears only once in an array.
        result = result ^ a[i];
    }
    console.log(result);
}


function Occurence(){

    let name= "ashish";
    for(let i=0; i<name.length; i++){
let count=0;
      for(let j=0; j<name.length; j++){


        if(name[i]==name[j]){
            count++;
        }
      }
      console.log(name[i]+"="+count);
    
    }
}
function DB(){
    let str = "12Dhruv45$@";

let number = 0;
let alphabet = 0;
let specialCharacter = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (ch >= '0' && ch <= '9') {
        number++;
    }
    else if ((ch >= 'A' && ch <= 'Z') ||
             (ch >= 'a' && ch <= 'z')) {
        alphabet++;
    }
    else {
        specialCharacter++;
    }
}

console.log("Numbers = " + number);
console.log("Alphabets = " + alphabet);
console.log("Special Characters = " + specialCharacter);
}

function PrintStarPattern(){

for(let i=0;i < 5;i++){
  
for(let j=1;j<5;j++){

process.stdout.write("*"+" ");


}
console.log("*");
}}


function PrintStarTrangle(){
for(let i=1;i <= 5;i++){
  
for(let j=1;j<=i;j++){

process.stdout.write("*"+" ");
}
console.log("*");
}}


function PrintStarTrangl(){

for(let i=1;i <= 5;i++){
  
for(let j=i;j<=5;j++){

process.stdout.write("*"+" ");


}
console.log("*");
}}


function PrintStar(){

for(let i=0;i < 5;i++){
  
for(let j=i;j< 5;j++){

process.stdout.write("*"+" ");


}
console.log("*");
}}





PrintStar();
// PrintStarTrangl();

// PrintStarTrangle();