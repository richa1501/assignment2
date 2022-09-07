let library = [{
    author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true
}, {
    author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true
}, {
    author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false
}];
library.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))   // Sort Title here alphabetical

let tbody = document.querySelector("tbody");
let row = library.map((e) => {
    let td = document.createElement('tr'); //To Creating New Row 
    let author = `<td>${e.author}</td>`;
    let title = `<td>${e.title}</td>`;
    let readingStatus = `<td>${e.readingStatus}</td>`;
    td.innerHTML = author + title + readingStatus;
    return td;
});
row.forEach((n) => tbody.append(n));

//To print OutPut On Consol
library.forEach(libraryItem => {
    let book = `Title of this books is ${libraryItem.title} and Author of this book is ${libraryItem.author}`;

    (library.readingStatus === true) ? console.log(`${book} i have read this book`) : console.log(`${book} still i need to read this book`);

});
