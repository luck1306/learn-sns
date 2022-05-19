const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userId: {
                type: Sequelize.STRING(100),
                primaryKey: true,
                allowNull: false,
            }, password: {
                type: Sequelize.UUID,
                allowNull: false
            }, name: {
                type: Sequelize.STRING(20),
                allowNull: false
            }, auth: {
                type: Sequelize.STRING(15),
                allowNull: true
            }
        }, {
            sequelize,
            underscored: false,
            timestamps: false,
            paranoid: false,
            modelName: 'User',
            tableName: 'users',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }

    static associate(db) { }
}