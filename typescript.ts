class banking{
    balance:number;
    constructor(){
        this.balance=0;
    }
}
class bank extends banking{
    
    deposite(amount:number){
        this.balance+=amount;
    }
    withdraw(amount:number){
        if(this.balance>amount){
            this.balance-=amount;
        }else{
            alert("low balance");
        }
    }
    transferto(amount:number,toAcc:bank){
        if(this.balance>amount){
            this.balance-=amount
            toAcc.balance+=amount
        }else{
            alert("low balance");
        } 
    }
}

const dino=new bank();
const dina=new bank();

dina.deposite(10000)
console.log(dina.balance)
dino.deposite(2000)
console.log("dino",dino.balance)
