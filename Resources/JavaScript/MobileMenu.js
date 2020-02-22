const mobMenu = document.getElementById("mobile-menu");
const hamburgerButton = document.getElementById("hamburger-button");


function openMobileMenu(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeMobileMenu(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function toggleMobileMenu(){
    const computedStyle = window.getComputedStyle(mobMenu, null);

    if(computedStyle.width !== "0px"){
        mobMenu.style.width = "0%";
        hamburgerButton.classList.remove("is-active");
    } else {
        mobMenu.style.width = "100%";
        hamburgerButton.classList.add("is-active");
    }
}


