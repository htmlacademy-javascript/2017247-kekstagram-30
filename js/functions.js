//Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
function checkPalindrome(string) {
  const newString = string.replaceAll(' ', '').toLowerCase();
  const returnString = newString.split('').reverse().join('');
  return returnString === newString;
}

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
checkPalindrome('Лёша на полке клопа нашёл ');

//Функция, извлекающая цифры от 0 до 9 из строки и возвращающая их в виде целого положительного числа
function extractNumberFromString(string) {
  const newString = string.toString();
  let result = '';
  for (let i = 0; i < newString.length; i++) {
    if (!Number.isNaN(parseInt(newString[i], 10))) {
      result += newString[i];
    }
  }
  return parseInt(result, 10);
}

extractNumberFromString('2023 год');
extractNumberFromString('ECMAScript 2022');
extractNumberFromString('1 кефир, 0.5 батона');
extractNumberFromString('агент 007');
extractNumberFromString('а я томат');
extractNumberFromString(2023);
extractNumberFromString(-1);
extractNumberFromString(1.5);
