const modaloverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function () {
    const videoid = card.getAttribute("id")
    modaloverlay.classList.add("active")

    const pegaimg = card.getAttribute('id')
    const titulo = card.querySelector(".nome").textContent;
    const autor = card.querySelector(".autor").textContent;

    document.querySelector('.receitas-modal').src = (`assets/${pegaimg}.png`)
    modaloverlay.querySelector(".nome").innerHTML = titulo;
    modaloverlay.querySelector(".autor").innerHTML = autor;
  })
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modaloverlay.classList.remove("active")
  modaloverlay.querySelector("iframe").src = ""
})

