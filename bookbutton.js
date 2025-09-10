const bookBtn = document.querySelector(".book-now");
const bookingForm = document.getElementById("bookingForm");
const closeBtn = document.getElementById("closeForm");


bookBtn.addEventListener("click", () => {
  bookingForm.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  bookingForm.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === bookingForm) {
    bookingForm.style.display = "none";
  }
});