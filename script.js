document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonIndex = event.target.textContent === 'No' ? 2 : 1;
            if (buttonIndex === 1) {
                playSound();
            } else {
                showMessage();
            }
        });
    });
});

function showMessage() {
    document.getElementById('button-form').classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
}

function playSound() {
    document.getElementById('sound').play();
}