import { isEscapeKey } from './utils.js';

const COMMENTS_COUNT_SHOW = 5;

const bodyElement = document.querySelector('body');
const bigPhotoElement = document.querySelector('.big-picture');
const closePhotoButtonElement = bigPhotoElement.querySelector('.big-picture__cancel');

const commentListElement = bigPhotoElement.querySelector('.social__comments');
const commentCountElement = bigPhotoElement.querySelector('.social__comment-shown-count');
const totalCommentCountElement = bigPhotoElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = bigPhotoElement.querySelector('.comments-loader');

let commentsCountShown = 0;
let comments = [];

const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = function ({ avatar, message, name }) {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = function () {
  commentsCountShown += COMMENTS_COUNT_SHOW;

  if (commentsCountShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsCountShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);

  commentCountElement.textContent = commentsCountShown;
  totalCommentCountElement.textContent = comments.length;
};

const onCommentsLoaderClick = function () {
  renderComments();
};

const hidePhoto = function () {
  commentsCountShown = 0;
  bigPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onClosePhotoButtonClick = function () {
  hidePhoto();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePhoto();
  }
}

const renderPhoto = function ({ url, likes, description }) {
  bigPhotoElement.querySelector('.big-picture__img img').src = url;
  bigPhotoElement.querySelector('.big-picture__img img').alt = description;
  bigPhotoElement.querySelector('.likes-count').textContent = likes;
  bigPhotoElement.querySelector('.social__caption').textContent = description;
};

const showBigPhoto = function (photoData) {
  bigPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  comments = photoData.comments;

  if (comments.length > 0) {
    renderComments();
  }

  renderPhoto(photoData);
};

closePhotoButtonElement.addEventListener('click', onClosePhotoButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { showBigPhoto };
