/**
 * Ce test nous permet de vérifier que la fonction .
 * Il suffit juste de faire appel à la fonction à tester (multiple_3_et_5_2())
 *
 * Le lancement est fait directement depuis le fichier index.html sur n'importe quel navigateur avec le résultat attendu
 */

var fizzBuzz = require('../src/fizz_buzz');

describe("Test de la fonction FizzBuzz", function () {
    it("Vérifie bien que les mots Fizz, Buzz et Fizzbuzz et sont contenus dans la fonction précédemment définie ", function () {
        expect(fizzBuzz().length).toBe(100);
        expect(fizzBuzz()).toContain("Fizz");
        expect(fizzBuzz()).toContain("Buzz");
        expect(fizzBuzz()).toContain("FizzBuzz");
    });
});


