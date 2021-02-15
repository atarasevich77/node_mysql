const express = require('express'),
    router = express.Router();

// get users list
router.get('/list', (req, res) => {
    const sql = `SELECT * FROM users;`;
    db.query(sql, (err, data, fields) => {
        if(err) throw err;
        res.json({
            status: 200,
            data: data,
            message: 'User lists retrieved successfully'
        });
    });
});

// create new user
router.post('/new', (req, res) => {
    const sql = `INSERT INTO users(name, email) VALUES (?);`;
    const values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql, [values], (err, data, fields) => {
        if(err) throw err;
        res.json({
            status: 200,
            data: data,
            message: 'New user added successfully'
        });
    });
})


module.exports = router;