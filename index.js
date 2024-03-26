

let countEl = document.getElementById("count-el") // taking arguements

let saveEl = document.getElementById("save-el")

let count = 0
// function that increments on click
function increment() {
    count++
    countEl.innerText = count
}

// fucnction that decrements on click
function decrement() {
    if(count < 1) {
        count = 0
    }
    else {
        count--
        countEl.innerText = count
    }  
}

// fucntion to save entries 
function save() {
    let counStr = count + " - "
    saveEl.textContent += counStr
    makeCountZero();

}

// everytime they hit save, we need to reset the counter to 0 so we can count again
function makeCountZero() {
    count = 0
    countEl.innerText = count
}




