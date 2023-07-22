module.exports = (req, res) =>{
    if(req.session.userId){
    return res.render("create");
}
res.redirect('/auth/login')
},
    (req, res) => {
        res.render('about')
    },
    (req, res) => {
        res.render('contact')
    },

    (req, res) => {
        res.render('post')
    }
    



