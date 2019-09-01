const pi = 3.14;

function calcCircumfrence(radius) {
    return `The circumfrence is ${radius * pi} cm.`
}

function calcArea(radius) {
    return `The area is ${radius * radius * pi} cm².`
}

console.log(calcCircumfrence(5));
console.log(calcArea(5));
