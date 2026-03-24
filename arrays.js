const array100 = [1, 2, 3];

function changeSign(item) {
    return -item;
}

const mappedArray = array100.map(changeSign);
console.log(mappedArray);