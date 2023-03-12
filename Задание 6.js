const arr = [1, 1, 1, 1, 9 , 17]
let counts = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if ((arr[i] === arr[j])&&(i != j))  {
            counts += 1
        }
    }
}

if (counts > 0) {
    console.log("В массиве присутствуют одинакорвые элементы:", true)
} else {
    console.log("В массиве присутствуют одинакорвые элементы:", false)
}

if (counts / (arr.length - 1)  === arr.length) {
    console.log("В массиве все элеметны одинаковые:", true)
} else {
    console.log("В массиве все элеметны одинаковые:", false)
}
