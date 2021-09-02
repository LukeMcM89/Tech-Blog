const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class User extends Model {
    //checkpw(pw) { }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }


);

module.exports = User;
