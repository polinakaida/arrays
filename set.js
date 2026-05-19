const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.has(3)); 
console.log(set.has(4)); 

set.add(4).add(5).add(6);

for (const item of set) {
    console.log(item);
}

const sum = [...set].reduce((acc, item) => acc + item);
console.log(sum);

set.delete(2);
console.log(set);

set.clear();
console.log(set);

const arr = [...new Set([1, 6, 9, 4, 9, 1, 5, 6])];
console.log(arr);

const arr2 = [...new Set([...[1, 6, 9, 4, 9, 1, 5, 6], ...[5, 10, 11]])];
console.log(arr2);

const messages = [
   { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
   { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
   { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
   { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

const userNames = [...new Set(messages.map(m => m.name))];
console.log(userNames);

const userMessage = {};

userNames.forEach(n => userMessage[n] = messages
    .filter(m => m.name === n)
    .map(m => ({
        message: m.message,
        date: m.date,
     })));
console.log(userMessage);

