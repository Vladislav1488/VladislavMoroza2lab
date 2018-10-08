function validateForm() {
    var password1 = document.getElementById('password1');
    var password1_regexp = /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}/g;
    if (!password1_regexp.test(password1.value)) {
        alert('В пароле должен быть один из сиволов @#$%&, маленькая и большая буквы, цифры')
        return false;
    } else if (/^(?=.*\d)(?=.*[.,/'"])/.test(password1.value)) {
        alert('В пароле есть недопустимые символы .,/ ');
        return false;
    }

    var email = document.getElementById('email');
    var email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email_regexp.test(email.value)) {
        alert('Проверьте email');
        return false;
    } else {
        alert('Все четко')
        return true;
    }
}