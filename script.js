document.getElementById('menu-btn').onclick = function() {
  toggleShowMenus();
}

document.getElementById('order-btn').onclick = function() {
  toggleShowOrder();
}

function toggleShowMenus() {
 document.getElementById('menu').classList.toggle("show");
};

function toggleShowOrder() {
  document.getElementById('online-ordering').classList.toggle("show");
}

window.addEventListener('mouseup', function(event) {
  if (!event.target.matches('.btn__nav')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {

      let openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});
