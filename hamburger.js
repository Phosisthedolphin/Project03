function navMenu() {
  var menu = document.getElementById('hamburger-content');    
  if(menu.style.display == "flex") {
    menu.style.display = "none";
  }
  else { 
    menu.style.display = "flex";
  }
}