function doCrypt(isDecrypt) {
    var shiftText = document.getElementById("shift").value;
    if (!/^-?\d+$/.test(shiftText)) {
        alert("Запрещенный символ");
        return;
    }
    var shift = parseInt(shiftText, 10);
    if (shift < 0 || shift >= 26) {
        alert("Сдвиг вне допустимого диапазона");
        return;
    }
    if (isDecrypt)
        shift = (26 - shift) % 26;
    var textElem = document.getElementById("text");
    textElem.value = caesarShift(textElem.value, shift);
}

function caesarShift(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (65 <= c && c <= 90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);
        else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);
        else result += text.charAt(i);
    }
    return result;
}