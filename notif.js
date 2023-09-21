const popup = document.querySelector('.setMeetUpContainer1');
const toggleElements = document.querySelectorAll('.setTimeLocationBtn');
const close = document.querySelector('.backBtn');

function show() {
    event.preventDefault(); 
    popup.style.display = 'block';
}

function closePage() {
    popup.style.display = 'none';
}

toggleElements.forEach(function (toggleElement) {
    toggleElement.addEventListener('click', show);
});

close.addEventListener('click', closePage);
