let pic = document.querySelector('img')


let count = 0

let inc = () => {
    count += 1
    console.log(count)
}

let dec = () => {
    count -= 1
    console.log(count)
}

setInterval(() => {
    pic.src =  `${count}.jpg`
}, 1)
