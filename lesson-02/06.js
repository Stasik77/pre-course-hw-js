let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let newPassportWithAddress = passportWithAddress;

newPassportWithAddress.address.city='Bobryisk';

console.log(passportWithAddress.address.city);