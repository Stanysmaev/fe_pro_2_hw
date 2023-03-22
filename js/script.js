// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]. 
let numbersArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log("Початковий масив: " + numbersArray);

// Знайти суму та кількість позитивних елементів.
const result = numbersArray.filter(item => item > 0).sort((a, b) => a - b);
// console.log(result);
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

// Знайти кількість непарних позитивних елементів.
let KilkNepPosElem = numbersArray.filter(item => item > 0).filter((num) => {
	return num % 2 == 1;
});
let kolvo = KilkNepPosElem.length
console.log(`Кількість непарних позитивних елементів: ${kolvo}`);

// Знайти кількість парних позитивних елементів.
let KilkParnPosElem = numbersArray.filter(item => item > 0).filter((num) => {
	return num % 2 == 0;
});
let kolvo2 = KilkParnPosElem.length
console.log(`Кількість парних позитивних елементів: ${kolvo2}`);

// Знайти суму парних позитивних елементів.
const SumParnPosElem = numbersArray.filter(item => item > 0).filter((num) => {
	return num % 2 == 0;
});
let sumOfParnPosElem = 0; // Сума парних позитивних елементів
SumParnPosElem.forEach((num) => sumOfParnPosElem += num > 0 ? num : 0) // перебор массива numbersArray + условие (что нужно прибавить к sum)
console.log(`Сума парних позитивних елементів: ${sumOfParnPosElem}`);

// Знайти суму непарних позитивних елементів.
const SumNeparnPosElem = numbersArray.filter(item => item > 0).filter((num) => {
	return num % 2 == 1;
});
let sumOfNeparnPosElem = 0;
SumNeparnPosElem.forEach((num) => sumOfNeparnPosElem += num > 0 ? num : 0) // перебор массива numbersArray + условие (что нужно прибавить к sum)
console.log(`Сума непарних позитивних елементів: ${sumOfNeparnPosElem}`);

// Знайти добуток позитивних елементів.
const ArrayOfPosElem = numbersArray.filter(item => item > 0);
let DobOfPosElem = 1;
ArrayOfPosElem.forEach((e) => DobOfPosElem *= e);
console.log(ArrayOfPosElem);
console.log(`Добуток позитивних елементів: ${DobOfPosElem}`);

// Знайти найбільший серед елементів масиву, остальні обнулити.
// let maxElement = Math.max.apply(null, numbersArray);
// console.log(maxElement);
const maxNum = Math.max(...numbersArray);
const ArrayOfZeros = numbersArray.map(num => num == maxNum ? num : 0);
console.log(`найбільший елемент серед масиву це ${maxNum}, та обнулення массиву окрім максимального числа: ${ArrayOfZeros}`);


























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







