// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]. 
let numbersArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log("Початковий масив: " + numbersArray);

// Знайти суму та кількість позитивних елементів.
const result = numbersArray.filter(item => item > 0).sort((a, b) => a - b);
console.log(result);
let sum = 0; // Сума позитивних елементів
let numOfPlusElements = result.length;
numbersArray.forEach((element) => sum += element > 0 ? element : 0) // перебор массива numbersArray + условие (что нужно прибавить к sum)
// console.log(numbersArray);
console.log(`Сума позитивних елементів: ${sum}`);
console.log(`Кількість позитивних елементів: ${numOfPlusElements}`);

// Знайти мінімальний елемент масиву та його порядковий номер.
for(var i = 0, min = 0; i < numbersArray.length; i++){
  if(numbersArray[i] < numbersArray[min])
      min = i;
}
console.log(`Мінімальний елемент масиву це ${numbersArray[min]}, та його порядковий номер у масиві це ${min}`);

// Знайти максимальний елемент масиву та його порядковий номер.
for(var i = 0, max = 0; i < numbersArray.length; i++){
  if(numbersArray[i] > numbersArray[max])
  max = i;
}
console.log(`Максимальний елемент масиву це ${numbersArray[max]}, та його порядковий номер у масиві це ${max}`);

// Визначити кількість негативних елементів.
const resultNegative = numbersArray.filter(item => item < 0).sort((a, b) => a - b);
let numOfNegativeElements = resultNegative.length;
console.log(`Кількість негативних елементів: ${numOfNegativeElements}`);

И это не готово
// // Знайти кількість непарних позитивних елементів.
// // const NegativeDuplicates = numbersArray.filter(item => item > 0).filter((number, index, numbers) => {// number - элемент массива, index - индекс элемента массива, numbers - представление массива numbersArray
// //   return numbers.indexOf(number) == index;
// // });
// const NegativeDuplicates = numbersArray.filter(item => item > 0).reduce((acc, cur) => acc ^ cur, 0)
// console.log(NegativeDuplicates);

// // function findUnique(numbers) {
// //   numbers.sort(function(a, b) {
// //     return a - b;
// //   });
// //   for (var i = 0; i < numbers.length; i += 2) {
// //     if (numbers[i] != numbers[i + 1]) return numbers[i];
// //   }
// // }
// // console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));

// function findUnique(numbers) {
//   return numbers.reduce((a, b) => a ^ b);
// }

// console.log(findUnique([ 1, 8, 3, 4, 4, 6, 1, 8 ]));

// let NumOfNonEl = NegativeDuplicates.length
// console.log(`Kількість непарних позитивних елементів: ${NumOfNonEl}`);

// Знайти кількість парних позитивних елементів.
const PositiveDuplicates = numbersArray.filter(item => item > 0).filter((number, index, numbers) => {// number - элемент массива, index - индекс элемента массива, numbers - представление массива numbersArray
  return numbers.indexOf(number) !== index;
});
let NumOfPosEl = PositiveDuplicates.length
console.log(`Kількість парних позитивних елементів: ${NumOfPosEl}`);








Закончил здесь
// Знайти суму парних позитивних елементів.
const result = numbersArray.filter(item => item > 0).sort((a, b) => a - b);
console.log(result);
let sumOfParnPozElem = 0; // Сума парних позитивних елементів
numbersArray.forEach((element) => sumOfParnPozElem += element > 0 ? element : 0) // перебор массива numbersArray + условие (что нужно прибавить к sum)
// console.log(numbersArray);
console.log(`Сума позитивних елементів: ${sumOfParnPozElem}`);

// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, остальні обнулити.



























// numOfElements = prompt('Введіть кількість елементів масиву:', 3); // кількість елементів масиву
// console.log("Кількість елементів масиву: " + numOfElements);

// for(var i=0; i < numOfElements; i++) {
//   // ArrayOfUser[i] = prompt(`Введіть елемент масиву № ${i + 1}:`, +i); // заповнення масивву
// };
  


// function compare(a, b){
// return a - b;
// }

// numbersArray.sort(compare);

// let positiveElementsArray = numbersArray.filter(item => item > 0).sort((a, b) => a - b);
// console.log("Відсортований масив: " + positiveElementsArray);







