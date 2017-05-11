'use strict'

const fscForm = document.querySelector('form');

const name = document.querySelector('#name');
const jobTitle = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');

const shirtFieldSet = document.querySelector('.shirt');
const design = document.querySelector('#design');
const color = document.querySelectorAll('#color option');

const creditDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');


fscForm.addEventListener('change', (event) => {
    if (event.target.name === 'user_title') {
        event.target.value === 'other' ? otherTitle.style.display = '' : otherTitle.style.display = 'none';
    } else if (event.target.name === 'user_design') {
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

    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    name.focus();
    otherTitle.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
});