const router = require('express').Router();

//API 
const userroutes = require('./api-routes/user-routes');
const postroutes = require('./api-routes/post-routes');
const commentroutes = require('./api-routes/comment-routes');

router.use('/api/user', userroutes);
router.use('/api/post', postroutes);
router.use('/api/comment', commentroutes);


//HTML



router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;