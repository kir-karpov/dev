let title = "Название проекта";
console.log(typeof title);
let screens = "Простые, Сложные, Интерактивные";
console.log(screens.length);
let screenPrice = 2000;
console.log("Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юани");
let rollback = 10;
let fullPrice = 30000;
console.log(fullPrice * (rollback/100));
console.log(typeof fullPrice);
console.log("Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани");
let adaptive = true;
console.log(typeof adaptive);

let screensArray = screens.toLowerCase().split(", ");
console.log(screensArray);