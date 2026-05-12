// 1. Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які починаються на http://
const stringsHref = [
   "http://example.com",
   "https://openai.com",
   "ftp://website.com",
   "http://google.com",
   "https://stackoverflow.com",
   "http://github.com",
   "http://youtube.com",
   "https://wikipedia.org",
   "ftp://server.net",
   "http://facebook.com",
   "https://amazon.com",
   "http://twitter.com",
   "https://linkedin.com",
   "ftp://host.com",
   "http://reddit.com",
   "https://medium.com"
];

const httpLinks = stringsHref.filter(s => s.startsWith('http://'));

console.log(httpLinks);

// 2. Є масив з рядками. Залиште в цьому масиві тільки ті рядки, які закінчуються на .html
const fileNames = [
   "index.html",
   "styles.css",
   "script.js",
   "about.html",
   "contact.html",
   "home.html",
   "blog-post-1.html",
   "blog-post-2.html",
   "services.html",
   "portfolio.html",
   "projects.html",
   "gallery.html",
   "faq.html",
   "terms.html",
   "privacy-policy.html"
];

const htmlFiles = fileNames.filter(s => s.endsWith('.html'));

console.log(htmlFiles);

// 3. Дан рядок: 'abcde abcde abcde abcde'. Замініть у ній перший символ кожного слова на '!'
const str = 'abcde abcde abcde abcde';

const str1 = str
    .split(' ')
    .map(word => '!' + word.slice(1))
    .join(' ');

console.log(str1);

// 4. Створіть функцію, яка приймає рядок і повертає кількість голосних літер у ньому.
function countVowels(str) {
    const vowels = 'аеєиіоуюяАЕЄИІОУЮЯaeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Count голосні'));

// 5. Створіть функцію, яка перевіряє, чи є рядок паліндромом.
function isPalindrome(str) {
    const lowerStr = str.toLowerCase();
    const reversed = lowerStr
        .split('')
        .reverse()
        .join('');

    return lowerStr === reversed;
}

console.log(isPalindrome('Шалаш'));
console.log(isPalindrome('hello'));

// 6. ** Створіть функцію, яка знаходить найдовше слово у рядку і повертає його.
function findLongestWord(str) {
    const words = str.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord('У цьому рядку точно є найдовше словооооооо'));