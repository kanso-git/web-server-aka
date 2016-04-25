/** this is a middleware module **/
var middleware ={
    requiredAuthentication: function(req,res,next){
        console.log(" this is the requiredAuthentication ");
         next();
    },
    logger:function(req,res,next){
        console.log( (new Date()).toString() +" request:" +req.method +" "+ req.originalUrl);
        next();
    }
};


module.exports =middleware;