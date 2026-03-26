fetch("header.html")
    .then(response => response.text())
    .then(data => {
        const headerContainer = document.getElementById("header-container");
        if (headerContainer) {
            headerContainer.innerHTML = data;
        }
    });

function setTheme(themeFile) {
    document.getElementById("theme-style").href = themeFile;
    localStorage.setItem("theme", themeFile)
}

window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.getElementById("theme-style").href = savedTheme;
    }
}