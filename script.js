
const APIURL = 'https://api.adviceslip.com/advice';

const advice_number = document.querySelector('.title');
const advice = document.querySelector('.text');
const button = document.querySelector('button');

function fetchData() {
    fetch(APIURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            advice_number.innerHTML = `Advice #${data.slip.id}`;
            advice.innerHTML = `"${data.slip.advice}"`;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
        });
}

button.addEventListener('click', fetchData);

document.addEventListener('DOMContentLoaded', fetchData);
