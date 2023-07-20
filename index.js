// toggle class active
const navbarNav = document.querySelector(".navbar-nav")
// ketika hamburger diklik
document.querySelector("#hamburger-menu").onclick = e => {
  navbarNav.classList.toggle("active")
  e.preventDefault()
}

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu")

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active")
  }
})

// Ketika tautan di dalam navbar diklik
const navbarLinks = document.querySelectorAll(".navbar-nav a")
navbarLinks.forEach(link => {
  link.onclick = () => {
    navbarNav.classList.remove("active")
  }
})