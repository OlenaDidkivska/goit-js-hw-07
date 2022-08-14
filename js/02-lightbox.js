import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarcup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarcup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
