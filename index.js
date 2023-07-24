// toggle class active
const navbarNav = document.querySelector(".navbar-nav")
// ketika hamburger diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
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
navbarLinks.forEach((link) => {
  link.onclick = () => {
    navbarNav.classList.remove("active")
  }
})

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxZoMWkhIaqe4BIAu2W-J497rRMMYvjZfeh3Lkt7gaB9zjiBMcI-JAUPdPbQPTtipvjlA/exec"
const form = document.forms["honda-contact-form"]

form.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Terima Kasih, Pesan Anda Sudah terkirim. Saya akan menghubungi anda")
  form.reset()
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response)
    })
    .catch((error) => console.error("Error!", error.message))
})

var swiper = new Swiper(".card_slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})
