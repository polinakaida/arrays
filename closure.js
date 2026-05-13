//Змініть приклад із заняття по замиканню (counter) так, щоб при кожному виклику значення лічильника змінювалося не на 1, а на передане користувачем число (передати його при виклику зовнішньої функції customCounter).
function customCounter1(step) {
    let count = 0;
    
    return function () {
        count += step;
        return count;
    }
}

const myCounter1 = customCounter1(5);
console.log(myCounter1());
console.log(myCounter1());
console.log(myCounter1());

//Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).
function customCounter2(start, step) {
    let count = start;

    return function () {
        count += step;
        return count;
    }
}

const myCounter2 = customCounter2 (1, 5);
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());