// Перший варіант створення
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(`Random string of symbols: ${key}`);

function generateKey(length, kitOfSymbols){
  let password = "";
  for (i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * kitOfSymbols.length);
    password += kitOfSymbols.substring(randomNumber, randomNumber +1);
  }
  return password;
};




// Другий варіант створення
const characters2 = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key2 = generateKey2(16, characters);
console.log(`Random string of symbols: ${key2}`);

function generateKey2(num, kitOfSymbols){
  let password2 = "";
  for (let i = 0; i < num; i++){
    password2 += kitOfSymbols.charAt(Math.floor(Math.random() * kitOfSymbols.length));     
  }
  return password2;
};





// Третій варіант створення
let characters3 = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key3 = '';
for(let i = 0; i < 16; i++){
  key3 += characters3[Math.round(Math.random() * (characters3.length - 1))];
}
console.log(`Random string of symbols: ${key3}`);