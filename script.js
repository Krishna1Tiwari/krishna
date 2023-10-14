// ___________________________________________________typing Animationmation_________________________________________________________________________

var typed = new Typed(".typing", {
    strings: ["Web Developer", "MERN Stack Developer", "Nodejs Developer", "React Developer", "Full Stack Developer", "Frontend Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
var typed1 = new Typed(".typing1", {
    strings: ["Web Developer", "MERN Stack Developer", "Nodejs Developer", "React Developer", "Full Stack Developer", "Frontend Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
var typed1 = new Typed(".typing3", {
    strings: ["Have you Any Questions ?", "Please Contact Me"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
// ____________________________________________________________________Aside__________________________________________________________________________
const nav = document.querySelector(".nav")
navList = nav.querySelectorAll("li"),
    totlNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;


for (let i = 0; i < totlNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();

        for (let j = 0; j < totlNavList; j++) {

            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function updatenav(element) {
    for (i = 0; i < totlNavList; i++) {

        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        console.log(target)
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updatenav(this);
    removeBackSection(sectionIndex);
})
// _________________________________________________________nav toggler________________________________________________________________________________

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {

    asideSectionTogglerBtn();

})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
