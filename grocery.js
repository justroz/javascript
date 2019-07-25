let storeMenu = document.getElementById("storeSelectionMenu")
let addressMenu = document.getElementById("addressSelectionMenu")
let storeSelectButton = document.getElementById("storeSelectButton")
let storeListings = document.getElementById("storeList")

let storesRef = database.ref('stores')

//gathers user input when button is clicked
storeSelectButton.addEventListener('click', () => {

        let store = storeMenu.value
        let address = addressMenu.value
        saveStore(store,address)
})

//add user input to database
function saveStore(store, address) {
    storesRef.push({
        store: store,
        address: address
    })
}

//creates the observation for any type of change
storesRef.on('value',(snapshot) => {
    
    let stores = []

    for (key in snapshot.val()) {
        let store = snapshot.val()[key]
        store.key = key
        stores.push(store)
        console.log(stores)
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
                </div>`
    })

    storeListings.innerHTML = storeList.join('')
}

//function to delete store
function deleteStore(key) {
    storesRef.child(key).remove()
}