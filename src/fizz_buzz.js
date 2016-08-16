/**
 * Il s'agit d'un programme qui permet d'afficher les nombres de 1 à 100. Pour les multiples de 3, il affiche Fizz
 * les multiples de 5, il affiche buzz et enfin pour les multiples de 3 et 5, il affiche FizzBuzz
 **/
var a = 3;
var b = 5;
function multiple_3_et_5_2() {
    var ret_array = [];
    for (var i = 1; i <= 100; i++) {
        if (i % a === 0 && i % b === 0) // Condition pour les multiples de 3 et 5
        {
            ret_array.push("FizzBuzz");

            /**
             *** Pour afficher le résultat sur la console, nous pouvons également utiliser **console.log("FizzBuzz");
             console.log("<br>");***
             **/
        }
        else if (i % a === 0) { // Condition pour les multiples de 3
            ret_array.push("Fizz");
        }
        else if (i % b === 0) { // Condition pour les multiples de 5
            ret_array.push("Buzz")
        }
        else ret_array.push(i);

    }
    return ret_array;
}
module.exports = multiple_3_et_5_2;
