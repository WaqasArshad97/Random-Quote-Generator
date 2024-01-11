document.addEventListener('DOMContentLoaded', function () {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const generateQuoteBtn = document.getElementById('generateQuoteBtn');

    generateQuoteBtn.addEventListener('click', generateQuote);

    function generateQuote() {
        const quotes = [
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "It always seems impossible until it's done. - Nelson Mandela",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "It does not matter how slowly you go as long as you do not stop. - Confucius",
            "The only way to do great work is to love what you do. - Steve Jobs",
        ];

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        quoteDisplay.textContent = randomQuote;
    }
});
