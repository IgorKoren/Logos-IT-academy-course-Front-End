// Завдання 1///

// let sumBal = 0;

// let q1 = prompt('Твоє імя ?');
// let a1 = 'Igor';

// let q2 = +prompt('Скільки тобі років?');
// let a2 = 33;

// let q3 = +prompt('Скільки буде 100 + 100 ?');
// let a3 = 200;

// let q4 = +prompt('Скільки буде 1 + 1 ?');
// let a4 = 2;

// let q5 = +prompt('Скільки буде 10*2 ?');
// let a5 = 20;

// let q6 = +prompt('Скільки буде 100 / 2 ?');
// let a6 = 50;

// let q7 = +prompt('Який зараз рік ?');
// let a7 = 2020;

// let q8 = prompt('Який зараз місяць (словом)?');
// let a8 = 'лютий';

// let q9 = prompt('2020 рік є високосний');
// let a9 = 'так';

// let q10 = +prompt('Скільки місяців в році ?');
// let a10 = 12;

// if (q1 == a1){
//     sumBal++;
//     console.log(sumBal);
// } 
// if (q2 == a2){
//    sumBal++;
//    console.log(sumBal);
// } 
// if (q3 == a3){
//     sumBal++;
//     console.log(sumBal);
//  } 
//  if (q4 == a4){
//     sumBal++;
//     console.log(sumBal);
//  } 
//  if (q5 == a5){
//     sumBal++;
//     console.log(sumBal);
//  } 
//  if (q6 == a6){
//     sumBal++;
//     console.log(sumBal);
//  } 
//  if (q7 == a7){
//     sumBal++;
//     console.log(sumBal);
//  } 
//  if (q8 == a8){
//     sumBal++;
//     console.log(sumBal);
//  } 
//  if (q9 == a9){
//     sumBal++;
//     console.log(sumBal);
//  } 
//  if (q10 == a10){
//     sumBal++;
//     console.log(sumBal);
//  } 

// console.log(`Ти набрав ${sumBal} з максимально можливих 10`)

// if(sumBal >= 5){
//     console.log(`Ти набрав більше п’яти балів. МОЛОДЕЦЬ!!!`);
// } else {
//     console.log(`Ти набрав менше 5 балів. ШКОДА!`);
// }


//Завдання 2///

// let name = prompt('Введіть імя:');
// let currectNane = 'Igor';

// let inputPas;
// let currentPas = 'ЛОГОС';
// // let pas = prompt('Введіть пароль: ');

// if (name == currectNane) {
//     inputPas = prompt('Введіть пароль: ');
//     console.log(`${inputPas}`)
//     if (inputPas == currentPas) {
//         alert('ЛАВКАВО ПРОСИМО');
//     } else if (inputPas == null || inputPas == NaN || inputPas == undefined) {
//         alert('Вхід скасований');
//     } else {
//         alert('Пароль невірний');
//     }

// } else if (name == null || name == NaN || name == undefined) {
//     console.log(`${name}`)
//     alert('Вхід скасований');
// } else {
//     console.log(`${name}`);
//     alert(`ШАНОВНИЙ містер ${name} Я Вас незнаю. ДОПОБАЧЕННЯ!`);
// }


// Завдання 2,1
let nomMis = +prompt('Введіть число');
console.log(nomMis);

if (nomMis >= 1 & nomMis <= 12) {
    console.log('Число в межаж 1-12')
    if (nomMis == 12 & nomMis >= 1 || nomMis <= 2) {
        alert('ЗИМА');
    } else if (nomMis >= 3 & nomMis <= 5) {
        alert('весна');
    } else if (nomMis >= 6 & nomMis <= 8) {
        alert('ЛІТО');
    } else if (nomMis >= 9 & nomMis <= 11) {
        alert('Осінь');
    }
}  
else if (nomMis < 0 || nomMis > 12) {
    alert('Число має бути в межах 1 -12 !');
} 
else if (nomMis == 0 || nomMis == null || nomMis == NaN || nomMis == undefined){
    alert('ВІДМІНЕНО');
}

