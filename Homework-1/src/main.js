// Numbers

//a. Отримати число pi з Math і округлити його до 2 знаків після крапки
const numberPI = Math.PI;
console.log('a:', numberPI.toFixed(2));

//b. Перевірити результат обчислення 0.6 + 0.7 – як привести до нормального вигляду (1.3)?
const numbersSum = 0.6 + 0.7;
console.log('b:', numbersSum.toFixed(1));

// c. Отримати число з рядка ‘100$’
const number = '100$';
console.log('c:', parseInt(number))

// String
const str = 'some test string';

// a. Отримати число pi з Math і округлити його до 2 знаків після крапки
console.log('a:', str.charAt(0), str.charAt(str.length - 1));

// b. Зробити першу й останню букву великими
console.log('b:',
    str.charAt(0).toUpperCase(),
    str.charAt(str.length - 1).toUpperCase()
)

// c. Знайти позицію другого пробілу
console.log('c:', str.indexOf(' ', 5));

// d. Отримати нову стрінгу без останніх 6 символів
console.log('d:', str.slice(0, 10));

// Task
// В першому підʼїзді квартири 1 - 20,
// в другому 21 - 40,
// в третьому 41-60.
// Створити функцію, в яку можна передати номер квартири і при виклику якої буде повертатись номер підʼїзда.

const userEntryway = Number(prompt("Вкажіть номер вашої квартири:"));

const takeNumberApartment = (numApartment) => {
    if (numApartment <= 20) {
        alert("Ваш під'їзд №1")
    } else if (numApartment <= 40) {
        alert("Ваш під'їзд №2")
    } else if (numApartment <= 60) {
        alert("Ваш під'їзд №3")
    } else {
        alert("В домі всього 60 квартир!")
    }
}

takeNumberApartment(userEntryway);