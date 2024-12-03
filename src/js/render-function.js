import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

/**
 * Створює розмітку для галереї.
 * @param {Array} images - список об'єктів із зображеннями.
 * @returns {string} - HTML-розмітка.
 */
export const createGalleryMarkup = (images) => {
  return images
    .map(
      (img) => `
    <li>
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" />
      </a>
      <div>
        <p>Likes: ${img.likes}</p>
        <p>Views: ${img.views}</p>
        <p>Comments: ${img.comments}</p>
        <p>Downloads: ${img.downloads}</p>
      </div>
    </li>
  `
    )
    .join('');
};

/**
 * Очищує галерею та додає нові зображення.
 * @param {HTMLElement} galleryElement - елемент галереї.
 * @param {Array} images - список зображень для рендерингу.
 */
export const renderGallery = (galleryElement, images) => {
  const markup = createGalleryMarkup(images);
  galleryElement.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
};
