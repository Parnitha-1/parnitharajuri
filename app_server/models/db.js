var mongoose=require('mongoose')
var dbURI='mongodb://localhost/parnitha';
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
    console.log('mangoose connected to'+dbURI);
});
mongoose.connection.on('error',function(err){
    console.log('mangoose connection error:'+err);
});
mongoose.connection.on('disconnected',function(){
    console.log('mangoose disconnected');
});