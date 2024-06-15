
//Miguel Angel Londoño//
let books = [
	{
		Title: 'Little prince',
		Author: 'Antoine de Saint-Exupéry',
		Gender: 'literature',
		Language: 'English',
		Price: 20000,
		Format: 'ebook',
		Isbn: '9109109',
		Description: 'is a timeless tale about a young prince who explores the universe, learning profound lessons about love, friendship, and the human condition along the way',
		Status: 'new',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'April 6, 1943',
		Editorial: 'Reynal & Hitchcock',
		Pages: 100,
		Stock: 10,
		Discount: 10000
	},

	{
		Title: 'To kill a Monckingbird',
		Author: 'Harper Lee',
		Gender: 'literature',
		Language: 'English',
		Price: 30000,
		Format: 'ebook',
		Isbn: '9780451524935',
		Description: 'A classic novel set in the American South, exploring themes of racial injustice and moral growth through the eyes of a young girl',
		Status: 'new',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'AJuly 11, 1960',
		Editorial: 'J. B. Lippincott & Co.',
		Pages: 300,
		Stock: 20,
		Discount: 15000
	},

	{
		Title: 'Pride and Prejudice',
		Author: 'Jane Austen',
		Gender: 'Romance',
		Language: 'English',
		Price: 30000,
		Format: 'ebook',
		Isbn: '9780141439518',
		Description: 'A witty and charming novel following the romantic entanglements of the Bennet sisters in early 19th-century England',
		Status: 'new',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'January 28, 1813',
		Editorial: 'Penguin Classics',
		Pages: 368,
		Stock: 5,
		Discount: 15000
	},

	{
		Title: 'Harry Potter and the Sorcerers Stone',
		Author: 'J.K. Rowling',
		Gender: 'Fantasy',
		Language: 'English',
		Price: 30000,
		Format: 'ebook',
		Isbn: '9780747532743',
		Description: 'The first book in the beloved series follows young Harry Potter as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry',
		Status: 'new',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'June 26, 1997',
		Editorial: 'Bloomsbury Publishing',
		Pages: 223,
		Stock: 0,
		Discount: 15000
	},

	{
		Title: 'The Great Gatsby',
		Author: 'F. Scott Fitzgerald',
		Gender: 'Tragedy',
		Language: 'English',
		Price: 40000,
		Format: 'ebook',
		Isbn: '9780743273565',
		Description: 'A mesmerizing tale of love, wealth, and ambition set against the backdrop of the Roaring Twenties in America.',
		Status: 'new',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'April 10, 1925',
		Editorial: 'Scribner',
		Pages: 180,
		Stock: 9,
		Discount: 20000
	},

	{
		Title: 'The Hobbit',
		Author: 'J.R.R. Tolkien',
		Gender: 'Adventure',
		Language: 'English',
		Price: 60000,
		Format: 'ebook',
		Isbn: '9780345339683',
		Description: 'An enchanting tale of Bilbo Baggins, a hobbit who embarks on a grand adventure to reclaim treasure guarded by the fearsome dragon Smaug.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'September 21, 1937',
		Editorial: 'Houghton Mifflin Harcourt',
		Pages: 310,
		Stock: 1,
		Discount: 30000
	},

	{
		Title: 'The Lord of the Rings',
		Author: 'J.R.R. Tolkien',
		Gender: 'Epic',
		Language: 'English',
		Price: 30000,
		Format: 'ebook',
		Isbn: '9780618640157',
		Descrition: 'A sweeping epic that follows Frodo Baggins and his companions on a perilous quest to destroy the One Ring and defeat the dark lord Sauron.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'October 20, 1955',
		Editorial: 'Houghton Mifflin Harcourt',
		Pages: 1178,
		Stock: 17,
		Discount: 15000
	},

	{
		Title: 'Alices Adventures in Wonderland',
		Author: 'Lewis Carroll',
		Gender: 'Literature',
		Language: 'English',
		Price: 20000,
		Format: 'ebook',
		Isbn: '9780141439761',
		Description: 'A whimsical journey into a fantastical world filled with peculiar creatures and nonsensical adventures, enjoyed by readers of all ages.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'July 4, 1865',
		Editorial: 'Penguin Classics',
		Pages: 176,
		Stock: 90,
		Discount: 10000
	},

	{
		Title: 'Cien años de soledad',
		Author: 'Gabriel García Márquez',
		Gender: 'Fiction',
		Language: 'Spanish',
		Price: 100000,
		Format: 'ebook',
		Isbn: '9780307474728',
		Description: 'A landmark novel in Latin American literature, "Cien años de soledad" tells the multi-generational story of the Buendía family in the fictional town of Macondo, blending elements of magic and reality to create a rich tapestry of Latin American history and culture',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'May 30, 1967',
		Editorial: 'Vintage Español',
		Pages: 417,
		Stock: 50,
		Discount: 50000
	},

	{
		Title: 'The Alchemist',
		Author: 'Paulo Coelho',
		Gender: 'Fiction',
		Language: 'English',
		Price: 20000,
		Format: 'ebook',
		Isbn: '9780062315007',
		Description: 'A philosophical novel about a young Andalusian shepherd named Santiago who sets out on a journey to discover his Personal Legend, encountering various challenges and learning profound lessons about life, destiny, and the importance of following one\'s dreams.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1988',
		Editorial: 'HarperOne',
		Pages: 208,
		Stock: 100,
		Discount: 10000
	},

	{
		Title: 'The Catcher in the Rye',
		Author: 'J.D. Salinger',
		Gender: 'Fiction',
		Language: 'English',
		Price: 20000,
		Format: 'ebook',
		Isbn: '9780316769488',
		Description: 'A classic coming-of-age novel that follows Holden Caulfield, a disenchanted teenager, as he navigates the complexities of adolescence and society in New York City.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: 'July 16, 1951',
		Editorial: 'Little, Brown and Company',
		Pages: 224,
		Stock: 50,
		Discount: 10000
	},

	{
		Title: 'Love in the Time of Cholera',
		Author: 'Gabriel García Márquez',
		Gender: 'Romance',
		Language: 'Spanish',
		Price: 70000,
		Format: 'ebook',
		Isbn: '9780307389732',
		Description: 'A captivating tale of unrequited love, enduring passion, and the passage of time, set in a Caribbean port town and spanning over 50 years of Colombian history.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1985',
		Editorial: 'Vintage Español',
		Pages: 368,
		Stock: 20,
		Discount: 35000
	},

	{
		Title: 'Chronicle of a Death Foretold',
		Author: 'Gabriel García Márquez',
		Gender: 'Mystery',
		Language: 'Spanish',
		Price: 45000,
		Format: 'ebook',
		Isbn: '9781400034710',
		Description: 'A gripping exploration of honor, morality, and fate, this novella tells the story of a murder in a small Colombian town and the events leading up to it.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1981',
		Editorial: 'Vintage Español',
		Pages: 128,
		Stock: 30,
		Discount: 22500
	},

	{
		Title: 'The Sound of Things Falling',
		Author: 'Juan Gabriel Vásquez',
		Gender: 'Historical',
		Language: 'Spanish',
		Price: 87000,
		Format: 'ebook',
		Isbn: '9781594487484',
		Description: 'Set in Colombia during the turbulent 1990s, this novel delves into the aftermath of Pablo Escobar\'s reign and its impact on individuals and society, exploring themes of memory, guilt, and redemption.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '2011',
		Editorial: 'Riverhead Books',
		Pages: 320,
		Stock: 15,
		Discount: 43500
	},

	{
		Title: 'The Death of Artemio Cruz',
		Author: 'Carlos Fuentes',
		Gender: 'Fiction',
		Language: 'Spanish',
		Price: 69000,
		Format: 'ebook',
		Isbn: '9780374507082',
		Description: 'A groundbreaking novel that explores the complexities of Mexican society through the life and reflections of Artemio Cruz, a wealthy and powerful man on his deathbed.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1962',
		Editorial: 'Farrar, Straus and Giroux',
		Pages: 304,
		Stock: 20,
		Discount: 34500
	},

	{
		Title: 'The House of the Spirits',
		Author: 'Isabel Allende',
		Gender: 'Magical Realism',
		Language: 'Spanish',
		Price: 38000,
		Format: 'ebook',
		Isbn: '978501145923',
		Description: 'A captivating family saga spanning several generations in Chile, blending magical realism with historical events to explore themes of love, power, and destiny.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1982',
		Editorial: 'Atria Books',
		Pages: 496,
		Stock: 10,
		Discount: 19000
	},

	{
		Title: 'Pedro Páramo',
		Author: 'Juan Rulfo',
		Gender: 'Fiction',
		Language: 'Spanish',
		Price: 25000,
		Format: 'ebook',
		Isbn: '9788437604185',
		Description: 'A landmark of Latin American literature, "Pedro Páramo" is a haunting tale that blurs the lines between the living and the dead, exploring themes of memory, loss, and the search for identity.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1955',
		Editorial: 'Cátedra',
		Pages: 124,
		Stock: 15,
		Discount: 12500
	},

	{
		Title: 'The Posthumous Memoirs of Bras Cubas',
		Author: 'Machado de Assis',
		Gender: 'Fiction',
		Language: 'Portuguese',
		Price: 55000,
		Format: 'ebook',
		Isbn: '9780195101706',
		Description: 'A groundbreaking work of Brazilian literature, "The Posthumous Memoirs of Bras Cubas" is a satirical novel that explores themes of love, mortality, and social critique through the unconventional narrative of a deceased protagonist.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1881',
		Editorial: 'Oxford University Press',
		Pages: 256,
		Stock: 0,
		Discount: 27500
	},

	{
		Title: 'Hopscotch',
		Author: 'Julio Cortázar',
		Gender: 'Fiction',
		Language: 'Spanish',
		Price: 100000,
		Format: 'ebook',
		Isbn: '9780394752846',
		Description: 'An innovative and unconventional novel that offers multiple reading paths, inviting readers to engage with its non-linear narrative and explore themes of existentialism, identity, and freedom.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1963',
		Editorial: 'Pantheon Books',
		Pages: 576,
		Stock: 5,
		Discount: 50000
	},

	{
		Title: 'The Aleph',
		Author: 'Jorge Luis Borges',
		Gender: 'Fiction',
		Language: 'Spanish',
		Price: 30000,
		Format: 'ebook',
		Isbn: '9780142437889',
		Description: 'A collection of mesmerizing short stories that blend fantasy, philosophy, and intricate narrative structures, showcasing Borges\' mastery of storytelling and exploration of complex themes.',
		Status: 'New',
		Location: 'Sena Comercio y Turismo',
		Publicatio_day: '1949',
		Editorial: 'Penguin Classics',
		Pages: 272,
		Stock: 10,
		Discount: 15000
	}
];
function populateBooks(books) {
	const container = document.getElementById("bookContainer");
	books.forEach((book) => {
		const section = document.createElement("section");
		section.classList.add("categorie-book");

		const div = document.createElement("div");

		const title = document.createElement("h2");
		title.textContent = book.Title;
		div.appendChild(title);

		const img = document.createElement("img");
		img.src = `assets/books/${getImageName(book.Title)}.jpg`;
		img.alt = book.Title;
		div.appendChild(img);

		const price = document.createElement("p");
		price.textContent = `$${book.Price}`;
		div.appendChild(price);

		const author = document.createElement("p");
		author.textContent = `Author: ${book.Author}`;
		div.appendChild(author);

		const genre = document.createElement("p");
		genre.textContent = `Genre: ${book.Gender}`;
		div.appendChild(genre);

		const editorial = document.createElement("p");
		editorial.textContent = `Editorial: ${book.Editorial}`;
		div.appendChild(editorial);

		const pages = document.createElement("p");
		pages.textContent = `Pages: ${book.Pages}`;
		div.appendChild(pages);

		const stock = document.createElement("p");
		stock.textContent = `Stock: ${book.Stock}`;
		div.appendChild(stock);

		const addToCartButton = document.createElement("a");
		addToCartButton.href = "pages/sesion.html";
		addToCartButton.innerHTML = `
		<button>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<img src="assets/carro.png" alt="compra">
		<p>Añadir al carrito</p>
		</button>
`;
		div.appendChild(addToCartButton);

		section.appendChild(div);
		container.appendChild(section);
	});
}

