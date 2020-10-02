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
    addCont__a: function (item) {
      // орлого зарлагын html-ийг бэлтгэнэ.
      let html = `<div class="cont__a" id="cont%id%">%value%</div>`;
      //  Тэр HTML дотороо орлого зарлагын утгуудыг REPLICE ашиглаж өөрчилж өгнө.
      html = html.replace("%id%", item.id);
      html = html.replace("%value%", item.value);
      //  Бэлгэсэн HTML ээ DOM-руу хийж өгнө.
      document.querySelector(".conte").insertAdjacentHTML("afterend", html);
    },
  };
})();
// Хагдгалах контроллер
const saveController = (function () {
  // privite
  const Income = function (id, value, description) {
    this.id = id;
    this.value = value;
    this.description = description;
  };
  // privite
  const data = {
    items: {
      inc: [],
    },
    // total: {
    // inc: 0
    // }
  };
  return {
    addItem: function (val, desc) {
      // deerh ene 2 val, desc doorh delgetsnees awch bga utga ym input.value, input.description
      var item, id;

      // deerh ene 2 val, desc argumantseer orj irsen utga
      if (data.items.inc.length === 0) id = 1;
      else {
        id = data.items.inc[data.items.inc.length - 1].id + 1;
      }
      item = new Income(id, val, desc);
      // deerh ene 2 val, desc argumantseer orj irsen utga

      data.items.inc.push(item);
      return item;
    },
    seeData: function () {
      return data;
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
    let item = saveController.addItem(input.value, input.description);
    // console.log(saveController.seeData());

    //  3. Олж авсан өгөгдлөө вэб дээрээ дохирох газар (Өгүүлбэр хэсэгт) гаргана.
    uiController.addCont__a(item);
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

// var incDiv = document.querySelector(".income");
// incDiv.insertAdjacentHTML("beforeend", "Ð¦Ð°Ð»Ð¸Ð½ : 2500000");

// incDiv.insertAdjacentHTML("beforeend", "<br>Ð¡ÑƒÐ³Ð°Ð»Ð°Ð° : 15000000");

// incDiv.insertAdjacentHTML("beforeend", "<br>Ð¡ÑƒÐ³Ð°Ð»Ð°Ð° : 15000000");
