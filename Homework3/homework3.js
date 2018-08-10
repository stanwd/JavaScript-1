//Задание1 - Простые числа до 100
document.write("<H2>Задание 1 - Простые числа до 100</H2>");
var num = 2;  //По определению - простые числа начинаются с "2"
while (num <= 100) {
    if (isSimple(num)) {
        document.write(num + " ");
    }
    num++;
}


//Проверка, является ли число простым - пробуем делить на все числа от 2 до number-1
function isSimple(num) {
    var i = 2;
    while (i < num) {
        if (num % i == 0) {   
            return false;
        }
        i++;
    }
    return true;
}


//Задание2
document.write("<H2>Задание 2</H2>");
num = 0; 
do {
    document.write(num + " - ");
    if (num == 0) {
        document.write("это ноль");
    } else if (num % 2 ==0) {
        document.write("это четное число");
    } else {
        document.write("это нечетное число");
    }
    document.write("<br>");
    num++;
} while (num <= 10);


//Задание3 - Числа от 0 до 9
document.write("<H2>Задание 3 - Числа от 0 до 9</H2>");
for(var i = 0; i <= 9; document.write(i++ + " ")) {}


//Задание4 - Пирамида
//document.write("<H2>Задание 3 - Числа от 0 до 9</H2>");

var x = "#"; 
for(num = 1; num <= 20; num++) {
    x += "#";
    console.log(x);
}
