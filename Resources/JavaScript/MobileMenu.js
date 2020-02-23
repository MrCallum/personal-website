const mobMenu = document.getElementById("mobile-menu");
const hamburgerButton = document.getElementById("hamburger-button");


function toggleMobileMenu(){
    
    if(!mobMenu){
        console.log("No mobile menu!")
        return;
    } 

    const computedStyle = window.getComputedStyle(mobMenu, null);

    if(computedStyle.width !== "0px"){
        mobMenu.style.width = "0%";
        hamburgerButton.classList.remove("is-active");
    } else {
        mobMenu.style.width = "100%";
        hamburgerButton.classList.add("is-active");
    }
}


