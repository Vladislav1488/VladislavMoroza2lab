function codify() {
    var shift = document.getElementById("shift").value;

    shift = parseInt(shift);

    let str = document.getElementById("in").value;

    console.log(str.charCodeAt(0));
    let out = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code + shift;
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
}

function decode() {
    var shift = document.getElementById("shift").value;

    shift = parseInt(shift);

    let str = document.getElementById("in").value;

    console.log(str.charCodeAt(0));
    let out = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code - shift;
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
}