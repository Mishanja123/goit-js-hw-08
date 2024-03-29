// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line
const list = document.querySelector('.gallery')

// создал шаблон разметки для галлереи in function
function createGalleryMarkup(items) {
    return items
    .map(({preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a></li>`).join('');   
}

// присвоил значению функцию с нужным обьектом в аргументе 
const addGalleryMarkup = createGalleryMarkup(galleryItems)

// добавил шаблон разметки в ДОМ
list.insertAdjacentHTML("beforeend", addGalleryMarkup)

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 });

console.log(galleryItems);
