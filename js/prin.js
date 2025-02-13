// document.addEventListener("DOMContentLoaded", function() {
//     const userEmail = sessionStorage.getItem('currentUser');

//     // Recuperamos las actividades del usuario desde su archivo JSON específico
//     const activities = JSON.parse(localStorage.getItem(`${userEmail}-activities`)) || [];

//     // Mostrar las actividades
//     const activitiesContainer = document.getElementById('user-activities');
    
//     if (activities.length === 0) {
//         activitiesContainer.innerHTML = "<p>No tienes actividades registradas.</p>";
//     } else {
//         let htmlContent = "<div class='activities-grid'>";
//         activities.forEach(activity => {
//             htmlContent += `
//                 <div class="activity-item">
//                     <h3>${activity.name}</h3>
//                     <p><strong>Fecha de ejecución:</strong> ${activity.executionDate}</p>
//                     <p><strong>Fecha de creación:</strong> ${activity.creationDate}</p>
//                 </div>
//             `;
//         });
//         htmlContent += "</div>";
//         activitiesContainer.innerHTML = htmlContent;
//     }
// });
// document.addEventListener("DOMContentLoaded", function() {
//     const userEmail = sessionStorage.getItem('currentUser');

//     // Recuperamos las actividades del usuario desde su archivo JSON específico
//     const activities = JSON.parse(localStorage.getItem(`${userEmail}-activities`)) || [];

//     // Mostrar las actividades
//     const activitiesContainer = document.getElementById('user-activities');
    
//     if (activities.length === 0) {
//         activitiesContainer.innerHTML = "<p>No tienes actividades registradas.</p>";
//     } else {
//         let htmlContent = "<div class='activities-grid'>";
//         activities.forEach(activity => {
//             htmlContent += `
//                 <div class="activity-item">
//                     <h3>${activity.name}</h3>
//                     <p><strong>Fecha de ejecución:</strong> ${activity.executionDate}</p>
//                     <p><strong>Fecha de creación:</strong> ${activity.creationDate}</p>
//                 </div>
//             `;
//         });
//         htmlContent += "</div>";
//         activitiesContainer.innerHTML = htmlContent;
//     }
// });

// 4. Crear actividades encrear.html
// En la página de crear actividad, vamos a guardar las actividades de ese usuario en su archivo JSON, el cual está asociado a su correo electrónico.

// crear.js- Crear actividad
// Javascript

// Copiar
// document.addEventListener("DOMContentLoaded", function() {
//     const createForm = document.getElementById('create-activity-form');

//     createForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const activityName = document.getElementById('activity-name').value;
//         const executionDate = document.getElementById('execution-date').value;
//         const creationDate = new Date().toLocaleDateString();

//         const userEmail = sessionStorage.getItem('currentUser');
//         if (!userEmail) {
//             alert("Por favor inicia sesión.");
//             window.location.href = "../pages/login.html";
//             return;
//         }

//         // Recuperar las actividades del usuario desde su archivo JSON
//         const activities = JSON.parse(localStorage.getItem(`${userEmail}-activities`)) || [];

//         // Añadir nueva actividad
//         activities.push({
//             name: activityName,
//             executionDate: executionDate,
//             creationDate: creationDate
//         });

//         // Guardar las actividades actualizadas en el archivo JSON del usuario
//         localStorage.setItem(`${userEmail}-activities`, JSON.stringify(activities));

//         alert("Actividad creada con éxito.");
//         window.location.href = "principal.html";
//     });
// });