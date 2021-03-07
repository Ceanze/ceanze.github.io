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
    var place = document.getElementById(id);
    place.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

function setupScrollTo() {
    let elem = document.getElementsByClassName("links").item(0);
    for (let i = 0; i < elem.children.length; i++) {
        let a = elem.children[i];
        let path = a.attributes.getNamedItem("href").value.replace('#', '');
        a.addEventListener("click", function(){
            scrollTo(path);
        });
        a.attributes.removeNamedItem("href");

    }
}

/* MAIN */
function main() {
    setNavBarTransparent();

    setupScrollTo();

    window.addEventListener("scroll", function(){
        if (window.scrollY < 50) {
            setNavBarTransparent();
        }
        else {
            setNavBarColor();
        }
    });
}
main();
