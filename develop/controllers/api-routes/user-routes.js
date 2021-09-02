const router = require('express').Router();
const { User, Post, Comment } = require("../../models/model-loader");

//Get all Users
router.get("/", async (req,res) => {
    const data = await User.findAll({
        attributes: {exclude:["password"]}

    });
    res.json(data);
});

//Get User by Id
router.get("/:id", async (req,res) => {
    const data = await User.findByPk(req.params.id,{
        attributes: {exclude:["password"]},
        include: [{},{},{}]

    });
    
});

//Create User
router.post("/",(req,res) => {
    
});

//Edit User by Id
router.put("/:id",(req,res) => {
    
});

//Delete User by Id
router.delete("/:id",(req,res) => {
    
});















module.exports = router;