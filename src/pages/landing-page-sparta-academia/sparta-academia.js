const btn2 = document.getElementById("copyEmailBtn2");
const tooltip = document.getElementById("copyTooltip");
const email = "rafaelptjr@gmail.com";

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

const images = [
    "/src/assets/img/landing-page/hero.png",
    "/src/assets/img/landing-page/planos.png",
    "/src/assets/img/landing-page/modalidades.png",
    "/src/assets/img/landing-page/footer.png"
];

const projectImage = document.getElementById("projectImage");
const thumbs = document.querySelectorAll(".thumb");
const prevBtn = document.querySelector(".gallery-btn.prev");
const nextBtn = document.querySelector(".gallery-btn.next");

let currentIndex = 0;

function updateGallery(index) {
    currentIndex = index;
    projectImage.src = images[currentIndex];

    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === currentIndex);
    });
}

prevBtn.addEventListener("click", () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateGallery(newIndex);
});

nextBtn.addEventListener("click", () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateGallery(newIndex);
});

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        updateGallery(Number(thumb.dataset.index));
    });
});

updateGallery(0);