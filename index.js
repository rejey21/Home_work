// Задание 1
const cardInATM = true;
const currentBalance = 1000;

const howManyWithdraw = Number(prompt("Введите сумму, которую хотите снять:"))

let checkConditions = (cardInATM == true && howManyWithdraw <= currentBalance);

checkConditions ? console.log("Операция выполняется") : console.log("Операция отклонена");

// Задание 2

const carPower = Number(prompt("Введите мощность машины: "));
let transportTax = 0;

if (carPower < 100) {
    transportTax = carPower * 12;
    console.log("Сумма налога:", transportTax);
} else if (carPower >= 100 && carPower < 125) {
    transportTax = carPower * 25;
    console.log("Сумма налога:", transportTax);
} else if (carPower >= 125 && carPower < 150) {
    transportTax = carPower * 35;
    console.log("Сумма налога:", transportTax);
} else if (carPower >= 150 && carPower < 175) {
    transportTax = carPower * 45;
    console.log("Сумма налога:", transportTax);
} else if (carPower >= 175 && carPower < 200) {
    transportTax = carPower * 50;
    console.log("Сумма налога:", transportTax);
} else if (carPower >= 200 && carPower < 225) {
    transportTax = carPower * 65;
    console.log("Сумма налога:", transportTax);
} else if (carPower >= 225 && carPower < 250) {
    transportTax = carPower * 75;
    console.log("Сумма налога:", transportTax);
} else if (carPower > 225) {
    transportTax = carPower * 150;
    console.log("Сумма налога:", transportTax);
}