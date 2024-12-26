document.addEventListener('DOMContentLoaded', function() {
     const form = document.querySelector('.form');
      const nameInput = document.getElementById('name-input');
       const apellidoInput = document.getElementById('apellido-input')
       ; const emailInput = document.getElementById('email-input');
        const mensajeInput = document.getElementById('mensaje');

         form.addEventListener('submit', function(event) {
             let valid = true; 
             if (nameInput.value.trim() === '') {
                 alert('Por favor, ingresa tu nombre.');
                  nameInput.focus(); valid = false; 
                } 
             if (valid && apellidoInput.value.trim() === '') {
                 alert('Por favor, ingresa tu apellido.');
                  apellidoInput.focus();
                   valid = false;
                }
             if (valid && !validateEmail(emailInput.value)){
                 alert('Por favor, ingresa un correo electrónico válido.');
                  emailInput.focus();
                   valid = false; 
                }
             if (valid && mensajeInput.value.trim() === '') {
                 alert('Por favor, ingresa un mensaje.');
                  mensajeInput.focus(); valid = false;
                 }
                  if (!valid) { event.preventDefault(); } });
                })
