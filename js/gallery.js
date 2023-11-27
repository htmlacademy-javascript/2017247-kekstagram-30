import { containerForPhotos, drawThumbnails } from './draws-thumbnails.js';
import { showBigPhoto } from './show-big-photo.js';

const renderGallery = function (pictures) {
  drawThumbnails();
  containerForPhotos.addEventListener('click', (evt) => {
    evt.preventDefault();
    const thumbnail = evt.target.closest('[data-photo-id]');

    if (!thumbnail) {
      return;
    }

    const thumbnailId = Number.parseInt(thumbnail.dataset.photoId, 10);
    const photoData = pictures.find(({ id }) => id === thumbnailId);

    showBigPhoto(photoData);
  });
};

export { renderGallery };
