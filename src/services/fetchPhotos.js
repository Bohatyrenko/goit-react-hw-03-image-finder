import React from 'react';
import axios from 'axios';

//Логика запроса
const API_KEY = '21301662-4ef0ce252e11badb1c1b3b876';
const BASE_URL = 'https://pixabay.com/api/';

const searchPhotos = new URLSearchPhotos({
  image_type: 'photo',
  orientation: 'horizontal',
  q: 'lego',
  page: 1,
  per_page: 12,
  key: API_KEY,
});

const fetchPhotosWithQuery = () => {
  return axios.get(`${BASE_URL}/?${searchPhotos}`);
};

export default { fetchPhotosWithQuery };
