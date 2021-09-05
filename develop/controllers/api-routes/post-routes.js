const router = require('express').Router();
const { User, Post, Comment } = require("../../models/model-loader");

//Get all Posts
router.get("/", async (req,res) => {
    const data = await Post.findAll({
        include: [{model: User}, {model: Comment}],
        attributes: { model: User['name']}
    })
});

//Get Post by Id
router.get("/:id", async (req,res) => {
    const data = await Post.findByPk(req.params.id, {
    attributes: {model: User ['name']},
    include: [{model: User}]
    
});

//Create Post
router.post("/",(req,res) => {
    
});

//Edit Post by Id
router.put("/:id",(req,res) => {
    
});

//Delete Post by Id
router.delete("/:id",(req,res) => {
    
});


















module.exports = router;