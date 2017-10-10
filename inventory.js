const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))
const inventoryElement = document.getElementsByClassName("inventory")[0]

for (let key in HomeInventory) {
    const currentType = HomeInventory[key]

        for (let i=0; i < currentType.length; i++) {
            let item=currentType[i];
            inventoryElement.innerHTML += `
            <section class= "${key}">
                <h2>${item.name}</h2>
                <div>${item.location}</div>
                <div>${item.description}</div>
            </section>
            `
        }

}