/*******************
 * YOUR CODE HERE! *
 *******************/

function yell (string) {
  return string + '!';
}

function getFirstCharacter (string) {
  return string[0];
}

function getLastCharacter (string) {
  return string[string.length - 1];
}

function getOneCharacter (string, num) {
  return string[num];
}

function getTwoCharacters (string, num1, num2) {
  return string[num1] + string[num2];
}

function makeCapitalized (string) {
  return string.toUpperCase();
}

function yellLouder (string) {
  return string.toUpperCase() + '!!!';
}

function getInitials (name) {
  return name[0] + '.' + name[name.indexOf(' ') + 1] + '.';
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
