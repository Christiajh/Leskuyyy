function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const correctPassword = '17082012';
    const correctUsername = 'Elizabeth2012';

    if (username !== correctUsername && password !== correctPassword) {
        alert('Username dan Password salah!');
        return false;
    } else if (username !== correctUsername) {
        alert('Username salah!');
        return false;
    } else if (password !== correctPassword) {
        alert('Password salah!');
        return false;
    } else {
        window.location.href = 'welcome.html';
        return false;
    }
}
