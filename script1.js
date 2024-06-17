
//Miguel Angel Londoño//

let books = [
    { 

        title: 'Little prince',
        author: 'Antoine de Saint-Exupéry',
        gender: 'literature', 
        language: 'English',
        price: 20000,
        format: 'ebook',
        isbn: '9109109', 
        description: 'is a timeless tale about a young prince who explores the universe, learning profound lessons about love, friendship, and the human condition along the way', 
        status: 'new', 
        location: 'Sena Comercio y Turismo', 
        publication_date: 'April 6, 1943', 
        editorial: 'Reynal & Hitchcock', 
        pages: 100,
        Stock: 10,
        discount: 10000

},

    {
    
        title: 'To kill a Monckingbird', 
        author: 'Harper Lee',
        gender: 'literature',
        language: 'English',
        price: 30000, 
        format: 'ebook',
        isbn: '9780451524935',
        description: 'A classic novel set in the American South, exploring themes of racial injustice and moral growth through the eyes of a young girl',
        status: 'new',
        location: 'Sena Comercio y Turismo', 
        publication_date: 'AJuly 11, 1960',
        editorial: 'J. B. Lippincott & Co.',
        pages: 300,
        Stock: 20,
        discount: 15000
                
    },

    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romance',
        language: 'English',
        price: 30000,
        format: 'ebook',
        isbn: '9780141439518',
        description: 'A witty and charming novel following the romantic entanglements of the Bennet sisters in early 19th-century England',
        status: 'new',
        location: 'Sena Comercio y Turismo',
        publication_date: 'January 28, 1813',
        editorial: 'Penguin Classics',
        pages: 368,
        Stock: 5,
        discount: 15000
      },


      {
        title: 'Harry Potter and the Sorcerer"s Stone',
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        language: 'English',
        price: 30000,
        format: 'ebook',
        isbn: '9780747532743',
        description: 'The first book in the beloved series follows young Harry Potter as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry',
        status: 'new',
        location: 'Sena Comercio y Turismo',
        publication_date: 'June 26, 1997',
        editorial: 'Bloomsbury Publishing',
        pages: 223,
        Stock: 0,
        discount: 15000
      },



      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Tragedy',
        language: 'English',
        price: 40000,
        format: 'ebook',
        isbn: '9780743273565',
        description: 'A mesmerizing tale of love, wealth, and ambition set against the backdrop of the Roaring Twenties in America.',
        status: 'new',
        location: 'Sena Comercio y Turismo',
        publication_date: 'April 10, 1925',
        editorial: 'Scribner',
        pages: 180,
        Stock: 9,
        discount: 20000
      },


      {
        Title: 'The Hobbit',
        Author: 'J.R.R. Tolkien',
        Genre: 'Adventure',
        Language: 'English',
        Price: 60000,
        Format: 'ebook',
        ISBN: '9780345339683',
        Description: 'An enchanting tale of Bilbo Baggins, a hobbit who embarks on a grand adventure to reclaim treasure guarded by the fearsome dragon Smaug.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: 'September 21, 1937',
        Editorial: 'Houghton Mifflin Harcourt',
        Pages: 310,
        Stock: 1,
        discount: 30000
      },

      {
        Title: 'The Lord of the Rings',
        Author: 'J.R.R. Tolkien',
        Genre: 'Epic',
        Language: 'English',
        Price: 30000,
        Format: 'ebook',
        ISBN: '9780618640157',
        Descrition: 'A sweeping epic that follows Frodo Baggins and his companions on a perilous quest to destroy the One Ring and defeat the dark lord Sauron.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: 'October 20, 1955',
        Editorial: 'Houghton Mifflin Harcourt',
        Pages: 1178,
        Stock: 17,
        discount: 15000
      },


      {
        Title: 'Alice"s Adventures in Wonderland',
        Author: 'Lewis Carroll',
        Genre: 'Literature',
        Language: 'English',
        Price: 20000,
        Format: 'ebook',
        ISBN: '9780141439761',
        Description: 'A whimsical journey into a fantastical world filled with peculiar creatures and nonsensical adventures, enjoyed by readers of all ages.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: 'July 4, 1865',
        Editorial: 'Penguin Classics',
        Pages: 176,
        Stock: 90,
        discount: 10000
      },


      {
        Title: 'Cien años de soledad',
        Author: 'Gabriel García Márquez',
        Genre: 'Fiction',
        Language: 'Spanish',
        Price: 100000,
        Format: 'ebook',
        ISBN: '9780307474728',
        Description: 'A landmark novel in Latin American literature, "Cien años de soledad" tells the multi-generational story of the Buendía family in the fictional town of Macondo, blending elements of magic and reality to create a rich tapestry of Latin American history and culture',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: 'May 30, 1967',
        Editorial: 'Vintage Español',
        Pages: 417,
        Stock: 50,
        discount: 50000
      },

      {
        Title: 'The Alchemist',
        Author: 'Paulo Coelho',
        Genre: 'Fiction',
        Language: 'English',
        Price: 20000,
        Format: 'ebook',
        ISBN: '9780062315007',
        Description: 'A philosophical novel about a young Andalusian shepherd named Santiago who sets out on a journey to discover his Personal Legend, encountering various challenges and learning profound lessons about life, destiny, and the importance of following one\'s dreams.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1988',
        Editorial: 'HarperOne',
        Pages: 208,
        Stock: 100,
        discount: 10000
      },


      {
        Title: 'The Catcher in the Rye',
        Author: 'J.D. Salinger',
        Genre: 'Fiction',
        Language: 'English',
        Price: 20000,
        Format: 'ebook',
        ISBN: '9780316769488',
        Description: 'A classic coming-of-age novel that follows Holden Caulfield, a disenchanted teenager, as he navigates the complexities of adolescence and society in New York City.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: 'July 16, 1951',
        Editorial: 'Little, Brown and Company',
        Pages: 224,
        Stock: 50,
        discount: 10000
      },


      {
        Title: 'Love in the Time of Cholera',
        Author: 'Gabriel García Márquez',
        Genre: 'Romance',
        Language: 'Spanish',
        Price: 70000,
        Format: 'ebook',
        ISBN: '9780307389732',
        Description: 'A captivating tale of unrequited love, enduring passion, and the passage of time, set in a Caribbean port town and spanning over 50 years of Colombian history.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1985',
        Editorial: 'Vintage Español',
        Pages: 368,
        Stock: 20,
        discount: 35000
      },

      {
        Title: 'Chronicle of a Death Foretold',
        Author: 'Gabriel García Márquez',
        Genre: 'Mystery',
        Language: 'Spanish',
        Price: 45000,
        Format: 'ebook',
        ISBN: '9781400034710',
        Description: 'A gripping exploration of honor, morality, and fate, this novella tells the story of a murder in a small Colombian town and the events leading up to it.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1981',
        Editorial: 'Vintage Español',
        Pages: 128,
        Stock: 30,
        discount: 22500
      },

      {
        Title: 'The Sound of Things Falling',
        Author: 'Juan Gabriel Vásquez',
        Genre: 'Historical',
        Language: 'Spanish',
        Price: 87000,
        Format: 'ebook',
        ISBN: '9781594487484',
        Description: 'Set in Colombia during the turbulent 1990s, this novel delves into the aftermath of Pablo Escobar\'s reign and its impact on individuals and society, exploring themes of memory, guilt, and redemption.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '2011',
        Editorial: 'Riverhead Books',
        Pages: 320,
        Stock: 15,
        discount: 43500
      },

      {
        Title: 'The Death of Artemio Cruz',
        Author: 'Carlos Fuentes',
        Genre: 'Fiction',
        Language: 'Spanish',
        Price: 69000,
        Format: 'ebook',
        ISBN: '9780374507082',
        Description: 'A groundbreaking novel that explores the complexities of Mexican society through the life and reflections of Artemio Cruz, a wealthy and powerful man on his deathbed.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1962',
        Editorial: 'Farrar, Straus and Giroux',
        Pages: 304,
        Stock: 20,
        discount: 34500
      },


      {
        Title: 'The House of the Spirits',
        Author: 'Isabel Allende',
        Genre: 'Magical Realism',
        Language: 'Spanish',
        Price: 38000,
        Format: 'ebook',
        ISBN: '978501145923',
        Description: 'A captivating family saga spanning several generations in Chile, blending magical realism with historical events to explore themes of love, power, and destiny.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1982',
        Editorial: 'Atria Books',
        Pages: 496,
        Stock: 10,
        discount: 19000
      },

      {
        Title: 'Pedro Páramo',
        Author: 'Juan Rulfo',
        Genre: 'Fiction',
        Language: 'Spanish',
        Price: 25000,
        Format: 'ebook',
        ISBN: '9788437604185',
        Description: 'A landmark of Latin American literature, "Pedro Páramo" is a haunting tale that blurs the lines between the living and the dead, exploring themes of memory, loss, and the search for identity.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1955',
        Editorial: 'Cátedra',
        Pages: 124,
        Stock: 15,
        discount: 12500
      },

      {
        Title: 'The Posthumous Memoirs of Bras Cubas',
        Author: 'Machado de Assis',
        Genre: 'Fiction',
        Language: 'Portuguese',
        Price: 55000,
        Format: 'ebook',
        ISBN: '9780195101706',
        Description: 'A groundbreaking work of Brazilian literature, "The Posthumous Memoirs of Bras Cubas" is a satirical novel that explores themes of love, mortality, and social critique through the unconventional narrative of a deceased protagonist.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1881',
        Editorial: 'Oxford University Press',
        Pages: 256,
        Stock: 0,
        discount: 27500
      },


      {
        Title: 'Hopscotch',
        Author: 'Julio Cortázar',
        Genre: 'Fiction',
        Language: 'Spanish',
        Price: 100000,
        Format: 'ebook',
        ISBN: '9780394752846',
        Description: 'An innovative and unconventional novel that offers multiple reading paths, inviting readers to engage with its non-linear narrative and explore themes of existentialism, identity, and freedom.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1963',
        Editorial: 'Pantheon Books',
        Pages: 576,
        Stock: 5,
        discount: 50000
      },


      {
        Title: 'The Aleph',
        Author: 'Jorge Luis Borges',
        Genre: 'Fiction',
        Language: 'Spanish',
        Price: 30000,
        Format: 'ebook',
        ISBN: '9780142437889',
        Description: 'A collection of mesmerizing short stories that blend fantasy, philosophy, and intricate narrative structures, showcasing Borges\' mastery of storytelling and exploration of complex themes.',
        Status: 'New',
        Location: 'Sena Comercio y Turismo',
        Publication_Date: '1949',
        Editorial: 'Penguin Classics',
        Pages: 272,
        Stock: 10,
        discount: 15000
      }
  ];


  //// filter price//
