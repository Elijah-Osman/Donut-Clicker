//Feature 1: This feature allows user to add one donut to the donut count, upon clicking the donut image.
// This feature also allows us to retrieve the donut count.
let count = 0;
function donutClick(){
    document.getElementById("counting").innerHTML = ++count; //increase the donut count by one, upon clicking on donut image.
    greyAutoClickerButton();
}

// Feature 3: This feature will increase the cost of every additional Auto Clicker by 
// an additional ten percent. 
//(When an Auto Clicker is bought the donut count will increase 1 click per second.)
    let autoClickerCost = 100
    let autoClickerCount = 0
function purchaseAutoclicker(){
    
    if (count >= autoClickerCost){ //Perform the below code, if the donut count is greater or equal to then the cost of AutoClicker
        count = count - autoClickerCost; //Deducting the Auto Clicker cost from the donut count.
        autoClickerCost = Math.floor(autoClickerCost*1.1); //Auto Clicker cost is increasing by 10%
        document.getElementById("autoClickerCost").innerHTML = autoClickerCost; //displaying AutoClicker Cost Change (10%)
        document.getElementById("autoClickerCount").innerHTML = ++autoClickerCount; //displaying and increasing AutoClicker Count by 1.
        setInterval(donutClick,1000); //increase count by 1 per second.
    }
}

// Iteration # 4 
// Feature # 1: This feature allows the user to reset their game. 
function clearResult(){
    window.location.reload(); //clears all scores by refreshing the page.
}

function greyAutoClickerButton() {
    let donutCount = parseInt(document.getElementById("counting").textContent);
    let autoClickerCost = parseInt(document.getElementById("autoClickerCost").textContent);
    let autoClicker = document.getElementById("autoClicker");

    if (donutCount >= autoClickerCost) {
        autoClicker.disabled = false; // Enable the button
    } else {
        autoClicker.disabled = true; // Disable the button
    }
}

// Opens a modal with the specified ID
function openModal(modalId) {
    const modal = document.getElementById(`${modalId}Modal`)
    modal.style.display = "block"
}

  // Closes a modal with the specified ID
function closeModal(modalId) {
    const modal = document.getElementById(`${modalId}Modal`)
    modal.style.display = "none"
}
