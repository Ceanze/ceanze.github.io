/* FUNCTIONS */
function aboutClick() {
    let aboutBtn = document.getElementById("about");
    let aboutPage = document.getElementById("about-page");
    aboutBtn.addEventListener("click", () => {
        aboutPage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
}

function projectsClick() {
    let projBtn = document.getElementById("projects");
    projBtn.addEventListener("click", () => {
        window.location.replace("https://github.com/Ceanze");
    });
}

function cvClick() {

}

/* MAIN */
function main() {
    aboutClick();
    projectsClick();
}
main();