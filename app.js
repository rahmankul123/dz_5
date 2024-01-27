let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let box = {}
tags.forEach(tag =>{
    if (box[tag]){
        box[tag]++
    }else {
        box[tag] = 1
    }
})
const sorted = Object.entries(box)
    .sort((a, b) => b[1] - a[1] )
    .reduce((acc , [tag, count]) =>{
        acc[tag] = count
        return acc
    }, {})
console.log(sorted)


const nl =(lastName, name, patronymic) => {
    return `${lastName} ${name[0]} . ${patronymic[0]}}`
}
console.log(nl(`Emil`, `Rahmankul`, `dfjdfjf`))


const books = (arrayBooks) =>{
    const booksForFilter = arrayBooks.filter(book => book.includes("у") || book.includes("У"))
    const booksForMap = booksForFilter.map(book => "книга с буквой у:" + book)
    booksForMap.forEach(book => console.log(book))
}
books(["Алые Паруса" , "Ууак" , "dkcckfvc"])


let users = [
    { name: 'Алексей', birthDate: new Date('1990-01-01') },
    { name: 'Екатерина', birthDate: new Date('1985-05-10') },
    { name: 'Иван', birthDate: new Date('1995-12-25') },
    { name: 'Мария', birthDate: new Date('1992-08-15') },
    { name: 'Петр', birthDate: new Date('1988-03-20') }
];

users.forEach((user) => {
    let formattedDate = user.birthDate.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    console.log(`Имя: ${user.name}, Дата рождения: ${formattedDate}`);
});