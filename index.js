let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function erase() {
    count = 0
    countEl.innerText = count
}

function save() {
    console.log(count)
}


let meesage - "You have tree new notifications"