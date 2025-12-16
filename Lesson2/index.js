let totalPrice = 5000;
let accountBalance = 6000;
let isVip = false;
if (isVip === true) {
    totalPrice = totalPrice * 0.9;
}
if  (accountBalance >= totalPrice) {
    console.log ("Успешно! Покупка сделана.");
} else {
     console.log ("Недостаточно средств");
    }