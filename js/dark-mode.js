let darkMode = localStorage.getItem("dark-mode");

if (darkMode === null) {
    localStorage.setItem("dark-mode", "disabled");
}

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    document.getElementById("darkmode-github").src = "./img/header/github-darkmode-icon.svg";
    document.getElementById("darkmode-linkedin").src = "./img/header/linkedin-darkmode-icon.svg";
    document.getElementById("darkmode-github-footer").src = "./img/header/github-darkmode-icon.svg";
    document.getElementById("darkmode-linkedin-footer").src = "./img/header/linkedin-darkmode-icon.svg";
    document.getElementById("darkmode-github-technologies").src = "./img/technologies/github-icon-white2.svg";
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    document.getElementById("darkmode-github").src = "./img/header/github-icon.svg";
    document.getElementById("darkmode-linkedin").src = "./img/header/linkedin-icon.svg";
    document.getElementById("darkmode-github-footer").src = "./img/footer/github-icon-footer.png";
    document.getElementById("darkmode-linkedin-footer").src = "./img/footer/icon-linkedin-footer.png";
    document.getElementById("darkmode-github-technologies").src = "./img/technologies/github-icon.svg";
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
}

document.querySelector("#btn").addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
});


// document.querySelector("#btn").addEventListener("click", () => {
//     //document.body.classList.add("dark-mode");
    
//     cont++;
//     localStorage.setItem("cont", cont)
// })

// if (cont % 2 == 0) {
//     document.getElementById("darkmode-github").src = "./img/header/github-darkmode-icon.svg";
//     document.getElementById("darkmode-linkedin").src = "./img/header/linkedin-darkmode-icon.svg";
//     document.getElementById("darkmode-github-footer").src = "./img/header/github-darkmode-icon.svg";
//     document.getElementById("darkmode-linkedin-footer").src = "./img/header/linkedin-darkmode-icon.svg";
//     document.getElementById("darkmode-github-technologies").src = "./img/technologies/github-icon-white2.svg";
//     document.body.classList.add("dark-mode");
// } else {
//     document.getElementById("darkmode-github").src = "./img/header/github-icon.svg";
//     document.getElementById("darkmode-linkedin").src = "./img/header/linkedin-icon.svg";
//     document.getElementById("darkmode-github-footer").src = "./img/footer/github-icon-footer.png";
//     document.getElementById("darkmode-linkedin-footer").src = "./img/footer/icon-linkedin-footer.png";
//     document.getElementById("darkmode-github-technologies").src = "./img/technologies/github-icon.svg";
//     document.body.classList.remove("dark-mode");
// }