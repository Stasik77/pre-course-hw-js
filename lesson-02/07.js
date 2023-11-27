let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};


let passportMarried2 = structuredClone(passportMarried);

passportMarried2.married=true;
console.log(passportMarried)
console.log(passportMarried2)