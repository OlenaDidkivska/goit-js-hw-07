import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imgMarcup = addGalleryItems(galleryItems);

function addGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
    .join("");
}

function galleryItemsHendler(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    gallery.captionType = 250;
  });
}

galleryContainer.insertAdjacentHTML("beforeend", imgMarcup);
galleryContainer.addEventListener("click", galleryItemsHendler);
