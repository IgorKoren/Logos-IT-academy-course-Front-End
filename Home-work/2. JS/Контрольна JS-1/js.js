// getId('addUserBtn').onclick = function (event) {
//     addUser()
// }
// object.onclick = function(){myScript};

// object.addEventListener("click", myScript);

// function myFunction(elmnt,clr) {
//     elmnt.style.color = clr;
//   }


// function myFunction() {
//     document.getElementById("field2").value = document.getElementById("field1").value;
//   }

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });

// window.onclick = myFunction;

// // If the user clicks in the window, set the background color of <body> to yellow
// function myFunction() {
//   document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
// }



// Get the button, and when the user clicks on it, execute myFunction
// document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }



// getId('tboby').innerHTML


let getId = x => document.getElementById(x);
let getSel = x => document.querySelector(x);

/// Оголошення глобальних змінних
let chColorTextOrbg; //Змінна фіксації яку кнопку натиснули


let tableOrListWrap; // Форма таблиці та списку

let editStr = `
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>
`;

/// Призначений розмір шрифта

let sizeFontActive;
// getId('')


getId('outputtext').innerHTML = editStr
getId('outputtext').style.fontSize = '16px'


function showEditOrStylepage(a) {
    if (a == 'edit') {
        console.log('Вкладка EDIT має появитися')
        getId('editWrap').style.display = 'block'
        getId('styleWrap').style.display = 'none'
    } else if (a == 'style') {
        console.log('Вкладка STYLE має появитися')
        getId('editWrap').style.display = 'none'
        getId('styleWrap').style.display = 'flex'
    }
}

function showOrHideColorPic() {
    getId('colorPic').style.display = 'none'
    console.log(getId('colorPic').style.display)
    if (getId('colorPic').style.display == 'none' | undefined | NaN) {
        getId('colorPic').style.display = 'block'
        getId('colorPic').style.display = 'flex'
    } else if (getId('colorPic').style.display == 'flex') {
        getId('colorPic').style.display = 'none'
    }
}

function bacgroundColBtnFun() {
    console.log('КЛІК по кнопці bacgroundColBtnFun ')
    showOrHideColorPic()
    chColorTextOrbg = 'changeColorBg'
}

function colorOfTextBtnFun() {
    console.log('КЛІК по кнопці colorOfTextBtnFun ')
    showOrHideColorPic()
    chColorTextOrbg = 'changeColorText'
}

////////////
function editBtnFun(e) {
    showEditOrStylepage('edit')
    console.log(e)
    console.log('Клік по кнопці EDIT')

    getId('editPlace').innerText = getId('outputtext').innerHTML

}

function saveBtnFun(e) {
    // console.log(e)
    console.log('Клік по кнопці saveBtnFun')
    getId('outputtext').innerHTML = getId('editPlace').innerText
}

function styleBtnFun(e) {
    showEditOrStylepage('style')
    console.log(e)
    console.log('Клік по кнопці STYLE')
}

function setFontSize(elem) {
    console.log('КЛІК ПО КНОПЦІ -- ' + elem.value)
    let formStyle = document.forms['formStyle']
    getId('outputtext').style.fontSize = elem.value + 'px' 

    // switch (elem.value) {
    //     case '12':
    //         getId('outputtext').style.fontSize = elem.value + 'px'
    //         break
    //     case '14':
    //         getId('outputtext').style.fontSize = elem.value + 'px'
    //         break
    //     case '16':
    //         getId('outputtext').style.fontSize = elem.value + 'px'
    //         break
    //     case '18':
    //         getId('outputtext').style.fontSize = elem.value + 'px'
    //         break
    //     case '20':
    //         getId('outputtext').style.fontSize = elem.value + 'px'
    //         break
    // }

}

function addBtnFun(e) {
    getId('tableOrListWrap').style.display = 'block'
    getId('bodyEditAndStyleWrap').style.display = 'none'
    tableOrListWrap = getId('tableOrListWrap')
    console.log(tableOrListWrap)
}

function boltTextCheckboxFun() {
    console.log(getId('boltTextCheckbox').checked)
    if (getId('boltTextCheckbox').checked == true) {
        console.log(getId('outputtext').style.fontWeight)
        getId('outputtext').style.fontWeight = '700'
        console.log(getId('outputtext').style.fontWeight)
    } else {
        getId('outputtext').style.fontWeight = '400'
        console.log(getId('outputtext').style.fontWeight)
    }
}

function cursiveTextCheckboxFun() {
    console.log(getId('cursiveTextCheckbox').checked)
    if (getId('cursiveTextCheckbox').checked == true) {
        getId('outputtext').style.fontStyle = 'italic'
    } else {
        getId('outputtext').style.fontStyle = 'normal'
    }
}

