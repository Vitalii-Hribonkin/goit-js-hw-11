import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';


import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-function';

const searchForm = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

const showLoader = () => loader.classList.remove('hidden');
const hideLoader = () => loader.classList.add('hidden');

const handleSearch = async (event) => {
  event.preventDefault();
  const query = searchForm.elements['search-input'].value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  gallery.innerHTML = '';
  showLoader();

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(gallery, images);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    hideLoader();
  }
};

searchForm.addEventListener('submit', handleSearch);
