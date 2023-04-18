function NumToRoman(num){
    var l=[100,900,500,400,100,90,50,40,10,9,5,4,1];
    var sym=["M","CM","D","CD","C","CX","L","XL","X","IX","V","IV","I"];
    var str="";
    let i=0;
    while(num>0){
        if(l[i]<=num){
            str +=sym[i];
            num -=l[i];
        }else{
            i++;
        }
    }
    return str;
}
console.log(NumToRoman(1234));

