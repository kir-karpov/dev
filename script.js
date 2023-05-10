`use strict`
let title = prompt("Как называется ваш проект?")
let screens = prompt("Какие типы экранов нужно разработать?")
let screenPrice = +prompt("Сколько будет стоить данная работа?")
let adaptive = confirm("Нужен ли адаптив на сайте?")
let service1 = prompt ("Какой дополнительный тип услуги нужен?")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice2 = +prompt("Сколько это будет стоить?")
let rollback = 10
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))

// функция задания номер 1) 
function getAllServicePrices() {
  return allServicePrices = servicePrice1 + servicePrice2
}

getAllServicePrices()


// функция задания номер 2) 
function getFullPrice() {
  return fullPrice = screenPrice + allServicePrices
}


// функция задания номер 3)
function getTitle(str) {
  title = title.trim() // удаляет пробелы в начале и в конце 
  return res = title.charAt(0).toUpperCase() + title.slice(1); 
}

getTitle()

// функция задания номер 4)

function getServicePercentPrices() {
  return servicePercentPrice = fullPrice - rollback 
}

getServicePercentPrices()



const getRollbackMessage = function(price) {
  if (price >= 30000) {
return "Даем скидку в 10%"
  } else if (price >= 15000 && price < 30000) {
   return "Даем скидку в 5%"
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена"
  } else {
    return "Что-то пошло не так"
  }
}

const showTypeof = function (variable) {
  console.log(variable, typeof variable);
}

console.log(allServicePrices);
console.log(fullPrice);
console.log(res);
console.log(servicePercentPrice);

console.log(getRollbackMessage(fullPrice));

  console.log(typeof title);
  console.log(typeof screenPrice);
  console.log(typeof adaptive);

  console.log("Стоимость верстки экранов " + screenPrice +  "рублей" )

