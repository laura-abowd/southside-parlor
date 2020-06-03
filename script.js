
// <--- show menu pdfs --->
const element = document.querySelectorAll(".menu-display");
for (let x = 0; x < element.length; x++)
  element[x].style.display = 'none';

const menu_elements = document.querySelectorAll(".a-menu__items");
const items = document.querySelectorAll(".menu-display");

for(let i = 0; i < menu_elements.length; i++) {
  menu_elements[i].addEventListener("click", function() {
    menu_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    let li_value = this.getAttribute("data-notes");
    items.forEach(function(item) {
      item.style.display ="none";
    })
  })
}
