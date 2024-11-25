// function to store the user's name for the results page
function getName(event) {
    event.preventDefault()
    const name = document.getElementById('name').value;
        localStorage.setItem('user', name);
        window.location.href = 'quiz.html';
}
