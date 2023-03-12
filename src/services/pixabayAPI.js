const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33112216-e5b097e9371d0df4b0ecc7612';
const searchOptions = 'image_type=photo&orientation=horizontal&per_page=12';

export const pixabayApi = search => {
  return fetch(
    `${BASE_URL}?q=${search}&page=1&key=${API_KEY}&${searchOptions}`
  );
};
