function setActive(newActive, index) {
    let items = document.getElementById("nav-items").getElementsByTagName("li");
    for (let item = 0; item < items.length; item++) {
        if (items[item].classList.contains("active")) {
            items[item].classList.remove("active");
        };
    };
    newActive.classList.add("active");

    let active = document.getElementById("active-content")
    let contents = document.getElementsByClassName("content")
    active.innerHTML = contents[index].innerHTML
}

/* MAIN */
function main() {
    setActive(document.getElementById("nav-items").children[1], 1);
}
main();
