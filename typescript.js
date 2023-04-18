var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var banking = /** @class */ (function () {
    function banking() {
        this.balance = 0;
    }
    return banking;
}());
var bank = /** @class */ (function (_super) {
    __extends(bank, _super);
    function bank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bank.prototype.deposite = function (amount) {
        this.balance += amount;
    };
    bank.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        }
        else {
            alert("low balance");
        }
    };
    bank.prototype.transferto = function (amount, toAcc) {
        if (this.balance > amount) {
            this.balance -= amount;
            toAcc.balance += amount;
        }
        else {
            alert("low balance");
        }
    };
    return bank;
}(banking));
var dino = new bank();
var dina = new bank();
dina.deposite(10000);
console.log(dina.balance);
dino.deposite(2000);
console.log("dino", dino.balance);
