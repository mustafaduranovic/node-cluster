var express = require('express');
var router = express.Router();

/* GET convert. */
router.get('/', function(req, res, next) {
    res.send('retrieve documents');
});

router.get('/:action', function(req, res, next) {
    if(req.params.action === 'convert'){
        res.send('document converted');

        if(req.query.type === 'html'){
            setTimeout(function () {
                console.log("file converted to html");
            }, 1000)
        }
        if(req.query.type === 'pdf'){
            setTimeout(function () {
                console.log("file converted to pdf");
            }, 10000)
        }
    }
    else {
        res.send('not recognized action');
    }
});

module.exports = router;