function pressPrices30_80(){
const filterPrice30_80 = books.filter(books => books.Price >= 30000 && books.Price <= 80000  )
return filterPrice30_80
}

console.log(pressPrices30_80())







/////filter pages (there is somthing wrong(we dont know include the teacher))////

function pressPages(){

return books.filter(book => book.Pages >= 200)

}
console.log(pressPages())





//////////Login/////////


function login(){
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  if (email !== null && password !== null) {
    alert('login exitoso');
  
  } else {
    alert('Algo salio mal, intenta de Nuevo');
  }
  
  })
  }
   



////register////

function register(){
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

let cc = document.getElementById('cc').value
let email = document.getElementById('email').value
let cellphone = document.getElementById('cellphone').value
let name = document.getElementById('name').value
let password= document.getElementById('password').value

if ( name !== null && cc !== null && email !== null && cellphone !== null && password !== password) {
  alert('Registro exitoso');

} else {
  alert('Algo salio mal, intenta de Nuevo');
}

})
}
 

//card pay register//


function cardPayRegister(){
  document.getElementById('cardRegister').addEventListener('submit', function(event) {
    event.preventDefault();

    let cardNumber =document.getElementById('cardNumber').value
    let password =document.getElementById('passwordCard').value

    if(cardNumber !== null && password !== nul){
      alert('Registro de tarjeta exitoso');
    }else{
      alert('Algo salio mal, intenta de Nuevo');
    }

  })}
