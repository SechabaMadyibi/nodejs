const User = require('../models/User')
module.exports = (req, res, error, next) => {
 User.findById(req.session.userId)
 .then (user => {
        if(error || !user )
        {
            return res.redirect('/')     
        }
    }) 
 .catch (error => console.log (error))
 next();
}


   