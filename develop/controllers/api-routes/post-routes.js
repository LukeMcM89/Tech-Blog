const router = require('express').Router();
const { User, Post, Comment } = require("../../models/model-loader");

//Get all Posts
router.get("/", async (req,res) => {
    const data = await Post.findAll({
        include: [{model: User}, {model: Comment}],
        attributes: { model: User['name']}
    })
    res.json(data);
});

//Get Post by Id
router.get("/:id", async (req,res) => {
    const data = await Post.findByPk(req.params.id, {
    attributes: {model: User ['name']},
    include: [{model: User}]
    })
    res.json(data);
});

//Create Post
router.post("/", async (req,res) => {
    const data = await Post.create(req.body);
    res.json(data);
    
});

//Edit Post by Id
router.put("/:id", async (req,res) => {
    const data = await Post.update(req.body, {
        where: {id: req.params.id}
    })
    res.json(data);
});

//Delete Post by Id
router.delete("/:id", async (req,res) => {
    const data = await Post.destroy({
        where: {id: req.params.id}
    })
    res.json(data);
    
});


module.exports = router;