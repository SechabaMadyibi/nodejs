const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser:
        true
});
BlogPost.create({
    title: 'The Mythbuster Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.Energy - saving is one of my favourite money topics, because once you get past the boring bullet- point lists, a whole new world of thrifty nerdery opens up.You know those bullet - point lists.You start spotting them everything at this time of year.They go like this: '
})
    .then(blogpost => console.log(blogpost))
    .catch(error => console.log(error));

// BlogPost.find({}, (error, blogspot) => {
//     console.log(error, blogspot)
// })

// //find all documents in BlogPosts collection with a particular title
// BlogPost.find({
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills'
// }, (error, blogspot) => {
//     console.log(error, blogspot)
// })

// //find all documents in BlogPosts collection with ‘The’ in the title
// BlogPost.find({
//     title: /The/
// }, (error, blogspot) => {
//     console.log(error, blogspot)
// })
// //find using ID
// var id = "5cb436980b33147489eadfbb";
// BlogPost.findById(id, (error, blogspot) => {
//     console.log(error, blogspot)
// })
// //find and update title using ID
// var id = "5cb436980b33147489eadfbb"
// BlogPost.findByIdAndUpdate(id,{
//     title:'Updated title'
//    }, (error, blogspot) =>{
//     console.log(error,blogspot)
//    })
// //find and delete using the
//    var id = "5cb436980b33147489eadfbb";
// BlogPost.findByIdAndDelete(id, (error, blogspot) =>{
//  console.log(error,blogspot)
// })




