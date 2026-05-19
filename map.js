const map = new Map([[1, "first"], [3, "third"]]);
console.log(map);

//1.2
function replaceNumbersInText(originalPhrase) {
    return originalPhrase
        .split(' ')
        .map(n => map.has(Number(n)) ? map.get(Number(n)) : n)
        .join(' ');
}
const originalPhrase = 'This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.';
const changedPhrase = replaceNumbersInText(originalPhrase);
console.log(changedPhrase);

//1.1
console.log(map.size);

map.set(4, 'fourth');
console.log(map);

map.delete(1)
console.log(map);

console.log(map.get(3));

console.log(map.has(2));

console.log([...map.keys()]);

console.log([...map.values()]);
