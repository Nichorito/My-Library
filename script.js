let addBookButton = document.querySelector('#add-book');

addBookButton.addEventListener('click', () => {
    alert('Add a book?  Sorry we dont do that yet');
    const form = document.querySelector('#form-container');

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'flex';
      } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
      }
});

