// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let ArrayOfUser = [];
numOfElements = prompt('Введіть кількість елементів масиву:', 3); // кількість елементів масиву
console.log("Кількість елементів масиву: " + numOfElements);

for(var i=0; i < numOfElements; i++) {
  ArrayOfUser[i] = prompt(`Введіть елемент масиву № ${i + 1}:`, +i); // заповнення масивву
};

console.log("Масив, введений юзером: " + ArrayOfUser);

function compare(a, b){
// if (a > b) return 1;
// if (a == b) return 0;
// if (a < b) return -1;
return a - b;
}

ArrayOfUser.sort(compare);

console.log("Відсортований масив: " + ArrayOfUser);