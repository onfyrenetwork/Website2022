let aterniumRadio = document.getElementById("aterniumSoftwareRadio")
let fyutilsRadio = document.getElementById("fyutilsSoftwareRadio")
let aventurinRadio = document.getElementById("aventurinSoftwareRadio")
let rhodionitRadio = document.getElementById("rhodionitSoftwareRadio")

let aterniumContainer = document.getElementById("aterniumContainer")
let fyutilsContainer = document.getElementById("fyutilsContainer")
let aventurinContainer = document.getElementById("aventurinContainer")
let rhodionitContainer = document.getElementById("rhodionitContainer")

function sleep(secs) {
    return new Promise(resolve => setTimeout(resolve, secs*1000));
}

function getSelectedRadioValueOf(name) {
    return radioValue = document.querySelector("input[name='" + name + "']:checked").value
}

function updateSoftwareSection() {
    if(aterniumRadio.checked) {
        aterniumContainer.style.display = "flex"
        fyutilsContainer.style.display = "none"
        aventurinContainer.style.display = "none"
        rhodionitContainer.style.display = "none"
    } else if(fyutilsRadio.checked) {
        aterniumContainer.style.display = "none"
        fyutilsContainer.style.display = "flex"
        aventurinContainer.style.display = "none"
        rhodionitContainer.style.display = "none"
    } else if(aventurinRadio.checked) {
        aterniumContainer.style.display = "none"
        fyutilsContainer.style.display = "none"
        aventurinContainer.style.display = "flex"
        rhodionitContainer.style.display = "none"
    } else if(rhodionitRadio.checked) {
        aterniumContainer.style.display = "none"
        fyutilsContainer.style.display = "none"
        aventurinContainer.style.display = "none"
        rhodionitContainer.style.display = "flex"
    }
}

updateSoftwareSection()

aterniumRadio.addEventListener("click", updateSoftwareSection)
fyutilsRadio.addEventListener("click", updateSoftwareSection)
aventurinRadio.addEventListener("click", updateSoftwareSection)
rhodionitRadio.addEventListener("click", updateSoftwareSection)