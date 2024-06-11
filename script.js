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
    Price:2000, 
    Stock:7},

    { id: 2,
    Title: "carlos", 
    Availability:"no", 
    Language:"english", 
    Editorial:"insane waza", 
    Genre:"Historical", 
    Autor:"pablo", 
    Price:200, 
    Stock:2},

    { id: 3, 
    Title: "data", 
    Availability:"yes", 
    Language:"portugues", 
    Editorial:"new york", 
    Genre:"Fiction", 
    Autor:"aron", 
    Price:20000, 
    Stock:3},

    { id: 4, 
    Title: "eduardo",
    Availability:"yes", 
    Language:"portugues", 
    Editorial:"library com", 
    Genre:"Magical Realism", 
    Autor:"xoka", 
    Price:200000,
    Stock:1} 
]
// Select Book for modify Stock
function selectBook(i){
    res.innerHTML = ""
    if(!isNaN(i)) {
        let operation = prompt("desea agregar o eliminar un libro\n\n +/-");
        pressAmount(operation,i);
    }
}
// Modify Stock
function pressAmount(operation,i){
    res.innerHTML = ""
    const filter = books.sort((a,b) => a.Title.localeCompare(b.Title));
    filter;
    switch (operation) {
        case '+':
            AmountStock = books[i].Stock +=1;
            res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +" Stock: "+ filter[i].Stock +"<br>";
        break;
        case '-':
            if (AmountStock<=0) {
                res.innerHTML += "it can't be lower";
            }else{
                AmountStock = books[i].Stock -=1;
                res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price + " Stock: "+ filter[i].Stock +"<br>";
        }
        break;
        default:  res.innerHTML = "invalid value";
        break;
    }
}
// Functions to search by availability-editorial-language
function pressAvailability(){
    res.innerHTML = ""
    filter = books.sort((a,b) => b.Availability.localeCompare(a.Availability));
    for (let i = 0; i < filter.length; i++) {
        res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +"<br>";
}
}
function pressLanguage(){
    res.innerHTML = ""
    filter = books.sort((a,b) => a.Language.localeCompare(b.Language)); 
    for (let i = 0; i < filter.length; i++) {
        res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +"<br>";
}
}
function  pressEditorial(){
    res.innerHTML = ""
    filter = books.sort((a,b) => a.Editorial.localeCompare(b.Editorial)); 
    for (let i = 0; i < filter.length; i++) {
        res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +"<br>";
}
}
// Search by Gender
function pressGenre(GenreOptions){
    res.innerHTML = ""
    filter = books.filter((a) => a.Genre===GenreOptions);
    if (filter.length===0) {
        res.innerHTML += "not books found";
    }else{
    for (let i = 0; i < filter.length; i++) {
        res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +"<br>";
    }
    }
    
}
// Search by Autor
function pressAutor(){
    res.innerHTML = ""
    filter = books.sort((a,b) => a.Autor.localeCompare(b.Autor));
    for (let i = 0; i < filter.length; i++) {
        res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +"<br>";
}
}
// Search by Price
function PressPrice(){
    res.innerHTML = ""
    filter = books.sort((a,b) => a.Price-b.Price);
    for (let i = 0; i < filter.length; i++) {
        res.innerHTML += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +"<br>";
}
}
// search by Title A-Z and Z-A
function pressTitle(option){
    res.innerHTML = ""
    if (option==="A-Z"){
        filter = books.sort((a,b) => a.Title.localeCompare(b.Title));
    }else{
        filter = books.sort((a,b) => b.Title.localeCompare(a.Title));
    }
    for (let i = 0; i < filter.length; i++) {
        res.innerHTML  += " Title: "+ filter[i].Title + " Autor: "+ filter[i].Autor + " Price: "+ filter[i].Price +"<br>";    
}
}