// Amount of Stock

function pressStock(){
  return filterStock = books.sort((a,b) => a.Stock-b.Stock);
  
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
      
      let books = [
        { 
    
            title: 'Little prince',
            author: 'Antoine de Saint-Exupéry',
            gender: 'literature', 
            language: 'English',
            price: 20000,
            format: 'ebook',
            isbn: '9109109', 
            description: 'is a timeless tale about a young prince who explores the universe, learning profound lessons about love, friendship, and the human condition along the way', 
            status: 'new', 
            location: 'Sena Comercio y Turismo', 
            publication_date: 'April 6, 1943', 
            editorial: 'Reynal & Hitchcock', 
            pages: 100,
            Stock: 10,
            discount: 10000
    
    },
    
        {
        
            title: 'To kill a Monckingbird', 
            author: 'Harper Lee',
            gender: 'literature',
            language: 'English',
            price: 30000, 
            format: 'ebook',
            isbn: '9780451524935',
            description: 'A classic novel set in the American South, exploring themes of racial injustice and moral growth through the eyes of a young girl',
            status: 'new',
            location: 'Sena Comercio y Turismo', 
            publication_date: 'AJuly 11, 1960',
            editorial: 'J. B. Lippincott & Co.',
            pages: 300,
            Stock: 20,
            discount: 15000
                    
        },
    
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            genre: 'Romance',
            language: 'English',
            price: 30000,
            format: 'ebook',
            isbn: '9780141439518',
            description: 'A witty and charming novel following the romantic entanglements of the Bennet sisters in early 19th-century England',
            status: 'new',
            location: 'Sena Comercio y Turismo',
            publication_date: 'January 28, 1813',
            editorial: 'Penguin Classics',
            pages: 368,
            Stock: 5,
            discount: 15000
          },
    
    
          {
            title: 'Harry Potter and the Sorcerer"s Stone',
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            language: 'English',
            price: 30000,
            format: 'ebook',
            isbn: '9780747532743',
            description: 'The first book in the beloved series follows young Harry Potter as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry',
            status: 'new',
            location: 'Sena Comercio y Turismo',
            publication_date: 'June 26, 1997',
            editorial: 'Bloomsbury Publishing',
            pages: 223,
            Stock: 0,
            discount: 15000
          },
    
    
    
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            genre: 'Tragedy',
            language: 'English',
            price: 40000,
            format: 'ebook',
            isbn: '9780743273565',
            description: 'A mesmerizing tale of love, wealth, and ambition set against the backdrop of the Roaring Twenties in America.',
            status: 'new',
            location: 'Sena Comercio y Turismo',
            publication_date: 'April 10, 1925',
            editorial: 'Scribner',
            pages: 180,
            Stock: 9,
            discount: 20000
          },
    
    
          {
            title: 'The Hobbit',
            Author: 'J.R.R. Tolkien',
            Genre: 'Adventure',
            Language: 'English',
            price: 60000,
            Format: 'ebook',
            ISBN: '9780345339683',
            Description: 'An enchanting tale of Bilbo Baggins, a hobbit who embarks on a grand adventure to reclaim treasure guarded by the fearsome dragon Smaug.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: 'September 21, 1937',
            Editorial: 'Houghton Mifflin Harcourt',
            Pages: 310,
            Stock: 1,
            discount: 30000
          },
    
          {
            title: 'The Lord of the Rings',
            Author: 'J.R.R. Tolkien',
            Genre: 'Epic',
            Language: 'English',
            price: 30000,
            Format: 'ebook',
            ISBN: '9780618640157',
            Descrition: 'A sweeping epic that follows Frodo Baggins and his companions on a perilous quest to destroy the One Ring and defeat the dark lord Sauron.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: 'October 20, 1955',
            Editorial: 'Houghton Mifflin Harcourt',
            Pages: 1178,
            Stock: 17,
            discount: 15000
          },
    
    
          {
            title: 'Alice"s Adventures in Wonderland',
            Author: 'Lewis Carroll',
            Genre: 'Literature',
            Language: 'English',
            price: 20000,
            Format: 'ebook',
            ISBN: '9780141439761',
            Description: 'A whimsical journey into a fantastical world filled with peculiar creatures and nonsensical adventures, enjoyed by readers of all ages.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: 'July 4, 1865',
            Editorial: 'Penguin Classics',
            Pages: 176,
            Stock: 90,
            discount: 10000
          },
    
    
          {
            title: 'Cien años de soledad',
            Author: 'Gabriel García Márquez',
            Genre: 'Fiction',
            Language: 'Spanish',
            price: 100000,
            Format: 'ebook',
            ISBN: '9780307474728',
            Description: 'A landmark novel in Latin American literature, "Cien años de soledad" tells the multi-generational story of the Buendía family in the fictional town of Macondo, blending elements of magic and reality to create a rich tapestry of Latin American history and culture',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: 'May 30, 1967',
            Editorial: 'Vintage Español',
            Pages: 417,
            Stock: 50,
            discount: 50000
          },
    
          {
            title: 'The Alchemist',
            Author: 'Paulo Coelho',
            Genre: 'Fiction',
            Language: 'English',
            price: 20000,
            Format: 'ebook',
            ISBN: '9780062315007',
            Description: 'A philosophical novel about a young Andalusian shepherd named Santiago who sets out on a journey to discover his Personal Legend, encountering various challenges and learning profound lessons about life, destiny, and the importance of following one\'s dreams.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1988',
            Editorial: 'HarperOne',
            Pages: 208,
            Stock: 100,
            discount: 10000
          },
    
    
          {
            title: 'The Catcher in the Rye',
            Author: 'J.D. Salinger',
            Genre: 'Fiction',
            Language: 'English',
            price: 20000,
            Format: 'ebook',
            ISBN: '9780316769488',
            Description: 'A classic coming-of-age novel that follows Holden Caulfield, a disenchanted teenager, as he navigates the complexities of adolescence and society in New York City.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: 'July 16, 1951',
            Editorial: 'Little, Brown and Company',
            Pages: 224,
            Stock: 50,
            discount: 10000
          },
    
    
          {
            title: 'Love in the Time of Cholera',
            Author: 'Gabriel García Márquez',
            Genre: 'Romance',
            Language: 'Spanish',
            price: 70000,
            Format: 'ebook',
            ISBN: '9780307389732',
            Description: 'A captivating tale of unrequited love, enduring passion, and the passage of time, set in a Caribbean port town and spanning over 50 years of Colombian history.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1985',
            Editorial: 'Vintage Español',
            Pages: 368,
            Stock: 20,
            discount: 35000
          },
    
          {
            title: 'Chronicle of a Death Foretold',
            Author: 'Gabriel García Márquez',
            Genre: 'Mystery',
            Language: 'Spanish',
            price: 45000,
            Format: 'ebook',
            ISBN: '9781400034710',
            Description: 'A gripping exploration of honor, morality, and fate, this novella tells the story of a murder in a small Colombian town and the events leading up to it.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1981',
            Editorial: 'Vintage Español',
            Pages: 128,
            Stock: 30,
            discount: 22500
          },
    
          {
            title: 'The Sound of Things Falling',
            Author: 'Juan Gabriel Vásquez',
            Genre: 'Historical',
            Language: 'Spanish',
            price: 87000,
            Format: 'ebook',
            ISBN: '9781594487484',
            Description: 'Set in Colombia during the turbulent 1990s, this novel delves into the aftermath of Pablo Escobar\'s reign and its impact on individuals and society, exploring themes of memory, guilt, and redemption.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '2011',
            Editorial: 'Riverhead Books',
            Pages: 320,
            Stock: 15,
            discount: 43500
          },
    
          {
            title: 'The Death of Artemio Cruz',
            Author: 'Carlos Fuentes',
            Genre: 'Fiction',
            Language: 'Spanish',
            price: 69000,
            Format: 'ebook',
            ISBN: '9780374507082',
            Description: 'A groundbreaking novel that explores the complexities of Mexican society through the life and reflections of Artemio Cruz, a wealthy and powerful man on his deathbed.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1962',
            Editorial: 'Farrar, Straus and Giroux',
            Pages: 304,
            Stock: 20,
            discount: 34500
          },
    
    
          {
            title: 'The House of the Spirits',
            Author: 'Isabel Allende',
            Genre: 'Magical Realism',
            Language: 'Spanish',
            price: 38000,
            Format: 'ebook',
            ISBN: '978501145923',
            Description: 'A captivating family saga spanning several generations in Chile, blending magical realism with historical events to explore themes of love, power, and destiny.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1982',
            Editorial: 'Atria Books',
            Pages: 496,
            Stock: 10,
            discount: 19000
          },
    
          {
            title: 'Pedro Páramo',
            Author: 'Juan Rulfo',
            Genre: 'Fiction',
            Language: 'Spanish',
            price: 25000,
            Format: 'ebook',
            ISBN: '9788437604185',
            Description: 'A landmark of Latin American literature, "Pedro Páramo" is a haunting tale that blurs the lines between the living and the dead, exploring themes of memory, loss, and the search for identity.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1955',
            Editorial: 'Cátedra',
            Pages: 124,
            Stock: 15,
            discount: 12500
          },
    
          {
            title: 'The Posthumous Memoirs of Bras Cubas',
            Author: 'Machado de Assis',
            Genre: 'Fiction',
            Language: 'Portuguese',
            price: 55000,
            Format: 'ebook',
            ISBN: '9780195101706',
            Description: 'A groundbreaking work of Brazilian literature, "The Posthumous Memoirs of Bras Cubas" is a satirical novel that explores themes of love, mortality, and social critique through the unconventional narrative of a deceased protagonist.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1881',
            Editorial: 'Oxford University Press',
            Pages: 256,
            Stock: 0,
            discount: 27500
          },
    
    
          {
            title: 'Hopscotch',
            Author: 'Julio Cortázar',
            Genre: 'Fiction',
            Language: 'Spanish',
            price: 100000,
            Format: 'ebook',
            ISBN: '9780394752846',
            Description: 'An innovative and unconventional novel that offers multiple reading paths, inviting readers to engage with its non-linear narrative and explore themes of existentialism, identity, and freedom.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1963',
            Editorial: 'Pantheon Books',
            Pages: 576,
            Stock: 5,
            discount: 50000
          },
    
    
          {
            title: 'The Aleph',
            Author: 'Jorge Luis Borges',
            Genre: 'Fiction',
            Language: 'Spanish',
            price: 30000,
            Format: 'ebook',
            ISBN: '9780142437889',
            Description: 'A collection of mesmerizing short stories that blend fantasy, philosophy, and intricate narrative structures, showcasing Borges\' mastery of storytelling and exploration of complex themes.',
            Status: 'New',
            Location: 'Sena Comercio y Turismo',
            Publication_Date: '1949',
            Editorial: 'Penguin Classics',
            Pages: 272,
            Stock: 10,
            discount: 15000
          }
      ]
      const rebateDay = books.filter(book => book.discount > 0)
      console.log("Books with discount:", books.title);
    
      const discountedBooks = rebateDay.map(book => ({
          title: book.title,
          price: (book.price - book.discount)
      }))

      console.log("Discounted books:", discountedBooks)
    
  } else {
      console.log("No es día de rebaja")
  }
