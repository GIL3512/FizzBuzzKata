var tableau2 = [];

function affichage_multiple_3_et_5() {
    for (var i = 0; i < 100; i++) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
            tableau[i] = "FizzBuzz";
        }
        else if (i % 3 === 0) {
            tableau[i] = "Fizz";
        }
        else if (i % 5 === 0) {
            tableau[i] = "Buzz";
        }
        else {
            tableau[i] = i;
        }
    }
}
affichage_multiple_3_et_5();

module.exports=tableau2;
