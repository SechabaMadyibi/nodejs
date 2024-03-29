const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username })

    .then(user => {
           
        if (user) {
            return bcrypt.compare(password, user.password)
            .then(same => { 
                if (same) { 
                    req.session.userId = user._id 
                    res.redirect('/');
            }
                else {
                    console.log("Invalid password");
                    res.redirect('/auth/login');
                }
            })
        }
        else {
            console.log("Invalid username ");
            res.redirect('/auth/login');
        }
    })
        .catch(error => {
            console.log(error);
            res.redirect('/auth/login')
        });
};