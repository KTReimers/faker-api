const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");


class User {
    constructor(){
        this.id= faker.random.number();
        this.firstName= faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password= faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id= faker.random.number();
        this.name= faker.company.companyName();
        this.address = {Street: faker.address.streetName(), City: faker.address.city(), State: faker.address.state(), Zip_Code: faker.address.zipCode(), Country: faker.address.country()}
        // this.streetName= faker.address.streetName();
        // this.city= faker.address.city();
        // this.state= faker.address.state();
        // this.zipCode= faker.address.zipCode();
        // this.country= faker.address.country();
    }
}

app.get("/api", (req, res) => {
    res.json({message: "Steady...Steady....Fire!"});
})
app.get("/api/users/new", (req, res) => {
    const user = new User();
    res.json(user);
})
app.get("/api/companies/new", (req, res) => {
    const company = new Company();
    res.json(company);
})
app.get("/api/user/company", (req, res) => {
    const user = new User();
    const company = new Company();
    const combo = [user, company]
    res.json(combo);
})

app.listen(port, () => console.log(`On the ready at port ${port}!`));
