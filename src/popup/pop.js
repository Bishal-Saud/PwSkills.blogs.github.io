// script.js
const openButton = document.getElementById("openPopup");
const closeButton = document.getElementById("closePopup");
const popup = document.getElementById("popupContainer");

openButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});
