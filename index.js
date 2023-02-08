const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".btn-grad");
const closeBtn = document.querySelector(".close");
const modalContainer = document.querySelector(".modal-container");
function toggleModal() {
    modal.classList.toggle("open");
}
openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
        toggleModal();
    }
});
