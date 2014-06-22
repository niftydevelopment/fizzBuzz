describe("Skall spela fizzBuzz", function() {

    it("FizzBuzz skall finnas", function() {
        expect(FizzBuzz).not.toBeUndefined();
    });

    it("Man skal kunna spela FizzBuss genom att äga en siffra", function() {
        expect(FizzBuzz.play(1)).not.toBeUndefined();
    })

    it("Ett tal jämt delbart med 5 skall resultera i Fizz", function() {
        expect(FizzBuzz.play(5)).toBe("fizz");
    })

    it("Ett tal jämt delbart med 3 skall ge resultatet Buzz", function() {
        expect(FizzBuzz.play(3)).toBe("buzz");
    })

    it("Ett tal jämt delbart med 3 och 5 skall resultera i FizzBuzz", function() {
        expect(FizzBuzz.play(15)).toBe("fizzBuzz");
    })

    it ("Ett tal som inte är jämt delbart med 3 eller 5 skall bara returneras", function() {
        expect(FizzBuzz.play(2)).toBe(2);
        expect(Katt).not.toBeUndefined();
    })



})