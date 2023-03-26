const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
function removeElement(someArray, item){ // someArray = array, item = 5;
  const num = someArray.indexOf(item); // знаходимо індекс елемента item
  someArray.splice(num, 1); // видаляємо 1 елемент по індексу num (елемента item)
}
