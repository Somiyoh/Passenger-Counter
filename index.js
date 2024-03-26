

let countEl = document.getElementById("count-el");

let count = 0
// function that increments on click
function increment() {
    count++
    countEl.innerText = count
}

function decrement() {
    if(count < 1) {
        count = 0
    }
    else {
        count--
        countEl.innerText = count
    }  
}



