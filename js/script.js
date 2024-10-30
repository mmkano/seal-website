document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".category-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const subcategory = this.nextElementSibling;
            const isOpen = subcategory.style.display === "block";
            subcategory.style.display = isOpen ? "none" : "block";
            this.classList.toggle("active", !isOpen);
        });
    });
});