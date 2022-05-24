const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            }
        }, {
            sequelize,
            underscored: false,
            timestamps: false,
            paranoid: false,
            modelName: 'Post',
            tableName: 'posts',
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: 'user_ID_Foreign', targetKey: 'userId' });
    }
}