var express = require('express');
var router = express.Router();


//_____________________________________________________________________ READ_____________________________________________


router.get('/ceva',function(req,res){

res.send('ceva');

});

//_______________________________________________________________________________________________________________________

module.exports = router;