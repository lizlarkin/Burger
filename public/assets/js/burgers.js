// Wait for DOM to load
document.addEventListener('DOMContentLoaded', (event) => {
    if (!event) {
      console.info('DOM not loaded');
    }
  

// Get access to Add Burger Button and Text Input elements
const addBurgerBtn = document.querySelector('#add-burger-button');
const addBurgerEl = document.querySelector('add-burger-input');

// Submit Event Handler
addBurgerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if(addBurgerBtn) {

    const addBurger = {
        burger_name: addBurgerEl.value.trim()
    };
    fetch('/api/burgers', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(addBurger),
    }).then(()=> {
        console.log('burger added');
        location.reload();
    });

    };
});


// Get Access to Devour Buttons
const devourBtns = document.querySelectorAll('.devoured-button');

// if(devourBurger) {
//     devourBurger.forEach(element) => {
//         element.addEventListener (event) => {
//             event.preventDefault();
//         }
//     }
// }

});