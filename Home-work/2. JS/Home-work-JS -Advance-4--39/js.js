//Задача 1
// class Worker{
//     constructor (firstName, secondName, rate, days){
//         this.firstName = firstName;
//         this.secondName = secondName;
//         this.rate = rate;
//         this.days = days
//     }
//     getSalary(){
//         return this.rate * this.days;
//     }
//     getSun(r){
//         return this.getSalary() + r;
//     }



// }

// // const w1 = new Worker('Igor', 'Koren', 10, 30)
// // console.log(w1.getSalary());


// class Robitnyk1 extends Worker{
//     constructor(firstName, secondName, rate, days){
//         super(firstName, secondName, rate, days)
//     }

// }
// const r1 = new Robitnyk1('Ivan', 'Ivanov', 2,30)
// console.log(r1.getSalary());

// class Rob2 extends Worker{
//     constructor(firstName, secondName, rate, days){     
//         super(firstName,secondName, rate, days);
//     }

// }
// const r2 = new Rob2('Oleh', 'Olehovich', 4, 25)
// console.log(r2.getSalary());
// console.log(r1.getSun(r2.getSalary()));



////////////////////////////////////////////



//Задача 2
class MyString {
    constructor(str) {
        this.strg = str;
    }

    getReverses() {
        return this.strg.split("").reverse().join("");
    }

    ucFirst() {
        const tempSt = this.strg.slice(1, this.strg.lenght)
        return this.strg.slice(0, 1).toUpperCase() + tempSt;
    }
    ucWords() {
        let sumString = '';
        const temlAr = this.strg.split(" ")
        // console.log(temlAr);

        temlAr.forEach(function (element) {
            // console.log(element);
            let tstrw = element.slice(1, element.lenght);
            let firttLet = element.slice(0, 1).toUpperCase();
        //    console.log(tstrw);
        //    console.log(firttLet);
        //    console.log(sumString);
           
           sumString += `${firttLet}${tstrw} `;
        })
        return sumString;
    }


}

const mySt = new MyString('igor oleh ivan')
console.log(mySt.getReverses());
console.log(mySt.ucFirst());
console.log(mySt.ucWords());