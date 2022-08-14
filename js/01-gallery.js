import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imgMarcup = addGalleryItems(galleryItems);

function addGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function galleryItemsHendler(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${
      event.target.closest("img").dataset.source
    }" width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", onCloseModal),
      onClose: () => document.removeEventListener("keydown", onCloseModal),
    }
  );

  instance.show();

  function onCloseModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

galleryContainer.insertAdjacentHTML("beforeend", imgMarcup);
galleryContainer.addEventListener("click", galleryItemsHendler);
