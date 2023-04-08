document.querySelector("#menu-icon").addEventListener("click",()=>{
   let mobileMenu= document.querySelector("#menu-icon");
   let menu= document.querySelector(".mobile-menu");
   if(mobileMenu.classList.contains("rotate")){
    mobileMenu.classList.remove('rotate');
    menu.classList.remove("mobile-menu-open");

   }else{
    mobileMenu.classList.add('rotate');
    menu.classList.add("mobile-menu-open")
   }
})