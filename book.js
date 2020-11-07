//Library Actions
let myLibrary = [];

function Book(title, author, numPages, didRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.didRead = didRead;

    this.info = function() {
        let didReadScript = '';

        if(didRead){
            didReadScript = 'read'
        }else didReadScript = 'not read yet'
        return`${title} by ${author}, ${numPages} pages, ${didReadScript}.`
    }
}

function addBookToLibrary(bookObj){
    myLibrary.push(bookObj)
}


//Dom Actions
function buildBookCard(bookObj){
    const cardWrapper = document.querySelector('.card-wrapper');

    cardWrapper.innerHTML += `
            <div class="card"> 
                <h2 class="book-title">${bookObj.title}</h2> 
                <ul class="book-details"> 
                    <li class="book-author">Author: ${bookObj.author}</li> 
                    <li class="book-num-pages">Pages: ${bookObj.numPages}</li> 
                    <li class="book-did-read">Read Status: ${bookObj.didRead}</li> 
                </ul>
                <div class="card-btn-wrapper"> 
                    <button class="clear-book-btn">Remove</button>
                    <button class="edit-book-btn">Edit</button>
                </div>
            </div>`
}

function printBookCards(){
    for(let i = 0; i < myLibrary.length; i++){
        buildBookCard(myLibrary[i]);
    }
}

function addBookFromForm(){
    const title = document.querySelector('.form-title').value;
    const author = document.querySelector('.form-author').value;
    const numPages = document.querySelector('.form-pages').value;
    const readStatus = document.querySelector('.form-read-status').value;
    const newBook = new Book(title, author, numPages, readStatus);

    addBookToLibrary(newBook);
    buildBookCard(myLibrary[myLibrary.length - 1])
}



function clearAllBooks(){
    const cardWrapper = document.querySelector('.card-wrapper');
 
    myLibrary = [];
    cardWrapper.innerHTML = ""
}





//Test & Init
const theHobbit = new Book("The Hobbit", "Tay", 566, false);
const starWars = new Book("Star Wars", "Council", 677, true);
const theOddFellow = new Book("The Odd Fellow", "Clayton", 345, true);

addBookToLibrary(theHobbit);
addBookToLibrary(starWars);
addBookToLibrary(theOddFellow);

printBookCards();
//Active Event Listeners
document.querySelector('.clear-all-btn').addEventListener("click", clearAllBooks);
document.querySelector('.add-book-btn').addEventListener("click", addBookFromForm);
document.querySelector('.card-wrapper').addEventListener('click', (event)=>{
    console.log(event.target.parentNode.parentNode)
    console.log("clicked")
})
