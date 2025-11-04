// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"
  })
}

// Add to cart functionality
const addButtons = document.querySelectorAll(".btn-add")
let cartCount = 0

addButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    cartCount++
    const cartBtn = document.querySelector(".btn-cart")
    cartBtn.textContent = `🛒 Cart (${cartCount})`

    // Visual feedback
    button.textContent = "✓ Added"
    button.style.backgroundColor = "#059669"
    setTimeout(() => {
      button.textContent = "ADD"
      button.style.backgroundColor = ""
    }, 1500)
  })
})

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})
