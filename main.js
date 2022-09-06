const library = [  {
    author: 'Bill Gates',  title: 'The Road Ahead',  readingStatus: true
},   {
    author: 'Steve Jobs',  title: 'Walter Isaacson',  readingStatus: true
},   {
    author: 'Suzanne Collins',  title:  'Mockingjay: The Final Book of The Hunger Games',  readingStatus: false
}];
   let tbody =document.querySelector("tbody");
    let row =  library.map((e) =>{
    let td= document.createElement('tr');
        let author = `<td>${e.author}</td>`;
        let title = `<td>${e.title}</td>`;
        let readingStatus = `<td>${e.readingStatus}</td>`;
        td.innerHTML = author + title + readingStatus;
        return td;
    });
  
  
   
row.forEach((n) => tbody.append(n));
for (let i = 0; i < library.length; i++) 
   {
  
    let book = "'" + library[i].title + "'" + ".";
    if (library.readingStatus === true) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }