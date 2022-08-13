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

  const modal = basicLightbox.create(
    `<img src="${
      event.target.closest("img").dataset.source
    }" width="800" height="600">`
  );

  console.log(event.target);
  console.log(modal.show());
}

galleryContainer.insertAdjacentHTML("beforeend", imgMarcup);
galleryContainer.addEventListener("click", galleryItemsHendler);

document.addEventListener("keydown", (evt) => {
  const pushEscape = evt.code === "Escape";
  const modalOn = document.querySelector(".basicLightbox");
  if (!modalOn) {
    return;
  }
  if (pushEscape) {
    modalOn.remove();
  }
});
