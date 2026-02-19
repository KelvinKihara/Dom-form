  // 1. Get the form element from the DOM using its ID
    const contactForm = document.getElementById('contactForm');

    // 2. Add an event listener for the 'submit' event
    contactForm.addEventListener('submit', function(event) {
        
        // 3. Prevent the default form submission behavior (which reloads the page)
        event.preventDefault();

        // 4. Get the input values by their IDs using getElementById
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 5. Get the message div element using its ID
        const messageDiv = document.getElementById('submission-message');

        // 6. Set the text content of the div
        messageDiv.textContent = `Form submitted ${name}.`;

    });

// data display below the form
// Show submitted values below the form.


//    // 1. Get references to the HTML elements we need
//         const contactForm = document.getElementById('contactForm');
//         const submittedInfoDiv = document.getElementById('submittedInfo');
        
//         const nameInput = document.getElementById('name');
//         const emailInput = document.getElementById('email');
//         const messageInput = document.getElementById('message');

//         // 2. Add an event listener for the form's 'submit' event
//         contactForm.addEventListener('submit', function(event) {
            
//             // 3. Prevent reloads the page)
//             event.preventDefault();

//             // 4. Get the values from the input fields
//             const name = nameInput.value;
//             const email = emailInput.value;
//             const message = messageInput.value;

//             // 5. Create the HTML content to display the information
//             const outputHTML = `
//                 <h3 class="text-lg font-semibold text-gray-800 mb-2">Submitted Information:</h3>
//                 <p><strong class="text-gray-600">Name:</strong> ${name}</p>
//                 <p><strong class="text-gray-600">Email:</strong> ${email}</p>
//                 <p><strong class="text-gray-600">Message:</strong> ${message}</p>
//             `;

//             // 6. Set the innerHTML of the display div to our new content
//             submittedInfoDiv.innerHTML = outputHTML;
            
//             // 7. Make the info div visible by removing the 'hidden' class
//             submittedInfoDiv.classList.remove('hidden');

//             // Optional: Clear the form fields after submission
//             contactForm.reset();
//         });

