let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let newPassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress));


newPassportWithAddress.address.city=('Bobryisk');
console.log(passportWithAddress.address.city);
console.log(newPassportWithAddress.address.city);