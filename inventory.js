// read and parse local storage of homeInventory into a new database
const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))

// select a class element on the HTML page
const inventoryElement = document.getElementsByClassName("inventory")[0]

// loop through the types of inventory in the database
for (let key in HomeInventory) {

    // set currentType to equal the currently selected inventory type in the database
    const currentType = HomeInventory[key]

    // loop through the array of inventory item objects within the inventory type array 
    for (let i=0; i < currentType.length; i++) {
        
        // set item to equal the current i number inventory item within the inventory type 
        let item=currentType[i];
            
        // begin to manipulate the DOM
        // inject a new class named after the inventory type (key)
        // use a heading to display the item name
        // display the location and description of the item
        inventoryElement.innerHTML += `
        
        <section class= "${key}">     
            <h2>${item.name}</h2>
            <div>${item.location}</div>
            <div>${item.description}</div>
        </section>
        `
    }

}