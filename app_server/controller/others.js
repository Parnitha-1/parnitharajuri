/*GET 'about us' page*/
module.exports.about=function(req,res){
    res.render('generic-text',{title:'About'});
};
module.exports.signin=(req,res)=>{
    res.render('signin',{title:"signin"});
};

module.exports.register=(req,res)=>{
    res.render('register',{title:"register"});
};