function fontFamilySelectFun(element) {
    let selIndex = element.selectedIndex;
    let optionsSel =element.options
    console.log(optionsSel[selIndex])
    getId('outputtext').style.fontFamily = optionsSel[selIndex].text
}

function selectColorFun() {
    let colorPic = getId('colorPic')
}

function chColor(elem) {
    if (chColorTextOrbg == 'changeColorText') {
        // console.log(elem.style.backgroundColor)
        getId('outputtext').style.color = elem.style.backgroundColor
        getId('colorPic').style.display = 'none'
    } else if (chColorTextOrbg == 'changeColorBg')
        // console.log(elem.style.backgroundColor)
        getSel('.contOutput').style.backgroundColor = elem.style.backgroundColor
    getId('colorPic').style.display = 'none'
}

function tableOrListRadioFormCreator(elem) {
    let tableOrListRadioForm = document.forms['tableOrListRadioForm']
    console.log(elem.id)
    if (elem.id == 'chooseTable') {
        console.log('ПОКАЗАТИ форму для створення таблиці')
        getId('createTable').style.display = 'block'
        getId('createListForm').style.display = 'none'
    } else if (elem.id == 'chooseList') {
        console.log('ПОКАЗАТИ форму для створення СПИСКУ')
        getId('createTable').style.display = 'none'
        getId('createListForm').style.display = 'block'
    }
}

function createTableBtnFun(elem) {
    console.log('Клік по кнопці СТВОРИТИ ТАБЛИЦЮ')
    console.log(elem)
    let newCreateTable = document.forms['createTable']
    getId('bodyEditAndStyleWrap').style.display = 'block'
    getId('tableOrListWrap').style.display = 'none'
    let newTable = document.createElement('table')
    newTable.style.display = 'block'
    newTable.style.borderCollapse = 'collapse'
    let divelem = document.createElement('div')
    function createTrAndTd(row, col) {
        for (let i = 1; i <= row; i++) {
            let newTr = document.createElement('tr')
            console.log(newTr)

            for (let q = 1; q <= col; q++) {
                let newTd = document.createElement('td')
                newTd.style.textAlign = 'center'
                newTd.style.width = newCreateTable.widthTD.value + 'px'
                newTd.style.height = newCreateTable.heightTd.value + 'px'
                newTd.style.borderColor = newCreateTable.colorOfBorder.value
                newTd.style.borderWidth = newCreateTable.widthOfBorder.value + 'px'

                function activeTypeofBorder() {
                    let typeOfBorderLet;
                    for (let i = 0; i < newCreateTable.typeOfBorder.options.length; i++) {
                        console.log('Dbrjyecnmcz wbrk d cthtlbys')
                        if (newCreateTable.typeOfBorder.options[i].selected) {
                            typeOfBorder = newCreateTable.typeOfBorder.options[i].value
                        }
                    }
                    // console.log(typeOfBorder + '777777777777777')
                    return typeOfBorder;
                }
                newTd.style.borderStyle = activeTypeofBorder()
                // newCreateTable.typeOfBorder.child.value
                newTr.appendChild(newTd)
                console.log(newTr)
            }
            newTable.appendChild(newTr)
        }
        divelem.appendChild(newTable)
    }
    createTrAndTd(newCreateTable.countTr.value, newCreateTable.countTd.value)
    // console.log(divelem)
    getId('editPlace').innerText += '<br>' + divelem.innerHTML
}

function createListBtnFun(element) {
    let createListForm = document.forms['createListForm']
    // console.log(createListForm.typeOfMarks)
    let countLi = createListForm.countLi.value
    // let countLi = getId('countLi').value
    console.log(countLi)
    let typeOfMarkInput = getId('typeOfMarks')
    // console.log(typeOfMarks)
    function typeOfMarkFun() {
        for (let i = 0; i <= typeOfMarkInput.options.length; i++) {
            if (typeOfMarkInput.options[i].selected) {
                // console.log(typeOfMarkInput.options[i].value + '4444444444444')
                return typeOfMarkInput.options[i].value
            }
        }
    }
    let typeOfMarkValue = typeOfMarkFun()
    // console.log(typeOfMarkValue + ' ------ typeOfMarkValue')
    function createNewList(countLeElem, typeLiElem) {
        let newUlTag = document.createElement('ul')
        for (let i = 0; i < countLeElem; i++) {
            let newLitag = document.createElement('li')
            newLitag.style.listStyleType = typeLiElem
            newLitag.innerText = 'Item ' + (i + 1)
            console.log(newLitag.style.listStyleType)
            newUlTag.appendChild(newLitag)
        }
        getId('editPlace').innerText += '<br>' + newUlTag.innerHTML
    }
    createNewList(countLi, typeOfMarkValue)
    getId('bodyEditAndStyleWrap').style.display = 'block'
    getId('tableOrListWrap').style.display = 'none'
}