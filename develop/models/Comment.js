const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    userid: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" }
    },
    postid: {
        type: DataTypes.INTEGER,
        references: { model: "post", key: "id" }
    },
    content: {
        type: DataTypes.STRING
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }

);

module.exports = Comment;