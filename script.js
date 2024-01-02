const icon = document.querySelector(".menu1");
const oladiran = document.querySelector(".iconic");
const emmy = document.querySelectorAll(".menu1 li a");

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
