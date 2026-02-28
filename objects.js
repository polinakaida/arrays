//1
const customer = {
    name: 'Raymond',
    surname: 'Smith',
    email: 'test@mail.com',
    password: 'qwert',
    phone: '+44712347434',
    address: {
        city: 'London',
        street: 'Waterloo Street',
        house: '78',
        flat: '44',
    },
    getFullAddress() {
        console.log(`City: ${this.address.city}, Street: ${this.address.street}, House: ${this.address.house}, Flat: ${this.address.flat}`);
    },
    changePhoneNum(newPhone) {
        this.phone = newPhone;
    }
};
console.log(customer);

customer.getFullAddress();
customer.changePhoneNum('+3809043222');

console.log('зміна номеру телефона > ', customer);

customer.isMale = true;
delete customer.address;

const customer2 = Object.assign({}, customer);
console.log('копія перший спосіб > ', customer2);

const customer3 = { ...customer };
console.log('копія другий спосіб > ',customer3);


//2
const cat = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
};

for (const key in cat) {
    console.log(key, cat[key]);
};


//3
function Book (author, name, yearPublished, publisherCity, publisherName, price) {
    this.author = author;
    this.name = name;
    this.yearPublished = yearPublished;
        this.publisher = {
            city: publisherCity,
            name: publisherName,
        };
    this.price = price;
};

Book.prototype.bookAgeCount = function () {
    console.log(new Date().getFullYear() - this.yearPublished);
};

Book.prototype.priceChange = function (newPrice) {
    this.price = newPrice;
};

const book1 = new Book(
    "F. Scott Fitzgerald",
    "The Great Gatsby",
    1925,
    "New York",
    "Charles Scribner's Sons",
    15
);

book1.bookAgeCount();
book1.priceChange(25);
console.log(book1);