function mouseHover() {
  document.querySelector("#site-icon").setAttribute("fill", "red");
}
function mouseHoverOut() {
  document.querySelector("#site-icon").setAttribute("fill", "black");
}
function toggleMenu(e) {
  var menu = document.querySelector(".menus").children[1];
  menu.classList.toggle("menu-expand-js");
  e.firstElementChild.classList.toggle("xmark");
}
function toggleAccordion(e) {
  var inputElem = e.previousElementSibling;
  var parentElem = e.parentElement;
  if (inputElem.checked) {
    inputElem.checked = false;
    parentElem.style.backgroundColor = "#f2f2f2";
  } else {
    inputElem.checked = true;
    parentElem.style.backgroundColor = "#b9ff66";
  }
}
const accordCall = function accordionItemBackgroundChange() {
  let owpItem = document.querySelectorAll(".owp-accordion-item");
  owpItem.forEach((item) => {
    item.addEventListener("click", function () {
      let inputElem = document.querySelectorAll("input[type='radio']");
      inputElem.forEach((elem) => {
        if (!elem.checked) {
          elem.parentElement.style.backgroundColor = "#f2f2f2";
        }
      });
    });
  });
}
accordCall();