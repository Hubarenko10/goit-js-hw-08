// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');


const markup = galleryItems.map(({original,preview,description}) =>
    `<div class="gallery__item">
    <a class="gallery__link" href = ${original}>
    <img 
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt= ${description}
        />
        </a>
        </div>`).join("");
        gallery.innerHTML = markup;
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);
