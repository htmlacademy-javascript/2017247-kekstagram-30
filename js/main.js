const MAX_NUMBER_OF_PHOTOS = 25;
const MAX_NUMBER_OF_COMMENTS = 30;

const DESCRIPTIONS_FHOTO = [
  'Пляж с лежаками на территории санатория',
  'Деревянный указатель с надписью "go to the beach"',
  'Волны, бьющиеся о камень',
  'Девушка в купальнике на берегу моря с фотоаппаратом',
  'Две глиняные тарелочки с супом на столе',
  'Черная машина-трансформер',
  'Разрезанная напополам клубника и вилка на деревянной тарелке',
  'Две кружки красного ягодного морса',
  'Люди на берегу моря, махающие пролетающему самолету',
  'Обувница на колесиках с обувью',
  'Растительность, огороженная деревянным забором на песчаном пляже',
  'Белая машина "AUDI"',
  'Свежие овощи со специями на фольге',
  'Рыжий котик в желтой накидке, лежащий на подстилке',
  'Ноги девушки на диване, обутые в серые дутики',
  'Высоко летящий в небе самолет',
  'Выступление хора на сцене',
  'Старинное авто красного цвета в пустом помещении с кирпичными стенами',
  'Тапочки с подсветкой на ногах женщины',
  'Красивые пальмы, растущие на территории дома отдыха',
  'Тарелочка овощного блюда с вилкой на белом столе',
  'Закат на пляже',
  'Ползущий по камню краб',
  'Выступление артиста в концертном зале, заполненном людьми',
  'Белый джип, проезжающий мимо водоема с бегемотами',
];

const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Мария',
  'Анастасия',
  'Куколка',
  'Сержик',
  'Толян',
  'Света',
  'Венера',
  'Дэн',
  'Маришка',
];

// Функция для получения случайного целого числа
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция-генератор для получения случайных чисел из указанного диапазона
function createRandomFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// Функция по поиску случайного элемента в переданном массиве
const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createCommentLeftOtherUsers = function () {

  return {
    id: getRandomInteger(1, 300),
    avatar: `img/avatar-${createRandomFromRangeGenerator(1, 6)()}.svg`,
    message: getRandomArrayElement(COMMENTS_TEXT),
    name: getRandomArrayElement(NAMES)
  };
};

const createListRandomCommentsLeftOtherUsers = function () {
  return Array.from({ length: createRandomFromRangeGenerator(0, MAX_NUMBER_OF_COMMENTS)() }, createCommentLeftOtherUsers);
};

const createDescriptionPhotoPublishedUser = function () {
  const descriptionPhotos = [];

  for (let i = 0; i < MAX_NUMBER_OF_PHOTOS; i++) {
    const descriptionPhoto = {
      id: i + 1,
      url: `photos / ${i + 1}.jpg`,
      description: DESCRIPTIONS_FHOTO[i],
      likes: createRandomFromRangeGenerator(15, 200)(),
      comments: createListRandomCommentsLeftOtherUsers()
    };
    descriptionPhotos.push(descriptionPhoto);
  }

  return descriptionPhotos;
};

createDescriptionPhotoPublishedUser();
