

describe("Les nombres affichés", function() {
    it("La liste", function() {

        expect(multiple_3_et_5()).toContain("Fizz");
        expect(multiple_3_et_5()).toEqual("FizzBuzz");
        expect(multiple_3_et_5()).toBe("Buzz");
    });
});