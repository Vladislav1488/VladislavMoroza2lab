function Accounting() {

    var month = document.getElementById('month').value;

    var day = document.getElementById('day').value;

    day = parseInt(day);

    switch (month) {
        case 'Январь':
            if (day >= 21 && day <= 31) {
                document.getElementById("sign").src = "images/vodoley.png";
                document.getElementById("name").innerText = "Знак Водолей:";
            } else if (day >= 1 && day <= 20) {
                document.getElementById("sign").src = "images/kozerog.png";
                document.getElementById("name").innerText = "Козерог:";
                //   document.getElementById("txt").="rac.txt";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Февраль':
            if (day >= 20 && day <= 29) {
                document.getElementById("sign").src = "images/ruba.png";
                document.getElementById("name").innerText = "Знак рыбы:";
            } else if (day >= 1 && day <= 19) {
                document.getElementById("sign").src = "images/vodoley.png";
                document.getElementById("name").innerText = "Знак Водолей:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Март':
            if (day >= 1 && day <= 20) {
                document.getElementById("sign").src = "images/ruba.png";
                document.getElementById("name").innerText = "Знак рыбы:";
            } else if (day >= 21 && day <= 31) {
                document.getElementById("sign").src = "images/oven.png";
                document.getElementById("name").innerText = "Знак Овен:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Апрель':
            if (day >= 21 && day <= 31) {
                document.getElementById("sign").src = "images/telec.png";
                document.getElementById("name").innerText = "Знак Телец:";
            } else if (day >= 1 && day <= 20) {
                document.getElementById("sign").src = "images/oven.png";
                document.getElementById("name").innerText = "Знак Овен:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Май':
            if (day >= 1 && day <= 21) {
                document.getElementById("sign").src = "images/telec.png";
                document.getElementById("name").innerText = "Знак Телец:";
            } else if (day >= 22 && day <= 31) {
                document.getElementById("sign").src = "images/bliznec.png";
                document.getElementById("name").innerText = "Знак Близнецы:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Июнь':
            if (day >= 22 && day <= 31) {
                document.getElementById("sign").src = "images/rak.png";
                document.getElementById("name").innerText = "Знак Рак:";
            } else if (day >= 1 && day <= 21) {

                document.getElementById("sign").src = "images/bliznec.png";
                document.getElementById("name").innerText = "Знак Близнецы:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;

        case 'Июль':
            if (day >= 24 && day <= 31) {
                document.getElementById("sign").src = "images/lev.png";
                document.getElementById("name").innerText = "Знак Лев:";
            } else if (day >= 1 && day <= 23) {
                document.getElementById("sign").src = "images/rak.png";
                document.getElementById("name").innerText = "Знак Рак:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Август':
            if (day >= 24 && day <= 31) {
                document.getElementById("sign").src = "images/deva.png";
                document.getElementById("name").innerText = "Знак Дева:";
            } else if (day >= 1 && day <= 23) {
                document.getElementById("sign").src = "images/lev.png";
                document.getElementById("name").innerText = "Знак Лев:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Сентябрь':
            if (day >= 24 && day <= 31) {
                document.getElementById("sign").src = "images/vesu.png";
                document.getElementById("name").innerText = "Знак Весы:";
            } else if (day >= 1 && day <= 23) {
                document.getElementById("sign").src = "images/deva.png";
                document.getElementById("name").innerText = "Знак Дева:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Октябрь':
            if (day >= 24 && day <= 31) {
                document.getElementById("sign").src = "images/scorpion.png";
                document.getElementById("name").innerText = "Знак Скорпион:";
            } else if (day >= 1 && day <= 23) {
                document.getElementById("sign").src = "images/vesu.png";
                document.getElementById("name").innerText = "Знак Весы:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Ноябрь':
            if (day >= 23 && day <= 31) {
                document.getElementById("sign").src = "images/strelec.png";
                document.getElementById("name").innerText = "Знак Стрелец:";
            } else if (day >= 1 && day <= 22) {
                document.getElementById("sign").src = "images/scorpion.png";
                document.getElementById("name").innerText = "Знак Скорпион:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        case 'Декабрь':
            if (day >= 22 && day <= 31) {
                document.getElementById("sign").src = "images/kozerog.png";
                document.getElementById("name").innerText = "Знак Козерог:";
            } else if (day >= 1 && day <= 21) {
                document.getElementById("sign").src = "images/strelec.png";
                document.getElementById("name").innerText = "Знак Стрелец:";
            } else {
                alert('Вы указали не верный день месяца');
            }
            break;


        default:
            alert("Вы указали не верный день месяца");
    }

}