const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

const btn = document.getElementById("copyEmailBtn");
const tooltip = document.getElementById("copyTooltip");
const email = "rafaelptjr@gmail.com";

btn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    tooltip.classList.add("show");

    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 2000);
  } catch (error) {
    console.error("Erro ao copiar:", error);
  }
});

const btn2 = document.getElementById("copyEmailBtn2");

btn2.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    tooltip.classList.add("show");

    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 2000);
  } catch (error) {
    console.error("Erro ao copiar:", error);
  }
});

console.log("Oi")