/* eslint-disable no-unused-vars */

/**
 * Write a function that takes in a string of one or more words,
 * and returns the same string,
 * but with all five or more letter words reversed.
 *
 * Examples:
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This is a test"
 * spinWords( "This is another test" )=> returns "This is rehtona test".
 *
 */

function spinWords(sentence) {
  let wordsArr = sentence.split(" ");
  wordsArr = wordsArr.map(word =>
    word.length >= 5
      ? word
          .split("")
          .reverse()
          .join("")
      : word
  );
  const spinnedSentence = wordsArr.join(" ");
  return spinnedSentence;
}

// spinWords("Welcome") ==> "emocleW"
// spinWords("Hey fellow warriors") ==> "Hey wollef sroirraw"
// spinWords("This is a test") ==> "This is a test"
// spinWords("This is another test") ==> "This is rehtona test"
// spinWords("You are almost to the last test") ==> "You are tsomla to the last test"
// spinWords("Just kidding there is still one more") ==> "Just gniddik ereht is llits one more"
// spinWords("Seriously this is the last one") ==> "ylsuoireS this is the last one"
