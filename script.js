let addBookButton = document.querySelector('#add-book');
let submitButton = document.querySelector('#submit');

addBookButton.addEventListener('click', () => {
    const form = document.querySelector('#form-container');

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'flex';
      } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
      }
});

//Remove form overlay when submit is clicked
submitButton.addEventListener('click', () => {
    form.style.display = 'none';
})
