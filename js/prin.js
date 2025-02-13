// Obtiene el contenedor del calendario
const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('month-year');

// Función para generar el calendario
function generateCalendar() {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    // Actualiza el título del mes y año
    monthYear.textContent = `${getMonthName(month)} ${year}`;

    // Obtén el primer día del mes
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    const startDay = firstDay.getDay(); // Día de la semana en que comienza el mes

    // Limpia el contenido del calendario
    calendar.innerHTML = '';

    // Agregar los días de la semana como encabezado
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    daysOfWeek.forEach(day => {
        const div = document.createElement('div');
        div.textContent = day;
        div.style.fontWeight = 'bold';
        calendar.appendChild(div);
    });

    // Agregar los días del mes
    let day = 1;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startDay) {
                // Si la posición es antes del primer día del mes, no agrega nada
                calendar.appendChild(document.createElement('div'));
            } else if (day <= totalDays) {
                const div = document.createElement('div');
                div.textContent = day;
                div.classList.add('calendar-day');
                calendar.appendChild(div);
                day++;
            }
        }
    }
}

// Función para obtener el nombre del mes
function getMonthName(month) {
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return monthNames[month];
}

// Llamamos a la función para generar el calendario al cargar la página
generateCalendar();
const createActivityBtn = document.getElementById('create-activity-btn');
const activityFormContainer = document.getElementById('activity-form-container');
const activityForm = document.getElementById('activity-form');

// Obtener el email del usuario (debería obtenerse de una sesión activa o similar)
const email = 'usuario@example.com';  // Este email debe venir de la sesión activa

// Mostrar el formulario al hacer click en el botón
createActivityBtn.addEventListener('click', function() {
    activityFormContainer.style.display = 'block';  // Mostramos el formulario
});

// Al enviar el formulario, agregar la actividad a la agenda
activityForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const date = document.getElementById('activity-date').value;
    const title = document.getElementById('activity-title').value;
    const description = document.getElementById('activity-description').value;

    // Llamar a la función de User.js para agregar la actividad a la agenda
    addActivityToAgenda(email, title, date, description);

    // Redirigir o actualizar la página para mostrar las actividades (por ejemplo, regresar a la agenda)
    alert("Actividad añadida correctamente.");
    window.location.href = 'agenda.html';  // Redirigir a la página de agenda

    // Opcional: Limpiar el formulario o esconderlo
    activityForm.reset();
    activityFormContainer.style.display = 'none';  // Ocultar el formulario
});