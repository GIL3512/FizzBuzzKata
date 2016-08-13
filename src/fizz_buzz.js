function multiple_3_et_5() {
    var fizz = false;
    var buzz = false;
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            fizz = true;
        }
        if (i % 5 === 0) {
            buzz = true;
        }
        if (fizz && buzz)
        {
            document.write("FizzBuzz");
            document.write("<br>");
            
            console.log("FizzBuzz");
            console.log("<br>");

        }
        else
        {
            if (fizz)
            {
                document.write("Fizz");
                document.write("<br>");
                
                console.log("Fizz");
                console.log("<br>");
            }
            else
            {
                if (buzz)
                {
                    document.write("Buzz");
                    document.write("<br>");
                    
                    console.log("FizzBuzz");
                    console.log("<br>");
                }
                else
                {
                    document.write(i);
                    document.write("<br>");
                    
                    console.log(i);
                    console.log("<br>");
                }
            }
        }
        fizz = false;
        buzz = false;
        
    }
}
multiple_3_et_5();

// module.exports=tableau;