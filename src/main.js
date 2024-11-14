// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

//////////////////////////////////////////////////////

const form = document.querySelector('.js-search-form'),
  galleryList = document.querySelector('.js-gallery-list');

//////////////////////////////////////////////////////
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value;

  fetchData(searchQuery)
    .then(data => {
      galleryList.innerHTML = createMarkup(data.hits);
    })
    .catch(error => {
      console.log('catch', error);
    });
}
