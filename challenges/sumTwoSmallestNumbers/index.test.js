describe("Your function", _ => {
  it("should work for basic tests", _ => {
    Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
    Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
    Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
    Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
    Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");
  });
});
