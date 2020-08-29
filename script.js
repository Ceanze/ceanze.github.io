var activeAnimation = "default";

function setContent(oldContent, newContent) {
    // Remove visibility for old content
    if (oldContent != null && oldContent != "default") {
        let prevContent = document.getElementsByClassName(oldContent + "Content")[0];
        if (prevContent.classList.contains("visible")) {
            prevContent.classList.remove("visible");
        }
    }

    // Add visibility to new content
    if (newContent != null && newContent != "default") {
        let content = document.getElementsByClassName(newContent + "Content")[0];
        content.classList.add("visible");
    }
}

function setAnimation(newAnimation) {
    let left = document.getElementsByClassName("left-bar")[0];
    let right = document.getElementsByClassName("right-bar")[0];

    setContent(activeAnimation, newAnimation);
    
    // Remove previous active if it exist
    if (activeAnimation != null) {
        if (left.classList.contains(activeAnimation)) {
            left.classList.remove(activeAnimation)
        }
        if (right.classList.contains(activeAnimation)) {
            right.classList.remove(activeAnimation)
        }
    }

    // Add new animation if a new animation is requested
    if (newAnimation != null) {
        left.classList.add(newAnimation);
        right.classList.add(newAnimation);
    }


    // Set active animation to new animation
    activeAnimation = newAnimation;
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
    setAnimation(null)
    setActive(id)
}

function aboutClick(id) {
    setAnimation("about")
    setActive(id)
}

function  projectsClick(id) {
    setAnimation("projects")
    setActive(id)
}

function cvClick(id) {
    setAnimation("cv")
    setActive(id)
}

function contactClick(id) {
    setAnimation("contact")
    setActive(id)
}

/* MAIN */
function main() {
    window.onload = function() {
        this.setAnimation(null)
    }
}
main();