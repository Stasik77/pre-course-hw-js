let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let newPassportWithAddress = {};

for (let city in passportWithAddress ){
    newPassportWithAddress[city] = passportWithAddress[city];
}
newPassportWithAddress.address.city='Bobryisk';

 

console.log(passportWithAddress.address.city);
