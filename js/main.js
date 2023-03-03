

let button_toggle=document.querySelector(".btn_menu");
let menu=document.querySelector(".menu")
let btn_close=document.querySelector(".btn_close");
let button=document.querySelectorAll(".button li");

button_toggle.addEventListener("click",()=>{
    menu.classList.remove("d-hidden");
    menu.classList.add("d-block");
    button_toggle.style.display="none";
    btn_close.style.display="block";

})
btn_close.addEventListener("click",()=>{
    menu.classList.remove("d-block");
    menu.classList.add("d-hidden");
    btn_close.style.display="none";
    button_toggle.style.display="block";
})
let list=document.querySelectorAll("ul .li");
let product=document.querySelector(".product")
let company=document.querySelector(".company")
let connect=document.querySelector(".connect");
let menutag=document.querySelector("ul li .menutag")
let svg=document.querySelector(".navbar-nav svg")
list.forEach((e)=>{
    e.addEventListener("click",()=>{        
        e.classList.toggle("active")
        if(e.classList.contains("active")){
            product.classList.add("active")
            company.classList.add("active")
            connect.classList.add("active")
            svg.classList.toggle("rotat")
        }
        
    })
})