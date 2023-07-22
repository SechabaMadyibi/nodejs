const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username })

        .then(user => {
            if (user) {
                req.session.userId = user._id 
                return bcrypt.compare(password, user.password)
            }
            else {
                console.log("invalid username");
            }
        })
        .then(same => {
            if (same) { 
                res.redirect('/');
            }
            else {
                console.log("Ivalid password");
                res.redirect('/auth/login');
            }
        })
        .catch(error => {
            console.log(error);
            res.redirect('/auth/login')
        });
};