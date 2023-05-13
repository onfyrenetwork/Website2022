const sidebarToggle = document.getElementById("sidebarToggle")
const sidebar = document.getElementById("sidebar")
sidebar.style.display = "none"

function checkSidebar() {
    if(!sidebarToggle.checked) {
        sidebar.style.display = "none"
    } else {
        sidebar.style.display = "flex"
    }
}

sidebarToggle.addEventListener("click", checkSidebar)
checkSidebar()