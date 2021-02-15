const sql = require('./db');

//Constructor
const Customer = (customer) => {
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
}

Customer.create = (newCustomer, result) => {
    sql.query('INSERT INTO customers SET ?', newCustomer, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('Created customer: ', { id: res.insertId, ...newCustomer });
        result(null, {id: res.insertId, ...newCustomer});
    });
};

Customer.getAll = (result) => {
    sql.query('SELECT * FROM customers', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('Customers: ', res);
        result(null, res);
    });
};