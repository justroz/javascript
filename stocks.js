let symbolInput = document.getElementById("symbolInput")
let stockDisplay = document.getElementById("stockDisplay")
let getStockButton = document.getElementById("getStockButton")



let quotes = {
    "APLE":{name : "Apple", price : 0},
    "AMAZ":{name : "Amazon", price :0},
    "ALBAB":{name : "Ali Baba", price :0},
    "GOOG":{name : "Google", price :0},
    "FB":{name : "Facebook", price :0}
}



getStockButton.addEventListener('click', function () {
    let symbol = symbolInput.value.toUpperCase()
    
    let actualStock = quotes[symbol]

    let stockQuote = `<div class="stockQuote">
                        <h3>${actualStock.name}</h3>
                        <span>${actualStock.price}</span>
                        </div>`
    stockDisplay.innerHTML = stockQuote


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    }

let updateQuote = window.setInterval( function getStockQuote(symbol) {

    let stock = actualStock
        stock.price = getRandomInt(100,500)
        stockDisplay.innerHTML = stock.price

    let newStockQuote = `<div class="stockQuote">
                            <h3>${actualStock.name}</h3>
                            <span>${stock.price}</span>
                            </div>`
    stockDisplay.innerHTML = newStockQuote
}, 5000)

})
