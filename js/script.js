// Hai un array di oggetti rappresentanti libri:
const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];



// Snack 1 - Filtra e Modifica
const longBooks = books.filter(b => b.pages > 300);
const longBooksTitles = longBooks.map(b => b.title);
// longBooksTitles.forEach(t => console.log(t));



// Snack 2 - Il primo libro scontato
const availableBooks = books.filter(b => b.available);

const discountedBooks = availableBooks.map(b => {

    // Rimuovo il simbolo e converto in numero decimale
    const price = parseFloat(b.price.replace('€', ''));
    const discount = (price * .8).toFixed(2);

    // Restituisco un nuovo oggetto libro con il prezzo aggiornato
    return { ...b, price: `${discount}€` };
});

const fullPricedBook = discountedBooks.find(book => {
    const price = parseFloat(book.price.replace('€', ''))

    // Controllo se il prezzo è un numero intero
    return Number.isInteger(price)
});
// console.log(fullPricedBook);



// Snack 3 - Ordinare gli Autori
const authors = books.map(b => b.author)

const areAuthorsAdult = authors.every(a => a.age >= 18);
if (areAuthorsAdult) {
    authors.sort((a, b) => a.age - b.age)
} else {
    authors.sort((a, b) => b.age - a.age)
}
// console.log(authors);



// Snack 4 - Calcola l’età media
const ages = books.map(b => b.author.age)
const ageSum = ages.reduce((sum, age) => sum + age, 0)
const agesAvarage = ageSum / ages.length
// console.log(agesAvarage);



// Snack 5 (Bonus) - Raccogli i libri
const url = `https://boolean-spec-frontend.vercel.app/freetestapi/books`

async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
};

async function getBooks(ids) {
    const promises = ids.map(i => fetchJson(`${url}/${i}`));

    try {
        const books = await Promise.all(promises)
        // console.log("Libri trovati:", books)
    } catch (error) {
        console.error("Errore nel recupero dei libri", error);
    }
};

getBooks([2, 13, 7, 21, 19]);




// Snack 6 (Bonus) - Ordina i libri
const areThereAvailableBooks = books.some(b => b.available);

const booksByPrice = books.sort((a, b) => {
    const priceA = parseFloat(a.price.replace('€', ''));
    const priceB = parseFloat(b.price.replace('€', ''));
    return priceA - priceB;
});

booksByPrice.sort((a, b) => a.available === b.available) ? 0 : a.available ? -1 :1 ;
// console.log(booksByPrice);



// Snack 7 (Bonus) - Analizza i tag
const tagCounts = books.reduce((acc, b) => {
    b.tags.forEach(tag => {
        if(acc[tag]) {
            acc[tag] ++
        } else {
            acc[tag] = 1;
        }
    });
    return acc;
}, {});
// console.log(tagCounts);
