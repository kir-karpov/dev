`use strict`;
let title
let screens
let screenPrice
let adaptive
let allServicePrices
let rollback = 10
let fullPrice
let servicePercentPrice
let service1
let service2

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
  title = prompt("Как называется ваш проект?")
  screens = prompt("Какие типы экранов нужно разработать?")


  do {
    screenPrice = prompt("Сколько будет стоить данная работа?")
  } while (isNaN(screenPrice))

  adaptive = confirm("Нужен ли адаптив на сайте?")

};

const showTypeof = function (variable) {
  console.log(variable, typeof variable);
}

function getAllServicePrices() {
  let sum = 0

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?")
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?")
    }

    do {
      sum = +prompt("Сколько это будет стоить?")
    } while (isNaN(sum));
  }

}

const getFullPrice = function () {
  return screenPrice + allServicePrices
}

const getServicePercentPrice = function () {
  return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

const getRollbackMessage = function (price) {
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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle()

showTypeof(title)
showTypeof(screenPrice)
showTypeof(adaptive)

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice)
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей и Стоимость разработки сайта " + fullPrice + "рублей ");

