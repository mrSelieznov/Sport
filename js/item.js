"use strict";
let slicker = JSON.parse(sessionStorage.getItem("objItem"));
let itemDescription = document.querySelector('.block__items-text');
let imgTest = document.querySelector('.imgTest');
let imgTest1 = document.querySelector('.imgTest1');
let imgTest2 = document.querySelector('.imgTest2');
let imgTest3 = document.querySelector('.imgTest3');
let imgInput1 = document.querySelector('#image1');
let imgInput2 = document.querySelector('#image2');
let imgInput3 = document.querySelector('#image3');

checkThis(sessionStorage.getItem("objItem"));

imgTest1.addEventListener('click', showLeftPicture);
imgTest2.addEventListener('click', showCentralPicture);
imgTest3.addEventListener('click', showRightPicture);

function showLeftPicture() {
    imgInput1.checked = true;
    imgTest.src = slicker.preview[0];
}

function showCentralPicture() {
    imgInput2.checked = true;
    imgTest.src = slicker.preview[1];
}

function showRightPicture() {
    imgInput3.checked = true;
    imgTest.src = slicker.preview[2];
}

function checkThis(arg) {
    let itemIdObj = JSON.parse(arg);
    imgTest.src = itemIdObj.preview[0];
    imgTest1.src = itemIdObj.preview[0];
    imgTest2.src = itemIdObj.preview[1];
    imgTest3.src = itemIdObj.preview[2];

    let itemTitle = document.createElement('h2');
    itemTitle.classList.add('itemTitle');
    itemTitle.innerText = itemIdObj.title;
    itemDescription.append(itemTitle);

    let description = document.createElement('p');
    description.classList.add('itemDescriptionText');
    if (itemIdObj.description !== '') {
        description.innerText = itemIdObj.description;
        itemDescription.append(description);
    }

    let priceItem = document.createElement('p');
    priceItem.classList.add('priceItemP');
    priceItem.innerText = '£' + itemIdObj.price;
    itemDescription.append(priceItem);

    let sizeItemWrapper = document.createElement('div');
    sizeItemWrapper.classList.add('sizeItemWrapper');

    let itemSizeText = document.createElement('p');
    itemSizeText.classList.add('itemSizeText');
    itemSizeText.innerText = 'Size:';

    sizeItemWrapper.append(itemSizeText);

    let itemSize = document.createElement('h2');
    itemSize.classList.add('itemSize');

    if (itemIdObj.sizes.length !== 0) {
        for (let i = 0; i < itemIdObj.sizes.length; i++) {
            let buttonSize = document.createElement('label');
            buttonSize.classList.add('itemSize');
            buttonSize.htmlFor = 'sizeId' + i;
            buttonSize.innerText = itemIdObj.sizes[i];

            let radioSize = document.createElement('input');
            radioSize.name = 'radioSize';
            radioSize.type = 'radio';
            radioSize.id = 'sizeId' + i;
            sizeItemWrapper.append(radioSize);
            sizeItemWrapper.append(buttonSize);

            itemDescription.append(sizeItemWrapper);
        }
    } else {
        itemSize.innerText = ' Oops! Sizes over :(';
        itemDescription.append(itemSize)
    }

    let colorItemWrapper = document.createElement('div');
    colorItemWrapper.classList.add('colorItemWrapper');

    let itemColorText = document.createElement('p');
    itemColorText.classList.add('itemColorText');
    itemColorText.innerText = 'Color:';

    colorItemWrapper.append(itemColorText);

    let itemColor = document.createElement('h2');
    itemColor.classList.add('itemColor');

    if (itemIdObj.colors.length !== 0) {
        for (let i = 0; i < itemIdObj.colors.length; i++) {
            let buttonColor = document.createElement('label');
            buttonColor.classList.add('itemColor');
            buttonColor.htmlFor = 'colorId' + i;
            buttonColor.innerText = itemIdObj.colors[i];

            let radioColor = document.createElement('input');
            radioColor.name = 'radioColor';
            radioColor.type = 'radio';
            radioColor.id = 'colorId' + i;
            colorItemWrapper.append(radioColor);
            colorItemWrapper.append(buttonColor);

            itemDescription.append(colorItemWrapper);
        }
    } else {
        itemColor.innerText = ' Oops! Colors over :(';
        itemDescription.append(itemColor);
    }

    let itemButtonAdd = document.createElement('div');
    itemButtonAdd.classList.add('itemButtonAdd');

    let itemButtonAddAnchor = document.createElement('a');
    itemButtonAddAnchor.classList.add('itemButtonAddAnchor');
    itemButtonAddAnchor.href= "bag.html";

    let itemButtonAddText = document.createElement('p');
    itemButtonAddText.classList.add('itemButtonAddText');
    itemButtonAddText.innerText = 'Add to bag';

    if (itemIdObj.sizes.length !== 0 && itemIdObj.sizes.length !== 0) {

        itemButtonAdd.append(itemButtonAddText);
        itemButtonAddAnchor.append(itemButtonAdd);
        itemDescription.append(itemButtonAddAnchor);
    }
}

let buttonItemBag = document.querySelector('.itemButtonAdd');

buttonItemBag.addEventListener('click', addIdInLocalStor2);

function addIdInLocalStor2() {
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        localStorage.setItem('slicker', slicker.id);
    }
}