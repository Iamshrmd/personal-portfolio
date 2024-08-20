let menuBtn = document.querySelector('.menu-btn')
let cancelBtn = document.querySelector('.cancel-btn')
let navBar = document.querySelector('.navbar')
let body = document.querySelector('body')
let navLinks = document.querySelectorAll('.menu li a')

menuBtn.addEventListener('click',()=>{
  openMenu();
})
cancelBtn.addEventListener('click',()=>{
  closeMenu()
})
// sticky navigation
let nav = document.querySelector('nav')
let val;
window.addEventListener('scroll',()=>{
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('sticky')
  }else{
    nav.classList.remove('sticky')
  }
})
// side navigation menu closed 
navLinks.forEach(navLink => {
  navLink.addEventListener('click',()=>{
    closeMenu();
  })
});

function openMenu() {
  menuBtn.style.opacity='0';
  menuBtn.style.pointerEvents='none';
  navBar.classList.add('active')
  body.style.overflow='hidden'
}
function closeMenu() {
  console.log('close');
  menuBtn.style.opacity='1';
  menuBtn.style.pointerEvents='auto';
  body.style.overflow='auto'
  navBar.classList.remove('active')
}
