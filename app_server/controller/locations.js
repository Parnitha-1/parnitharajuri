/*GET 'home' page*/
module.exports.homelist=function(req,res){
    res.render('location-list',{title: 'Home'});
};

/*GET 'Loction info page*/
module.exports.locationInfo=function(req,res){
    res.render('location-info',{title: 'Location info'});
}; 

/*GET 'Loction info page*/
module.exports.locationInfo1=function(req,res){
    res.render('location-info1',{title: 'Location info1'});
};


/*GET 'Add review' page*/
module.exports.addReview=function(req,res){
    res.render('location-review-form',{title: 'Add review'});
};