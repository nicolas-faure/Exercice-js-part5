var languagesArrayCreation = function () {
var languages = ['Html' , 'CSS' , 'Java', 'PHP'];
  return languages;
}

var numbersArrayCreation = function () {
var numbers = [ 0, 1, 2, 3, 4, 5];
    return numbers;
}

var ElementReplacement = function (languages) {
languages [2] = 'Javascript';
    return languages;
}

var AddElementToLanguagesArray = function (languages) {
var newLength = languages.push('Ruby' , 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
var newLength = numbers.unshift(-2 , -1);
  return numbers ;
}

var deleteArrayFirstElement = function (languages) {
var first = languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
var last = languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
var socialMedia = socialMediaInString.split(',');
  return socialMedia;
}

var arrayToString = function (languages) {

  return languages.toString();
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();
}

var arrayInvert = function (languages){


  return languages.reverse();
}
