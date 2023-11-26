let passport = {
    name: "Petr",
    surname: "Petrov",
};


let newPassport = {};


for (let name in passport ) {
    newPassport[name] = passport[name];
}

newPassport.name = 'Ivan';
console.log(passport.name);