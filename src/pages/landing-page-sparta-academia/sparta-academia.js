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

const buttons = document.querySelectorAll(
    ".project-version-btn"
);

const galleryImage =
    document.getElementById("galleryImage");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const newImage =
            button.getAttribute("data-image");

        galleryImage.classList.add("fade");

        setTimeout(() => {
            galleryImage.src = newImage;

            galleryImage.classList.remove("fade");

        }, 200);

    });

});