//Первое задание
let start = document.getElementById("start");
console.log(start);

//Второе задание
let elems = document.getElementsByTagName('*'), i;
for (i in elems) {
    if(typeof(elems[i].className)==='string' && elems[i].className.indexOf('value') > -1) {
        console.log(elems[i]);
    }
}

//Третье задание
let rashod = document.getElementsByClassName("expenses-item");
for (let i =0; i < rashod.length; i++) {
    console.log(rashod[i]);
}

//Четвертое задание
let btn = document.getElementsByTagName("button");
for (let i=0; i < btn.length; i++) {
    if (btn[i].textContent.indexOf('Утвердить') > -1 || btn[i].textContent.indexOf('Рассчитать') > -1) {
        console.log(btn[i]);
    }
}

//Пятое задание
let inpt = document.querySelectorAll(".optionalexpenses-item");
for (let i=0; i < inpt.length; i++) {
    console.log(inpt[i]);
}