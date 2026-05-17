const TAG_COLORS = {
    web: 'green',
    javascript: 'yellow',
    fullstack: 'red',
    education: 'blue',
    horse: 'pink',
    skiing: 'grey',
};

class Post {
    constructor(id, name, author, text, date, like, image, hashtags) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.text = text;
        this.publishDate = date;
        this.likeAmount = like;
        this.image = image;
        this.hashtags = Array.isArray(hashtags) ? hashtags : [hashtags];
    }
    editText(newText) {
        this.text = newText;
    }
    increaseLikeAmount() {
        this.likeAmount += 1;
    }
    decreaseLikeAmount() {
        this.likeAmount -= 1;
    }
    render() {
        const { id, name, author, text, publishDate, likeAmount, image, hashtags } = this;
        const hashtagsHTML = hashtags.map(tag => {
            const color = TAG_COLORS[tag] || 'black';
            return `<span style="color:${color}">#${tag}</span>`;
        }).join(' ')
        document.writeln(`
            <div>
                <h2>${name}</h2>
                <p>${author}</p>
                <p>${text}</p>
                <p>${publishDate}</p>
                <p>Likes: ${likeAmount}</p>
                <img src="${image}" width="200">
                <div>${hashtagsHTML}</div>
            </div>`);
    }
    set likeAmount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Like amount must be a number');
        }
        if (value < 0 || value > 100000) {
            throw new RangeError('likes amount must be between 0 - 100000');
        }
        this._likeAmount = value;
    }
    get likeAmount() {
        return this._likeAmount;
    }
    addNewHashtag(hashtag) {
        const hashtagList = ['web', 'javascript', 'fullstack', 'education', 'horse', 'skiing'];
        if (!hashtagList.includes(hashtag)) {
            throw new RangeError(`Available hashtags are ${hashtagList}`);
        }
        if (this.hashtags.length >= 6) {
            throw new Error('Maximum 6 hashtags allowed');
        }

        this.hashtags.push(hashtag);
    }
}

const post1 = new Post(
    1,
    'She’s so darn cool…!',
    'horseimports',
    'Sarabi keeps impressing us and jumped the big track in this video like it was nothing.',
    '04/05/2026',
    177,
    'https://lh7-us.googleusercontent.com/WoMMJ9tyDrREP_ERDMAe7TWJ2vXEd_Na0nUq9iyONmYt-Y4IDiBLPezBIyCembLr1iUpW-9N0UYCDvgf-8OVy40kFpYpXivO7hXAZJtLI883Uu7F5z2-56BdBRihAGkIOH87JEY0HgKGUVDzDMcNVmo',
    'horse');

const post2 = new Post(
    2,
    'JS post',
    'author2',
    'text 2',
    '15/05/2026',
    250,
    'https://dvg5hr78c8hf1.cloudfront.net/2016/06/17/13/45/01/cc2fac88-2f81-4cc5-9ec9-334042781fd0/1*OsjnQFK1i6CkjXQmTErAtw.jpeg',
    'javascript'
);

const post3 = new Post(
    3,
    'Web post',
    'author3',
    'text 3',
    '17/05/2026',
    510,
    'https://www.differencebetween.net/wp-content/uploads/2017/08/Difference-between-World-Wide-Web-and-Internet.png',
    'web'
);

const posts = [post1, post2, post3];

post1.editText('Text is changed');
post1.increaseLikeAmount();
post1.addNewHashtag('web');

posts.forEach(p => p.render());
console.log(post1);