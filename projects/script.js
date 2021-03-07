function setNavBarTransparent() {
    let navBar = document.getElementById("nav-bar");
    if (!navBar.classList.contains("active")) {
        navBar.classList.add("active")
    }
}

function setNavBarColor() {
    let navBar = document.getElementById("nav-bar");
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active")
    }
}

function scrollTo(id) {
    var bioLink = document.getElementById(id);
    bioLink.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function setupScrollTo() {
    let elem = document.getElementsByClassName("links").item(0);
    elem.children[0].
    elem.children[0].addEventListener("click", function(){
        scrollTo("devs");
        console.log("Hi!");
    })
}

/* MAIN */
function main() {
    // setNavBarTransparent();

    // setupScrollTo();

    // window.addEventListener("scroll", function(){
    //     if (window.scrollY < 50) {
    //         setNavBarTransparent();
    //     }
    //     else {
    //         setNavBarColor();
    //     }
    // });
}
main();
