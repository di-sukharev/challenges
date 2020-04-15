/*
    Согласно григорианскому календарю,
    I век н. э. начался 1 января 1 года и закончился 31 декабря 100 года. 
    II век начался в 101 году, III век — в 201 и т. д.
*/

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

export default centuryFromYear;
