const userAge = (age) => {
    
    if (age >= 18) {
        return (`Человек совершеннолетний`);
    } else {
        return (`Человек еще маленький`);
    }
}
console.log(userAge(19)); 