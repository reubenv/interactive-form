'use strict'

/*===============
    Variables
===============*/
const fscForm = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#mail');
const jobTitle = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');
const design = document.querySelector('#design');
const color = document.querySelectorAll('#color option');
const shirtColor = document.querySelector('#color');
const activitiesFS = document.querySelector('.activities');
const allCheckboxes = document.querySelector('input[type="checkbox"]');
const jsFrameworks = document.querySelector('input[name="js-frameworks"]');
const jsLibs = document.querySelector('input[name="js-libs"]');
const express = document.querySelector('input[name="express"]');
const nodeJS = document.querySelector('input[name="node"]');
const costElement = document.createElement('p');
activitiesFS.appendChild(costElement);
const paymentType = document.querySelector('#payment');
const creditDiv = document.querySelector('#credit-card');
const creditCard = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');

let totalCost = 0;

/*===============
    Functions
===============*/

const calculateCost = (cost) => {
    totalCost = totalCost + cost;
    if (totalCost > 0) {
        costElement.textContent = "Total: $" + totalCost;
    } else {
        costElement.textContent = "";
    };
};

const processCheckboxes = (checkedBox, isChecked, conflicted) => {
    let cost = 0
    if (isChecked) {
        checkedBox === 'all' ? cost = 200 : cost = 100;
        calculateCost(cost);
        if (conflicted !== undefined) {
            conflicted.disabled = true;
            conflicted.parentNode.className = 'isDisabled'
        }
    } else {
        checkedBox === 'all' ? cost = -200 : cost = -100;
        calculateCost(cost);
        if (conflicted !== undefined) {
            conflicted.disabled = false;
            conflicted.parentNode.className = ''
        }
    };
}

/*====================
    Event Listeners
====================*/

// jobTitle event listener
jobTitle.addEventListener('change', (event) => {
    event.target.value === 'other' ? otherTitle.style.display = '' : otherTitle.style.display = 'none';
});

// T-Shirt design event listener
design.addEventListener('change', (event) => {
    color.forEach((value, index) => {
        if (event.target.value === 'js puns') {
            if (value.textContent.includes('JS Puns')) {
                color[index].style.display = '';
            } else {
                color[index].style.display = 'none';
            }
        } else if (event.target.value === 'heart js') {
            if (value.textContent.includes('JS shirt')) {
                color[index].style.display = '';
            } else {
                color[index].style.display = 'none';
            }
        } else {
            color[index].style.display = '';
        }
    });
});

activitiesFS.addEventListener('change', (event) => {
    switch (event.target.name) {
        case 'js-frameworks':
            processCheckboxes(event.target.name, event.target.checked, express);
            break;
        case 'js-libs':
            processCheckboxes(event.target.name, event.target.checked, nodeJS);
            break;
        case 'express':
            processCheckboxes(event.target.name, event.target.checked, jsFrameworks);
            break;
        case 'node':
            processCheckboxes(event.target.name, event.target.checked, jsLibs);
            break;
        default:
            processCheckboxes(event.target.name, event.target.checked);
    }
});

paymentType.addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'credit card':
        default:
            creditDiv.style.display = '';
            paypalDiv.style.display = 'none';
            bitcoinDiv.style.display = 'none';
            break;
        case 'paypal':
            creditDiv.style.display = 'none';
            paypalDiv.style.display = '';
            bitcoinDiv.style.display = 'none';
            break;
        case 'bitcoin':
            creditDiv.style.display = 'none';
            paypalDiv.style.display = 'none';
            bitcoinDiv.style.display = '';
            break;
    }
});

fscForm.addEventListener('submit', (event) => {

});

window.addEventListener('DOMContentLoaded', (event) => {
    name.focus();
    otherTitle.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
});