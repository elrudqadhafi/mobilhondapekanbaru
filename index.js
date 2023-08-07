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

// contact form langsung ke whatsapp
function whatsapp() {
  const nama = document.getElementById("nama").value
  const type = document.getElementById("type").value
  const mobile = document.getElementById("mobile").value
  const pesan = document.getElementById("pesan").value

  const whatsappurl =
    "https://wa.me/6281268235749?text=" +
    "Nama :" +
    nama +
    "%0a" +
    "Tipe Mobil :" +
    type +
    "%0a" +
    "Nomor Hp :" +
    mobile +
    "%0a" +
    "Pertanyaan :" +
    pesan

  window.open(whatsappurl, "_blank").focus()
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
