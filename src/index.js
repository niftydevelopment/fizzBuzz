var FizzBuzz = (function() {
    alert("do stuff");

    function by5(n) {
        return n % 5 == 0;
    }

    function by3(n) {
        return n % 3 == 0;
    }

    function play(n) {
        if(by3(n) && by5(n)) {
            return "fizzBuzz";
        }
        if (by5(n)) {
            return "fizz";
        }
        if (by3(n)) {
            return "buzz";
        }

        return n;
    }

    return {
        play : play
    }
})();

var Katt = (function() {
    return {}
})();