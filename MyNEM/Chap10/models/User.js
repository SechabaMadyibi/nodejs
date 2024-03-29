const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function(next){
    const user = this
   
    bcrypt.hash(user.password, 10)
    .then (hash => {
        user.password  = hash
    next()
    })
    .catch (error => console.log (error))
   })

// export model
const User = mongoose.model('User', UserSchema);
module.exports = User