function getImageName(title) {
	const imageName = title.toLowerCase().replace(/[^a-z0-9- -ñ]+/g, '_');
	return imageName;
}

// Call the function with your books array
populateBooks(books);



//// filter Price//
function pressPrices30_80() {
	const filterPrice30_80 = books.filter(books => books.Price >= 30000 && books.Price <= 80000)
	return filterPrice30_80
}

console.log(pressPrices30_80())


/////filter Pages (there is somthing wrong(we dont know include the teacher))////

function pressPages() {
	return books.filter(book => book.Pages >= 200)
}
console.log(pressPages())


////register////

function register() {
	document.getElementById('registerForm').addEventListener('submit', function (event) {
		event.preventDefault();
		let cc = document.getElementById('cc').value
		let email = document.getElementById('email').value
		let cellphone = document.getElementById('cellphone').value
		let name = document.getElementById('name').value
		if (name !== null && cc !== null && email !== null && cellphone !== null) {
			alert('Registro exitoso');
		} else {
			alert('Algo salio mal, intenta de Nuevo');
		}
	})
}


//card pay register//


function cardPayRegister() {
	document.getElementById('cardRegister').addEventListener('submit', function (event) {
		event.preventDefault();
		let cardNumber = document.getElementById('cardNumber').value
		let password = document.getElementById('passwordCard').value
		if (cardNumber !== null && password !== nul) {
			alert('Registro de tarjeta exitoso');
		} else {
			alert('Algo salio mal, intenta de Nuevo');
		}
	})
}
// Amount of Stock

