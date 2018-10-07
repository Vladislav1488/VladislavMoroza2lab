function validateForm() {
    var password1 = document.getElementById('password1');
    var password1_regexp = /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}/g;
    if (!password1_regexp.test(password1.value)) {
        alert('Проверьте пароль')
        return false;
    }

    var email = document.getElementById('email');
    var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!email_regexp.test(email.value)) {
        alert('Проверьте email');
        return false;
    } else {
        alert('Все четко')
        return true;
    }
}