/* Задача 1 */
function functionReverseNumber(number) {
  const reversedNumber = number.toString().split('').reverse().join('');
  return Number(reversedNumber);
}

const reversedNumber = functionReverseNumber(1388);
console.log(reversedNumber);

/* Задача 2 */
function findLongestWord(str) {
  return str.split(' ').reduce((a, b) => (b.length > a.length ? b : a));
}

console.log(`Output: ${findLongestWord(`Web Development Tutorial`)}`);

/* Задача 3 */
const string = 'webmaster';

function sortAndReverse(string) {
  return string.split('').sort().join('');
}

console.log(sortAndReverse(string));

/* Задача 4 */
const funDestructuring = (array) => {
  const [firstWord, secondWord] = array;
  return firstWord + ' ' + secondWord;
};
console.log(funDestructuring(['Hello', 'world!']));

/* Задача 5 */
const array = [
  { name: 'Sasha', experience: 1 },
  { name: 'Egor', experience: 3 },
  { name: 'Misha', experience: 4 },
  { name: 'Alexey', experience: 4 },
  { name: 'Vladimir', experience: 0.5 },
];

const functionExpirienceChecker = (arr) => {
  const experienceArray = [];

  arr.forEach((item) => item.experience > 2 && experienceArray.push(item.name));

  return experienceArray;

  // const mapped = arr.map((person) => {
  //   if (person.experience > 2) {
  //     return person.name;
  //   }
  // });
  // return mapped.filter((personName) => !!personName);
};

const experienced = functionExpirienceChecker(array);
console.log(experienced);
