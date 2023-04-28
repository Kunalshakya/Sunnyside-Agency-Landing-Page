var button = document.getElementById("menu");
var mobileNav = document.getElementById("mobileNav");


button.addEventListener("click", () =>{
    if(mobileNav.style.display === "none"){
        mobileNav.style.display = "block";
        button.style.opacity = 0.5;
        console.log("block")
    }
    else{
        mobileNav.style.display = "none";
        button.style.opacity = 1;
        console.log("none")
    }
})
