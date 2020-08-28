function animateOut() {
    let left = document.getElementsByClassName("left-bar")[0];
    let right = document.getElementsByClassName("right-bar")[0];
    
    if (!left.classList.contains("active")) {
        left.classList.add("active")
        right.classList.add("active")
    }
}

function animateIn() {
    let left = document.getElementsByClassName("left-bar")[0];
    let right = document.getElementsByClassName("right-bar")[0];
    
    left.classList.remove("active");
    right.classList.remove("active");
}

function toggleBars() {
    let left = document.getElementsByClassName("left-bar")[0];
    if (left.classList.contains("active")) {
        animateIn();
    } else {
        animateOut();
    };
}

function setActive(newActive) {
    let items = document.getElementById("nav-items").getElementsByTagName("li");
    for (let item = 0; item < items.length; item++) {
        if (items[item].classList.contains("active")) {
            items[item].classList.remove("active");
        };
    };
    newActive.classList.add("active");
}

function homeClick(id) {
    animateIn()
    setActive(id)
}

function aboutClick(id) {
    animateOut()
    setActive(id)
}

function  projectsClick(id) {
    animateOut()
    setActive(id)
}

function cvClick(id) {
    animateOut()
    setActive(id)
}

function contactClick(id) {
    animateOut()
    setActive(id)
}

/* MAIN */
function main() {
    
}
main();