const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const linkContainer = document.querySelector('.link-container');

closeMenu.addEventListener('click',()=>{
  linkContainer.style.left = '-500px';
});

openMenu.addEventListener('click', ()=>{
  linkContainer.style.left = '0px'  
})