document.addEventListener("DOMContentLoaded", function() {
    const mainBtn = document.getElementById('mainBtn');
    
    mainBtn.addEventListener('click', function() {
        // Crear el contenedor del formulario
        const loginContainer = document.createElement('div');
        loginContainer.classList.add('login-container');
        
        // Contenido del contenedor
        loginContainer.innerHTML = `
            <div class="login-box">
                <h2>Iniciar sesión</h2>
                <label for="email">Correo electrónico</label>
                <input type="email" id="email" name="email" required placeholder="Ingresa tu correo" />
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña" />
                <button id="submit-login" class="submit-btn">Iniciar sesión</button>
                <button id="close-login" class="close-btn">Cerrar</button>
            </div>
        `;

        // Añadir el contenedor al body
        document.body.appendChild(loginContainer);

        const closeBtn = document.getElementById('close-login');
        closeBtn.addEventListener('click', function() {
            loginContainer.remove();
        });

        // Aquí se maneja el botón de "Iniciar sesión"
        const submitBtn = document.getElementById('submit-login');
        submitBtn.addEventListener('click', function() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validar que haya usuarios en el localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Comprobar si existe un usuario con el correo y contraseña ingresados
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert("¡Bienvenido!");
                // Guardar en sessionStorage el email para poder acceder a sus datos
                sessionStorage.setItem('currentUser', email);

                // Redirigir a la página principal
                window.location.href = "../pages/principal.html";
            } else {
                alert("Correo electrónico o contraseña incorrectos.");
            }
        });
    });
});
