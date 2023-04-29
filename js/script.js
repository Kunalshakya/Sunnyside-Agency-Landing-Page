const button = document.getElementById("menu");
const mobileNav = document.getElementById("mobileNav");


button.addEventListener("click", () =>{
    if(mobileNav.style.display === "none"){
        mobileNav.style.display = "block";
        button.style.opacity = 0.5;
    }
    else{
        mobileNav.style.display = "none";
        button.style.opacity = 1;
    }
})
