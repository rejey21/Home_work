// Задание 1
const cardInATM = true;
const currentBalance = 1000;

const howManyWithdraw = Number(prompt("Введите сумму, которую хотите снять:"))

let checkConditions = (cardInATM == true && howManyWithdraw <= currentBalance);

checkConditions ? console.log("Операция выполняется") : console.log("Операция отклонена");