const body = document.querySelector("body")

const dropdown = document.querySelector(".dropdown")
const dropdown_content = document.querySelector(".dropdown-content")
let show_menu = false

body.addEventListener("click", function(e) {
    show_menu = false
    dropdown_content.style.display = "none"
})

dropdown.addEventListener("click", function(e) {
    e.stopPropagation()
    if (show_menu) {
        show_menu = false
        dropdown_content.style.display = "none"
        dropdown_content.style.transform = "scale(1)"
        dropdown.style.transform = "scale(1)"
    } else {
        show_menu = true
        dropdown_content.style.display = "block"
        dropdown.style.transform = "scale(1.05)"
        dropdown_content.style.transform = "scale(1.05)"
    }
})


let show_kartta = false
const kartta = document.querySelector("#kartta")
const kartta_btn = document.querySelector("#kartta-btn")

kartta_btn.addEventListener("click", function(e) {
    e.stopPropagation()
    if (show_kartta) {
        show_kartta = false
        kartta.style.display = "none"
    } else {
        show_kartta = true
        kartta.style.display = "unset"
    }
})
