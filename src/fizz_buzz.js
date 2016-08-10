var tableau = [];

function multiple_3_et_5() {
    for (var i = 0; i < 100; i++) {
        if (i % 3 === 0) {
            tableau[i] = "Fizz";
        }

        if (i % 5 === 0){
            tableau[i] = "Buzz";
        }else{
            tableau[i]=i;
        }
    }
    return tableau;
}
multiple_3_et_5();

// module.exports=tableau;