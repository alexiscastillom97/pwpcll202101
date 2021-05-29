/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

console.log('Webpack Working!!!');
// Default parameters ES6/2015
const show = (m = 'hola') => {
    alert(m);
};
show();

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('Calling an async function');
    const result = resolveAfter2Seconds();
    console.log(result);
}

asyncCall();