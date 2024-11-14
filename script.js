document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar-container');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            editable: true,
            selectable: true,
            events: [
                { title: 'Nature Hike', start: '2024-11-20' },
                { title: 'Community Project', start: '2024-12-05' }
            ],
        });
        calendar.render();
    }
});

function uploadPhoto() {
    const fileInput = document.getElementById("photoUpload");
    const gallery = document.getElementById("photoGallery");
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.margin = "10px";
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
