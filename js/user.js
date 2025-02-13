document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#registration-form');
    
    // Campos del formulario de registro
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener los datos del formulario de registro
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validar que todos los campos se llenen
        if (!email || !username || !password || !confirmPassword) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Obtener los usuarios previamente almacenados en localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Crear un objeto con todos los datos del usuario
        const newUser = {
            email: email,
            username: username,
            password: password, 
        };

        // Añadir el nuevo usuario a la lista de usuarios
        users.push(newUser);

        // Guardar los datos actualizados en localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert("¡Registro exitoso!");

        // Redirigir al usuario al catálogo (puedes cambiar esta URL si es necesario)
        window.location.href = "../pages/crear.html";
    });

});
