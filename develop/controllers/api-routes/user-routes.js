const router = require('express').Router();
const { User, Post, Comment } = require("../../models/model-loader");

//Get all Users
router.get("/", async (req, res) => {
    const data = await User.findAll({
        attributes: { exclude: ["password"] }

    });
    res.json(data);
});

//Get User by Id
router.get("/:id", async (req, res) => {
    const data = await User.findByPk(req.params.id, {
        attributes: { exclude: ["password"] },
        include: [{ model: Post }, { model: Comment }]

    });
    res.json(data);
});

//Create User
router.post("/", async (req, res) => {
    const data = await User.create(req.body);
    res.json(data);
});

//Edit User by Id
router.put("/:id", async (req, res) => {
    const data = await User.update(req.body, {
        where: { id: req.params.id }
    })
    res.json(data);
});

//Delete User by Id
router.delete("/:id", async (req, res) => {
    const data = await User.destroy({
        where: { id: req.params.id }
    })
    res.json(data);
});


module.exports = router;