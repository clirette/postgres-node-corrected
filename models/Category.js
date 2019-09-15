const Sequelize = require("sequelize");
module.exports = function createCategoryModel(sequelize) {
  const Category = sequelize.define("Category", {
    name: { type: Sequelize.STRING, allowNull: false }
  });

  Category.associate = ({ Article, ArticleCategories }) => {
    Category.belongsToMany(Article, {
      as: "articles",
      through: ArticleCategories,
      foreignKey: "name"
    });
    return Category;
  };
};
