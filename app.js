let menuDiv = document.getElementById("menu")
let showAllButton = document.getElementById("showAll")
let entreeButton = document.getElementById("entrees")
let dessertsButton = document.getElementById("desserts")


//Shows all menu items when the page loads
let menuListDiv = dishes.map(dish => {

    return   `<div class='menuItem'>
                <h4>${dish.title}</h4>
                <p>${dish.description}<p>
                <span>${dish.price}</p>
                <img src='${dish.imageURL}'></img>
                </div>`
})
menuDiv.innerHTML = menuListDiv.join('')

//Shows all menu items when checked
showAllButton.addEventListener('click', ()=> {
    menuDiv.innerHTML = menuListDiv.join('')
}


//Filters menu and shows entrees only
entreeButton.addEventListener('click', () => {
    menuDiv.innerHTML=''

    let entreeDishes = dishes.filter(dish => dish.course === 'Entrees') 

    let entreeItems = entreeDishes.map (dish => {

        let menuItemDiv = `<div class='entreeItems'>
                                <h4>${dish.title}</h4>
                                <p>${dish.description}<p>
                                <span>${dish.price}</p>
                                <img src='${dish.imageURL}'></img>
                            </div>`
    
    return menuItemDiv
    
    
    })
    menuDiv.insertAdjacentHTML('beforeend',entreeItems.join(''))
    
})


//Filters menu and shows desserts only
dessertsButton.addEventListener('click', () => {
    menuDiv.innerHTML=''
    
    let dessertDishes = dishes.filter(dish => dish.course === 'Desserts') 

    let dessertItems = dessertDishes.map (dish => {

        let menuItemDiv = `<div class='entreeItems'>
                                <h4>${dish.title}</h4>
                                <p>${dish.description}<p>
                                <span>${dish.price}</p>
                                <img src='${dish.imageURL}'></img>
                            </div>`
    
    return menuItemDiv
    
    
    })
    menuDiv.insertAdjacentHTML('beforeend',dessertItems.join(''))
    
})