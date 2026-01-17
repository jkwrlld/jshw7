// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const numbers = [1, 20, 45];
numbers[1] = 10;
console.log(numbers);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const strings = ["apple", "banana", "cherry"];
strings.push("ovosch");
console.log(strings);

// Створити скрипт який поверне суму всіх чисел в масиві.
const Number1 = [10, 20, 30, 40];
let um = 0;

for (let i = 0; i < Number1.length; i++) {
  um += Number1[i];
}
console.log(um);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const num = [5, 10, 15, 20, 25];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядок масиву, який містить більше 5-ти символів.
const vegetables = ["potato", "cucumber", "carrot", "onion", "tomato"];
for (let i = 0; i < vegetables.length; i++) {
  if (vegetables[i].length > 5) {
    console.log(vegetables[i]);
  }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const numbs = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
console.log(Math.max(...numbs));

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const numis = [3, 4, 7, 8, 10, 13, 16, 19, 22, 25];
for (let i = 0; i < numis.length; i++) {
  if (numis[i] % 2 === 0) {
    console.log(numis[i]);
  }
}
