const numbers = [7, 3, 10, 8, 5];
console.log(numbers);

//Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
numbers.pop();
numbers.shift();

numbers.unshift(4);
numbers.push(11);

console.log(numbers);

// Вивести розмір масиву.
console.log(numbers.length);

//Зробити копію масиву.
const numbersCopy = [...numbers];
console.log(numbersCopy);

//Вивести елементи з парними індексами.
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        console.log(numbers[i]);
    }
}
//Знайти добуток елементів масиву.
let product = 1;

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log(product);


const phones = [
    { id: 1, brand: "Apple", model: "iPhone 14", color: "black", price: 900, RAM: 4 },
    { id: 2, brand: "Samsung", model: "Galaxy S21", color: "white", price: 800, RAM: 8 },
    { id: 3, brand: "Xiaomi", model: "Mi 11", color: "blue", price: 600, RAM: 8 },
    { id: 4, brand: "OnePlus", model: "9 Pro", color: "green", price: 750, RAM: 12 },
    { id: 5, brand: "Google", model: "Pixel 7", color: "black", price: 700, RAM: 8 }
];

//Сформувати розмітку для карток.
for (let i = 0; i < phones.length; i++) {
    document.write(`
        <div class="card">
            <h3>${phones[i].brand} ${phones[i].model}</h3>
            <p>Color: ${phones[i].color}</p>
            <p>RAM: ${phones[i].RAM} GB</p>
            <p>Price: $${phones[i].price}</p>
        </div>
    `);
}

//Знайти середню ціну телефонів.
let sum = 0;
for (let i = 0; i < phones.length; i++) {
    sum += phones[i].price;
}

const averagePrice = sum / phones.length;
console.log("Середня ціна:", averagePrice);

//Знайти кількість телефонів з RAM 4, 6, 8, 12 ГБ
const ramStats = {};
for (let i = 0; i < phones.length; i++) {
    const ram = phones[i].RAM;

    if (ramStats[ram]) {
        ramStats[ram]++;
    } else {
        ramStats[ram] = 1;
    }
}

console.log(ramStats);

// Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter
const nums = [-1, 5, 0, 9, -10];
const noZero = nums.filter(num => num !== 0);

console.log(noZero);

// Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map
const divided = nums.map(num => num / 100);

console.log(divided);

// Вивести елементи масиву, зведені у куб. // forEach
nums.forEach(num => {
    console.log(num ** 3);
});

// Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex
const index = nums.findIndex(num => num * num === 100);

if (index !== -1) {
    nums.splice(index, 1);
    console.log("Оновлений масив:", nums);
} else {
    console.log("Елемент не знайдено");
}

// Перевірити, чи всі елементи масиву є парними числами (* або простими числами). // every
const allEven = nums.every(num => num % 2 === 0);

console.log(allEven);

// Перевірити, чи є у масиві бодай один від'ємний елемент. // some
const hasNegative = nums.some(num => num < 0);

console.log(hasNegative);