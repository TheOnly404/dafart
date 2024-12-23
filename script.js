document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('button').addEventListener('click', checkPassword);
});

function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'correctpassword') {
        document.getElementById('password-form').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
    } else {
        alert('Incorrect password. Please try again.');
    }
}
