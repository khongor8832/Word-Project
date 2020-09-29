// Дэлгэцтэй ажиллах контроллер
const uiController = (function () {
  let DOMstrings = {
    inputValue: ".add__value",
    inputDescription: ".add__description",
    addBtn: ".submit__button",
  };
  return {
    getInput: function () {
      return {
        value: document.querySelector(DOMstrings.inputValue).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
      };
    },
    getDOMstring: function () {
      return DOMstrings;
    },
  };
})();
// Хагдгалах контроллер
const saveController = (function () {
  const Income = function (value, description) {
    this.value = value;
    this.description = description;
  };

  const data = {
    items: {
      inc: [],
    },
    totalIcomes: {
      inc: 0,
    },
  };
  return {
    addItem: function (val, desc) {
      data.items.inc.push(val desc);
      console.log("item  added ===>" + data.items.inc);
    },
  };
})();

// Холбох контроллер
var appController = (function (uiController, saveController) {
  let ctrlAddItem = function () {
    //  1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    let input = uiController.getInput();
    // console.log(input);
    //  2.  Олж авсан өгөгдлөө хадгалах контроллерт дамжуулж тэнд хадгална.
    saveController.addItem(input.value, input.description);

    //  3. Олж авсан өгөгдлөө вэб дээрээ дохирох газар (Өгүүлбэр хэсэгт) гаргана.
    //  4. Өгөгдлүүдээ тоцоолол хийнэ
    //  5. Тоцоолол хийсэн өгөгдлүүдээ тус бүрийн цонхонд нэмнэ
    //  6. Тоцоолол хийсэн өгөгдлүүдээ вэб дээрээ дохирох газар гаргана.
  };
  const setupEventListeners = function () {
    let DOM = uiController.getDOMstring();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Application started...");
      setupEventListeners();
    },
  };
})(uiController, saveController);

appController.init();
