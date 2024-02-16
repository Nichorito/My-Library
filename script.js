/////////////////////////////////////
//OPEN AND CLOSE BOOK ADDING FORM
/////////////////////////////////////
let addBookButton = document.querySelector('#add-book');
const form = document.querySelector('#form-container');

addBookButton.addEventListener('click', () => {
    

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'flex';
      } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
      }
});

//////////////////////////////////////
/////// CREATE CHILD UPON SUBMIT //////
//////////////////////////////////////

const submit = document.querySelector('#submit');
const grid = document.querySelector('#main');


submit.addEventListener('click', () => {
    event.preventDefault();

    //Get book information
    const name = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;


    if (name != '' && author != '' && pages != '') {
        CreateChild(name, author, pages)
    }
})


function CreateChild(name, author, pages) {
    //Create book object
    const book = new Book(name, author, pages); 

    //Debug log
    console.log(book.info())

    //Create child div
    const newChild = document.createElement('div')
    newChild.classList.add('child-item');

    //Create uniquie ID for new div
    newChild.id = name.replace(/\s+/g, '-').toLowerCase();

    //Create innerHTML for new child
    newChild.innerHTML = `
    <div class="info-container">
                <h2 class="book-title">${name}</h2>
            </div>

            <div class="author-pages-container">
                <h3 class="author-main">By:  ${author}</h3>
                <h4 class="pages">${pages} Pgs.</h4>
            </div>
            <div class="button-container">                
                <div class="toggle-container">
                    <h3>Read?</h3>
                    <div class="toggle">
                        <button class="toggle-inner" data-theme="not-read">
                            <div id="X">
                                X
                            </div>
                            <div id="✔">
                                ✔
                            </div>
                        </button>
                    </div>
                    
                </div>
                <button class="delete">Delete</button>
            </div>`;


    //Append child to grid
    grid.appendChild(newChild);

    //Reset form values
    document.querySelector('#name').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';

    /*///////////////////////////
    ///// DELETING AN ITEM //////
    ///////////////////////////*/

    let deleteButtons = document.querySelectorAll('.delete');

    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
        const parentDiv = button.parentElement.parentElement;
        parentDiv.remove();
    })

    ///////////////////////////////////
    ////////// TOGGLE MECHANIC/////////
    ///////////////////////////////////

    let toggleButtons = document.querySelectorAll('.toggle-inner');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            event.preventDefault();
            button.getAttribute('data-theme') === 'not-read' ? button.setAttribute('data-theme', 'read') : button.setAttribute('data-theme', 'not-read');
        })
    })


})

    //Hide form
    form.style.display = 'none';
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return (`${title} by ${author}, ${pages} pages, ${read}`)
  }
};




