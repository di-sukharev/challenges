/*
    Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
    Необходимо проверить, что скобки в строке сбалансированы — на каждую
    открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
    Напишите функцию, которая принимает такую строку и возвращает true,
    если скобки сбалансированы, и false, если не сбалансированы.
*/

function isValid(str) {
  const matches = [];
  const arr = str.split("");
  const TYPES = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  arr.forEach(el => {
    if (!!matches.length && TYPES[el] === matches[matches.length - 1]) matches.pop();
    else if (el.match(/\W/g)) matches.push(el);
  });

  return matches.length === 0;
}

// function isValid(str) {
//   let left = 0;
//   let right = str.length - 1;

//   let leftBracket;
//   let rightBracket;

//   while (left < right) {
//     if (str[left] !== "(") left++;
//     else leftBracket = str[left];

//     if (str[right] !== ")") right--;
//     else rightBracket = str[right];

//     if (leftBracket && rightBracket) {
//       leftBracket = null;
//       rightBracket = null;
//       left++;
//       right--;
//     }
//   }

//   if (!leftBracket && !rightBracket) return true;

//   return false;
// }

export default isValid;
