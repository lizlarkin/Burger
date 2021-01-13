// Wait for DOM to load
document.addEventListener('DOMContentLoaded', (event) => {
    if (!event) {
      console.info('DOM not loaded');
    }
  

// Get access to Add Burger Button and Text Input elements
const addBurgerBtn = document.querySelector('#add-burger-button');

// Add Button Event Handler
addBurgerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    

    if(addBurgerBtn) {

    const addBurgerEl = document.querySelector('#add-burger-input');

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

// Get Access to Devoured Button
const devouredBtns = document.querySelectorAll('.btn.btn-danger.devoured-button');

// Update Event Handler
if (devouredBtns) {
devouredBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        const newStatus = event.target.getAttribute('data-devoured');

    const burgerStatus = {
      devoured: newStatus,
    };

    fetch(`/api/burgers/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(burgerStatus),
    }).then((response) => {

      if (response.ok) {
        console.log(`Changed devoured`);
        location.reload('/');
      } else {
        alert('Try again!');
        }
      });
    });
  });
}
})



// $(document).ready(function() {
//     $(".devoured-button").on("click", function(event) {
//       event.preventDefault();
//       var burger_id = $(this).attr("data-id");
//       console.log(burger_id);

//       fetch(`/api/burgers/${burger_id}`,{
//           method:'PUT',
//           headers: {
//                      Accept: 'application/json',
//                      'Content-Type': 'application/json',
//                    },
//       }).then((response)=>{
//         if (response.ok) {
//                     console.log(`Changed devoured`);
//                     location.reload('/');
//                   } else {
//                     alert('Try again!');
//                     }
//       })
//     });
//   });
// });