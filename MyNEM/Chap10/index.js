const express = require('express')
const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const validateMiddleware = require("./middleware/validationMiddleware");
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

mongoose.connect('mongodb://127.0.0.1/my_database', {
  useNewUrlParser:
    true
})
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());


app.use('/posts/store', validateMiddleware);
app.get('/', homeController)
app.get('/post/:id', getPostController)
app.post('/posts/store', storePostController)

app.get('/about', newPostController)

app.get('/contact', newPostController)

app.get('/posts/new', newPostController)

app.get('/post', newPostController)

app.get('/auth/register', newUserController)

app.get('/auth/login', loginController);

app.post('/users/register', storeUserController)

app.post('/users/login',loginUserController)



app.listen(4000, () => {
  console.log('App listening on port 4000')
})