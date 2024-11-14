// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// //////////////////////////////////
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

//////////////////////////////////////////////////////

const form = document.querySelector('.js-search-form'),
  galleryList = document.querySelector('.js-gallery-list');
document.querySelector('.search-input').addEventListener("click", event =>{ event.target.value = ''});

//////////////////////////////////////////////////////

let gallery = new SimpleLightbox('.js-gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value ;
       if(searchQuery === ''){return;}
  fetchData(searchQuery)
    .then(data => {
      (data.hits.length!==0)? (galleryList.innerHTML = createMarkup(data.hits)):(
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position:'topRight',
        }),
          galleryList.innerHTML =''     );
       
    })
    .catch(error => {
      console.log('catch', error);
    });
    
}





gallery.refresh();


