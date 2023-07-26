const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
 title:{type: String,
    required : [true, "enter a title"]
 },
 body: {type: String,
    required : [true, "enter a message"]
 },
 userid: {
   //the value is supposed to be a valid Mongo object id
   type: mongoose.Schema.Types.ObjectId,
   //In ref, we specify User to refer to the User collection which the document is contained.
   ref: 'User',
   required: true
   },
datePosted:{ /* can declare property type with an object like this
because we need 'default' */
 type: Date,
 default: new Date()
 },
 image: {type: String,
 required : [true, "upload a picture"]
}});
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost