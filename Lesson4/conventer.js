// Задание 1 
const usdToRub = (usd) => usd * 90;

console.log(usdToRub(100));

const euroToRub = (euro) => euro * 100;

console.log(euroToRub(20));
    
// Задание 2

const ages = [10, 18, 3, 55, 20];

const checkAccess = (age) =>  {
    if (age >= 18) {
        return `Доступ разрешен`;
    } else {
        return `Доступ запрещен`;
    }
};
for (const age of ages) {
    const result = checkAccess(age);
    console.log(`Возраст ${age}: ${checkAccess(age)}`); // данную строку сделать помогла нейронка, т.к. не совсем было понятно как вывести в строку (не понимал значение "$")
}
