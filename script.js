let books = [
    { id: 2, title: "beto", Availability:"no", Language:"spanish", Editorial:"new york", Genre:"Literature", Autor:"leonardo", Price:2000},
    { id: 1, title: "ana", Availability:"yes", Language:"english", Editorial:"waza world", Genre:"Literature", Autor:"perez", Price:20},
    { id: 3, title: "carlos", Availability:"no", Language:"english", Editorial:"insane waza", Genre:"Historical", Autor:"pablo", Price:200},
    { id: 4, title: "data", Availability:"yes", Language:"portugues", Editorial:"new york", Genre:"Fiction", Autor:"aron", Price:20000},
    { id: 5, title: "eduardo", Availability:"yes", Language:"portugues", Editorial:"library com", Genre:"Magical Realism", Autor:"xoka", Price:200000} 
]
// Functions to search by availability-editorial-language
function pressAvailability(){
const filterAvailability = books.sort((a,b) => b.Availability.localeCompare(a.Availability));
return filterAvailability
}
function pressLanguage(){
    const filterLanguage = books.sort((a,b) => a.Language.localeCompare(b.Language)); 
    return filterLanguage 
}
function  pressEditorial(){
    const filterEditorial = books.sort((a,b) => a.Editorial.localeCompare(b.Editorial)); 
    return filterEditorial
}
// Search by Gender
function pressGenre(GenreOptions){
    const filterGenre = books.filter((a) => a.Genre===GenreOptions);
    return console.log(filterGenre)
}
// Search by Autor
function pressAutor(){
    const filterAutor = books.sort((a,b) => a.Autor.localeCompare(b.Autor));
    return filterAutor
}
// Search by Price
function PressPrice(){
    const filterPrice = books.sort((a,b) => a.Price-b.Price);
    return filterPrice
}
// search by Title A-Z and Z-A
function pressTitle(option){
    if (option==="A-Z"){
    const filterTitle = books.sort((a,b) => a.title.localeCompare(b.title));
    return console.log(filterTitle)
    }else{
        const filterTitle = books.sort((a,b) => b.title.localeCompare(a.title));
        return console.log(filterTitle)
    }
}

