let books = [
    { id: 0,
    Title: "ana",
    Availability:"yes",
    Language:"english",
    Editorial:"waza world",
    Genre:"Literature",
    Autor:"perez",
    Price:20,
    Stock:5},

    { id: 1, 
    Title: "beto", 
    Availability:"no", 
    Language:"spanish", 
    Editorial:"new york", 
    Genre:"Literature", 
    Autor:"leonardo", 
    Price:200, 
    Stock:7},

    { id: 2,
    Title: "carlos", 
    Availability:"no", 
    Language:"english", 
    Editorial:"insane waza", 
    Genre:"Literature", 
    Autor:"pablo", 
    Price:20000, 
    Stock:2},

    { id: 3, 
    Title: "data", 
    Availability:"yes", 
    Language:"portugues", 
    Editorial:"new york", 
    Genre:"Literature", 
    Autor:"aron", 
    Price:200, 
    Stock:3},

    { id: 4, 
    Title: "eduardo",
    Availability:"yes", 
    Language:"portugues", 
    Editorial:"library com", 
    Genre:"Literature", 
    Autor:"xoka", 
    Price:20000,
    Stock:1} 
]
// Select Book for modify Stock
function selectBook(i){
    if(!isNaN(i)) {
        let operation = prompt("desea agregar o eliminar un libro\n\n +/-");
        pressAmount(operation,i);
    }
}
// Modify Stock
function pressAmount(operation,i){
    const filter = books.sort((a,b) => a.Title.localeCompare(b.Title));
    filter;
    switch (operation) {
        case '+':
            AmountStock = books[i].Stock +=1;
            resTitle[0].innerHTML = " Title: "+ filter[i].Title;
            resAutor[0].innerHTML = " Autor: "+ filter[i].Autor;
            resPrice[0].innerHTML = " Price: "+ filter[i].Price;
            resStock[0].innerHTML = " Stock: "+ filter[i].Stock;
        break;
        case '-':
            AmountStock = books[i].Stock;
            if (AmountStock<=0) {
                resTitle.innerHTML = "it can't be lower";
            }else{
                AmountStock = books[i].Stock -=1;
                resTitle[0].innerHTML = " Title: "+ filter[i].Title;
                resAutor[0].innerHTML = " Autor: "+ filter[i].Autor;
                resPrice[0].innerHTML = " Price: "+ filter[i].Price;
                resStock[0].innerHTML = " Stock: "+ filter[i].Stock;
        }
        break;
        default:  resTitle.innerHTML = "invalid value";
        break;
    }
}
// Functions to search by availability-editorial-language
function pressAvailability(){
    filter = books.sort((a,b) => b.Availability.localeCompare(a.Availability));
    for (let i = 0; i < filter.length; i++) {
        for (let i = 0; i <= filter.length; i++) {
            resTitle[i+1].innerHTML = ""
            resAutor[i+1].innerHTML = ""
            resPrice[i+1].innerHTML = ""
            resTitle[i].innerHTML = " Title: "+ filter[i].Title;
            resAutor[i].innerHTML = " Autor: "+ filter[i].Autor;
            resPrice[i].innerHTML = " Price: "+ filter[i].Price;
        }
}
}
function pressLanguage(){
    filter = books.sort((a,b) => a.Language.localeCompare(b.Language)); 
    for (let i = 0; i <= filter.length; i++) {
        resTitle[i+1].innerHTML = ""
        resAutor[i+1].innerHTML = ""
        resPrice[i+1].innerHTML = ""
        resTitle[i].innerHTML = " Title: "+ filter[i].Title;
        resAutor[i].innerHTML = " Autor: "+ filter[i].Autor;
        resPrice[i].innerHTML = " Price: "+ filter[i].Price;
    }
}
function  pressEditorial(){
    filter = books.sort((a,b) => a.Editorial.localeCompare(b.Editorial)); 
    for (let i = 0; i <= filter.length; i++) {
        resTitle[i+1].innerHTML = ""
        resAutor[i+1].innerHTML = ""
        resPrice[i+1].innerHTML = ""
        resTitle[i].innerHTML = " Title: "+ filter[i].Title;
        resAutor[i].innerHTML = " Autor: "+ filter[i].Autor;
        resPrice[i].innerHTML = " Price: "+ filter[i].Price;
    }
}
// Search by Gender
function pressGenre(GenreOptions){
    filter = books.filter((a) => a.Genre===GenreOptions);
    if (filter.length===0) {
        for (let i = 0; i <= filter.length+i; i++) {
            resTitle[i+1].innerHTML = ""
            resAutor[i+1].innerHTML = ""
            resPrice[i+1].innerHTML = ""
            resTitle[0].innerHTML = "not books found"
            resAutor[i].innerHTML = ""
            resPrice[i].innerHTML = ""
        }
    }else{
    for (let i = 0; i <= filter.length; i++) {
        resTitle[i+1].innerHTML = ""
        resAutor[i+1].innerHTML = ""
        resPrice[i+1].innerHTML = ""
        resTitle[i].innerHTML = " Title: "+ filter[i].Title;
        resAutor[i].innerHTML = " Autor: "+ filter[i].Autor;
        resPrice[i].innerHTML = " Price: "+ filter[i].Price;
    }
    }
    
}
// Search by Autor
function pressAutor(){
    filter = books.sort((a,b) => a.Autor.localeCompare(b.Autor));
    for (let i = 0; i <= filter.length; i++) {
        resTitle[i+1].innerHTML = ""
        resAutor[i+1].innerHTML = ""
        resPrice[i+1].innerHTML = ""
        resTitle[i].innerHTML = " Title: "+ filter[i].Title;
        resAutor[i].innerHTML = " Autor: "+ filter[i].Autor;
        resPrice[i].innerHTML = " Price: "+ filter[i].Price;
    }
}
// Search by Price
function PressPrice(){
    filter = books.sort((a,b) => a.Price-b.Price);
    for (let i = 0; i <= filter.length; i++) {
        resTitle[i+1].innerHTML = ""
        resAutor[i+1].innerHTML = ""
        resPrice[i+1].innerHTML = ""
        resTitle[i].innerHTML = " Title: "+ filter[i].Title;
        resAutor[i].innerHTML = " Autor: "+ filter[i].Autor;
        resPrice[i].innerHTML = " Price: "+ filter[i].Price;
    }
}
// search by Title A-Z and Z-A
function pressTitle(option){
    if (option==="A-Z"){
        filter = books.sort((a,b) => a.Title.localeCompare(b.Title));
    }else{
        filter = books.sort((a,b) => b.Title.localeCompare(a.Title));
    }
    for (let i = 0; i <= filter.length; i++) {
        resTitle[i+1].innerHTML = ""
        resAutor[i+1].innerHTML = ""
        resPrice[i+1].innerHTML = ""
        resTitle[i].innerHTML = " Title: "+ filter[i].Title;
        resAutor[i].innerHTML = " Autor: "+ filter[i].Autor;
        resPrice[i].innerHTML = " Price: "+ filter[i].Price;
    }
}