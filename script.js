

function toggle() {
  const menuLink = document.getElementbyId('menu').classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.btn__nav')) {
    const dropdowns = document.getElementbyClassName("menu-dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
