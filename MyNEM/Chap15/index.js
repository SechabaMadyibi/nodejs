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
const loginUserController = require('./controllers/loginUser');
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware =
  require('./middleware/redirectIfAuthenticatedMiddleware');
  const logoutController = require('./controllers/logout')
  const flash = require('connect-flash');

  mongoose.connect('mongodb+srv://SechabaMadyibi:4HpmaNZxS2JZpsyK@cluster0.sqn5ron.mongodb.net/my_database', {useNewUrlParser: true});

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(expressSession({
  secret: 'keyboard cat'
}))

//declare a global variable loggedIn that will be accessible from all our EJS files
global.loggedIn = null;

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next()
});
//connect-flash provides a special area of the session used for storing messages.
// Messages can be written to this area and cleared  after being displayed to the user.
app.use(flash());


app.use('/posts/store', validateMiddleware);
app.get('/', homeController)
app.get('/post/:id', getPostController)
app.post('/posts/store', authMiddleware, storePostController)

app.get('/about', newPostController)

app.get('/contact', newPostController)

app.get('/posts/new', authMiddleware, newPostController)

app.get('/post', newPostController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
//login route
app.get('/auth/login', redirectIfAuthenticatedMiddleware,
  loginController);
 //logout route 
app.get('/auth/logout', logoutController)

app.post('/users/register', redirectIfAuthenticatedMiddleware,
  storeUserController)

app.post('/users/login', redirectIfAuthenticatedMiddleware,
  loginUserController)

  app.use((req, res) => res.render('notfound'));

app.listen(4000, () => {
  console.log('App listening on port 4000')
})