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
    const discount = price * 20 / 100;

    // Calcolo il prezzo scontato e arrotondo a 2 decimali
    const total = (price - discount).toFixed(2);

    // Restituisco un nuovo oggetto libro con il prezzo aggiornato
    return { ...b, price: `${total}€` }; 
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
if( areAuthorsAdult === true) {
    authors.sort((a, b) => a.age - b.age)
} else {
    authors.sort((a, b) => b.age - a.age)
}
// console.log(authors);



// Snack 4 - Calcola l’età media
const ages = authors.map(a => a.age)
const ageSum = authors.reduce((acc, a) => acc + a.age, 0)
const agesAvarage = ageSum / ages.length
// console.log(agesAvarage);
