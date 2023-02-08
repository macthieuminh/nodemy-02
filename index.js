const modal = document.querySelector(".modal");
function openModal() {
    modal.classList.add("open");
}
function closeModal() {
    modal.classList.remove("open");
}
modal.addEventListener("click", closeModal);
