/*
 **Conception sans utilisée le tableau***
 */
function multiple_3_et_5() {
    var fizz = false;
    var buzz = false;
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) { // Condition pour les multiples de 3
            fizz = true;
        }
        if (i % 5 === 0) { // Condition pour les multiples de 5
            buzz = true;
        }
        if (fizz && buzz) // Condition pour les multiples de 3 et 5
        {
            document.write("FizzBuzz");// Permet d'afficher FizzBuzz pour i multiple de 3 et de 5 sur une page HTML
            document.write("<br/>");

            /**
             *** Pour afficher le résultat sur la console, nous pouvons également utiliser **console.log("FizzBuzz");
             console.log("<br>");***
             **/

        }
        else {
            if (fizz) {
                document.write("Fizz");
                document.write("<br>");

            }
            else {
                if (buzz) {
                    document.write("Buzz");
                    document.write("<br>");

                }
                else {
                    document.write(i);
                    document.write("<br>");
                }
            }
        }
        fizz = false; // Réinitialisation de la valeur du booléan fizz
        buzz = false;

    }
}
multiple_3_et_5();

