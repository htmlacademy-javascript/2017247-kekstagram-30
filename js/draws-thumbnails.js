import { createDescriptionPhotoPublishedUser } from './data.js';

const containerForPhotos = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const publishedUserPhotos = createDescriptionPhotoPublishedUser();

// Функция для отрисовки миниатюр
const drawThumbnails = function () {
  const photoFragment = document.createDocumentFragment();

  publishedUserPhotos.forEach(({ url, description, likes, comments }) => {
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__img').alt = description;
    photo.querySelector('.picture__comments').textContent = comments.length;
    photo.querySelector('.picture__likes').textContent = likes;
    photoFragment.appendChild(photo);
  });

  containerForPhotos.appendChild(photoFragment);
};

export { drawThumbnails };
