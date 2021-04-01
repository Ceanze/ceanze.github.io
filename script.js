// function setActive(newActive, index) {
//     let items = document.getElementById("nav-items").getElementsByTagName("li");
//     for (let item = 0; item < items.length; item++) {
//         if (items[item].classList.contains("active")) {
//             items[item].classList.remove("active");
//         };
//     };
//     newActive.classList.add("active");

//     let active = document.getElementById("active-content")
//     let contents = document.getElementsByClassName("content")
//     active.innerHTML = contents[index].innerHTML
// }

function setNavBarTransparent() {
    let navBar = document.getElementById("nav-bar");
    if (!navBar.classList.contains("active-nav-bar")) {
        navBar.classList.add("active-nav-bar")
    }
}

function setNavBarColor() {
    let navBar = document.getElementById("nav-bar");
    if (navBar.classList.contains("active-nav-bar")) {
        navBar.classList.remove("active-nav-bar")
    }
}

function scrollTo(id) {
    var place = document.getElementById(id);
    place.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

function setupScrollTo() {
    let elem = document.getElementById("nav-bar");
    for (let i = 0; i < elem.children.length; i++) {
        let a = elem.children[i];
        if (a.attributes.getNamedItem("href").value.startsWith("#")) {
            let path = a.attributes.getNamedItem("href").value.replace('#', '');
            a.addEventListener("click", function(){
                scrollTo(path);
            });
            a.attributes.removeNamedItem("href");
        }
    }
}

/* MAIN */
function main() {
    // setActive(document.getElementById("nav-bar").children[1], 1);

    setupScrollTo();

    setNavBarTransparent();
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
