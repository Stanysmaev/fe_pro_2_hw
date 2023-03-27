/*Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише 
  числових елементів даного масиву. */
let arrayOfElementsOfSomeTypes = [1, 'apple', 20, 'pear', 15, 9];

function FilterAndReduce(array) {
  let onlyNum = array.filter((item) => typeof item === 'number');
  // console.log(onlyNum);
  let SredneeArifm = onlyNum.reduce((el, a) => el + a, 0) / onlyNum.length;
  return SredneeArifm;
}

console.log(
  `Середнє арифметичне відфільтрованого масиву: ${FilterAndReduce(
    arrayOfElementsOfSomeTypes
  )}`
);

/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
  У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
  вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/
let x = prompt('Введіть число №1: ', 1),
  znak = prompt(
    'Введіть математичну дію(наприклад: +, -, *, /, %, ^(ступінь)):',
    '-'
  ),
  y = prompt('Введіть число №2: ', 2);

function doMath(x, znak, y) {
  if (znak === '+') {
    return (result = x + y);
  }
  if (znak === '-') {
    result = x - y;
    return result;
  }
  if (znak === '*') {
    result = x * y;
    return result;
  }
  if (znak === '/') {
    result = x / y;
    return result;
  }
  if (znak === '%') {
    result = x % y;
    return result;
  }
  if (znak === '^') {
    result = x ** y;
    return result;
  }
  return;
}

if (
  znak === '+' ||
  znak === '-' ||
  znak === '*' ||
  znak === '/' ||
  znak === '%' ||
  znak === '^'
) {
  console.log(`${x} ${znak} ${y} = ${doMath(x, znak, y)}`);
} else {
  console.log(`Неправильна арифметична дія!`);
}

/*Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і 
  внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.*/
let stovpci = prompt('Введіть кількість стовпців: ', 2),
  ryadki = prompt('Введіть кількість рядків: ', 2);

function Matrix2(firstArr, secondArr) {
  let mainArray = [];

  for (let i = 0; i < firstArr; i++) {
    let subArray = [];
    for (let j = 0; j < secondArr; j++) {
      subArray.push(prompt(`Заповніть елемент[${i}][${j}]:`));
    }
    mainArray.push(subArray);
  }

  return mainArray;
}
let mainArray = Matrix2(ryadki, stovpci);
console.log(mainArray);

/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для 
видалення задає користувач.*/
let row = prompt('Введіть речення: ', 'hello world');
let symbolsToErase = prompt(
  `Введіть символи, які треба видалити(наприклад ['l', 'd']): `,
  `ld`
);

function eraser(row, symbolsToErase) {
  return row
    .split('')
    .filter((symbol) => !symbolsToErase.includes(symbol))
    .join('');
}

console.log(`${eraser(row, symbolsToErase)}`);
