// Basic JavaScript to dynamically add events
document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { date: 'Nov 20, 2024', name: 'Nature Hike and Campout' },
        { date: 'Dec 10, 2024', name: 'Community Service Project' },
        { date: 'Jan 15, 2025', name: 'Pinewood Derby Race' }
    ];

    const eventList = document.getElementById('eventList');
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.date} - ${event.name}`;
        eventList.appendChild(listItem);
    });
});

// Scroll function for hero button
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
