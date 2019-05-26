// B25 2-nin qüvvəti
var n = Number(prompt("Reqem daxil edin:"));

var count = 0;
while(isNaN(n) || n<0){
    alert("Duzgun reqem daxil edin!");
    n = Number(prompt("Reqem daxil edin:"));
}

var enteredDigit = n;


if(enteredDigit%2==0){

    while(enteredDigit>=2){
        enteredDigit=enteredDigit/2;
        count++;
    }
    if(enteredDigit==1){
        alert(n + " reqemi 2 ededinin "+count+" quvvetidir.");
    }
    else{
        alert(n + " reqemi 2 ededinin quvveti deyil.");
    }
    
}
else{
    alert("Bu reqem tek reqemdir!!!")
}

// Son