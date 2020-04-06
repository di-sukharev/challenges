/* eslint-disable no-unused-vars */

/*
 * Write a function that takes in a string of one or more words,
 * and returns the same string,
 * but with all five or more letter words reversed.
 *
 * Examples:
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This is a test"
 * spinWords( "This is another test" )=> returns "This is rehtona test".
 */

const spinWords = sentence =>
  sentence
    .split(" ")
    .map(word =>
      word.length >= 5
        ? word
            .split("")
            .reverse()
            .join("")
        : word
    )
    .join(" ");

// spinWords("Welcome") ==> "emocleW"
// spinWords("Hey fellow warriors") ==> "Hey wollef sroirraw"
// spinWords("This is a test") ==> "This is a test"
// spinWords("This is another test") ==> "This is rehtona test"
// spinWords("You are almost to the last test") ==> "You are tsomla to the last test"
// spinWords("Just kidding there is still one more") ==> "Just gniddik ereht is llits one more"
// spinWords("Seriously this is the last one") ==> "ylsuoireS this is the last one"

// –––––------------------------

/*
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 * Write a method that takes the array as an argument and returns this "outlier" N.
 *
 * Examples:
 *
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)
 *
 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 */

const isEven = num => !(num % 2);
const isOdd = num => num % 2;

function findOutlierSlow(integers) {
  const evens = integers.filter(isEven);
  const odds = integers.filter(isOdd);

  return evens.length < odds.length ? evens[0] : odds[0];
}

function findOutlierFast(integers) {
  let evenORodd = null;
  let result = null;

  for (let i = 0; i <= integers.length; i++) {
    if (evenORodd !== isEven(integers[i]) && evenORodd !== null) {
      result =
        isEven(integers[i]) === isEven(integers[i + 1] || integers[i - 2])
          ? integers[i - 1]
          : integers[i];
      break;
    } else evenORodd = isEven(integers[i]);
  }

  return result;
}

// Test.assertEquals(findOutlier([0, 1, 2]), 1)
// Test.assertEquals(findOutlier([1, 2, 3]), 2)
// Test.assertEquals(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160)
// Test.assertEquals(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11)
// Test.assertEquals(findOutlier([9,8,6,10,12]), 9)
// Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
// Test.assertEquals(findOutlier([1,1,0,1,1]), 0)

// –––––------------------------

/*
 * Create a function that returns the sum of the two lowest positive numbers
 * given an array of minimum 4 positive integers.
 * non-positive integers will be passed.
 *
 * Examples:
 * [10, 3, 19, 1000, -44] should return 13.
 */

function sumTwoSmallestNumbers(numbers) {
  const [a, b] = numbers.sort((c, d) => c - d);
  return a + b;
}

// describe("Your function", _ => {
//   it("should work for basic tests", _ => {
//     Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
//     Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
//     Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
//     Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
//     Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");
//   });
// });

// –––––------------------------

/*
 * Given two integers a and b, which can be positive or negative,
 * find the sum of all the numbers between including them too and return it.
 * If the two numbers are equal return a or b.
 * Note: a and b are not ordered!
 * GetSum(1, 0) == 1   // 1 + 0 = 1
 * GetSum(1, 3) == 6  // 1 + 2 + 3  = 6
 */

function getSum(a, b) {
  if (a === b) return a;

  const ordered = a < b ? [a, b] : [b, a];
  let sum = 0;

  for (let i = ordered[0]; i <= ordered[1]; i++) sum += i;

  return sum;
}

// –––––------------------------

/*
 * You are going to be given a word.
 * Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character.
 * If the word's length is even, return the middle 2 characters.
 */

function getMiddle(s) {
  const middle = s.length / 2;
  return s.length % 2 ? s.charAt(Math.floor(middle)) : s.slice(middle - 1, middle + 1);
}

// Test.describe("GetMiddle", function() {
//   Test.it("Tests", function() {
//     Test.assertEquals(getMiddle("test"), "es");
//     Test.assertEquals(getMiddle("testing"), "t");
//     Test.assertEquals(getMiddle("middle"), "dd");
//     Test.assertEquals(getMiddle("A"), "A");
//   });
// });

// –––––------------------------

/*
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 * Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
 *
 * Examples:
 * Testing: [0, 0, 0, 1] ==> 1
 * Testing: [0, 0, 1, 0] ==> 2
 */

const binaryArrayToNumber = arr => arr.reverse().reduce((cur, next, i) => cur + next * 2 ** i);

// describe("One's and Zero's", () => {
//   it("Example tests", () => {
//     Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
//     Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
//     Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
//     Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);
//   });
// });

// –––––------------------------

/*
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters
 * then it should replace the missing second character of the final pair
 * with an underscore ('_').
 */

function solution(str) {
  return str
    .split("")
    .map((s, i, arr) => (i % 2 === 0 ? s + (arr[i + 1] || "_") : s))
    .filter(el => el.length > 1);
}

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });

// –––––------------------------

/*
 * Move the first letter of each word to the end of it,
 * then add "ay" to the end of the word.
 * Leave punctuation marks untouched.
 *
 * Examples:
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
  return str
    .split(" ")
    .map(word => (word.match(/\w/) ? `${word.slice(1) + word[0]}ay` : word))
    .join(" ");
}

// Test.assertEquals(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
// Test.assertEquals(pigIt("This is my string"), "hisTay siay ymay tringsay");

// –––––------------------------

/*
 * Given an array, find the integer that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
  const obj = {};
  A.forEach(el => (obj[el] ? obj[el]++ : (obj[el] = 1)));

  for (prop in obj) if (obj[prop] % 2 !== 0) return Number(prop);
}

// Test.describe("Example tests", function() {
//   doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
//   doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
//   doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
//   doTest([10], 10);
//   doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
//   doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
// });

// –––––------------------------

/*
 * Implement the function unique_in_order which takes as argument a sequence
 * and returns a list of items without any elements with the same value next to each other
 * and preserving the original order of elements.
 */

const uniqueInOrder = function(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

// Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])

// –––––------------------------
