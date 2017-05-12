'use strict'

// Form selector variable
const fscForm = document.querySelector('form');

// Name field selector variable
const name = document.querySelector('#name');

// Job title selector variables
const jobTitle = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');

// jobTitle event listener
jobTitle.addEventListener('change', (event) => {
    event.target.value === 'other' ? otherTitle.style.display = '' : otherTitle.style.display = 'none';
});

// T-shirt design selector variables
const design = document.querySelector('#design');
const color = document.querySelectorAll('#color option');

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

// Activities selector variables
let totalCost = 0;
const activitiesFS = document.querySelector('.activities');
const costElement = document.createElement('p');
activitiesFS.appendChild(costElement);

const jsFrameworks = document.querySelector('input[name="js-frameworks"]');
const jsLibs = document.querySelector('input[name="js-libs"]');
const express = document.querySelector('input[name="express"]');
const nodeJS = document.querySelector('input[name="node"]');

activitiesFS.addEventListener('change', (event) => {
    switch (event.target.name) {
        case 'all':
            event.target.checked ? calculateCost(200) : calculateCost(-200);
            break;
        case 'js-frameworks':
        case 'js-libs':
        case 'express':
        case 'node':
        case 'build-tools':
        case 'npm':
            event.target.checked ? calculateCost(100) : calculateCost(-100);
            switch (event.target.name) {
                case 'js-frameworks':
                    event.target.checked ? express.disabled = true : express.disabled = false;
                    break;
                case 'js-libs':
                    event.target.checked ? nodeJS.disabled = true : nodeJS.disabled = false;
                    break;
                case 'express':
                    event.target.checked ? jsFrameworks.disabled = true : jsFrameworks.disabled = false;
                    break;
                case 'node':
                    event.target.checked ? jsLibs.disabled = true : jsLibs.disabled = false;
                    break;
            }
            break;
    }
});

const calculateCost = (cost) => {
    totalCost = totalCost + cost;
    if (totalCost > 0) {
        costElement.textContent = "Total: $" + totalCost;
    } else {
        costElement.textContent = "";
    };
};

// Payment DIV selector variables
const paymentType = document.querySelector('#payment');
const creditDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');

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

window.addEventListener('DOMContentLoaded', (event) => {
    name.focus();
    otherTitle.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
});