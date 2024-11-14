// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '47047492-675b2ed8a2567f743231acd4f';

const form = document.querySelector('.search-form'),
  galleryList = document.querySelector('.gallery-list');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value;

  fetchData(searchQuery)
    .then(data => {
      galleryList.innerHTML = createMarkup(data);
    })
    .catch(error => {
      console.log('catch', error);
    });
}

function fetchData(searchQuery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${API_KEY}&${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function createMarkup(array) {
  return array
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
     <li class="gallery-card">
   <a class="gallery-card-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}"alt="${tags}"/>
  </a>           
            <ul class="img-list">
            <li class="img-list-item">
                <h3>Likes</h3>
                <p>"${likes}"</p>
            </li>
            <li class="img-list-item">
                <h3>Views</h3>
                <p>"${views}"</p>
            </li>
            <li class="img-list-item">
                <h3>Comments</h3>
                <p>"${comments}"</p>
            </li>
            <li class="img-list-item">
                <h3>Downloads</h3>
                <p>"${downloads}"</p>
            </li>
            </ul>
                
</li>
  `
    )
    .join('');
}
