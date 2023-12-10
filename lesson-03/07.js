const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];


for (let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i].filter(function(num) {
        return num % 2 ===0
    }) 
};
console.log(numbers)
