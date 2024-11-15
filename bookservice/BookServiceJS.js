
// Simple dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const eventSelect = document.getElementById('eventType');
    
    eventSelect.addEventListener('change', function() {
        console.log('Selected event:', this.value);
    });

    // Calendar day selection
    const calendarDays = document.querySelectorAll('td:not(.disabled-day)');
calendarDays.forEach(day => {
    day.addEventListener('click', function() {
        // Remove previous selection
        document.querySelector('.selected-day')?.classList.remove('selected-day');
        // Add selection to clicked day
        this.classList.add('selected-day');
    });
});
});