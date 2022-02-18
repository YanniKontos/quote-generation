const quoteDisplay = document.getElementById('text-display');
const quoteButton = document.getElementById('quote-button');
const quoteReset = document.getElementById('quote-button-2');


const quotes = [
    "If you're getting bullied in school, bring a gun in!",
    "If your girl isn't thicc, her mother you shall pick",
    "If her booty jiggles when she walks, you must listen when she talks",
    "There are no accidents, even some children",
    "Jesus can turn water into wine, i can turn your mother into mine",
    "If she says hey, she shall get the D the same day",
    "If she says no, there is always her bro",
    "If her booty does not bounce, the end of the relationship you shall announce",
    "If she says she needs space, her sister shall take her place",
    "If she ugly but thicc, going behind her will do the trick"
];

quoteButton.addEventListener('click', () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDisplay.textContent = randomQuote;
});

quoteReset.addEventListener('click', () => {
    quoteDisplay.textContent = 'Click To Generate Quotes';
})