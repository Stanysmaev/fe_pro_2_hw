let users = [
  {
  "index": 0,
  "isActive": true,
  "balance": "$2,226.60",
  "name": "Eugenia Sawyer",
  "gender": "female",
  "phone": "+1 (840) 583-3207",
  "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
  "index": 1,
  "isActive": true,
  "balance": "$2,613.77",
  "name": "Pauline Gallegos",
  "gender": "female",
  "phone": "+1 (985) 593-3328",
  "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
  "index": 2,
  "isActive": false,
  "balance": "$3,976.41",
  "name": "Middleton Chaney",
  "gender": "male",
  "phone": "+1 (995) 591-2478",
  "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
  "index": 3,
  "isActive": true,
  "balance": "$1,934.58",
  "name": "Burns Poole",
  "gender": "male",
  "phone": "+1 (885) 559-3422",
  "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
  "index": 4,
  "isActive": true,
  "balance": "$3,261.65",
  "name": "Mcfadden Horne",
  "gender": "male",
  "phone": "+1 (942) 565-3988",
  "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
  "index": 5,
  "isActive": false,
  "balance": "$1,790.56",
  "name": "Suzette Lewis",
  "gender": "female",
  "phone": "+1 (837) 586-3283",
  "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
  ];

// console.log(users);

// позбутися '$' та ',' у 'balance'
let balances = [];
let phones = [];
let NumberOfUsers = Object.keys(users).length; //получение кол-ва юзеров в массиве объектов

users.forEach((user) => {
  balances.push(Number(user.balance.slice(1).replace(",", "")));
});

users.forEach((user) => {
  phones.push(user.phone);
});

let newUsers = [];

for(let i = 0; i < NumberOfUsers; ++i){
  newUsers[i] = {
  balance: balances[i],
  "phone": phones[i]
  }
}

// console.log(newUsers);

// console.log(balances);

let summOfBalances = balances.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);

// Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. 
console.log("Масив телефонних номерів користувачів, у яких баланс більше 2000 доларів: ");
let arrayOfTelephones = [];

for (let i = 0; i < NumberOfUsers; ++i) {
  if (balances[i] >= 2000) {
    arrayOfTelephones.push(phones[i]);
  }
}
  
console.log(arrayOfTelephones);



// let arrayOfTelephones = users.find(city => city.balance >= 2000).phone;
  

// І знайти суму всіх балансів користувачів
console.log("Сума усіх балансів користувачів: $" + summOfBalances);