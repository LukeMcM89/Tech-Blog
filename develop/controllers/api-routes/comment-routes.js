const router = require('express').Router();
const { User, Post, Comment } = require("../../models/model-loader");

//Get all Comments
router.get("/", async (req, res) => {
    const data = await Comment.findAll({
        attributes: { exclude: ["password"] }
    });
    res.json(data);
});

//Get Comment by Id
router.get("/:id", async (req, res) => {
    const data = await Comment.findByPk(req.params.id, {
        attributes: { exclude: ['password'] },
        include: [{ model: User }, { model: Post }]
    });
    res.json(data);
});

//Create Comment
router.post("/", async (req, res) => {
    const data = await Comment.create(req.body);
    res.json(data);
});

//Edit Comment by Id
router.put("/:id", async (req, res) => {
    const data = await Comment.update(req.body, {
        where: { id: req.params.id }
    })
    res.jsonp(data);
});

//Delete Comment by Id
router.delete("/:id", async (req, res) => {
    const data = await Comment.destroy({
        where: { id: req.params.id }
    })
    res.json(data);
});


















module.exports = router;