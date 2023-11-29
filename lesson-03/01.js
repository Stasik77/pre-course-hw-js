// code
// code
​const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((colors)=> colors ==="черный" || colors ==="красный" ||  colors ==="желтый").join('-')
}

console.log(createColorString());