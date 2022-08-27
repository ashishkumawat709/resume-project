const homeController = (req,res)=>{
    res.render('home', {title:'Home'})
}

module.exports = homeController