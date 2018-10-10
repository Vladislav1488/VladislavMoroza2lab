function charCount(text) {
    return text.replace(/[\.,!?;'"@#$%^:&*{}|/<>1234567890 ]*/g, '').length;

}

function countWords(text) {

    var str = document.getElementById('input').value;

    return str.split(" ").length - 1;

}

function getcount(parametr) {
    return document.getElementById(parametr);
}

getcount('input').onkeyup = function() {
    getcount('symbol').innerHTML = charCount(this.value);
    if (charCount(this.value) > 999) {
        alert('Вы ввели больше 999 символов');
    }
    getcount("words").innerHTML = countWords(this.value);
};