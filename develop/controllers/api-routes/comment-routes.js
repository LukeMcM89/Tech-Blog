const router = require('express').Router();
const { User, Post, Comment } = require("../../models/model-loader");

//Get all Comments
router.get("/", async (req,res) => {

});

//Get Comment by Id
router.get("/:id", (req,res) => {
    
});

//Create Comment
router.post("/",(req,res) => {
    
});

//Edit Comment by Id
router.put("/:id",(req,res) => {
    
});

//Delete Comment by Id
router.delete("/:id",(req,res) => {
    
});


















module.exports = router;