const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
 
class Client extends Model {
    //compare the hashed pw stored in the database with the original pw created by the user
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

Client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
        },
        // This is for future developments
        // role: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // }
    },
    {
        hooks: {
            //hashing the user pw before inserting it into the database
            beforeCreate: async (newClientData) => {
                newClientData.password = await bcrypt.hash(newClientData.password, 10);
                return newClientData;
            },
          },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'client',
    }
);
module.exports = Client;