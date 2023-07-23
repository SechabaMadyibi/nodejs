module.exports = (req, res) =>{
        var title = ""
        var body = ""
        const data = req.flash('data')[0];
        if(typeof data != "undefined"){
        title = data.title
        body = data.body
        }
    return res.render("create",
   
    {
        createPost: true,
        errors: req.flash('validationErrors'),
        title: title,
        body: body} 
        );
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
    



