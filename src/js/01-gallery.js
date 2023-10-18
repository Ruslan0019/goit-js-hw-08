import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const murkup = galleryItems.map(({ preview, original, description }) =>
    `   <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>   `
).join('');
gallery.insertAdjacentHTML('afterbegin', murkup)

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = new SimpleLightbox('.gallery a');
});

