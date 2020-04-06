// Завдання 1

// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// 1.	Створіть змінну city.
// 2.	Присвойте їй значення «Київ».
// 3.	Змініть значення змінної city на «Львів».
// 4.	Створіть змінну address і скопіюйте в неї значення змінної city.
// 5.	Вивести значення змінної address з допомогою команди alert().

// let city = "Київ";
// city = 'Львів';
// let address = city;
// alert(address);


// Завдання 2

// Потрібно створити змінну n і записати в неї будь-яке число. 
// Створити іншу змінну result, в яку потрібно записати результат n в степені 3. 
// Результат вивести командою console.log().

// let n = 2;
// let result = n*n*n;
// console.log(result)


// Завдання 3

// Потрібно написати програму, яка обчислить вартість покупки. 
// Людина купила 4 ручки по 5.25 грн і 6 олівців по 3.50 грн. 
// Командами JavaScript потрібно обрахувати загальну вартість і вивести результат 
// в document.write (для вартостей і кількостей товарів постворювати окремі змінні).

// let countPens = 4;
// let pricePen = 5.25;
// let countPencil = 6;
// let pricePencil = 3.5;

// let summa = (countPens * pricePen) + (countPencil * pricePencil);
// document.write(`Загальна сума замовлення: - ${summa} грн.` )


let name = prompt('Твоє ім’я:');
let wConteiner = prompt('Ширина карточки:');
let hConteinet = prompt('Висота карточкиЖ');
let bgColor = prompt('Колір фону:');


    // width: ${wConteiner};
    // height: ${hConteinet};
    // background-color: ${bgColor};
   
let wAva = prompt('Ширина аватарки');
let hAva = prompt('Висота аватарки');
let bgAva = prompt('URL адрес до аватарки:');

document.write(`
<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;
width: ${wConteiner}px; height: ${hConteinet}px;
background-color: ${bgColor}; ">
   <div style="background-repeat: no-repeat;
   background-size: cover; width: ${wAva}px; height: ${hAva}px; background-image: url(${bgAva});">
   </div>  
   <h1> Welcome, ${name} </h1>
   
</div>

`)


    // width: ${wAva};
    // height: ${hAva};
    // background-image: url(${bgAva});
