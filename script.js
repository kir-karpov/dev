"use strict";
const title = document.getElementsByTagName("h1")[0];

const calculateBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const plusBtn = document.querySelector(".screen-btn");

const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const rangeInput = document.querySelector('.rollback input[type="range"]');
const rangeValue = document.querySelector(".rollback .range-value");

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fulltotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screenBlocks = document.querySelectorAll(".screen");

 const valueSpan = document.querySelector(".rollback .range-value");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,

  validateScreenData: function () {
    appData.isError = false;
    screenBlocks = document.querySelectorAll(".screen");

    screenBlocks.forEach((screen) => {
      const select = screen.querySelector(`select`);
      const input = screen.querySelector(`input`);

      if (select.value === "" || input.value === "") {
        appData.isError = true;
        return;
      }
    });
  },

  calculateButtonClick: function () {
    appData.validateScreenData();

    if (!appData.isError) {
      appData.start();
    } else {
      console.log(
        "Ошибка! Необходимо выбрать тип экрана и указать количество для всех блоков."
      );
    }
  },

  init: function () {
    appData.addTitle();

    calculateBtn.addEventListener("click", appData.calculateButtonClick);
    plusBtn.addEventListener("click", appData.addScreenBlock);

    rangeInput.addEventListener("input", function () {
      const value = rangeInput.value;

      valueSpan.textContent = value + "%";

      appData.rollback = value;

      appData.start();

      console.log("Значение в свойстве rollback:", appData.rollback);
    });
  },
  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.getServicePercentPrice();

    // appData.logger();
    appData.showResult();
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value = (
      appData.servicePricesPercent + appData.servicePricesNumber
    ).toString();
    document.getElementById("total-count").value = appData.screens.length;
    totalCountRollback.value = appData.getRollbackMessage(appData.fullPrice);
  },

  addScreens: function () {
    screenBlocks = document.querySelectorAll(".screen");
    screenBlocks.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      const count = +input.value;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * count,
        count: count,
      });
    });

    let totalCount = 0;
    for (let screen of appData.screens) {
      totalCount += screen.count;
    }

    appData.count = totalCount; // Добавление свойства "count" в appData

    document.getElementById("total-count").value = totalCount;

    console.log(appData.screens);
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screenBlocks[0].cloneNode(true);

    screenBlocks[screenBlocks.length - 1].after(cloneScreen);
  },

  isTextOnly: function (text) {
    return /^[A-Za-zА-Яа-я\s]+$/.test(text);
  },

  isTextWithNumbers: function (text) {
    return /^[A-Za-zА-Яа-я\s\d]+$/.test(text);
  },

  addPrices: function () {
    let totalPrice = 0;
    for (let screen of appData.screens) {
      totalPrice = screen.price;
    }

  
    let totalCount = appData.count; // Получение общего количества экранов из свойства "count" в appData
    document.getElementById("total-count").value = totalCount;

    let totalScreenCount = 0; // Перемещение объявления за пределы цикла
    for (let screen of appData.screens) {
      totalScreenCount += screen.count;
    }

    for (let screen of appData.screens) {
      appData.screenPrice += screen.price; // Удаление унарного плюса перед screen.price
    }

    // Остальной код остается неизменным

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};



appData.init();
