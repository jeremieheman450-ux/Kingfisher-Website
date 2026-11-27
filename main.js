const menuToggle = document.querySelector(".menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");
menuToggle.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
});
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxCaption = document.querySelector(".lightbox-caption");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const galleryItem = image.closest(".gallery-item");
        const title = galleryItem
            ? galleryItem.querySelector("strong")
            : null;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        if (title) {
            lightboxCaption.textContent = title.textContent;
        } else {
            lightboxCaption.textContent = "";
        }

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

    });

});


lightboxClose.addEventListener("click", function() {

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

});


lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

    }

});
const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryFilters.forEach(function(filter) {

    filter.addEventListener("click", function() {

        const selectedCategory = filter.dataset.filter;

        galleryFilters.forEach(function(button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        galleryItems.forEach(function(item) {

            const itemCategory = item.dataset.category;

            if (
                selectedCategory === "all" ||
                itemCategory === selectedCategory
            ) {
                item.classList.remove("is-hidden");
            } else {
                item.classList.add("is-hidden");
            }

        });

    });

});
const menutoggle = document.querySelector(".menu-toggle");
const navbarRight = document.querySelector(".navbar-right");
if (menuToggle && navbarRight) {
    menuToggle.addEventListener("click", function () {

        const isOpen = navbarRight.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });
}