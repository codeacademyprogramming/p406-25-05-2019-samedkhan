// B04 Tək rəqəmlərin sayı

var n = Number(prompt("Reqem daxil edin:"));

var count = 0;
while(isNaN(n) || n<0){
    alert("Duzgun reqem daxil edin!");
    n = Number(prompt("Reqem daxil edin:"));
}
var enteredDigit = n;
var checkDigit; 

    while(n>0){
        checkDigit=n%10;

        if(checkDigit%2==1){
            count++;
        }
        n=(n-(n%10))/10;

        
        
    }
    
alert(enteredDigit + " ededinde " + count + " sayda Reqem TEK reqemdir!!!");


// Son