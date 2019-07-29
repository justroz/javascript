let ordersURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let coffeeList = document.getElementById("coffeeList")
let emailSpace = document.getElementById("emailSpace")
let orderSpace = document.getElementById("orderSpace")
let submitButton = document.getElementById("submitButton")

async function fetchOrders() {

    let response = await fetch(ordersURL) //makes touch with the URL
    let json = await response.json() //access the data at the URL
    let orders = (Object.values(json)) // makes array of info in json

    let coffeeOrders = orders.map( order =>{

        return `<div class="coffeeOrder">
                <h4>${order.emailAddress}</h4>
                <span>${order.coffee}</span>
                </div>`
    })
        
    coffeeList.innerHTML = coffeeOrders.join('')
}


submitButton.addEventListener('click', () => {

    let emailAddress = emailSpace.value
    let coffee = orderSpace.value
    placeOrder(emailAddress, coffee)

})

//function to actually place the order
function placeOrder(emailAddress, coffee) {

    fetch(ordersURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: emailAddress,
          coffee: coffee
        }).then(console.log("order placed"))
        
    })

}

















fetchOrders()
placeOrder()