// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
console.log(galleryItems);


const galleryUl = document.querySelector(".gallery")
galleryUl.insertAdjacentHTML("beforeend", createGallery(galleryItems));


// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    animationSpeed: 250,
});


function createGallery(items) {
    return items
        .map(({original,preview,description}) =>
            `<li class="gallery__item">
  <a class="gallery__link" href = "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("")
}
