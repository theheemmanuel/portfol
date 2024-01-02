const icon = document.querySelector(".menu");
const oladiran = document.querySelector(".iconic");
const emmy = document.querySelectorAll(".menu li a");

oladiran.addEventListener("click", () => {
  icon.classList.toggle("active");
  oladiran.classList.toggle("active");
});

emmy.forEach((item) =>
  item.addEventListener("click", () => {
    icon.classList.toggle("active");
    oladiran.classList.toggle("active");
  })
);
