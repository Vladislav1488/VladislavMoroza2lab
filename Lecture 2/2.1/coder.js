function caesar_code(a, d) {
    var c = document.getElementById("b_text1"),
        g = document.getElementById("b_text2"),
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        e = "",
        d = d % b.length || 0,
        c = c.value.toUpperCase(),
        f = b.substr(d) + b.substr(0, d);
    1 == a && (a = b, b = f, f = a);
    for (i = 0; i < c.length; i++) a = b.lastIndexOf(c.charAt(i)), a = f.charAt(a) || c.charAt(i), e += a;
    g.value = e
};