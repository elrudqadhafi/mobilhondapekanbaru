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


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxZoMWkhIaqe4BIAu2W-J497rRMMYvjZfeh3Lkt7gaB9zjiBMcI-JAUPdPbQPTtipvjlA/exec'
  const form = document.forms['honda-contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        form.reset()
        alert("Terima Kasih, Pesan Anda Sudah terkirim. Saya akan menghubungi anda")
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })