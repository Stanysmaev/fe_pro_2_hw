const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

var key = generateKey(16, characters);
console.log(`Random string of symbols: ${key}`); // eg599gb60q926j8i

function generateKey(num, kitOfSymbols){
  var password = "";
  for (i = 0; i < num; i++) {
    let randomNumber = Math.floor(Math.random() * kitOfSymbols.length);
    password += kitOfSymbols.substring(randomNumber, randomNumber +1);
  }
  return password;
};

// function generateKey(num, kitOfSymbols){
//   //Второй вариант
//   var password = "";
//   for (var i = 0; i < num; i++){
//     password += kitOfSymbols.charAt(Math.floor(Math.random() * kitOfSymbols.length));     
//   }
//   return password;
// };