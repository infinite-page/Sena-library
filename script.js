let books = [
    { id: "2", title: "beto", availability:"no", Language:"spanish"},
    { id: "1", title: "ana", availability:"yes", Language:"english"},
    { id: "3", title: "carlos", availability:"no", Language:"english"},
    { id: "4", title: "data", availability:"yes", Language:"portugues"}
]

function pressAvailability(){
const filterAvailability = books.sort((a,b) => b.availability.localeCompare(a.availability));
return filterAvailability
}
function pressLanguage() {
    const filterLanguage = books.sort((a,b) => a.Language.localeCompare(b.Language)); 
    return filterLanguage 
}
const filterTitle = books.sort((a,b) => a.title.localeCompare(b.title));

console.table(pressAvailability())