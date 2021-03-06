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
    bookObj.id = myLibrary.length;
    myLibrary.push(bookObj)
}


//Dom Actions
function buildBookCard(bookObj){
    const cardWrapper = document.querySelector('.card-wrapper');

    cardWrapper.innerHTML += `
            <div class="card" list-index=${bookObj.id} card-id="${bookObj.id}"> 
                <h2 class="book-title">${bookObj.title}</h2> 
                <ul class="book-details"> 
                    <li class="book-author">Author: ${bookObj.author}</li> 
                    <li class="book-num-pages">Pages: ${bookObj.numPages}</li> 
                    <li class="book-did-read">Read Status: ${bookObj.didRead}</li> 
                </ul>
                <div class="card-btn-wrapper"> 
                    <button class="clear-book-btn danger">Remove</button>
                
                </div>
            </div>`
}

function printBookCards(bookArray){
 
    for(let i = 0; i < bookArray.length; i++){       
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

function handleCardBtnClick(target) {  
    const card = target.parentNode.parentNode;
    const cardIndex = card.getAttribute("list-index")

    if(target.getAttribute("class") == 'clear-book-btn danger'){
        card.style.display="none";
        console.log('nailed it')
    }


}





//Test & Init
const theHobbit = new Book("The Hobbit", "Tolkein", 566, false);
const starWars = new Book("Star Wars", "Jedi", 677, true);
const theOddFellow = new Book("The Odd Fellow", "Some Person", 345, true);

addBookToLibrary(theHobbit);
addBookToLibrary(starWars);
addBookToLibrary(theOddFellow);

printBookCards(myLibrary);
//Active Event Listeners
document.querySelector('.clear-all-btn').addEventListener("click", clearAllBooks);
document.querySelector('.add-book-btn').addEventListener("click", addBookFromForm);
document.querySelector('.card-wrapper').addEventListener('click', (event)=>{handleCardBtnClick(event.target)})
