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
                       req.flash("error", "Invalid Password")
                       req.flash('data',req.body)
                        res.redirect('/auth/login');
                    }
                })
            }
            else {
                console.log("Invalid username ");
                req.flash("error", "Invalid User Name")
                req.flash('data',req.body)
                res.redirect('/auth/login');
            }
        })
       
        .catch(error => {
        console.log(error);
        req.flash("error")
            res.redirect('/auth/login')
        });
};