const sql = require('../models/db');

//Constructor
const Customer = (customer) => {
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
}

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

Customer.getById = (id, result) => {
    sql.query(`SELECT * FROM customers WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
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

Customer.updateById = (id, customer, result) => {
    sql.query(
        'UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?',
        [customer.email, customer.name, customer.active, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated customer: ", { id: id, ...customer });
            result(null, { id: id, ...customer });
        }
    );
};

Customer.removeById = (id, result) => {
    sql.query('DELETE FROM customers WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("Deleted customer with id: ", id);
        result(null, res);
    });
};

Customer.removeAll = (result) => {
    sql.query('Delete * FROM customers', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log(`Deleted ${res.affectedRows} customers`);
        result(null, res);
    });
};

module.exports = Customer;