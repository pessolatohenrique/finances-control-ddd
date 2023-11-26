"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Earning extends Model {
        static associate(models) {
            Earning.belongsToMany(models.User, {
                through: models.UserEarning,
                foreignKey: "earningId",
            });
        }
    }
    Earning.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        isPublic: DataTypes.BOOLEAN,
    }, {
        sequelize,
        paranoid: true,
        modelName: "Earning",
        tableName: "earnings",
    });
    return Earning;
};
