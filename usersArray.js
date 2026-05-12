function User(id, name, surname, age, isMale, email, isSubscribed) {
   this.id = id;
   this.firstName = name;
   this.lastName = surname;
   this.age = age;
   this.isMale = isMale;
   this.email = email;
   this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

const users = [];

for (let i = 0; i < 10; i++) {
   const user = new User(
      i + 1,
      `Username${i}`,
      `Usersurname${i}`,
      Math.floor(Math.random() * 90),
      Math.random() < 0.5,
      `useremail${i}@gmail.com`,
      Math.random() < 0.5
   );
   users.push(user);
}

// Отримати масив користувачів, які не підписані (not subscribed).
const notSubscribed = users.filter(u => !u.isSubscribed);

console.table(notSubscribed);

// Вивести список повних імен користувачів.
users.forEach(u => console.log(u.getFullName()));

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
const schoolGirls = users
    .filter(u => !u.isMale && u.age >= 6 && u.age <= 18)
    .map(u => u.getFullName());

console.log(schoolGirls);

// Видалити з масиву користувача з email useremail5@gmail.com.
const userToRemove = users.findIndex(u => u.email === 'useremail5@gmail.com');

if (userToRemove !== -1) {
    users.splice(userToRemove, 1);
}

console.table(users);

// Змінити email користувачу з id 2 (можна спробувати використати find).
const userToUpdate = users.find(u => u.id === 2);

if (userToUpdate) {
    userToUpdate.email = 'newmail@gmail.com';
}

console.table(users)

// Визначити, який відсоток користувачів підписані (subscribed).
const subscribedCount = users.filter(u => u.isSubscribed).length;
const subscribedPercent = (subscribedCount / users.length) * 100;

console.log(`Відсоток підписаних користувачів ${subscribedPercent.toFixed(2)}%`);

// Знайти середній вік користувачів (спробувати використати reduce).
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log(`Середній вік користувачів: ${Math.round(averageAge)} років`);