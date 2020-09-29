// Дэлгэцтэй ажиллах контроллер
const uiController = (function () {
  let DOMstrings = {
    inputDescription: "add__description",
    addBtn: "submit_button",
  };
  return {
    getInput: function () {
      return {
        description: document.getElementById(DOMstrings.inputDescription).value,
      };
    },
    getDOMstring: function () {
      return DOMstrings;
    },
  };
})();
// Хагдгалах контроллер
const saveController = (function () {})();

// Холбох контроллер
const appController = (function (uiController, saveController) {
  let DOM = uiController.getDOMstring();
  let ctrlAddItem = function () {
    //  1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    let input = uiController.getInput();
    //  2.  Олж авсан өгөгдлөө хадгалах контроллерт дамжуулж тэнд хадгална.
    //  3. Олж авсан өгөгдлөө вэб дээрээ дохирох газар (Өгүүлбэр хэсэгт) гаргана.
    //  4. Өгөгдлүүдээ тоцоолол хийнэ
    //  5. Тоцоолол хийсэн өгөгдлүүдээ тус бүрийн цонхонд нэмнэ
    //  6. Тоцоолол хийсэн өгөгдлүүдээ вэб дээрээ дохирох газар гаргана.
  };

  let setupEventListeners = function () {
    document.getElementById(DOM.addBtn).addEventListener("click", function () {
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
// appController.init();
