//1. Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
//Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

function pow(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new TypeError('Both base and exponent must be numbers');
    }

    if (exponent < 0) {
        throw new RangeError('Exponent cannot be negative');
    }

    if (exponent === 0) {
        return 1;
    }

    return base * pow(base, exponent - 1);
}
    
try {
    const result = pow(4, 2);
    console.log(result);

} catch (err) {
    if (err instanceof TypeError) {
        console.log('Type error ', err.message);
    } else if (err instanceof RangeError) {
         console.log('Range error ', err.message);
    } else {
        console.log('Unknown error ', err.message);
    }

}

//2. *(за бажанням)
//Реалізувати функцію для валідації імейлу. Імейл має бути рядком і містити символ "@", цей символ не має бути першим або останнім. Функція має повертати відвалідований імейл або викидати помилку, якщо імейл не валідний.
function validateEmail(email) {
    if (typeof email !== 'string') {
        throw new TypeError('Email must be a string');
    }

    if (!email.includes('@') || email.startsWith('@') || email.endsWith('@')) {
        throw new Error('Email must include "@" and cannot start or end with it');
    }
    return email;
}

try {
    const validEmail = validateEmail('sasha@gmail.com')
    console.log(validEmail);
} catch (error) {
    console.log('Error: ', error.message);
}
