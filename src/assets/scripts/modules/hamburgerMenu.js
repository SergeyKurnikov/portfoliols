let hamburger = (options => {
  let button = document.querySelector(options.button);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector("body");

  let itemsList = document.getElementById("burger-menu__list").children;
  const items = Array.prototype.slice.call(itemsList);

  // const items = $(".burger-menu__item", menu);
  let counter = 0;

  let startMenuAnimation = function startMenuAnimation() {
    let item = items[counter];
    item.classList.toggle("pulse");
    counter++;
    if (counter < items.length) {
      setTimeout(startMenuAnimation, 100);
    }
    if (counter === items.length) counter = 0;
  };

  let _toggleMenu = function() {
    button.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    body.classList.toggle("locked");
    startMenuAnimation();
  };

  var closeMenu = function closeMenu() {
    button.classList.remove("is-active");
    menu.classList.remove("is-active");
    body.classList.remove("locked");
    startMenuAnimation();
  };

  let addListeners = function() {
    button.addEventListener("click", _toggleMenu);

    for (var i = 0; i < itemsList.length; i++) {
      itemsList[i].addEventListener("click", closeMenu);
    }
  };

  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) closeMenu();
  });

  return {
    init: addListeners
  };
})({
  button: "#hamburger-menu-link",
  menu: "#hamburger-menu"
});

hamburger.init();