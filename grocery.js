let storeMenu = document.getElementById("storeSelectionMenu")
let addressMenu = document.getElementById("addressSelectionMenu")
let storeSelectButton = document.getElementById("storeSelectButton")
let storeListings = document.getElementById("storeList")

let storesRef = database.ref('stores')

//gathers user input when button is clicked
storeSelectButton.addEventListener('click', () => {

        let store = storeMenu.value
        let address = addressMenu.value
        createShopper(store,address)
})

//add user input to database, create new shopper
function createShopper (store, address) {
    let shopper = new Shopper(store, address)
    storesRef.push(shopper)

}


//creates the observation for any type of change
storesRef.on('value',(snapshot) => {
    
    let stores = []

    for (key in snapshot.val()) {
        let store = snapshot.val()[key]
        store.key = key
        stores.push(store)
    }

    displayStores(stores)
})

//displays stores on screen
function displayStores(stores) {

    let storeList = stores.map(store => {
        return `<div id="storeListing">
                <h3>${store.store}</h3>
                <h4>${store.address}</h4>
                <div><button id="deleteButton" onclick='deleteStore("${store.key}")'>Delete</button></div>
                <input type="text" placeholder="Enter Item" id="groceryItem">
                <div><button id="addButton" onclick='addItemToList("${store.key}")'>Add Item</button></div>
                </div>`
    })

    

    storeListings.innerHTML = storeList.join('')
    
}

//function to delete store
function deleteStore(key) {
    storesRef.child(key).remove()
}

//create grocery list
function addItemToList (storeKey) {
    let groceryItem = document.getElementById("groceryItem")
    let item = groceryItem.value

    activeStore = storesRef.child(storeKey)

    console.log(activeStore)
    
}


