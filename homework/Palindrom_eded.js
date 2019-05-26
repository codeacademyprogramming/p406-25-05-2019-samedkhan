var n = Number(prompt("Reqem daxil edin:"));


while(isNaN(n) || n<0){
    alert("Duzgun reqem daxil edin!");
    n = Number(prompt("Reqem daxil edin:"));
}

var temp = n;
var reverse = -1;

while(temp>0){
    if(reverse==-1){
        reverse=temp%10;
        console.log(reverse);
    }
    else{
        reverse=(reverse*10)+(temp%10);
        console.log(reverse);
    }
    temp=(temp-(temp%10))/10;
    console.log(temp);
}

if(reverse==n){
    alert("YES");
}
else{
    alert("NO");
}