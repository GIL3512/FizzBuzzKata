/**
 * Il s'agit d'un programme qui permet d'afficher les nombres de 1 à 100. Pour les multiples de 3, il affiche Fizz
 * les multiples de 5, il affiche buzz et enfin pour les multiples de 3 et 5, il affiche FizzBuzz
 **/

function multiple_3_et_5_2() {
    var fizz = false;
    var buzz = false;
    var ret_array = new Array();
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) { // Condition pour les multiples de 3
            fizz = true;
        }
        if (i % 5 === 0) { // Condition pour les multiples de 5
            buzz = true;
        }
        if (fizz && buzz) // Condition pour les multiples de 3 et 5
        {
            ret_array.push("FizzBuzz");

            /**
             *** Pour afficher le résultat sur la console, nous pouvons également utiliser **console.log("FizzBuzz");
             console.log("<br>");***
             **/

        }
        else
        {
            if (fizz)
            {
                ret_array.push("Fizz");
            }
            else
            {
                if (buzz)
                {
                    ret_array.push("Buzz");

                }
                else
                {
                    ret_array.push(i);
                }
            }
        }
        fizz = false; // Réinitialisation de la valeur du booléan fizz
        buzz = false;
    }

    for(var i= 0; i < ret_array.length; i++)
    {
        document.write(ret_array[i]);
        document.write("<br>");
    }

    return ret_array;

}
