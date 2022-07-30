const quoteDisplay = document.getElementById('text-display');
const quoteButton = document.getElementById('quote-button');
const quoteReset = document.getElementById('quote-button-2');


const quotes = [
    "temp1",
    "temp2",
    "temp3",
    "temp4",
    "temp5",
    "temp6",
    "temp7",
    "temp8",
    "temp9"
];

quoteButton.addEventListener('click', () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDisplay.textContent = randomQuote;
});

quoteReset.addEventListener('click', () => {
    quoteDisplay.textContent = 'Click To Generate Quotes';
})
