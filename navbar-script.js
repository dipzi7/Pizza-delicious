//toggle menu
const navbarMenu = document.querySelector('.navbar-menu');
//toggle ketika dj klik
document.querySelector('#nav-menu').onclick = () => {
  navbarMenu.classList.toggle('active');
};

const navMenu = document.querySelector('#nav-menu');

document.addEventListener("click", function(e){
if(!navMenu.contains(e.target) && !navbarMenu.contains(e.target)) {
  navbarMenu.classList.remove('active');
  }
});