/**
 * Grâce à la bibliothèque lib, pas besoin de module.exports ou de require.
 * Il suffit juste de faire appel à la fonction à tester (multiple_3_et_5_2())
 *
 * Le lancement est fait directement depuis le fichier index.html sur n'importe quel navigateur avec le résultat attendu
 */
describe("Test de la fonction FizzBuzz", function() {
    it("Vérifie bien que les mots Fizzuzz et Fizz sont contenus dans les fonctions précédemment définies ", function() {
        expect(multiple_3_et_5_2().indexOf('FizzBuzz') !== -1).toBe(true);
        expect(multiple_3_et_5_2().indexOf('Fizz') !== -1).toBe(true);
  //      expect(multiple_3_et_5().indexOf('Buzz') !== -1).toBe(true);
    });
});


