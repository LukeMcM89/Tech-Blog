const router = require('express').Router();
const { User, Post, Comment } = require("../../models/model-loader");

//Get all Comments
router.get("/", async (req,res) => {

});

//Get Comment by Id
router.get("/:id", (req,res) => {
    
});

//Create Comment
router.post("/", async (req,res) => {
    const data = await Comment.create(req.body);
    res.json(data);
});

//Edit Comment by Id
router.put("/:id", async (req,res) => {
    const data = await Comment.update(req.body, {
        where: {id: req.params.id}
    })
    res.jsonp(data);
});

//Delete Comment by Id
router.delete("/:id", async (req,res) => {
    const data = await Comment.destroy({
        where: {id: req.params.id}
    })
    res.json(data);
});


















module.exports = router;