function pressStock() {
	return filterStock = books.sort((a, b) => a.Stock - b.Stock);
}
console.table(pressStock())


//////reabte day//////

const date = new Date()
console.log("Fecha actual:", date)
const currentMonth = date.getMonth()
const currentDay = date.getDate()

if (currentMonth === 8 && currentDay === 24) {
	console.log("¡Hoy es día de rebajas! ¡Infinite Page te desea un feliz dia del lector")
	console.log('Los descuentos de el dia de hoy son del 50%')


	const rebateDay = books.filter(book => book.Discount > 0)
	console.log("Books with Discount:", books.Title);

	const DiscountedBooks = rebateDay.map(book => ({
		Title: book.Title,
		Price: (book.Price - book.Discount)
	}))

	console.log("Discounted books:", DiscountedBooks)

} else {
	console.log("No es día de rebaja")
}

// Kevin

function selectBook(i) {
	if (!isNaN(i)) {
		let operation = prompt("desea agregar o eliminar un libro\n\n +/-");
		pressAmount(operation, i);
	}
}
// Modify Stock
function pressAmount(operation, i) {
	const filter = books.sort((a, b) => a.Title.localeCompare(b.Title));
	filter;
	switch (operation) {
		case '+':
			AmountStock = books[i].Stock += 1;
			Title[0] = " Title: " + filter[i].Title;
			Author[0] = " Author: " + filter[i].Author;
			Price[0] = " Price: " + filter[i].Price;
			Stock[0] = " Stock: " + filter[i].Stock;
			break;
		case '-':
			AmountStock = books[i].Stock;
			if (AmountStock <= 0) {
				resTitle = "it can't be lower";
			} else {
				AmountStock = books[i].Stock -= 1;
				Title[0] = " Title: " + filter[i].Title;
				Author[0] = " Author: " + filter[i].Author;
				Price[0] = " Price: " + filter[i].Price;
				Stock[0] = " Stock: " + filter[i].Stock;
			}
			break;
		default: resTitle = "invalid value";
			break;
	}
}
// Functions to search by availability-Editorial-Language
function pressAvailability() {
	filter = books.sort((a, b) => b.Availability.localeCompare(a.Availability));
	for (let i = 0; i < filter.length; i++) {
		for (let i = 0; i <= filter.length; i++) {
			Title[i + 1] = ""
			Author[i + 1] = ""
			Price[i + 1] = ""
			Title[i] = " Title: " + filter[i].Title;
			Author[i] = " Author: " + filter[i].Author;
			Price[i] = " Price: " + filter[i].Price;
		}
	}
}
function pressLanguage() {
	filter = books.sort((a, b) => a.Language.localeCompare(b.Language));
	for (let i = 0; i <= filter.length; i++) {
		Title[i + 1] = ""
		Author[i + 1] = ""
		Price[i + 1] = ""
		Title[i] = " Title: " + filter[i].Title;
		Author[i] = " Author: " + filter[i].Author;
		Price[i] = " Price: " + filter[i].Price;
	}
}
function pressEditorial() {
	filter = books.sort((a, b) => a.Editorial.localeCompare(b.Editorial));
	for (let i = 0; i <= filter.length; i++) {
		Title[i + 1] = ""
		Author[i + 1] = ""
		Price[i + 1] = ""
		Title[i] = " Title: " + filter[i].Title;
		Author[i] = " Author: " + filter[i].Author;
		Price[i] = " Price: " + filter[i].Price;
	}
}
// Search by Gender
function pressGender(GenderOptions) {
	filter = books.filter((a) => a.Gender === GenderOptions);
	if (filter.length === 0) {
		for (let i = 0; i <= filter.length + i; i++) {
			Title[i + 1] = ""
			Author[i + 1] = ""
			Price[i + 1] = ""
			Title[0] = "not books found"
			Author[i] = ""
			Price[i] = ""
		}
	} else {
		for (let i = 0; i <= filter.length; i++) {
			Title[i + 1] = ""
			Author[i + 1] = ""
			Price[i + 1] = ""
			Title[i] = " Title: " + filter[i].Title;
			Author[i] = " Author: " + filter[i].Author;
			Price[i] = " Price: " + filter[i].Price;
		}
	}

}
// Search by Author
function pressAuthor() {
	filter = books.sort((a, b) => a.Author.localeCompare(b.Author));
	for (let i = 0; i <= filter.length; i++) {
		Title[i + 1] = ""
		Author[i + 1] = ""
		Price[i + 1] = ""
		Title[i] = " Title: " + filter[i].Title;
		Author[i] = " Author: " + filter[i].Author;
		Price[i] = " Price: " + filter[i].Price;
	}
}
// Search by Price
function PressPrice() {
	filter = books.sort((a, b) => a.Price - b.Price);
	for (let i = 0; i <= filter.length; i++) {
		Title[i + 1] = ""
		Author[i + 1] = ""
		Price[i + 1] = ""
		Title[i] = " Title: " + filter[i].Title;
		Author[i] = " Author: " + filter[i].Author;
		Price[i] = " Price: " + filter[i].Price;
	}
}
// search by Title A-Z and Z-A
function filterTitlesAZ() {
	const booksAZ = books.sort((a, b) => a.Title.localeCompare(b.Title));
	const filteredBooks = [];

	for (let i = 0; i < 26; i++) {
		const letter = String.fromCharCode(97 + i);
		const booksStartingWithLetter = booksAZ.filter(book => book.Title.startsWith(letter));
		filteredBooks.push(...booksStartingWithLetter);
	}
	return filteredBooks;
}
function filterTitlesZA() {
	const booksZA = books.sort((a, b) => b.Title.localeCompare(a.Title));
	const filteredBooks = [];

	for (let i = 25; i >= 0; i--) {
		const letter = String.fromCharCode(97 + i);
		const booksStartingWithLetter = booksZA.filter(book => book.Title.startsWith(letter));
		filteredBooks.push(...booksStartingWithLetter);
	}

	return filteredBooks;
}